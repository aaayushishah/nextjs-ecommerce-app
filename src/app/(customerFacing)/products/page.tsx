import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import db from "@/db/db";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

const getProducts = () => {
  return db.product.findMany({
    where: {
      isAvailableForPurchase: true,
    },
    orderBy: {
      name: "asc",
    },
  });
};
const ProductsPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Suspense
        fallback={
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        }
      >
        <ProductsSuspense />
      </Suspense>
    </div>
  );
};

export default ProductsPage;
const ProductsSuspense = async () => {
  const products = await getProducts();
  return products.map((val) => {
    return (
      <ProductCard
        description={val.description}
        imagePath={val.imagePath}
        id={val.id}
        name={val.name}
        price={val.priceInCents}
        key={val.id}
      />
    );
  });
};
type ProductCardProps = {
  imagePath: string;
  name: string;
  price: number;
  description: string;
  id: string;
};
const ProductCard = ({
  name,
  price,
  description,
  id,
  imagePath,
}: ProductCardProps) => {
  return (
    <>
      <Card className="flex overflow-hidden flex-col">
        <div className="relative  w-full h-auto aspect-video">
          <Image src={imagePath.replace("public", "")} fill alt={name} />
        </div>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{price}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="line-clamp-4">{description}</p>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full" size={"lg"}>
            <Link href={`/products/${id}/purchase`}>Purchase</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
const ProductCardSkeleton = () => {
  return (
    <Card className="overflow-hidden flex flex-col animate-pulse">
      <div className="w-full aspect-video bg-gray-300" />
      <CardHeader>
        <CardTitle>
          <div className="w-3/4 h-6 rounded-full bg-gray-300" />
        </CardTitle>
        <CardDescription>
          <div className="w-1/2 h-4 rounded-full bg-gray-300" />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="w-full h-4 rounded-full bg-gray-300" />
        <div className="w-full h-4 rounded-full bg-gray-300" />
        <div className="w-3/4 h-4 rounded-full bg-gray-300" />
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled size="lg"></Button>
      </CardFooter>
    </Card>
  );
};
