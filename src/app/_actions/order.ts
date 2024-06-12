"use server";
import db from "@/db/db";

export const userOrderExists = async (email: string, productId: string) => {
  return (
    (await db.order.findFirst({
      where: { productId, user: { email } },
      select: {
        id: true,
      },
    })) !== null
  );
};
