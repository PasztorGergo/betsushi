import { Product } from "models";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET || "", {
  apiVersion: "2022-11-15",
});

const calculateOrder = (items: Array<Product>) => {
  let total = 0;

  items.forEach(({ amount, price }) => (total += amount * price));
  return total;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { items, method } = req.body;

  if (req.method !== "POST") {
    return res.status(400).json({ error: "Bad request" });
  }

  const paymentIntent = await stripe.paymentIntents.create({
    currency: "jpy",
    payment_method_types: [method],
    amount: calculateOrder(items),
  });

  res.status(200).send({
    clientSecret: paymentIntent.client_secret,
  });
};

export default handler;
