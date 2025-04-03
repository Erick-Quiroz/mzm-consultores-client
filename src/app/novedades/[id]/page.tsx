"use client";

import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { CalendarDays, Clock, MapPin, Tag, Heart } from "lucide-react";
import {
  RiWhatsappFill,
  RiFacebookFill,
  RiTelegramFill,
  RiTwitterFill,
  RiLinksFill,
} from "react-icons/ri";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "react-share";
import { Get_Post_ById } from "@/actions/actions";
import { Img, Publicacion, TipoPublicacion } from "@prisma/client";
import clsx from "clsx";

type PropsType = Publicacion & {
  images: Img[];
  tipoPublicacion: TipoPublicacion;
};

export default function BlogDetailsPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const params = use(paramsPromise); // Desestructura params usando React.use()
  const [post, setPost] = useState<PropsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [likes, setLikes] = useState<{ [key: string]: boolean }>({});

  console.log("params.id", params.id);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await Get_Post_ById(params.id);
        if (!response) throw new Error("Error al obtener el servicio");

        setPost({
          ...response,
          images: response.imagenes.map((imagen) => ({
            ...imagen,
            url: imagen.url || "/placeholder.svg",
            textoAlt: imagen.textoAlt || response.titulo,
          })),
        });
      } catch (error) {
        console.error("Error fetching servicio:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.id]);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = post?.titulo || "";

  const toggleLike = (imageId: string) => {
    setLikes((prev) => ({
      ...prev,
      [imageId]: !prev[imageId],
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Cargando publicación...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>No se encontró la publicación</p>
      </div>
    );
  }

  return (
    <section className="p-2 md:p-5 lg:p-10   ">
      <div className="px-4">
        <Card className="border-none shadow-none  p-2 ">
          <CardContent className="p-0">
            {/* Encabezado */}
            <div className="mb-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="text-sm">
                  {post.tipoPublicacion.nombre}
                </Badge>
                {post.destacadoHasta &&
                  new Date(post.destacadoHasta) > new Date() && (
                    <Badge className="bg-yellow-500 text-white">
                      Destacado
                    </Badge>
                  )}
                <Badge variant="outline" className="capitalize">
                  {post.estadoProyecto
                    ? post.estadoProyecto.replace("_", " ").toLowerCase()
                    : ""}
                </Badge>
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {post.titulo}
              </h1>

              {/* Metadatos del post */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>{formatDate(post.createdAt)}</span>
                </div>

                <Separator orientation="vertical" className="h-4" />

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>
                    {post.duracionValor} {post.duracionUnidad.toLowerCase()}
                  </span>
                </div>

                <Separator orientation="vertical" className="h-4" />

                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{post.ubicacion}</span>
                </div>
              </div>
            </div>

            {/* Imagen principal - ahora clickeable */}
            {post.images.length > 0 && (
              <div
                className="mb-8 overflow-hidden rounded-lg cursor-pointer"
                onClick={() => {
                  setPhotoIndex(0);
                  setIsOpen(true);
                }}
              >
                <Image
                  src={post.images[0].url}
                  alt={post.images[0].textoAlt || "Imagen sin descripción"}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover aspect-video hover:opacity-90 transition-opacity"
                  priority
                />
              </div>
            )}

            {/* Contenido del artículo */}
            <article className="prose prose-sm dark:prose-invert sm:prose-base max-w-none mb-8">
              <p>{post.contenido}</p>
            </article>

            {/* Galería de imágenes estilo Instagram */}
            {post.images.length > 1 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Galería de imágenes
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {post.images.map((image, index) => (
                    <div
                      key={image.id}
                      className={clsx(
                        "relative group overflow-hidden rounded-lg cursor-pointer",
                        index % 5 === 0 && index !== 0
                          ? "row-span-2"
                          : "aspect-square"
                      )}
                      onClick={() => {
                        setPhotoIndex(index);
                        setIsOpen(true);
                      }}
                    >
                      <Image
                        src={image.url}
                        alt={image.textoAlt || "Imagen sin descripción"}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                      />

                      {/* Overlay estilo Instagram */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                        <button
                          className="text-white font-bold flex items-center"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(image.id);
                          }}
                        >
                          <Heart
                            className="mr-1"
                            fill={likes[image.id] ? "currentColor" : "none"}
                          />
                          {likes[image.id] ? "1" : "0"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Lightbox moderno */}
            {isOpen && (
              <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                slides={post.images.map((img) => ({
                  src: img.url,
                  alt: img.textoAlt || post.titulo,
                }))}
                index={photoIndex}
                carousel={{
                  finite: post.images.length <= 1,
                }}
              />
            )}

            {/* Pie de artículo */}
            <div className="mt-12">
              <Separator className="my-6" />

              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                {/* Etiquetas */}
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="outline">{post.tipoPublicacion.nombre}</Badge>
                  <Badge variant="outline">{post.estadoProyecto}</Badge>
                </div>

                {/* Compartir */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    Compartir:
                  </span>
                  <div className="flex gap-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <FacebookShareButton
                            url={shareUrl}
                            hashtag={`#${shareTitle}`}
                          >
                            <Button variant="ghost" size="icon">
                              <RiFacebookFill className="h-5 w-5 text-blue-600" />
                            </Button>
                          </FacebookShareButton>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Compartir en Facebook</p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <TwitterShareButton url={shareUrl} title={shareTitle}>
                            <Button variant="ghost" size="icon">
                              <RiTwitterFill className="h-5 w-5 text-blue-400" />
                            </Button>
                          </TwitterShareButton>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Compartir en Twitter</p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <WhatsappShareButton
                            url={shareUrl}
                            title={shareTitle}
                          >
                            <Button variant="ghost" size="icon">
                              <RiWhatsappFill className="h-5 w-5 text-green-500" />
                            </Button>
                          </WhatsappShareButton>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Compartir en WhatsApp</p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <TelegramShareButton
                            url={shareUrl}
                            title={shareTitle}
                          >
                            <Button variant="ghost" size="icon">
                              <RiTelegramFill className="h-5 w-5 text-blue-500" />
                            </Button>
                          </TelegramShareButton>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Compartir en Telegram</p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              navigator.clipboard.writeText(shareUrl)
                            }
                          >
                            <RiLinksFill className="h-5 w-5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Copiar enlace</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
