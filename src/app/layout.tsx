"use client";

import { Header } from "@/layout/header";
import ScrollToTop from "@/hooks/ScrollToTop";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "@/layout/footer";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";

    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  return (
    <html lang="es">
      <head />
      <body className={`${inter.className} bg-background text-foreground`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <div className="sticky top-0 z-50">
              <Header />
            </div>
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
