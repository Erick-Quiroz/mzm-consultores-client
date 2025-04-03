"use client";

import { useEffect, useRef } from "react";

import ElegantServiceCards from "@/components/elegant-service-cards";
import { Newspaper } from "lucide-react";

const Blog = () => {
  const particlesRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;

    const canvas = particlesRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Particle properties
    const particlesArray: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
    }[] = [];

    // Create particles
    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 12000);

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 4 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = Math.random() * 0.4 - 0.2;
        const speedY = Math.random() * 0.4 - 0.2;
        const opacity = Math.random() * 0.5 + 0.1;
        const colorChoice = Math.random();
        let color;

        if (colorChoice < 0.4) {
          color = `rgba(30, 64, 175, ${opacity})`; // Blue
        } else if (colorChoice < 0.8) {
          color = `rgba(249, 115, 22, ${opacity})`; // Orange
        } else {
          color = `rgba(13, 148, 136, ${opacity})`; // Teal
        }

        particlesArray.push({
          x,
          y,
          size,
          speedX,
          speedY,
          opacity,
          color,
        });
      }
    };

    // Update particles
    const updateParticles = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].x += particlesArray[i].speedX;
        particlesArray[i].y += particlesArray[i].speedY;

        // Boundary check
        if (particlesArray[i].x < 0 || particlesArray[i].x > canvas.width) {
          particlesArray[i].speedX *= -1;
        }

        if (particlesArray[i].y < 0 || particlesArray[i].y > canvas.height) {
          particlesArray[i].speedY *= -1;
        }
      }
    };

    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
    };

    // Connect particles with lines
    const connectParticles = () => {
      const maxDistance = 100;

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(30, 64, 175, ${opacity * 0.15})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      updateParticles();
      drawParticles();
      connectParticles();
      requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  return (
    <section
      id="blog"
      className="relative py-16 md:py-20 lg:py-28 bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] dark:from-[#0f172a] dark:to-[#1e293b] overflow-hidden"
    >
      {/* Particles canvas */}
      <canvas
        ref={particlesRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-600/10 to-orange-500/10 border border-blue-500/20 backdrop-blur-sm">
              <Newspaper className="w-4 h-4 mr-2 text-orange-500" />
              <span className="text-sm font-medium text-blue-700 dark:text-orange-400">
                Últimas Novedades
              </span>
            </div>
          </div>
        </div>

        <div className="relative bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
          <ElegantServiceCards />
        </div>
      </div>
    </section>
  );
};

export default Blog;
