"use client";
import Image from "next/image";
import React from "react";

export default function Equipo() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nuestro Equipo Directivo
          </h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Conoce a los líderes visionarios que impulsan nuestra misión y valores cada día.
          </p>
        </div>
        <div className="grid max-w-5xl gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            {
              name: "María Rodríguez",
              position: "CEO & Fundadora",
              image: "/placeholder.svg",
              description:
                "Con más de 20 años de experiencia en el sector, María lidera nuestra visión estratégica.",
            },
            {
              name: "Carlos Sánchez",
              position: "Director de Operaciones",
              image: "/placeholder.svg",
              description:
                "Carlos asegura la excelencia operativa en todos nuestros proyectos y servicios.",
            },
            {
              name: "Ana Martínez",
              position: "Directora de Innovación",
              image: "/placeholder.svg",
              description:
                "Ana impulsa nuestras iniciativas de I+D, manteniendo a la empresa a la vanguardia tecnológica.",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="overflow-hidden rounded-full mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="aspect-square object-cover"
                />
              </div>
              <h3 className="font-bold text-white">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.position}</p>
              <p className="text-sm text-muted-foreground mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
