"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";

interface FiltersProps {
  onFilterChange: (filters: FilterState) => void;
  tiposDeServicio: { id: string; nombre: string }[]; // Recibe los tipos de servicio
}

export interface FilterState {
  search: string;
  tipoServicio: string;
}

export function Filters({ onFilterChange, tiposDeServicio }: FiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    tipoServicio: "",
  });

  const handleChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      search: "",
      tipoServicio: "",
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 m-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative col-span-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar publicaciones..."
            className="pl-8 w-full"
            value={filters.search}
            onChange={(e) => handleChange("search", e.target.value)}
          />
        </div>

        <div className="col-span-1 flex gap-4">
          <Select
            value={filters.tipoServicio}
            onValueChange={(value) => handleChange("tipoServicio", value)}
          >
            <SelectTrigger className="w-full flex-1">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              {tiposDeServicio.map((tipo) => (
                <SelectItem key={tipo.id} value={tipo.id}>
                  {tipo.nombre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button variant="outline" onClick={handleReset} className="flex-1">
            Limpiar filtros
          </Button>
        </div>
      </div>
    </div>
  );
}
