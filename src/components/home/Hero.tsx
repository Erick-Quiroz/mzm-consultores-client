"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Shield,
  WrenchIcon,
  LightbulbIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { ElectricLogo } from "../ui/electric-logo";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const lightningBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createLightningFlash = () => {
      if (!lightningBgRef.current) return;

      const flash = document.createElement("div");
      const xPos = Math.random() * 100;
      const yPos = Math.random() * 100;
      const length = 50 + Math.random() * 150;
      const rotation = Math.random() * 360;
      const width = 1 + Math.random() * 3;

      flash.style.position = "absolute";
      flash.style.left = `${xPos}%`;
      flash.style.top = `${yPos}%`;
      flash.style.width = `${length}px`;
      flash.style.height = `${width}px`;
      flash.style.transform = `rotate(${rotation}deg)`;
      flash.style.background =
        "linear-gradient(90deg, rgba(64,156,255,0) 0%, rgba(64,156,255,1) 50%, rgba(64,156,255,0) 100%)";
      flash.style.opacity = "0";
      flash.style.boxShadow = "0 0 10px 2px rgba(64,156,255,0.8)";
      flash.style.borderRadius = "50px";
      flash.style.zIndex = "1";

      flash.animate([{ opacity: 0 }, { opacity: 0.8 }, { opacity: 0 }], {
        duration: 300 + Math.random() * 500,
        easing: "ease-out",
      });

      lightningBgRef.current.appendChild(flash);
      setTimeout(() => flash.remove(), 600);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const flashes = 1 + Math.floor(Math.random() * 3);
        for (let i = 0; i < flashes; i++) {
          setTimeout(createLightningFlash, i * 100);
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const serviceItems = [
    { id: "service-1", icon: Zap, label: "Instalaciones" },
    { id: "service-2", icon: Shield, label: "Protección" },
    { id: "service-3", icon: WrenchIcon, label: "Mantenimiento" },
    { id: "service-4", icon: LightbulbIcon, label: "Eficiencia" },
  ];

  return (
    <motion.div
      ref={heroRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-gray-800 via-gray-700 to-black min-h-screen flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 opacity-50 bg-[url('/fondo.webp')] bg-cover bg-center"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          // Agrega un gradiente de desvanecimiento en la parte inferior
          maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 90%, transparent 100%)",
        }}
      />

      {/* Capa para los destellos eléctricos */}
      <div ref={lightningBgRef} className="absolute inset-0 overflow-hidden" />
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t dark:from-[#101828] from-[#F9FAFB] to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 py-4 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
          }}
        >
          {/* Texto del Hero */}
          <div className="space-y-8">
            <motion.div
              className="inline-flex items-center gap-3 px-2 py-1 border-2 rounded-2xl mb-4"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <ElectricLogo size="md" color="blue" imageSrc="/logo3.png" />
              <motion.h1
                className="relative text-sm font-bold text-white"
                initial={{ backgroundPosition: "200%" }}
                animate={{ backgroundPosition: "-200%" }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, transparent, white, transparent)",
                  backgroundSize: "200% 100%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                MZM consultores SRL
              </motion.h1>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl sm:text-2xl font-bold leading-tight"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              Impulsando el futuro con soluciones eléctricas.
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300 max-w-xl leading-relaxed"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              Ofrecemos servicios eléctricos innovadores, sostenibles y
              confiables para hogares y empresas. Nuestra experiencia garantiza
              eficiencia y seguridad en cada proyecto.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 pt-4">
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
            </motion.div>

            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {serviceItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                >
                  <item.icon className="w-8 h-8 text-electric mb-2" />
                  <span className="text-sm font-medium text-gray-200">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
