import Sidebar from "@/common/components/layouts/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Shopping Car by Angga Adytya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
