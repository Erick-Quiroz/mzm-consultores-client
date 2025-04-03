import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/home/Hero";
import Brands from "@/components/home/Brands";
import Features from "@/components/home/Nosotros";
import Servicios from "@/components/home/Servicios/AboutSectionOne";

import type { Metadata } from "next";
import Quien from "@/components/home/Quien";

export const metadata: Metadata = {
  title: "Mzm Consultores SRL",
  description: "Empresa Electrica",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Brands />
      <Quien />
      <Features />
      <Servicios />
      {/* <Blog /> */}
    </>
  );
}
