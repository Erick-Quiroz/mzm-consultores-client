import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detalles de Servicios | MZM",
  description:
    "Descubre más sobre nuestros servicios especializados en MZM Consultores.",
};

import BlogDetailsPageClient from "./BlogDetailsPageClient";

export default function PageWrapper(props: any) {
  return <BlogDetailsPageClient {...props} />;
}
