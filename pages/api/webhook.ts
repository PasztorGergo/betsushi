import { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "micro";
import Stripe from "stripe";
import Cors from "micro-cors";
import { pushPayment } from "utils/fetch";

const stripe = new Stripe(process.env.STRIPE_SK || "", {
  apiVersion: "2022-11-15",
});

const cors = Cors({
  allowMethods: ["POST", "HEAD"],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    let event: any;
    const rawBody = await buffer(req);
    try {
      const sig = req.headers["stripe-signature"];

      if (!sig) return res.status(500);

      event = stripe.webhooks.constructEvent(
        rawBody.toString(),
        sig,
        process.env.WH_SECRET || ""
      );
    } catch (error: any) {
      console.log(error);
      res.status(400).send(`Webhook error: ${error}`);
    }

    if (event.type == "payment_intent.succeeded") {
      const object = event.data.object;
      const id = object.payment_intent;
      const name = object.shipping.name;
      const phone = object.shipping.phone;
      const total = parseInt(object.amount);
      const { line1, line2, postal_code, state } = object.shipping.address;
      const shipping_details = `〒${postal_code} ${state} ${line1} ${line2}`;

      pushPayment(id, total, new Date(), shipping_details, name, phone)
        .then((data) => {
          res.status(200).json({ data });
        })
        .catch(() => res.status(500).json({ message: "Server error" }));
    } else {
      res.status(402).json({ message: "Unhandeled payment" });
    }
  } else {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Medthod not allowed!");
  }
};

export default cors(handler as any);
