"use client";

import type React from "react";
import { useState } from "react";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  const toggleSubmenu = (title: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="w-full max-h-[90vh] bg-background shadow-lg transition-all duration-300 ease-in-out animate-in slide-in-from-top"
        style={{
          overflowY: "auto",
          zIndex: 40,
        }}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="text-lg font-semibold">Logo</div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full hover:bg-muted"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-6">
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.title}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className="flex w-full items-center justify-between text-base font-medium text-foreground hover:text-primary transition"
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
                      <ul className="mt-2 space-y-2 pl-4 border-l border-muted">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.title}>
                            <a
                              href={subItem.href}
                              className="block hover:text-primary transition"
                              onClick={onClose}
                            >
                              <div className="flex items-center gap-2">
                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                <span>{subItem.title}</span>
                              </div>
                              {subItem.description && (
                                <p className="ml-6 text-sm text-muted-foreground">
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
                    className="block text-base font-medium text-foreground hover:text-primary transition"
                    onClick={onClose}
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-4 pt-4 pb-6 border-t text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {companyName}. Todos los derechos
          reservados.
        </div>
      </div>
    </div>
  );
}
