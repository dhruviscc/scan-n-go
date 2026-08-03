'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedBackgroundProps {
  interactive?: boolean;
  particleColorDark?: string; // e.g. '225, 29, 72' for rose-600
  particleColorLight?: string; // e.g. '100, 116, 139' for slate-500
  density?: number; // Density of particles
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  interactive = true,
  particleColorDark = '244, 63, 94', // rose-500
  particleColorLight = '225, 29, 72', // brand red-rose
  density = 65,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, radius: 180, active: false });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check dark mode status
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark') || 
                     window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
    };

    checkTheme();
    
    // Listen for theme changes or media query changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkTheme);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      mediaQuery.removeEventListener('change', checkTheme);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseSize: number;
      color: string;
      alpha: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Float velocities
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.baseSize = Math.random() * 2 + 1;
        this.size = this.baseSize;
        this.alpha = Math.random() * 0.5 + 0.15;
        this.color = isDarkMode ? particleColorDark : particleColorLight;
      }

      update(width: number, height: number, mouse: { x: number; y: number; radius: number; active: boolean }) {
        // Wall collisions
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Move
        this.x += this.vx;
        this.y += this.vy;

        // Mouse interaction: attract particles slightly and increase size
        if (mouse.active && interactive) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            // Move gently towards mouse
            this.x += (dx / distance) * force * 0.45;
            this.y += (dy / distance) * force * 0.45;
            
            // Expand particle size near cursor
            this.size = this.baseSize + force * 1.5;
            this.alpha = Math.min(force * 0.7 + 0.2, 0.85);
          } else {
            this.size = this.baseSize;
            this.alpha = Math.max(this.alpha - 0.01, Math.random() * 0.4 + 0.15);
          }
        } else {
          this.size = this.baseSize;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        context.fill();
      }
    }

    const initParticles = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;
      
      // Scale count with window width
      const count = Math.min(Math.floor((width * height) / 18000), density);
      
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(width, height));
      }
    };

    const drawConnections = (width: number, height: number) => {
      const color = isDarkMode ? particleColorDark : particleColorLight;
      const maxDistance = 110;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            // Faint lines based on proximity
            const alpha = (1 - distance / maxDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${color}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Draw connections to mouse
        if (mouseRef.current.active && interactive) {
          const dx = mouseRef.current.x - particles[i].x;
          const dy = mouseRef.current.y - particles[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseRef.current.radius) {
            const alpha = (1 - distance / mouseRef.current.radius) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `rgba(${color}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const animate = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;
      
      ctx.clearRect(0, 0, width, height);

      // Draw active particles
      particles.forEach((particle) => {
        particle.update(width, height, mouseRef.current);
        particle.draw(ctx);
      });

      // Connect lines
      drawConnections(width, height);

      animationFrameId = requestAnimationFrame(animate);
    };

    // Events
    window.addEventListener('resize', resizeCanvas);
    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    // Launch
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode, interactive, particleColorDark, particleColorLight, density]);

  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none bg-transparent">
      {/* Canvas for connection nodes */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60 dark:opacity-40"
        style={{ mixBlendMode: isDarkMode ? 'screen' : 'multiply' }}
      />

      {/* Floating neon blurred blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-gradient-to-tr from-rose-500/10 to-transparent blur-[120px] animate-pulse duration-[6000ms] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-bl from-blue-500/5 to-transparent blur-[140px] animate-pulse duration-[8000ms] delay-[1000ms] pointer-events-none" />
      <div className="absolute top-[40%] right-[20%] w-[25rem] h-[25rem] rounded-full bg-gradient-to-r from-indigo-500/5 to-purple-500/5 blur-[100px] animate-pulse duration-[7000ms] delay-[2000ms] pointer-events-none" />
 
    </div>
  );
};
