export type Publication = {
  id: string;
  titulo: string;
  contenido: string;
  createdAt: Date;
  updatedAt: Date;
  destacadoHasta: Date;
  duracionUnidad: string;
  duracionValor: number;
  estado: string;
  estadoProyecto: string;
  imagenes: Image[];
  tipoEmpresa: {
    id: string;
    nombre: string;
    estado: string;
    createdAt: Date;
    updatedAt: Date;
  };
  tipoEmpresaId: string;
  tipoPublicacion: {
    id: string;
    nombre: string;
    estado: string;
    createdAt: Date;
    updatedAt: Date;
  };
  tipoPublicacionId: string;
  tipoServicioId: string | null;
  ubicacion: string;
  usuarioId: string | null;
};

export type Image = {
  id: string;
  url: string;
  textoAlt: string;
  publicacionId: string;
  servicioId: string | null;
};

// Sample data for publications
export const publications: Publication[] = [
  {
    id: "c7005943-cac3-4f63-be58-570ea8c86470",
    titulo: "Nuevo proyecto comercial en Santa Cruz",
    contenido:
      "Ofrecemos espacios comerciales en el nuevo centro comercial de Santa Cruz. Ideal para tiendas minoristas y restaurantes.",
    createdAt: new Date("2025-03-28T17:27:53-04:00"),
    updatedAt: new Date("2025-03-29T09:39:34-04:00"),
    destacadoHasta: new Date("2025-03-31T00:00:00-04:00"),
    duracionUnidad: "SEMANAS",
    duracionValor: 2,
    estado: "ACTIVO",
    estadoProyecto: "NUEVO",
    imagenes: [
      {
        id: "e099dbe6-6a11-4b01-9afa-09d6373d621a",
        url: "/placeholder.svg?height=400&width=600",
        textoAlt: "Centro comercial vista frontal",
        publicacionId: "c7005943-cac3-4f63-be58-570ea8c86470",
        servicioId: null,
      },
      {
        id: "41116aad-f6e4-49c1-bb33-9f66818bcf97",
        url: "/placeholder.svg?height=400&width=600",
        textoAlt: "Interior del centro comercial",
        publicacionId: "c7005943-cac3-4f63-be58-570ea8c86470",
        servicioId: null,
      },
      {
        id: "30f0185c-e4d3-4809-ab19-a32378ea9e13",
        url: "/placeholder.svg?height=400&width=600",
        textoAlt: "Plano del centro comercial",
        publicacionId: "c7005943-cac3-4f63-be58-570ea8c86470",
        servicioId: null,
      },
    ],
    tipoEmpresa: {
      id: "asd",
      nombre: "Comercial",
      estado: "ACTIVO",
      createdAt: new Date("2025-03-22T19:08:39-04:00"),
      updatedAt: new Date("2025-03-28T21:50:22-04:00"),
    },
    tipoEmpresaId: "asd",
    tipoPublicacion: {
      id: "xyz",
      nombre: "Anuncio",
      estado: "ACTIVO",
      createdAt: new Date("2025-03-22T18:43:00-04:00"),
      updatedAt: new Date("2025-03-28T22:54:59-04:00"),
    },
    tipoPublicacionId: "xyz",
    tipoServicioId: null,
    ubicacion: "Santa Cruz, Bolivia",
    usuarioId: null,
  },
  {
    id: "d8115944-dbd4-5g74-cf59-681fb9d97581",
    titulo: "Departamentos en venta - Zona Norte",
    contenido:
      "Nuevos departamentos de 2 y 3 dormitorios con excelente ubicación. Áreas comunes, piscina y seguridad 24/7.",
    createdAt: new Date("2025-03-25T14:22:53-04:00"),
    updatedAt: new Date("2025-03-28T11:30:34-04:00"),
    destacadoHasta: new Date("2025-04-15T00:00:00-04:00"),
    duracionUnidad: "MESES",
    duracionValor: 1,
    estado: "ACTIVO",
    estadoProyecto: "EN_CONSTRUCCION",
    imagenes: [
      {
        id: "f199ebe7-7b22-5c02-0bfb-10e7484e732b",
        url: "/placeholder.svg?height=500&width=700",
        textoAlt: "Fachada del edificio",
        publicacionId: "d8115944-dbd4-5g74-cf59-681fb9d97581",
        servicioId: null,
      },
      {
        id: "52227bbe-g7f5-50d2-cc44-0g77929cg08",
        url: "/placeholder.svg?height=500&width=700",
        textoAlt: "Interior del departamento",
        publicacionId: "d8115944-dbd4-5g74-cf59-681fb9d97581",
        servicioId: null,
      },
    ],
    tipoEmpresa: {
      id: "qwe",
      nombre: "Inmobiliaria",
      estado: "ACTIVO",
      createdAt: new Date("2025-03-20T15:08:39-04:00"),
      updatedAt: new Date("2025-03-27T16:50:22-04:00"),
    },
    tipoEmpresaId: "qwe",
    tipoPublicacion: {
      id: "abc",
      nombre: "Venta",
      estado: "ACTIVO",
      createdAt: new Date("2025-03-21T10:43:00-04:00"),
      updatedAt: new Date("2025-03-26T14:54:59-04:00"),
    },
    tipoPublicacionId: "abc",
    tipoServicioId: null,
    ubicacion: "La Paz, Bolivia",
    usuarioId: null,
  },
  {
    id: "e9226055-ece5-6h85-dg60-792gc0e08692",
    titulo: "Servicio de consultoría empresarial",
    contenido:
      "Ofrecemos servicios de consultoría para pequeñas y medianas empresas. Optimización de procesos y estrategias de crecimiento.",
    createdAt: new Date("2025-03-27T09:15:53-04:00"),
    updatedAt: new Date("2025-03-29T16:45:34-04:00"),
    destacadoHasta: new Date("2025-04-10T00:00:00-04:00"),
    duracionUnidad: "SEMANAS",
    duracionValor: 3,
    estado: "ACTIVO",
    estadoProyecto: "ACTIVO",
    imagenes: [
      {
        id: "g200fcf8-8c33-6d03-1cgc-21f8595f843c",
        url: "/placeholder.svg?height=450&width=650",
        textoAlt: "Reunión de consultoría",
        publicacionId: "e9226055-ece5-6h85-dg60-792gc0e08692",
        servicioId: null,
      },
    ],
    tipoEmpresa: {
      id: "zxc",
      nombre: "Servicios",
      estado: "ACTIVO",
      createdAt: new Date("2025-03-18T11:08:39-04:00"),
      updatedAt: new Date("2025-03-25T13:50:22-04:00"),
    },
    tipoEmpresaId: "zxc",
    tipoPublicacion: {
      id: "def",
      nombre: "Servicio",
      estado: "ACTIVO",
      createdAt: new Date("2025-03-19T14:43:00-04:00"),
      updatedAt: new Date("2025-03-24T18:54:59-04:00"),
    },
    tipoPublicacionId: "def",
    tipoServicioId: "srv1",
    ubicacion: "Cochabamba, Bolivia",
    usuarioId: null,
  },
  {
    id: "f0337166-fdf6-7i96-eh71-803hd1f19703",
    titulo: "Terreno industrial en venta",
    contenido:
      "Terreno de 5000m² en zona industrial con todos los servicios. Ideal para fábricas o centros de distribución.",
    createdAt: new Date("2025-03-26T11:40:53-04:00"),
    updatedAt: new Date("2025-03-28T15:20:34-04:00"),
    destacadoHasta: new Date("2025-04-20T00:00:00-04:00"),
    duracionUnidad: "MESES",
    duracionValor: 2,
    estado: "ACTIVO",
    estadoProyecto: "DISPONIBLE",
    imagenes: [
      {
        id: "h311gdg9-9d44-7e04-2dhd-32g9606g954d",
        url: "/placeholder.svg?height=550&width=750",
        textoAlt: "Vista aérea del terreno",
        publicacionId: "f0337166-fdf6-7i96-eh71-803hd1f19703",
        servicioId: null,
      },
      {
        id: "63338ccf-h8g6-51e3-dd55-1h88030dh19",
        url: "/placeholder.svg?height=550&width=750",
        textoAlt: "Plano del terreno",
        publicacionId: "f0337166-fdf6-7i96-eh71-803hd1f19703",
        servicioId: null,
      },
    ],
    tipoEmpresa: {
      id: "qwe",
      nombre: "Inmobiliaria",
      estado: "ACTIVO",
      createdAt: new Date("2025-03-20T15:08:39-04:00"),
      updatedAt: new Date("2025-03-27T16:50:22-04:00"),
    },
    tipoEmpresaId: "qwe",
    tipoPublicacion: {
      id: "ghi",
      nombre: "Venta Terreno",
      estado: "ACTIVO",
      createdAt: new Date("2025-03-17T16:43:00-04:00"),
      updatedAt: new Date("2025-03-23T12:54:59-04:00"),
    },
    tipoPublicacionId: "ghi",
    tipoServicioId: null,
    ubicacion: "Santa Cruz, Bolivia",
    usuarioId: null,
  },
  {
    id: "g1448277-geg7-8j07-fi82-914ie2g20814",
    titulo: "Curso de marketing digital",
    contenido:
      "Aprende las últimas estrategias de marketing digital. Curso intensivo de 4 semanas con certificación.",
    createdAt: new Date("2025-03-24T13:35:53-04:00"),
    updatedAt: new Date("2025-03-27T17:10:34-04:00"),
    destacadoHasta: new Date("2025-04-05T00:00:00-04:00"),
    duracionUnidad: "SEMANAS",
    duracionValor: 4,
    estado: "ACTIVO",
    estadoProyecto: "PROXIMO",
    imagenes: [
      {
        id: "i422heh0-0e55-8f05-3eie-43h0717h065e",
        url: "/placeholder.svg?height=480&width=680",
        textoAlt: "Clase de marketing digital",
        publicacionId: "g1448277-geg7-8j07-fi82-914ie2g20814",
        servicioId: null,
      },
    ],
    tipoEmpresa: {
      id: "rty",
      nombre: "Educación",
      estado: "ACTIVO",
      createdAt: new Date("2025-03-15T10:08:39-04:00"),
      updatedAt: new Date("2025-03-22T11:50:22-04:00"),
    },
    tipoEmpresaId: "rty",
    tipoPublicacion: {
      id: "jkl",
      nombre: "Curso",
      estado: "ACTIVO",
      createdAt: new Date("2025-03-16T12:43:00-04:00"),
      updatedAt: new Date("2025-03-21T14:54:59-04:00"),
    },
    tipoPublicacionId: "jkl",
    tipoServicioId: "srv2",
    ubicacion: "Online, Bolivia",
    usuarioId: null,
  },
];

// Filter options
export const empresaOptions = [
  { value: "asd", label: "Comercial" },
  { value: "qwe", label: "Inmobiliaria" },
  { value: "zxc", label: "Servicios" },
  { value: "rty", label: "Educación" },
];

export const tipoPublicacionOptions = [
  { value: "xyz", label: "Anuncio" },
  { value: "abc", label: "Venta" },
  { value: "def", label: "Servicio" },
  { value: "ghi", label: "Venta Terreno" },
  { value: "jkl", label: "Curso" },
];

export const ubicacionOptions = [
  { value: "Santa Cruz, Bolivia", label: "Santa Cruz" },
  { value: "La Paz, Bolivia", label: "La Paz" },
  { value: "Cochabamba, Bolivia", label: "Cochabamba" },
  { value: "Online, Bolivia", label: "Online" },
];

export const estadoProyectoOptions = [
  { value: "NUEVO", label: "Nuevo" },
  { value: "EN_CONSTRUCCION", label: "En Construcción" },
  { value: "ACTIVO", label: "Activo" },
  { value: "DISPONIBLE", label: "Disponible" },
  { value: "PROXIMO", label: "Próximo" },
];
