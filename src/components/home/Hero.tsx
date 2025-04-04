"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Shield,
  WrenchIcon,
  LightbulbIcon,
} from "lucide-react";
import { ElectricLogo } from "../ui/electric-logo";
import Image from "next/image";

export default function HeroSection() {
  // Eliminada la animación de rayos para optimización

  const serviceItems = [
    { id: "service-1", icon: Zap, label: "Instalaciones" },
    { id: "service-2", icon: Shield, label: "Protección" },
    { id: "service-3", icon: WrenchIcon, label: "Mantenimiento" },
    { id: "service-4", icon: LightbulbIcon, label: "Eficiencia" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-gray-800 via-gray-700 to-black min-h-screen flex flex-col items-center justify-center">
      {/* Fondo optimizado sin animaciones */}
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/fondo-hero.webp"
          alt="Fondo eléctrico"
          fill
          priority
          quality={85}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t dark:from-[#101828] from-[#F9FAFB] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto del Hero */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-2 py-1 border-2 rounded-2xl mb-4">
              <ElectricLogo size="md" color="blue" imageSrc="/logo3.png" />
              <h1 className="relative text-sm font-bold text-white">
                MZM consultores SRL
              </h1>
            </div>

            <h1 className="text-3xl md:text-4xl sm:text-2xl font-bold leading-tight">
              Impulsando el futuro con soluciones eléctricas.
            </h1>

            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              Ofrecemos servicios eléctricos innovadores, sostenibles y
              confiables para hogares y empresas. Nuestra experiencia garantiza
              eficiencia y seguridad en cada proyecto.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="group bg-electric hover:bg-electric-light text-white transition-all duration-300"
              >
                Nuestros servicios
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-electric text-electric hover:bg-electric/10"
              >
                Contactar ahora
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {serviceItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-electric mb-2" />
                  <span className="text-sm font-medium text-gray-200">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
