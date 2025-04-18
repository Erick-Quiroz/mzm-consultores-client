import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
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
          </div>
        </div>
      </div>
    </div>
  );
}
