import React from "react";
import { BarChart2, Briefcase, Cloud, Code, Cpu, Shield } from "lucide-react";
export default function Soluciones() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nuestras Soluciones
          </h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Ofrecemos una gama completa de servicios y productos diseñados para
            impulsar el éxito de su negocio.
          </p>
        </div>
        <div className="grid max-w-5xl gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3">
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
            <div
              key={index}
              className="p-6 text-center bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-3 mx-auto mb-4 rounded-full bg-brand-blue/10">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
