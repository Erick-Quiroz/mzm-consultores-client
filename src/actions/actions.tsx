"use server";

import { prisma } from "@/lib/prisma";

// Obtener todas las publicaciones
export async function Get_Post() {
  return await prisma.publicacion.findMany({
    include: {
      imagenes: true,
      tipoEmpresa: true,
      tipoPublicacion: true,
    },
  });
}

// Obtener una publicación por ID
export async function Get_Post_ById(id: string) {
  return await prisma.publicacion.findUnique({
    where: { id },
    include: {
      imagenes: true,
      tipoEmpresa: true,
      tipoPublicacion: true,
    },
  });
}

// Obtener todos los tipos de publicaciones
export async function Get_Type_Post() {
  return await prisma.tipoPublicacion.findMany();
}
export async function Get_Service() {
  return await prisma.servicio.findMany({
    include: {
      imagenes: true,
      tipoServicio: true,
    },
  });
}

// Obtener una publicación por ID
export async function Get_Service_ById(id: string) {
  return await prisma.servicio.findUnique({
    where: { id },
    include: {
      imagenes: true,
      tipoServicio: true,
    },
  });
}

// Obtener todos los tipos de publicaciones
export async function Get_Type_Service() {
  return await prisma.tipoServicio.findMany();
}
