// /app/api/checkout_sessions/route.js
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { PLAN_PRICE, stripe } from "@/lib/stripe";
import { founderSubcriptions } from "@/api/serverMutation";

export async function POST(req) {
  try {
    const origin = (await headers()).get("origin");
    const { plan, userId, email, AccountHolder } = await req.json();

    const { PlanId, price, limit, name } = plan;
    const priceId = PLAN_PRICE[PlanId];
    // ── 1. Build line item based on payment type ───────────────────
    let lineItem, metadata, mode, successUrl;

    if (PlanId === "founder_free") {
      // Fixed plan: use a pre-created Price ID from the Stripe dashboard
      lineItem = { price: priceId, quantity: 1 }; // price id from stripe dashboard
      mode = "subscription";
      successUrl = `${origin}/dashboard/premium-success?session_id={CHECKOUT_SESSION_ID}`;
    } else {
      lineItem = {
        price_data: {
          currency: "usd",
          unit_amount: Number(price) * 100, // ALWAYS multiply by 100 for cents
          product_data: { name: name },
        },
        quantity: 1,
      };
      mode = "payment";
      successUrl =
        `${origin}/payment-success` +
        `?transaction_id={CHECKOUT_SESSION_ID}` +
        `&email=${encodeURIComponent(email)}` +
        `&plan=${PlanId}` +
        `&userId=${userId}` +
        `&price=${price}` +
        `&AccountHolder=${AccountHolder}`;

      // Store whatever you need to identify this transaction later
      metadata = {
        plan: PlanId,
        limit: limit,
        price: price,
        userId: userId,
        email: email,
      };
    }

    //
    // ── 2. Create the Stripe Checkout Session ──────────
    const session = await stripe.checkout.sessions.create({
      line_items: [lineItem],
      mode,
      metadata,
      success_url: successUrl,
      cancel_url: `${origin}/payment-cancelled`,
      customer_email: email || undefined, // optional: pre-fill email
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 },
    );
  }
}
