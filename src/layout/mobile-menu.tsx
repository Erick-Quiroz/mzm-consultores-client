"use client";

import type React from "react";

import { useState } from "react";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  href: string;
  submenu?: {
    title: string;
    href: string;
    description: string;
  }[];
}

interface MobileMenuProps {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;

  companyName: string;
}

export function MobileMenu({
  items,
  isOpen,
  onClose,

  companyName,
}: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  if (!isOpen) return null;

  const toggleSubmenu = (title: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        // Close when clicking the background, but not when clicking content
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="container mx-auto px-4 py-4 min-h-screen flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">logo</div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full hover:bg-muted"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Cerrar menú</span>
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center mt-6 mb-8">
          <div className="text-xl font-bold text-center">
            MZM Consultores SRL
          </div>
        </div>

        <Separator className="mb-6" />

        <nav className="flex-1">
          <ul className="space-y-6">
            {items.map((item) => (
              <li key={item.title} className="py-1">
                {item.submenu ? (
                  <div className="space-y-3">
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className="flex w-full items-center justify-between text-lg font-medium text-foreground hover:text-primary transition group"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 text-muted-foreground transition-transform duration-200",
                          expandedItems[item.title] && "rotate-180"
                        )}
                      />
                    </button>

                    {expandedItems[item.title] && (
                      <ul className="mt-2 space-y-3 pl-4 border-l-2 border-muted">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.title} className="py-1">
                            <a
                              href={subItem.href}
                              className="block hover:text-primary transition"
                              onClick={onClose}
                            >
                              <div className="flex items-center gap-2">
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                <span className="font-medium">
                                  {subItem.title}
                                </span>
                              </div>
                              {subItem.description && (
                                <p className="mt-1 text-sm text-muted-foreground pl-6">
                                  {subItem.description}
                                </p>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block text-lg font-medium text-foreground hover:text-primary transition"
                    onClick={onClose}
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto pt-6">
          <Separator className="mb-6" />
          <div className="flex justify-center space-x-4 text-sm text-muted-foreground"></div>
          <div className="text-center mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {companyName}. Todos los derechos
            reservados.
          </div>
        </div>
      </div>
    </div>
  );
}
