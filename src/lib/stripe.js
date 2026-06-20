// /lib/stripe.js
import 'server-only'    // throws a build error if imported in a client component
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE={
    founder_pro:'price_1TkR0LLh2fw3lnuLwJyDN0tQ',
    founder_enterprise:'price_1TkRA5Lh2fw3lnuLP89AMXLR'
}