import Navbar from "@/common/components/layouts/Navbar";
import NextAuthProvider from "@/common/libs/nextAuth";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--soraSans-font",
  display: "fallback",
});

export const metadata: Metadata = {
  title: "Shopping Car",
  description: "Shopping Car by Angga Adytya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <NextAuthProvider>
          <Navbar />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
