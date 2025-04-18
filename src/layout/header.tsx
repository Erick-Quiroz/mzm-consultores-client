"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "Inicio",
    href: "/",
    className: "relative group",
  },
  {
    title: "Servicios",
    href: "/servicios",
    className: "relative group",
  },
  {
    title: "Novedades",
    href: "/novedades",
    className: "relative group",
  },
  {
    title: "Nosotros",
    href: "/nosotros",
    className: "relative group",
  },
  {
    title: "Conctactos",
    href: "/contactos",
    className: "relative group",
  },
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Obtener la ruta actual

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isHomePage = pathname === "/"; // Verificar si la vista es la página de inicio

  return (
    <header
      className={`playfair-display fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isHomePage
          ? scrolled
            ? theme === "dark"
              ? "bg-gray-900 shadow-md"
              : "bg-gray-100  shadow-md"
            : "bg-transparent shadow-md"
          : scrolled
          ? theme === "dark"
            ? "bg-gray-900 shadow-md"
            : "bg-gray-100  shadow-md"
          : "bg-transparent shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 cormorant">
        <div className="flex items-center justify-between py-4 md:justify-between">
          <div className="text-3xl font-bold">Logo</div>
          <div className="flex items-center space-x-6 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="bg-transparent hover:bg-transparent"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-[1.5rem] w-[1.5rem] text-yellow-500 transition-all duration-300" />
              ) : (
                <Moon className="h-[1.5rem] w-[1.5rem] text-blue-500 transition-all duration-300" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={`bg-transparent hover:bg-transparent relative text-black  transition-colors duration-300 ${
                scrolled
                  ? theme === "dark"
                    ? "text-blue-500"
                    : "text-black-500"
                  : "text-back"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
              {mobileMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white shadow-lg rounded-md">
                  <ul className="py-3">
                    {menuItems.map((item) => (
                      <li
                        key={item.title}
                        className="px-6 py-3 hover:bg-gray-100"
                      >
                        <a href={item.href} className="block text-gray-700">
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Button>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.title} className={item.className}>
                  <a
                    href={item.href}
                    className={`text-lg font-medium transition-colors relative group ${
                      isHomePage
                        ? scrolled
                          ? theme === "dark"
                            ? "text-white-500 hover:text-gray-300"
                            : "text-black hover:text-gray-900"
                          : "text-white hover:text-gray-300"
                        : theme === "dark"
                        ? "text-white-500 hover:text-gray-300"
                        : "text-black hover:text-gray-900"
                    }`}
                  >
                    {item.title}
                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="bg-transparent hover:bg-transparent"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="h-[1.5rem] w-[1.5rem] text-yellow-500 transition-all duration-300" />
                ) : (
                  <Moon className="h-[1.5rem] w-[1.5rem] text-blue-500 transition-all duration-300" />
                )}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
