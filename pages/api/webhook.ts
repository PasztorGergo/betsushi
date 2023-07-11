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
        process.env.STRIPE_WH || ""
      );
    } catch (error: any) {
      return res.status(400).send(`Webhook error: ${error}`);
    }

    if (event.object.status === "succeeded") {
      const id = event.object.id;
      const total = parseInt(event.object.amount);

      pushPayment(id, total, new Date())
        .catch(() => res.status(500).json({ message: "Server error" }))
        .then((x) => {
          res.status(200).json({ data: x });
        });
    }
  }
};

export default handler;
