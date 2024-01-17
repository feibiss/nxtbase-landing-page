import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/containers/header";
import Footer from "@/components/containers/footer";
import BackgroundBanner from "@/components/ui/bg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clubbed",
  description: "Created by Nextbase team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundBanner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
