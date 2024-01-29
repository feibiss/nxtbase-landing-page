import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/containers/header";
import { TailwindIndicator } from "@/components/ui/tailwindIndicator";
import Footer from "@/components/containers/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Probably",
  description: "Created by Nextbase Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
