import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#222]">
      <div className="flex flex-col bg-white p-10 gap-4 rounded-lg">
        <h1 className="text-2xl text-black">Stripe Payments</h1>
        <Link
          href="/payment/single"
          className="w-full bg-black text-white text-center rounded-md p-2 hover:bg-black/80"
        >
          Single
        </Link>
        <Link
          href="/payment/recurring"
          className="w-full bg-black text-white text-center rounded-md p-2 hover:bg-black/80"
        >
          Recurring
        </Link>
      </div>
    </div>
  );
}
