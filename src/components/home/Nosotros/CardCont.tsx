"use client";

import { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CountUp from "react-countup";
import { Star } from "lucide-react";

interface Item {
  icon: React.ReactNode;
  title: string;
  cont: number;
  start: number;
}

export default function Card_Nosotros({ data }: { data: Item[] }) {
  // Animation for cards
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll(".card-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div
      ref={cardsRef}
      className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center"
    >
      {data.map((item, index) => (
        <Card
          key={index}
          className="card-animate opacity-0 translate-y-2 ease-out delay-[calc(100ms*var(--index))] hover:shadow-md hover:shadow-blue-500/10 dark:hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 "
          style={{ "--index": index } as React.CSSProperties}
        >
          <CardHeader className="flex flex-col items-center justify-center ">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-full flex items-center justify-center mb-2 shadow-inner">
              {item.icon}
            </div>
            <CardTitle className="text-sm text-blue-700 dark:text-orange-400">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center ">
            <CardDescription className="text-2xl font-bold bg-clip-text dark:text-blue-500 text-orange-400">
              <CountUp
                start={0}
                end={item.cont}
                duration={3}
                enableScrollSpy
                scrollSpyDelay={100}
              />
            </CardDescription>
          </CardContent>
          <CardFooter className="mt-auto flex flex-col items-center justify-center ">
            <div className="flex items-center ">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={
                    i < item.start
                      ? "fill-yellow-500 text-yellow-500"
                      : "text-gray-400"
                  }
                />
              ))}
              <p className="ml-1 text-xs text-gray-600 dark:text-gray-300">
                {item.start}/5
              </p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
