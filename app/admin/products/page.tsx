import { Products } from "@/modules/admin";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Admin | Products",
};

export default function page() {
  return <Products />;
}
