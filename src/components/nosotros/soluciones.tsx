import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart2, Briefcase, Cloud, Code, Cpu, Shield } from "lucide-react";
export default function Soluciones() {
  return (
    <section className="w-full  ">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nuestras Soluciones
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Ofrecemos una gama completa de servicios y productos diseñados
              para impulsar el éxito de su negocio.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Consultoría Estratégica",
              description:
                "Asesoramiento experto para optimizar sus operaciones y estrategias de negocio.",
              icon: <Briefcase className="h-10 w-10 text-brand-blue" />,
            },
            {
              title: "Desarrollo de Software",
              description:
                "Soluciones tecnológicas personalizadas para satisfacer sus necesidades específicas.",
              icon: <Code className="h-10 w-10 text-brand-purple" />,
            },
            {
              title: "Análisis de Datos",
              description:
                "Transforme sus datos en insights accionables para tomar decisiones informadas.",
              icon: <BarChart2 className="h-10 w-10 text-brand-teal" />,
            },
            {
              title: "Ciberseguridad",
              description:
                "Proteja su negocio con nuestras soluciones de seguridad de vanguardia.",
              icon: <Shield className="h-10 w-10 text-brand-orange" />,
            },
            {
              title: "Cloud Computing",
              description:
                "Servicios en la nube escalables y flexibles para impulsar su transformación digital.",
              icon: <Cloud className="h-10 w-10 text-brand-blue" />,
            },
            {
              title: "Inteligencia Artificial",
              description:
                "Implementación de IA para automatizar procesos y mejorar la toma de decisiones.",
              icon: <Cpu className="h-10 w-10 text-brand-purple" />,
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-brand-blue/10 p-3">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
