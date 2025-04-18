"use client";
import { Award, Target, Users } from "lucide-react";
import React from "react";

export default function Esencia() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nuestra Esencia
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Conoce los pilares fundamentales que guían nuestro trabajo día a
              día.
            </p>
          </div>
        </div>
        <div className="grid max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-3">
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
            <div
              key={index}
              className={`border-none shadow-md bg-gradient-to-br ${item.bg} hover:shadow-lg transition-all duration-300 p-6 rounded-lg text-center`}
            >
              <div className={`rounded-full ${item.iconBg} p-3 mx-auto mb-4`}>
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
