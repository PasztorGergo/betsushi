import { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "micro";
import Stripe from "stripe";
import Cors from "micro-cors";
import { pushPayment } from "utils/fetch";
import { PaymentRequestEvent } from "@stripe/stripe-js";

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
      res.status(400).send(`Webhook error: ${error}`);
    }

    if (event.object.status === "succeeded") {
      const id = event.object.id;
      const name = event.object.shipping.name;
      const phone = event.object.shipping.phone;
      const total = parseInt(event.object.amount);
      const { line1, line2, postal_code, state } =
        event.object.charges.data[0].shipping.address;
      const shipping_details = `〒${postal_code} ${state} ${line1} ${line2}`;

      pushPayment(id, total, new Date(), shipping_details, name, phone)
        .then((data) => {
          res.status(200).json({ data });
        })
        .catch(() => res.status(500).json({ message: "Server error" }));
    }
  } else {
    res.status(400).json({ message: "Bad request" });
  }
};

export default handler;
