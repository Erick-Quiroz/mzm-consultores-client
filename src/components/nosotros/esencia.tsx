"use client";
import { Award, Target, Users } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function Esencia() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
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
              Nuestra Esencia
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Conoce los pilares fundamentales que guían nuestro trabajo día a
              día.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3"
        >
          {[
            {
              title: "Misión",
              description:
                "Proporcionar soluciones innovadoras que superen las expectativas de nuestros clientes, contribuyendo al desarrollo sostenible de la sociedad.",
              icon: Target,
              bg: "from-blue-200 to-teal-200 dark:from-blue-800 dark:to-teal-800",
              iconBg: "bg-teal-300",
            },
            {
              title: "Visión",
              description:
                "Ser reconocidos como líderes globales en nuestro sector, estableciendo nuevos estándares de calidad e innovación que impulsen el progreso en todas las industrias que servimos.",
              icon: Award,
              bg: "from-purple-200 to-blue-200 dark:from-purple-800 dark:to-blue-800",
              iconBg: "bg-purple-300",
            },
            {
              title: "Valores",
              description:
                "Integridad, excelencia, colaboración, responsabilidad social y pasión por la innovación son los valores que definen nuestra cultura empresarial y guían cada una de nuestras acciones.",
              icon: Users,
              bg: "from-orange-200 to-red-200 dark:from-orange-900 dark:to-red-900",
              iconBg: "bg-orange-300",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <Card
                className={`border-none shadow-md bg-gradient-to-br ${item.bg} hover:shadow-lg transition-all duration-300`}
              >
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className={`rounded-full ${item.iconBg} p-3`}>
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
