import type { Metadata } from "next";
import { Oswald, Urbanist } from "next/font/google";
import "./globals.css";
const oswald = Oswald({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });
import { Header, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Buy Next | Online Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${oswald.className} ${urbanist.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
