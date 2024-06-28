import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quizz Pra-PPLK 2024",
  description: "Assessment quizz for get 1 pilar on PPLK 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-screen h-screen flex flex-col`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}

        <Toaster />
      </body>
    </html>
  );
}
