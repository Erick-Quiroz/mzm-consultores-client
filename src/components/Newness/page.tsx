"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, Tag, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { Filters, FilterState } from "./filters";
import { Img, Publicacion, TipoPublicacion } from "@prisma/client";
import { Get_Post } from "@/actions/actions";
import Link from "next/link";

type PropsType = Publicacion & {
  images: Img[];
  tipoPublicacion: TipoPublicacion;
};

export default function PublicationTimeline() {
  const [publicaciones, setPublicaciones] = useState<PropsType[]>([]);
  const [filteredPublications, setFilteredPublications] = useState<PropsType[]>(
    []
  );
  const [tiposDeServicio, setTiposDeServicio] = useState<
    { id: string; nombre: string }[]
  >([]);

  const fetchPubliaciones = async () => {
    try {
      const response = await Get_Post();
      if (!response) throw new Error("Error al obtener los servicios");

      const formattedPublications = response.map((publicacion) => ({
        ...publicacion,
        images: publicacion.imagenes.map((imagen) => ({
          ...imagen,
          url: imagen.url || "/placeholder.svg",
          textoAlt: imagen.textoAlt || publicacion.titulo,
        })),
      }));

      setPublicaciones(formattedPublications);
      setFilteredPublications(formattedPublications);

      // Extraer tipos de servicio únicos
      const tipos = Array.from(
        new Set(
          formattedPublications.map((pub) => ({
            id: pub.tipoPublicacionId,
            nombre: pub.tipoPublicacion.nombre,
          }))
        )
      );
      setTiposDeServicio(tipos);
    } catch (error) {
      console.error("Error fetching servicios:", error);
    }
  };
  console.log(publicaciones);
  useEffect(() => {
    fetchPubliaciones();
  }, []);

  const handleFilterChange = (filters: FilterState) => {
    const filtered = publicaciones.filter((pub) => {
      // Search filter
      if (
        filters.search &&
        !pub.titulo.toLowerCase().includes(filters.search.toLowerCase()) &&
        !(
          pub.contenido?.toLowerCase().includes(filters.search.toLowerCase()) ??
          false
        )
      ) {
        return false;
      }

      // Tipo servicio filter
      if (
        filters.tipoServicio &&
        filters.tipoServicio !== "all" && // Manejar "all" como opción para todos
        pub.tipoPublicacionId !== filters.tipoServicio
      ) {
        return false;
      }

      return true;
    });

    setFilteredPublications(filtered);
  };

  // Agrupa las publicaciones por tipo de publicación
  const groupedPublications = filteredPublications.reduce((groups, pub) => {
    const key = pub.tipoPublicacion.nombre;

    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(pub);
    return groups;
  }, {} as Record<string, PropsType[]>);

  return (
    <div>
      <Filters
        onFilterChange={handleFilterChange}
        tiposDeServicio={tiposDeServicio} // Pasar los tipos de servicio
      />

      <div className="px-6">
        {Object.entries(groupedPublications).map(([groupName, pubs]) => (
          <div key={groupName} className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary h-8 w-8 rounded-full flex items-center justify-center text-primary-foreground">
                <Tag className="h-4 w-4" />
              </div>
              <h3 className="text-lg font-semibold">{groupName}</h3>
              <Separator className="flex-1" />
            </div>

            <div className="pl-4 border-l-2 border-muted space-y-6">
              {pubs.map((publication) => (
                <Card key={publication.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-4 p-4">
                    <div className="relative h-48 md:h-40 md:w-64 rounded-md overflow-hidden">
                      <Image
                        src={
                          publication.images[0]?.url ||
                          "/placeholder.svg?height=400&width=600"
                        }
                        alt={
                          publication.images[0]?.textoAlt || publication.titulo
                        }
                        fill
                        className="object-cover"
                      />
                      {publication.destacadoHasta &&
                        new Date(publication.destacadoHasta) > new Date() && (
                          <Badge className="absolute top-2 right-2 bg-yellow-500">
                            Destacado
                          </Badge>
                        )}
                    </div>

                    <CardContent className="p-0 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="capitalize">
                          {publication.estadoProyecto
                            ?.replace("_", " ")
                            .toLowerCase()}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>
                            {new Date(
                              publication.createdAt
                            ).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-2">
                        {publication.titulo}
                      </h3>

                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{publication.ubicacion}</span>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {publication.contenido}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          <Calendar className="h-3 w-3" />
                          {new Date(publication.createdAt).toLocaleDateString()}
                        </Badge>
                      </div>

                      <Button variant="outline" size="sm">
                        <Link href={`/novedades/${publication.id}`}>
                          Ver publicación
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredPublications.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">
            No se encontraron publicaciones
          </h3>
          <p className="text-muted-foreground">Intenta con otros filtros</p>
        </div>
      )}
    </div>
  );
}
