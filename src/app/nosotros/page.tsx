'use client";';
import Equipo from "@/components/nosotros/equipo";
import Esencia from "@/components/nosotros/esencia";

import Historia from "@/components/nosotros/historia";

import Soluciones from "@/components/nosotros/soluciones";
import React from "react";

export default function page() {
  return (
    <div className="mt-10">
      <Esencia />
      <Soluciones />
      <Equipo />
      <Historia />
    </div>
  );
}
