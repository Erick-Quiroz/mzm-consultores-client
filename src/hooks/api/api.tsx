"use client";

import { useState, useEffect, useCallback } from "react";
import { Get_Type_Post } from "@/actions/actions";
import { TipoPublicacion } from "@prisma/client";
const useTiposPublicacion = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [tiposPublicacion, setTiposPublicacion] = useState<TipoPublicacion[]>([]);

  const fetchTiposPublicacion = useCallback(async () => {
    setLoading(true);
    try {
      const result = await Get_Type_Post();
      setTiposPublicacion(result);
      console.log("📌 Tipos de publicación:", result);
    } catch (err) {
      console.error("❌ Error al obtener tipos de publicación:", err);
      setError("Error al obtener tipos de publicación");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTiposPublicacion();
  }, [fetchTiposPublicacion]);

  return {
    loading,
    error,
    tiposPublicacion,
  };
};

export default useTiposPublicacion;
