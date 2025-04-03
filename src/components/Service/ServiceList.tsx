import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

type Props = {
  servicios: any[];
};

export default function ServiceList({ servicios }: Props) {
  const formatearFecha = (fecha: Date) => {
    return fecha.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {servicios.map((servicio) => (
        <Card
          key={servicio.id}
          className="overflow-hidden transition-all duration-300 hover:shadow-xl group bg-white dark:bg-gray-800 border-0 shadow-lg"
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={servicio.images[0]?.url}
              alt={servicio.images[0]?.textoAlt || servicio.titulo}
              width={750}
              height={550}
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <CardHeader className="pb-2">
            <h3 className="text-xl font-bold line-clamp-2">
              {servicio.titulo}
            </h3>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground line-clamp-3">
              {servicio.contenido}
            </p>
            <div className="flex items-center mt-4 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              Publicado: {formatearFecha(new Date(servicio.createdAt))}
            </div>
          </CardContent>

          <CardFooter className="pt-2">
            <Button asChild className="w-full text-white bg-gray-500">
              <Link href={`/servicios/${servicio.id}`}>
                Ver detalles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
