import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/containers/header";
import Footer from "@/components/containers/footer";
import { TailwindIndicator } from "@/components/ui/tailwindIndicator";

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
      <body className={inter.className}>
        <Header />
        <TailwindIndicator />
        {children}
        <Footer />
      </body>
    </html>
  );
}
