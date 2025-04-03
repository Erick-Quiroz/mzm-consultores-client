// src/hooks/useTiposServicio.ts

import { useState, useEffect } from "react";
import { Get_Type_Post } from "@/actions/actions";
import { TipoPublicacion } from "@prisma/client";

const useTiposServicio = () => {
  const [tiposServicio, setTiposServicio] = useState<TipoPublicacion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTiposServicio = async () => {
      try {
        const tiposServicioData = await Get_Type_Post();
        setTiposServicio(tiposServicioData);
      } catch (err) {
        console.error(err);
        setError("❌ Error al obtener los tipos de servicio");
      } finally {
        setLoading(false);
      }
    };

    fetchTiposServicio();
  }, []);

  return { tiposServicio, loading, error };
};

export default useTiposServicio;
