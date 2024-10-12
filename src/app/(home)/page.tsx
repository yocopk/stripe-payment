import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col bg-white p-10 gap-2 rounded-lg">
        <h1 className="text-2xl text-black">Stripe Payments</h1>
        <Link href="/payment/single" className="w-full bg-black rounded-md p-2">
          Single
        </Link>
        <Link
          href="/payment/recurring"
          className="w-full bg-black rounded-md p-2"
        >
          Recurring
        </Link>
      </div>
    </div>
  );
}
