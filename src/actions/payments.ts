"use server";

import Stripe from "stripe";

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY ?? "Undefined Secret Key"
);

export async function createPaymentIntent(amount: number) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "eur",
      automatic_payment_methods: { enabled: true },
    });

    return { clientSecret: paymentIntent.client_secret };
  } catch (error) {
    console.error("Internal Error:", error);
    throw new Error(`Internal Server Error: ${error}`);
  }
}

export async function createSubscription() {
  try {
    const customer = await stripe.customers.create({
      metadata: {
        userId: "123",
        name: "John Doe",
        email: "qTnF1@example.com",
        paymentMethod: "card",
      },
    });

    const subscription = await stripe.subscriptions.create({
      currency: "eur",
      customer: customer.metadata.userId,
      items: [{ plan: "pro-monthly" }],
    });

    return subscription;
  } catch (error) {
    console.error("Internal Error:", error);
    throw new Error(`Internal Server Error: ${error}`);
  }
}
