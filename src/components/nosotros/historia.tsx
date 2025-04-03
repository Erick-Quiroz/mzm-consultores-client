import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Building2, History } from "lucide-react";

export default function Historia() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nuestra Historia
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Un viaje de crecimiento, aprendizaje y éxitos compartidos que nos
              ha llevado a ser líderes en la industria.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-8 py-12">
          <Tabs defaultValue="fundacion" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-brand-blue/20">
              <TabsTrigger
                value="fundacion"
                className="data-[state=active]:bg-blue-800 data-[state=active]:text-white"
              >
                Fundación
              </TabsTrigger>
              <TabsTrigger
                value="crecimiento"
                className="data-[state=active]:bg-blue-800 data-[state=active]:text-white"
              >
                Crecimiento
              </TabsTrigger>
              <TabsTrigger
                value="presente"
                className="data-[state=active]:bg-blue-800 data-[state=active]:text-white"
              >
                Presente
              </TabsTrigger>
            </TabsList>
            <TabsContent value="fundacion" className="space-y-4 pt-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-brand-blue/20 p-3 mt-1">
                  <History className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">2005 - Los inicios</h3>
                  <p className="text-muted-foreground">
                    Nuestra empresa nació de una visión compartida: crear
                    soluciones tecnológicas que realmente marcaran la
                    diferencia. Con un pequeño equipo de cinco personas
                    apasionadas y mucha determinación, comenzamos nuestras
                    operaciones en un modesto espacio de oficina, enfocándonos
                    en proyectos de desarrollo de software a medida.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="crecimiento" className="space-y-4 pt-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-brand-purple/20 p-3 mt-1">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">2010-2018 - Expansión</h3>
                  <p className="text-muted-foreground">
                    Durante esta etapa, experimentamos un crecimiento
                    significativo. Abrimos nuevas oficinas en tres países,
                    ampliamos nuestro portafolio de servicios para incluir
                    consultoría estratégica y soluciones de inteligencia
                    artificial, y formamos alianzas estratégicas con líderes
                    tecnológicos globales. Nuestro equipo creció a más de 100
                    profesionales talentosos, y comenzamos a servir a clientes
                    Fortune 500.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="presente" className="space-y-4 pt-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-brand-teal/20 p-3 mt-1">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    2019-Presente - Liderazgo e Innovación
                  </h3>
                  <p className="text-muted-foreground">
                    Hoy somos reconocidos como líderes en nuestro sector, con
                    una presencia global y un equipo de más de 500 profesionales
                    talentosos. Continuamos innovando en áreas como la
                    inteligencia artificial, el blockchain y la computación
                    cuántica, estableciendo nuevos estándares de excelencia en
                    la industria. Nuestro compromiso con la calidad, la
                    innovación y la satisfacción del cliente sigue siendo el
                    motor de nuestro éxito, mientras trabajamos para dar forma
                    al futuro digital.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
