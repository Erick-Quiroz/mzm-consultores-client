import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg mb-8">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-white">
              Contáctanos
            </h1>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Completa el formulario a continuación
              o utiliza nuestros datos de contacto.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <form className="space-y-6 bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md border border-purple-100 dark:border-slate-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre
                  </label>
                  <Input id="name" placeholder="Tu nombre" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Asunto
                </label>
                <Input
                  id="subject"
                  placeholder="¿En qué podemos ayudarte?"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Escribe tu mensaje aquí..."
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
              >
                <Send className="mr-2 h-4 w-4" /> Enviar mensaje
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-md border border-blue-100 dark:border-slate-700">
              <h2 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-400">
                Información de contacto
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-purple-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Dirección</h3>
                    <p className="text-muted-foreground">
                      Calle Jose Quintin Mendoza N°1286
                    </p>

                    <p>N°1286 Edificio Buganvillas 7D</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-blue-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Teléfono</h3>
                    <p className="text-muted-foreground">4661008</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-purple-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      mzmconsultores.srl@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-blue-500 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Horario</h3>
                    <p className="text-muted-foreground">
                      Lunes - Viernes: 8:00 AM - 18:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border border-blue-100 dark:border-slate-700 shadow-md">
              <CardContent className="p-0">
                <div className="aspect-video w-full bg-muted relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-12 w-12 text-muted-foreground/50" />
                    <span className="sr-only">Mapa de ubicación</span>
                  </div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Mapa de ubicación"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-4 pt-4">
              <Button
                variant="outline"
                size="icon"
                aria-label="Facebook"
                className="text-blue-600 border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-900/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="Twitter"
                className="text-sky-500 border-sky-200 hover:bg-sky-50 dark:border-sky-800 dark:hover:bg-sky-900/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="Instagram"
                className="text-pink-500 border-pink-200 hover:bg-pink-50 dark:border-pink-800 dark:hover:bg-pink-900/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="LinkedIn"
                className="text-blue-700 border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-900/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
