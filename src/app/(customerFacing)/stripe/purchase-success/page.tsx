import { Button } from "@/components/ui/button";
import db from "@/db/db";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
const SuccessPage = async ({
  searchParams: { payment_intent },
}: {
  searchParams: { payment_intent: string };
}) => {
  const paymentDetails = await stripe.paymentIntents.retrieve(payment_intent);
  if (paymentDetails.metadata.productId === null) return notFound();

  const product = await db.product.findUnique({
    where: { id: paymentDetails.metadata.productId },
  });
  if (product === null) return notFound();

  const isSucess = paymentDetails.status === "succeeded";
  return (
    <>
      <div className="max-w-5xl w-full mx-auto space-y-8">
        <h1 className="text-4xl font-bold">
          {isSucess ? "Success..!!" : "Error..!!"}
        </h1>
        <div className="flex gap-4 items-center">
          <div className="aspect-video flex-shrink-0 w-1/3 relative">
            <Image
              src={product.imagePath.replace("public", "")}
              fill
              alt={product.name}
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-lg">{product.priceInCents} ₹</div>
            <h1 className="text-2xl">{product.name}</h1>
            <div className="line-clamp-3 text-muted-foreground">
              {product.description}
            </div>
            {/* <Button className="mt-4" size={"lg"} asChild>
              {isSucess ? (
                // <a
                //   href={`/products/download/${createDownloadVerification(
                //     product
                //   )}`}
                // >
                //   Download
                // </a>
                <a>Download</a>
              ) : (
                // <Link href={`/products/${product.id}/purchase`}>Try again</Link>
                <a>test</a>
              )}
              Download
            </Button> */}
            <Button>
              {isSucess ? (
                <a
                  href={`/products/download/${await createDownloadVerification(
                    product
                  )}`}
                >
                  Download
                </a>
              ) : (
                <Link href={`/products/${product.id}/purchase`}>Try Again</Link>
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
async function createDownloadVerification(product: Product) {
  return (
    await db.downloadVerification.create({
      data: {
        productId: product.id,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
    })
  ).id;
}
