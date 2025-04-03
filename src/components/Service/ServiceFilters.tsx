import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  categorias: string[];
  categoriaSeleccionada: string;
  setCategoriaSeleccionada: (value: string) => void;
  busqueda: string;
  setBusqueda: (value: string) => void;
  limpiarFiltros: () => void;
};

export default function ServiceFilters({
  categorias,
  categoriaSeleccionada,
  setCategoriaSeleccionada,
  busqueda,
  setBusqueda,
  limpiarFiltros,
}: Props) {
  return (
    <div className="mb-10 bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative col-span-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Buscar servicios..."
            className="pl-10 w-full"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <div className="col-span-1 flex gap-4">
          <Select
            value={categoriaSeleccionada}
            onValueChange={setCategoriaSeleccionada}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              {categorias.map((categoria) => (
                <SelectItem key={categoria} value={categoria}>
                  {categoria === "todas" ? "Todos" : categoria}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            onClick={limpiarFiltros}
            disabled={categoriaSeleccionada === "todas" && busqueda === ""}
            className="flex-1"
          >
            Limpiar filtros
          </Button>
        </div>
      </div>
    </div>
  );
}
