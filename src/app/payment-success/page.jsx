import { founderSubcriptions } from "@/api/serverMutation";

export default async function PaymentSuccess({ searchParams }) {
  const param = await searchParams;
  const sessionId = param?.session_id;
  const userEmail = param?.email;
console.log(param)
  await founderSubcriptions({ ...param, payment_status: "success" });
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 antialiased text-zinc-100">
      <div className="max-w-md w-full bg-zinc-900 rounded-2xl shadow-2xl p-8 text-center border border-zinc-800 transform transition-all">
        {/* Success Icon - Vibrant Purple Neon Style */}
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-purple-950/50 border border-purple-500/30 mb-6 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
          <svg
            className="h-8 w-8 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Payment Successful!
        </h1>
        <p className="text-zinc-400 mt-2 text-sm sm:text-base">
          Thank you for your purchase. Your account has been updated.
        </p>

        {/* Email Notification Box - Deep Purple/Violet Accents */}
        <div className="mt-6 bg-purple-950/30 rounded-xl p-4 border border-purple-900/40 flex items-center justify-center gap-3">
          <svg
            className="h-5 w-5 text-purple-400 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <p className="text-xs sm:text-sm text-purple-300 font-medium text-left">
            A receipt has been sent to{" "}
            <span className="font-bold text-purple-200 underline break-all">
              {userEmail}
            </span>
          </p>
        </div>

        {/* Session ID / Metadata */}
        {sessionId && (
          <div className="mt-5 pt-4 border-t border-zinc-800 text-left">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              Transaction Details
            </span>
            <p className="text-xs text-purple-300/80 font-mono mt-1.5 bg-zinc-950 p-2.5 rounded-lg border border-zinc-800 break-all select-all">
              ID: {sessionId}
            </p>
          </div>
        )}

        <hr className="my-6 border-zinc-800/80" />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <a
            href="/dashboard/founder-add-opportunity"
            className="flex-1 inline-flex justify-center items-center px-6 py-3 text-sm font-semibold rounded-xl text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-purple-500 transition-all shadow-[0_4px_12px_rgba(168,85,247,0.2)]"
          >
            Go to Dashboard
          </a>
          <a
            href="/"
            className="flex-1 inline-flex justify-center items-center px-6 py-3 border border-zinc-700 text-sm font-semibold rounded-xl text-zinc-300 bg-zinc-800/50 hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-purple-500 transition-all"
          >
            Back Home
          </a>
        </div>
      </div>
    </div>
  );
}
