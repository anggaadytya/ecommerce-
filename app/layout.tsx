import Navbar from "@/common/components/layouts/Navbar";
import NextAuthProvider from "@/common/libs/nextAuth";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import { Providers } from "@/common/libs/NextUi";

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
    <html lang="en" className="light">
      <body className={sora.className}>
        <NextAuthProvider>
          <Providers>
            <Navbar />
            {children}
            <ToastContainer />
          </Providers>
        </NextAuthProvider>
      </body>
    </html>
  );
}
