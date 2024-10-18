"use client";

import CheckoutSubscription from "@/components/CheckoutSubscription";

export default function RecurringPage() {
  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md shadow-lg">
      <h1 className="text-4xl font-bold mb-2">Abbonati</h1>

      <CheckoutSubscription />
    </main>
  );
}
