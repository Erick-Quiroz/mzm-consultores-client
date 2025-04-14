"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Shield,
  WrenchIcon,
  LightbulbIcon,
} from "lucide-react";
import { ElectricLogo } from "../ui/electric-logo";
import { motion } from "framer-motion";

export default function HeroSection() {
  const serviceItems = [
    { id: "service-1", icon: Zap, label: "Instalaciones" },
    { id: "service-2", icon: Shield, label: "Protección" },
    { id: "service-3", icon: WrenchIcon, label: "Mantenimiento" },
    { id: "service-4", icon: LightbulbIcon, label: "Eficiencia" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-gray-800 via-gray-700 to-black min-h-screen flex flex-col items-center justify-center">
      {/* Fondo con máscara */}
      <div
        className="absolute inset-0 opacity-50 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/fondo-hero.webp')",
          backgroundBlendMode: "darken",
          maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 90%, transparent 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t dark:from-[#101828] from-[#F9FAFB] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto del Hero */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-2 py-1 border-2 rounded-2xl mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ElectricLogo size="md" color="blue" imageSrc="/logo3.png" />
              <h1 className="caslon text-xl font-bold text-white">
                MZM consultores SRL
              </h1>
            </motion.div>

            <motion.p
              className="cardo-regular text-lg text-gray-300 max-w-xl leading-relaxed"
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

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6"
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
                  className="flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <item.icon className="w-8 h-8 text-electric mb-2" />
                  <span className="text-sm font-medium text-gray-200">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
