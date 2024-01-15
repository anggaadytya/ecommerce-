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
    <section className="flex">
      <Sidebar />
      <div className="w-full p-3 bg-neutral-300">{children}</div>
    </section>
  );
}
