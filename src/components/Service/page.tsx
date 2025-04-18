"use client";

import { useEffect, useState } from "react";
import { Get_Service } from "@/actions/actions";
import { Servicio, Img, TipoServicio } from "@prisma/client";
import ServiceFilters from "./ServiceFilters";
import ServiceList from "./ServiceList";
import NoServicesFound from "./NoServicesFound";

type propsTipo = Servicio & {
  images: Img[];
  tipoServicio: TipoServicio;
};

export default function ServiciosCategoriaPage() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todas");
  const [busqueda, setBusqueda] = useState("");
  const [servicios, setServicios] = useState<propsTipo[]>([]);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await Get_Service();
        if (!response) throw new Error("Error al obtener los servicios");

        const formattedServicios = response.map((servicio) => ({
          ...servicio,
          images: servicio.imagenes.map((imagen) => ({
            ...imagen,
            url: imagen.url || "/placeholder.svg",
            textoAlt: imagen.textoAlt || servicio.titulo,
          })),
        }));

        setServicios(formattedServicios);
      } catch (error) {
        console.error("Error fetching servicios:", error);
      }
    };

    fetchServicios();
  }, []);

  const limpiarFiltros = () => {
    setCategoriaSeleccionada("todas");
    setBusqueda("");
  };

  const serviciosFiltrados = servicios.filter((servicio) => {
    const coincideCategoria =
      categoriaSeleccionada === "todas" ||
      servicio.tipoServicioId === categoriaSeleccionada;

    const coincideBusqueda =
      !busqueda ||
      servicio.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      servicio.contenido?.toLowerCase().includes(busqueda.toLowerCase());

    return coincideCategoria && coincideBusqueda;
  });

  return (
    <div className="mt-10 min-h-screen bg-gradient-to-b">
      <div className="p-10 md:px-10 lg:px-26">
        <ServiceFilters
          categorias={[
            "todas",
            ...new Set(servicios.map((s) => s.tipoServicio?.id || "")),
          ]}
          categoriaSeleccionada={categoriaSeleccionada}
          setCategoriaSeleccionada={setCategoriaSeleccionada}
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          limpiarFiltros={limpiarFiltros}
        />

        <div className="mb-6 flex justify-between items-center">
          <p className="text-muted-foreground">
            Mostrando {serviciosFiltrados.length}{" "}
            {serviciosFiltrados.length === 1 ? "servicio" : "servicios"}
            {categoriaSeleccionada !== "todas"
              ? ` en ${categoriaSeleccionada}`
              : ""}
            {busqueda ? ` para "${busqueda}"` : ""}
          </p>
        </div>

        {serviciosFiltrados.length > 0 ? (
          <ServiceList servicios={serviciosFiltrados} />
        ) : (
          <NoServicesFound limpiarFiltros={limpiarFiltros} />
        )}
      </div>
    </div>
  );
}
