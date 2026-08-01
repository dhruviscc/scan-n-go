"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  { name: "Rahul Verma", role: "Commuter & Car Owner", quote: "The Vehicle QR sticker saved my car from being towed. Someone scanned it and alerted me without seeing my personal number.", stars: 5 },
  { name: "Sarah Jenkins", role: "Admin, Innova Solutions", quote: "Our QR attendance solution makes daily entry simple, secure, and reliable. The reporting dashboard is a huge help for our team.", stars: 5 },
  { name: "Meera Nair", role: "Family User", quote: "The emergency tag gives our family peace of mind. A quick scan can notify us immediately whenever help is needed.", stars: 5 },
  { name: "Victor Shah", role: "Operations Manager", quote: "Scan-N-Go made vehicle and visitor alerts much easier for our community. It is a practical solution we use every day.", stars: 4 },
  { name: "Naomi Patel", role: "Innovation Lead", quote: "The platform is simple for users and powerful for admins. The instant notification flow has been especially valuable.", stars: 5 },
];

const wrapIndex = (index: number) => (index + testimonials.length) % testimonials.length;

type TestimonialCarouselProps = {
  autoAdvance?: boolean;
  intervalMs?: number;
  pauseOnHover?: boolean;
};

export function TestimonialCarousel({
  autoAdvance = false,
  intervalMs = 4000,
  pauseOnHover = true,
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const previous = () => setActiveIndex((index) => wrapIndex(index - 1));
  const next = () => setActiveIndex((index) => wrapIndex(index + 1));

  useEffect(() => {
    if (!autoAdvance || isPaused || testimonials.length < 2) return;
    const timer = window.setInterval(next, intervalMs);
    return () => window.clearInterval(timer);
  }, [autoAdvance, intervalMs, isPaused]);

  return (
    <div className=" rounded-3xl py-8 sm:py-10"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}>
      <div className="relative mx-auto h-[410px] max-w-8xl sm:h-[440px]">
        <div className="absolute inset-x-0 top-[48%] h-px bg-violet-200/70" />
        {testimonials.map((testimonial, index) => {
          let distance = index - activeIndex;
          if (distance > testimonials.length / 2) distance -= testimonials.length;
          if (distance < -testimonials.length / 2) distance += testimonials.length;
          const isActive = distance === 0;
          const isNear = Math.abs(distance) === 1;

          return (
            <motion.button
              key={testimonial.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              animate={{ x: `${distance * 118}%`, scale: isActive ? 1 : 0.79, rotate: isActive ? 0 : distance < 0 ? -2 : 2, opacity: isActive ? 1 : isNear ? 0.95 : 0.3, zIndex: isActive ? 20 : isNear ? 15 : 1 }}
              transition={{ type: "spring", stiffness: 210, damping: 27 }}
              className={`absolute left-1/2 top-0 h-[365px] w-[285px] -translate-x-1/2 overflow-hidden border p-7 text-left sm:h-[300px] sm:w-[365px] sm:p-5 ${isActive ? "border-violet-200 bg-white text-slate-900 shadow-[0_22px_45px_-22px_rgba(109,40,217,0.45)]" : "border-violet-100 bg-white/80 text-slate-700 shadow-md"}`}
              aria-label={`Show testimonial from ${testimonial.name}`}
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="mt-5 text-lg font-semibold leading-7 sm:text-xl sm:leading-8">&quot;{testimonial.quote}&quot;</p>
              <p className={`absolute bottom-5 text-sm italic ${isActive ? "text-violet-700" : "text-slate-500"}`}>- {testimonial.name}, {testimonial.role}</p>
            </motion.button>
          );
        })}
      </div>
      <div className="mt-2 flex justify-center gap-3">
        <button type="button" onClick={previous} aria-label="Previous testimonial" className="flex h-14 w-14 items-center justify-center border border-violet-200 bg-white text-violet-700 shadow-sm transition hover:border-violet-600 hover:bg-violet-600 hover:text-white"><ChevronLeft size={23} /></button>
        <button type="button" onClick={next} aria-label="Next testimonial" className="flex h-14 w-14 items-center justify-center border border-violet-200 bg-white text-violet-700 shadow-sm transition hover:border-violet-600 hover:bg-violet-600 hover:text-white"><ChevronRight size={23} /></button>
      </div>
    </div>
  );
}
