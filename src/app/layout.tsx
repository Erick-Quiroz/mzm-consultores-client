"use client";

import { Header } from "@/layout/header";
import ScrollToTop from "@/hooks/ScrollToTop";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <head />
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Header />
            <main className="flex-grow bg-gray-100 ">
              {" "}
              <AnimatedBackgroundLayout>{children}</AnimatedBackgroundLayout>
            </main>
            <Footer />
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import Footer from "@/layout/footer";

import AnimatedBackgroundLayout from "@/components/home/particlesBg";
