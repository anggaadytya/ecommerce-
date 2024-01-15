import React from "react";
import { Dashboard } from "@/modules/admin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Dashboard",
};

export default function page() {
  return <Dashboard />;
}
