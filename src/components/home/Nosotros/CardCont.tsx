"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CountUp from "react-countup";

interface Item {
  icon: React.ReactNode;
  title: string;
  cont: number;
  start: number;
}

export default function Card_Nosotros({ data }: { data: Item[] }) {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    if (!cardsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounting(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = cardsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={cardsRef}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4"
    >
      {data.map((item, index) => (
        <Card
          key={item.title}
          className={`text-center card-animate overflow-hidden relative 
      ${getCardGradient(index)}
      border-none rounded-lg shadow-md 
      hover:shadow-lg hover:scale-105 transition-all duration-300`}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-12 h-12 rounded-full bg-white/10 -mr-6 -mt-6"></div>
          <div className="absolute bottom-0 left-0 w-10 h-10 rounded-full bg-white/10 -ml-5 -mb-5"></div>

          <CardHeader className="flex flex-col items-center p-2 sm:p-3 relative z-10">
            <div
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 
                bg-white/20 backdrop-blur-sm rounded-full 
                shadow-inner border border-white/30 mb-2"
            >
              <div className="text-white text-lg sm:text-xl">{item.icon}</div>
            </div>
            <CardTitle className="mt-1 sm:mt-2 text-xs sm:text-sm font-bold text-white drop-shadow-md">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 sm:p-3 pb-3 text-center relative z-10">
            {startCounting && (
              <div className="bg-white/20 backdrop-blur-sm rounded-full py-1 px-3 inline-block">
                <CountUp
                  start={item.start}
                  end={item.cont}
                  duration={2.5}
                  className="text-lg sm:text-2xl font-extrabold text-white"
                  suffix="+"
                />
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Function to get different gradient backgrounds for each card
function getCardGradient(index: number): string {
  const gradients = [
    "bg-gradient-to-br from-purple-600 to-blue-500",
    "bg-gradient-to-br from-emerald-500 to-teal-400",
    "bg-gradient-to-br from-pink-500 to-rose-400",
    "bg-gradient-to-br from-amber-500 to-orange-400",
    "bg-gradient-to-br from-cyan-500 to-blue-400",
    "bg-gradient-to-br from-fuchsia-500 to-purple-400",
    "bg-gradient-to-br from-lime-500 to-green-400",
    "bg-gradient-to-br from-red-500 to-rose-400",
  ];

  return gradients[index % gradients.length];
}
