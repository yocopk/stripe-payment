import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

if (!stripe) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { amount } = req.body;

      // Crea un Product per l'abbonamento (se non esiste già)
      const product = await stripe.products.create({
        name: "Abbonamento mensile",
      });

      // Crea un Price per l'abbonamento
      const price = await stripe.prices.create({
        unit_amount: Math.round(amount * 100), // Converti in centesimi
        currency: "eur",
        recurring: { interval: "month" },
        product: product.id,
      });

      // Crea una Subscription
      const subscription = await stripe.subscriptions.create({
        items: [{ price: price.id }],
        payment_behavior: "default_incomplete",
        expand: ["latest_invoice.payment_intent"],
        customer: req.body.customerId,
      });

      const invoice = subscription.latest_invoice as Stripe.Invoice;
      const paymentIntent = invoice.payment_intent as Stripe.PaymentIntent;

      res.status(200).json({
        subscriptionId: subscription.id,
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
