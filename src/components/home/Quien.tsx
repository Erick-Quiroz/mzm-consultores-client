import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Quien() {
  return (
    <div>
      <section className="py-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/fondo.webp"
                alt="Barco de carga"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="text-xs uppercase tracking-wider text-white bg-blue-900 inline-block px-2 py-1 mb-4">
                CONOZCA NUESTRA EMPRESA
              </div>
              <h2 className="text-3xl font-bold mb-4">¿Quiénes somos?</h2>
              <p className="text-gray-600 mb-4">
                Somos una empresa líder en el sector de la logística
                internacional, especializada en ofrecer soluciones integrales
                para el transporte y distribución de mercancías a nivel global.
              </p>
              <p className="text-gray-600 mb-6">
                Nuestro equipo de profesionales cuenta con amplia experiencia en
                el sector, garantizando un servicio de calidad y eficiencia en
                cada operación.
              </p>
              <Link
                href="/nosotros"
                className="bg-blue-900 text-white px-4 py-2 text-sm font-medium rounded hover:bg-blue-800"
              >
                Conocer más
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
