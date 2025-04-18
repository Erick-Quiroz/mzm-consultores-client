"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Shield,
  Wrench,
  Lightbulb,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// Custom Electric Logo component
const ElectricLogo = ({ size = "md", imageSrc = "/logo3.png" }) => {
  return (
    <div className={`relative ${size === "md" ? "w-8 h-8" : "w-12 h-12"}`}>
      <Image
        fill
        src={imageSrc || "/placeholder.svg"}
        alt="MZM Consultores Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default function HeroSection() {
  const [theme, setTheme] = useState("dark");

  // Auto-detect system preference on mount
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const serviceItems = [
    {
      id: "service-1",
      icon: Zap,
      label: "Instalaciones",
      description: "Instalaciones eléctricas profesionales",
    },
    {
      id: "service-2",
      icon: Shield,
      label: "Protección",
      description: "Sistemas de seguridad eléctrica",
    },
    {
      id: "service-3",
      icon: Wrench,
      label: "Mantenimiento",
      description: "Mantenimiento preventivo y correctivo",
    },
    {
      id: "service-4",
      icon: Lightbulb,
      label: "Eficiencia",
      description: "Soluciones de ahorro energético",
    },
  ];

  return (
    <div
      className={`relative w-full overflow-hidden min-h-screen flex flex-col items-center justify-center ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-b from-blue-50 via-white to-gray-100 text-gray-900"
      }`}
    >
      {/* Background with mask */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(${
            theme === "dark"
              ? "rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8))"
              : "rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8))"
          }, url('/fondo-hero.webp')`,
          backgroundBlendMode: "darken",
          maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 90%, transparent 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: theme === "dark" ? 0.5 : 0.3,
        }}
      />

      {/* Gradient overlay at bottom */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t ${
          theme === "dark" ? "from-black" : "from-gray-100"
        } to-transparent pointer-events-none`}
      />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className={`inline-flex items-center gap-3 px-3 py-2 border-2 rounded-2xl mb-4 ${
                theme === "dark"
                  ? "border-blue-500/30 bg-blue-900/20"
                  : "border-blue-300 bg-blue-50"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ElectricLogo size="md" imageSrc="/logo3.png" />
              <h1
                className={`libre text-xl font-bold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                MZM consultores SRL
              </h1>
            </motion.div>

            <motion.h2
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Soluciones Eléctricas{" "}
              <span className="text-blue-500">Profesionales</span>
            </motion.h2>

            <motion.p
              className={`text-lg max-w-xl leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Ofrecemos servicios eléctricos innovadores, sostenibles y
              confiables para hogares y empresas. Nuestra experiencia garantiza
              eficiencia y seguridad en cada proyecto.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                className={`group transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Nuestros servicios
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className={`transition-all duration-300 ${
                  theme === "dark"
                    ? "border-blue-500 text-blue-400 hover:bg-blue-900/30"
                    : "border-blue-500 text-blue-600 hover:bg-blue-50"
                }`}
              >
                Contactar ahora
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.6,
                  },
                },
              }}
            >
              {serviceItems.map((item) => (
                <motion.div
                  key={item.id}
                  className={`flex flex-col items-center p-4 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-white/5 hover:bg-white/10 text-gray-200"
                      : "bg-white/70 hover:bg-white shadow-md hover:shadow-lg text-gray-800"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                >
                  <item.icon
                    className={`w-8 h-8 ${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    } mb-2`}
                  />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span
          className={`text-sm mb-2 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Descubre más
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ChevronDown
            className={`w-6 h-6 ${
              theme === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
