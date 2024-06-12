import db from "@/db/db";
import { notFound } from "next/navigation";
import React from "react";
import Stripe from "stripe";
import CheckoutForm from "./_components/CheckoutForm";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
const PurchasePage = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await db.product.findUnique({ where: { id } });
  if (product === null) return notFound();
  const paymentIntents = await stripe.paymentIntents.create({
    amount: product.priceInCents,
    currency: "INR",
    metadata: { productId: product.id },
  });
  if (paymentIntents.client_secret === null) {
    throw new Error("Stripe failed to create Payment intent");
  }

  return (
    <CheckoutForm
      product={product}
      clientSecret={paymentIntents.client_secret}
    />
  );
};

export default PurchasePage;
