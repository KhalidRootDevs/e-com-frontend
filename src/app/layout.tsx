import StoreProvider from "@/features/context/store-provider";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "E-Commerce Platform - Buy and Sell Digital Products",
  description:
    "Discover a wide range of digital products including software, ebooks, music, and more. Buy and sell easily on our user-friendly platform."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${inter.className}`}>
        <NextTopLoader showSpinner={false} />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
