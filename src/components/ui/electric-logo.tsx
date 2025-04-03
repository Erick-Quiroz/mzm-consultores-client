"use client";

import type React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ElectricLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "blue" | "yellow" | "purple";
  animated?: boolean;
  imageSrc: string; // Nueva prop para la imagen
}

const sizeMap = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
};

export function ElectricLogo({
  size = "md",
  color = "blue",
  animated = true,
  imageSrc,
  className,
  ...props
}: ElectricLogoProps) {
  return (
    <div
      className={cn(
        "group relative flex items-center justify-center rounded-full",
        sizeMap[size],
        animated && "animate-pulse",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 rounded-full shadow-lg" />

      {/* Imagen en lugar del SVG */}
      <Image
        src={imageSrc}
        alt="Electric Logo"
        className="relative z-10   transition-all duration-300 ease-in-out"
        layout="fill"
      />

      {animated && (
        <div
          className={cn(
            "absolute inset-0 rounded-full opacity-40 blur-2xl animate-ping",
            color === "blue" && "bg-blue-400",
            color === "yellow" && "bg-yellow-400",
            color === "purple" && "bg-purple-400"
          )}
        />
      )}
    </div>
  );
}
