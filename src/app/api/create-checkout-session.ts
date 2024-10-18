import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

if (!stripe) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  } else {
    try {
      const { amount } = req.body;
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "eur",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.status(200).json(paymentIntent);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
};
