export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <main className="max-w-6xl mx-auto p-10 bg-green-500/30 text-center border m-10 rounded-md">
      <div className="mb-10 text-black">
        <h1 className="text-2xl font-extrabold mb-2 text-green-950">
          Thank you!
        </h1>
        <h2 className="text-xl text-green-950">You successfully sent</h2>

        <div className="bg-white p-2 rounded-md text-green-950 mt-5 text-4xl font-bold">
          €{amount}
        </div>
      </div>
    </main>
  );
}
