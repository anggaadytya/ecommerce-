import React from "react";
import { Users } from "@/modules/admin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Users",
};

export default function page() {
  return <Users />;
}
