import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/containers/header";
import Footer from "@/components/containers/footer";
import { TailwindIndicator } from "@components/ui/tailwindIndicator";

const manrope = Manrope({ subsets: ["latin"] });

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
      <body className={manrope.className}>
        <Header />
        {children}
        <Footer />
        <TailwindIndicator />
      </body>
    </html>
  );
}
