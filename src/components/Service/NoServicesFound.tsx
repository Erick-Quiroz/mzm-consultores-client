import { Button } from "@/components/ui/button";

type Props = {
  limpiarFiltros: () => void;
};

export default function NoServicesFound({ limpiarFiltros }: Props) {
  return (
    <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
      <h3 className="text-xl font-semibold mb-2">
        No se encontraron servicios
      </h3>
      <p className="text-muted-foreground mb-4">
        No hay servicios disponibles con los filtros seleccionados. Por favor,
        intente con otros criterios de búsqueda.
      </p>
      <Button onClick={limpiarFiltros}>Limpiar todos los filtros</Button>
    </div>
  );
}
