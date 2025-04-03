"use client";

import { useEffect, useRef } from "react";
import { ReactNode } from "react";

interface AnimatedBackgroundLayoutProps {
  children: ReactNode;
}

const AnimatedBackgroundLayout = ({
  children,
}: AnimatedBackgroundLayoutProps) => {
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
      color: string;
    }[] = [];

    // Create particles with theme-specific colors
    const createParticles = () => {
      // Clear existing particles
      particlesArray.length = 0;

      const particleCount = Math.floor((canvas.width * canvas.height) / 18000);
      const isDarkMode = document.documentElement.classList.contains("dark");

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2.5 + 0.8;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = Math.random() * 0.25 - 0.125;
        const speedY = Math.random() * 0.25 - 0.125;

        // Theme-specific colors (warm and neutral)
        let color;
        if (isDarkMode) {
          // Dark mode colors - more neutral and muted
          color = Math.random() > 0.5 ? "#d8b8a1" : "#c1a08d"; // Beige / Soft Brown
        } else {
          // Light mode colors - warm, soft, and neutral
          color = Math.random() > 0.5 ? "#f1e0c6" : "#e4d1b9"; // Light beige / Soft warm tones
        }

        particlesArray.push({
          x,
          y,
          size,
          speedX,
          speedY,
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

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    // Observer for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          createParticles(); // Recreate particles with new theme colors
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Particles canvas */}
      <canvas
        ref={particlesRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
      />

      {/* Decorative elements - different for light/dark modes */}
      <div className="fixed top-0 left-0 w-60 h-60 bg-orange-200/10 dark:bg-orange-400/20 rounded-full blur-3xl transition-colors duration-700"></div>
      <div className="fixed bottom-0 right-0 w-80 h-80 bg-brown-200/10 dark:bg-brown-400/20 rounded-full blur-3xl transition-colors duration-700"></div>
      <div className="fixed top-1/3 right-1/4 w-40 h-40 bg-yellow-200/5 dark:bg-yellow-400/10 rounded-full blur-2xl transition-colors duration-700"></div>
      <div className="fixed bottom-1/4 left-1/3 w-60 h-60 bg-teal-200/5 dark:bg-teal-400/10 rounded-full blur-2xl transition-colors duration-700"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedBackgroundLayout;
