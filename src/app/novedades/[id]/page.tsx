import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detalles de Novedades | MZM",
  description:
    "Explora los detalles de nuestras últimas novedades en MZM Consultores.",
};

import BlogDetailsPageClient from "./BlogDetailsPageClient";

export default function PageWrapper(props: any) {
  return <BlogDetailsPageClient {...props} />;
}
