"use server";
import db from "@/db/db";
import fs from "fs/promises";
import { notFound, redirect } from "next/navigation";

export const addProduct = async (formData: FormData) => {
  console.log("formData: ", Object.fromEntries(formData.entries()));
  const data = Object.fromEntries(formData.entries());
  await fs.mkdir("products", { recursive: true });
  const filePath = `products/${crypto.randomUUID()}-${
    (data.file as File)?.name
  }`;
  await fs.writeFile(
    filePath,
    Buffer.from(await (data.file as File).arrayBuffer())
  );

  await fs.mkdir("public/products", { recursive: true });
  const imagePath = `public/products/${crypto.randomUUID()}-${
    (data.image as File)?.name
  }`;
  await fs.writeFile(
    imagePath,
    Buffer.from(await (data.image as File).arrayBuffer())
  );
  await db.product.create({
    data: {
      name: (data.name as string) ?? "",
      description: (data.description as string) ?? "",
      isAvailableForPurchase: false,
      priceInCents: Number(data.price),
      filePath: filePath,
      imagePath: imagePath,
    },
  });
  redirect("/admin/products");
};
export const toggleProductAvailiblity = async (
  id: string,
  isAvailableForPurchase: boolean
) => {
  await db.product.update({
    data: {
      isAvailableForPurchase,
    },
    where: {
      id,
    },
  });
};

export const deleteProduct = async (id: string) => {
  const product = await db.product.delete({
    where: {
      id,
    },
  });
  if (product === null) return notFound();
};