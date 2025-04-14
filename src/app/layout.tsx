"use client";

import { Header } from "@/layout/header";
import ScrollToTop from "@/hooks/ScrollToTop";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "@/layout/footer";
import AnimatedBackgroundLayout from "@/components/home/particlesBg";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <head />
      <body className={`${inter.className} bg-background text-foreground`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            {/* Header fijo */}
            <div className="sticky top-0 z-50">
              <Header />
            </div>

            {/* Main con contenido animado y fondo claro */}
            <main className="flex-grow bg-gray-100 ">
              <AnimatedBackgroundLayout>{children}</AnimatedBackgroundLayout>
            </main>

            {/* Footer fijo al final */}
            <Footer />
          </div>

          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
