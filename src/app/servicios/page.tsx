import ServicesPage from "@/components/Service/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | MZM",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const Servicios = () => {
  return (
    <>
      {/* <MainServicios /> */}
      <ServicesPage />
    </>
  );
};

export default Servicios;
