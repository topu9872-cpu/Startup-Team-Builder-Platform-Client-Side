"use client";

import React from "react";
import {
  Sparkles,
  CheckCircle2,
  Zap,
  Building2,
  CalendarRange,
} from "lucide-react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

// Extracted plans data structure for full flexibility
const PLANS = [
  {
    PlanId: "founder_free",
    name: "Starter",
    price: "0",
    period: "/ free",
    limit: 3,
    limitLabel: "Limit: 3 applications / month",
    icon: Zap,
    iconColor: "text-slate-400",
    badge: null,
    features: ["Standard applicant indexing", "Public board routing access"],
    cardStyles: "border-slate-800 bg-slate-950/40 opacity-80",
    buttonStyles: "bg-slate-800 border border-slate-700/40 text-slate-400",
  },
  {
    PlanId: "founder_pro",
    name: "Pro Developer",
    price: "12",
    period: "/ month",
    limit: 20,
    limitLabel: "Limit: 20 applications / month",
    icon: Sparkles,
    iconColor: "text-indigo-400",
    badge: "Recommended Upgrade",
    features: [
      "Extended monthly submission capacity",
      "Priority premium submission tracking",
      "Direct team workspace contact loops",
    ],
    cardStyles:
      "border-indigo-500/40 bg-linear-to-b from-indigo-950/30 to-slate-950/80 shadow-xl shadow-indigo-950/20",
    buttonStyles:
      "text-white bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 shadow-indigo-500/20",
  },
  {
    PlanId: "founder_enterprise",
    name: "Enterprise",
    price: "49",
    period: "/ month",
    limit: 50,
    limitLabel: "Limit: 50 applications / month",
    icon: Building2,
    iconColor: "text-purple-400",
    badge: null,
    features: [
      "High-volume operational quota ceiling",
      "Dedicated accounts engineering liaison",
    ],
    cardStyles: "border-slate-800 bg-slate-950/40",
    buttonStyles:
      "bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800",
  },
];

export default function PricingPlansGrid({
  currentPlan = "founder_free",
  currentUsage = 0,
}) {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleCheckout = async (plan) => {
    if (!user?.id || !user?.email) {
      
      return;
    }
    const res = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        plan,
        type: "subscription",
        userId: user?.id,
        email: user?.email,
        AccountHolder:user?.name
      }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    }
    if (!res.ok || data.error) {
      console.error(data.error || "Checkout failed");
      return;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto font-sans p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {PLANS.map((plan) => {
          const PlanIcon = plan.icon;
          const isCurrentPlan =
            currentPlan.toLowerCase() === plan.PlanId.toLowerCase();
          const isLimitReached = currentUsage >= plan.limit;

          return (
            <div
              key={plan.PlanId}
              className={`p-6 rounded-xl border flex flex-col backdrop-blur-md relative transition-all duration-300 ${plan.cardStyles} ${isCurrentPlan ? "ring-2 ring-emerald-500/50 border-emerald-500/30" : ""}`}
            >
              {/* Optional Recommended Badge */}
              {plan.badge && (
                <div className="absolute top-0 right-0 p-1.5 border-b border-l rounded-bl-lg text-[9px] uppercase tracking-wider font-bold flex items-center gap-1 bg-indigo-500/20 border-indigo-500/30 text-indigo-300">
                  <Sparkles className="w-2.5 h-2.5" /> {plan.badge}
                </div>
              )}

              <div className="flex-1">
                {/* Title and Icon */}
                <div
                  className={`flex items-center gap-2 font-semibold text-sm mb-2 ${plan.iconColor}`}
                >
                  <PlanIcon className="w-4 h-4" /> {plan.name}
                </div>

                {/* Pricing values */}
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-slate-100">
                    ${plan.price}
                  </span>
                  <span className="text-slate-500 text-xs">{plan.period}</span>
                </div>

                {/* Variable Limit Alert */}
                <p
                  className={`text-xs font-semibold mt-2 flex items-center gap-1 ${isCurrentPlan && isLimitReached ? "text-rose-400" : plan.id === "founder_pro" ? "text-slate-400" : "text-emerald-400"}`}
                >
                  <CalendarRange className="w-3.5 h-3.5" />
                  {isCurrentPlan
                    ? `Used: ${currentUsage} / ${plan.limit} slots`
                    : plan.limitLabel}
                </p>

                {/* Features Loop */}
                <div className="mt-5 space-y-2.5 border-t border-slate-900 pt-4">
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slate-300"
                    >
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 ${isCurrentPlan ? "text-emerald-400" : "text-indigo-400"}`}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Render Contextual Action Buttons */}
              <div className="mt-6">
                {isCurrentPlan ? (
                  isLimitReached ? (
                    <button
                      disabled
                      className="w-full py-2 bg-rose-950/20 border border-rose-500/30 text-rose-400 text-xs font-bold rounded-lg cursor-not-allowed text-center uppercase tracking-wider"
                    >
                      Usage Cap Reached
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full py-2 bg-emerald-950/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold rounded-lg cursor-not-allowed text-center uppercase tracking-wider"
                    >
                      Active Plan
                    </button>
                  )
                ) : (
                  <button
                    disabled={!user}
                    onClick={() => handleCheckout(plan)}
                    className={`w-full py-2 cursor-pointer focus:scale-95 text-xs font-semibold rounded-lg transition-all text-center ${plan.buttonStyles}`}
                  >
                    Upgrade to {plan.name}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
