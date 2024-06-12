import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import db from "@/db/db";
import { cache } from "@/lib/cache";
import { Product } from "@prisma/client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

const wait = async () => {
  return new Promise((resolve) => setTimeout(resolve, 2000));
};
const getMostPopularProducts = async () => {
  await wait();
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { Order: { _count: "desc" } },
    take: 6,
  });
};
const getNewestProducts = async () => {
  await wait();
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { createdAt: "desc" },
    take: 6,
  });
};
const HomePage = async () => {
  return (
    <main className="y-12">
      <ProductGridSection
        productsFetcher={getMostPopularProducts}
        title="Most popular products"
      />
      <ProductGridSection
        productsFetcher={getNewestProducts}
        title="Newest products"
      />
    </main>
  );
};

export default HomePage;

type ProductGridSectionProps = {
  productsFetcher: () => Promise<Product[]>;
  title: string;
};
const ProductGridSection = async ({
  productsFetcher,
  title,
}: ProductGridSectionProps) => {
  return (
    <div className="space-y-4 mb-4">
      <div className="flex gap-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <Button variant={"outline"} asChild>
          <Link href={"/products"} className="space-x-2">
            <span>View all</span>
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
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
          <ProductSuspense productsFetcher={productsFetcher} />
        </Suspense>
      </div>
    </div>
  );
};
const ProductSuspense = async ({
  productsFetcher,
}: {
  productsFetcher: () => Promise<Product[]>;
}) => {
  return (await productsFetcher()).map((val) => {
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
