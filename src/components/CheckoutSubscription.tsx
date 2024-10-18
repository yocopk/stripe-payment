"use client";

import Link from "next/link";
import { useState } from "react";

export default function CheckoutSubscription() {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <div className="flex flex-col gap-4 h-screen">
      {/* <div className="text-black bg-gray-200 p-2 flex items-center gap-2">
        <button onClick={() => setIsYearly(false)}>Mensile</button>
        <button onClick={() => setIsYearly(true)}>Annuale</button>
      </div>
      <p className="text-black">Pagamento mensile 10€</p>
      <Link
        className="bg-black text-white p-2 rounded-md"
        href="https://buy.stripe.com/test_bIY6oo2QVcp5aGc9AA"
      >
        Paga mensile adesso
      </Link>
      {isYearly && (
        <p className="text-black">
          Pagamento annuale 100€
          <Link
            className="bg-black text-white p-2 rounded-md"
            href="https://buy.stripe.com/test_dR69AAezDfBh6pWeUV"
          >
            Paga annuale adesso
          </Link>
        </p>
      )} */}
      <div>
        <button className="text-black" onClick={() => setIsYearly(false)}>
          Mensile
        </button>
        <button className="text-black" onClick={() => setIsYearly(true)}>
          Annuale
        </button>
      </div>
      {isYearly ? (
        <div className="text-black">
          <p>Pagamento annuale 100€</p>
          <Link
            className="bg-black text-white p-2 rounded-md"
            href="https://buy.stripe.com/test_dR69AAezDfBh6pWeUV"
          >
            Paga annuale adesso
          </Link>
        </div>
      ) : (
        <div className="text-black">
          <p>Pagamento mensile 10€</p>
          <Link
            className="bg-black text-white p-2 rounded-md"
            href="https://buy.stripe.com/test_bIY6oo2QVcp5aGc9AA"
          >
            Paga mensile adesso
          </Link>
        </div>
      )}
    </div>
  );
}
