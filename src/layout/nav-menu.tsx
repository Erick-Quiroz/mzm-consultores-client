"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface MenuItem {
  title: string;
  href: string;
  submenu?: MenuItem[];
}

interface NavMenuProps {
  items: MenuItem[];
}

export function NavMenu({ items }: NavMenuProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <ul className="relative z-50 flex space-x-4">
      {items.map((item) => (
        <li key={item.title} className="relative group">
          <a
            href={item.href}
            className="text-gray-700 hover:text-gray-900"
            onClick={(e) => {
              if (item.submenu) {
                e.preventDefault();
                setOpenSubmenu(openSubmenu === item.title ? null : item.title);
              }
            }}
          >
            {item.title}
            {item.submenu && (
              <ChevronDown className="inline-block ml-1 w-4 h-4" />
            )}
          </a>
          {item.submenu && (
            <ul
              className={`absolute left-0 mt-2 space-y-2 bg-white border border-gray-200 rounded-md shadow-lg z-50 ${
                openSubmenu === item.title ? "block" : "hidden"
              }`}
            >
              {item.submenu.map((subItem) => (
                <li key={subItem.title}>
                  <a
                    href={subItem.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {subItem.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
