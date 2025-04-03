"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function Equipo() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Se activa cuando el 20% de la sección es visible
      variants={staggerContainer}
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <div className="px-4 md:px-6">
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nuestro Equipo Directivo
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Conoce a los líderes visionarios que impulsan nuestra misión y
              valores cada día.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {[
            {
              name: "María Rodríguez",
              position: "CEO & Fundadora",
              image: "/placeholder.svg?height=200&width=200",
              description:
                "Con más de 20 años de experiencia en el sector, María lidera nuestra visión estratégica.",
            },
            {
              name: "Carlos Sánchez",
              position: "Director de Operaciones",
              image: "/placeholder.svg?height=200&width=200",
              description:
                "Carlos asegura la excelencia operativa en todos nuestros proyectos y servicios.",
            },
            {
              name: "Ana Martínez",
              position: "Directora de Innovación",
              image: "/placeholder.svg?height=200&width=200",
              description:
                "Ana impulsa nuestras iniciativas de I+D, manteniendo a la empresa a la vanguardia tecnológica.",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center space-y-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="overflow-hidden rounded-full">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="aspect-square object-cover"
                />
              </div>
              <div className="space-y-1 text-center">
                <h3 className="font-bold text-white">{member.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {member.position}
                </p>
                <p className="text-sm text-muted-foreground">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
