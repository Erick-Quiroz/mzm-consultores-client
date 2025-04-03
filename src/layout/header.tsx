"use client";

import { useState, useEffect } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { NavigationMenu } from "./navigation-menu";
import { MobileMenu } from "./mobile-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const menuItems = [
  {
    title: "Inicio",
    href: "/",
  },

  {
    title: "Servicios",
    href: "/servicios",
  },
  {
    title: "Novedades",
    href: "/novedades",
  },
  {
    title: "Nosotros",
    href: "/nosotros",
  },
  {
    title: "Conctactos",
    href: "/contactos",
    // submenu: [
    //   {
    //     title: "Contacto",
    //     href: "/contactos",
    //     description: "Contáctanos para más información.",
    //   },
    //   {
    //     title: "Soporte",
    //     href: "/soporte",
    //     description: "Soporte técnico y atención al cliente.",
    //   },
    // ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold">Logo</div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:block">
              <NavigationMenu items={menuItems} />
            </nav>
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Cambiar tema</span>
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </div>
        </div>
      </div>
      <MobileMenu
        items={menuItems}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        companyName="Your Company Name"
      />
    </header>
  );
}
