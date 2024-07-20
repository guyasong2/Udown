import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Udownloader",
  description: "Download your Youtube video in One Go",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        
        <main className="overflow-hidden pt-20">
        {children}
        </main>
        <Footer />
      </body>
    </html>
    </>
  );
}
