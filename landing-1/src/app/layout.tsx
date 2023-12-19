import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/containers/header";
import Footer from "@/components/containers/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "the Boring Company",
  description: "Template for useNextBase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(inter.className, "min-h-screen max-w-screen")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
