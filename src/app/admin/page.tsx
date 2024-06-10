import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import db from "@/db/db";
import React from "react";

const getSalesData = async () => {
  const salesData = await db.order.aggregate({
    _sum: { pricePaidInCents: true },
    _count: true,
  });
  return {
    amount: salesData?._sum.pricePaidInCents || 0,
    numberOfSales: salesData._count,
  };
};
const getCustomerDetails = async () => {
  const [customerCount, orderSum] = await Promise.all([
    db.user.count(),
    db.order.aggregate({
      _sum: { pricePaidInCents: true },
    }),
  ]);

  return {
    count: customerCount,
    average:
      customerCount === 0
        ? 0
        : orderSum._sum.pricePaidInCents || 0 / customerCount,
  };
};
const getProductDetails = async () => {
  const [active, inActive] = await Promise.all([
    db.product.count({ where: { isAvailableForPurchase: true } }),
    db.product.count({ where: { isAvailableForPurchase: false } }),
  ]);
  return {
    active: active || 0,
    inActive: inActive || 0,
  };
};
const AdminDashboard = async () => {
  const [salesDetails, customerDetails, productDetails] = await Promise.all([
    getSalesData(),
    getCustomerDetails(),
    getProductDetails(),
  ]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        title="Sales"
        subTitle={salesDetails.numberOfSales + " Orders"}
        body={salesDetails.amount + ""}
      />
      <DashboardCard
        title="Customer"
        subTitle={customerDetails.average + " Average value"}
        body={customerDetails.count + " total customers"}
      />
      <DashboardCard
        title="Active Product"
        subTitle={productDetails.inActive + " Inactive products"}
        body={productDetails.active + " active"}
      />
    </div>
  );
};
type DashboardCardProps = {
  title: String;
  subTitle: String;
  body: String;
};
const DashboardCard = ({ body, subTitle, title }: DashboardCardProps) => {
  return (
    <Card>
      <CardHeader>
        {" "}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subTitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
};
export default AdminDashboard;
