import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Laptop, Smartphone, Globe, PenTool } from "lucide-react";

const services = [
  {
    icon: <Laptop className="h-12 w-12 text-blue-400" />,
    title: "Diseño Web",
    description:
      "Creamos sitios web atractivos y funcionales que representan tu marca.",
    gradient: "from-blue-400 to-purple-500",
    hoverGradient: "from-blue-500 to-purple-600",
    author: {
      name: "Ana García",
      role: "Diseñadora Web",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "15 May 2023",
    },
  },
  {
    icon: <Smartphone className="h-12 w-12 text-green-400" />,
    title: "Desarrollo de Apps",
    description:
      "Desarrollamos aplicaciones móviles innovadoras para iOS y Android.",
    gradient: "from-green-400 to-teal-500",
    hoverGradient: "from-green-500 to-teal-600",
    author: {
      name: "Carlos Ruiz",
      role: "Desarrollador de Apps",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "22 Jun 2023",
    },
  },
  {
    icon: <Globe className="h-12 w-12 text-orange-400" />,
    title: "Marketing Digital",
    description:
      "Estrategias de marketing online para aumentar tu presencia digital.",
    gradient: "from-orange-400 to-pink-500",
    hoverGradient: "from-orange-500 to-pink-600",
    author: {
      name: "Laura Martínez",
      role: "Operador",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "3 Jul 2023",
    },
  },
  {
    icon: <PenTool className="h-12 w-12 text-purple-400" />,
    title: "Diseño Gráfico",
    description:
      "Creamos identidades visuales únicas y materiales gráficos impactantes.",
    gradient: "from-purple-400 to-indigo-500",
    hoverGradient: "from-purple-500 to-indigo-600",
    author: {
      name: "Miguel Sánchez",
      role: "Diseñador Gráfico",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "18 Aug 2023",
    },
  },
];

export default function ElegantServiceCards() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className={`group relative overflow-hidden rounded-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br ${service.gradient} hover:${service.hoverGradient}`}
          >
            <div className="absolute inset-0 bg-white opacity-90 group-hover:opacity-80 transition-opacity duration-300"></div>
            <CardHeader className="relative z-10">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <CardTitle className="text-2xl font-bold text-center text-gray-800 group-hover:text-white transition-colors duration-300">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <CardDescription className="text-center text-gray-600 group-hover:text-white transition-colors duration-300">
                {service.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="relative z-10 mt-4 flex flex-col space-y-4">
              <Button className="w-full bg-white text-gray-800 hover:bg-gray-100 transition-colors duration-300">
                Más Información
              </Button>
              <div className="flex items-center justify-between w-full pt-4 border-t border-gray-200 group-hover:border-white/20 transition-colors duration-300">
                <div className="flex items-center space-x-2">
                  <Avatar className="w-10 h-10 border-2 border-white shadow-md">
                    <AvatarImage
                      src={service.author.avatar}
                      alt={service.author.name}
                    />
                    <AvatarFallback>
                      {service.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-gray-800 group-hover:text-white transition-colors duration-300">
                      {service.author.name}
                    </p>
                    <p className="text-xs text-gray-500 group-hover:text-white/80 transition-colors duration-300">
                      {service.author.role}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 group-hover:text-white/80 transition-colors duration-300">
                  {service.author.date}
                </p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
