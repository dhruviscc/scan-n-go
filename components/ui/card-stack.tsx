"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export type CardStackItem = {
  id: number | string;
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
};

type CardStackProps = {
  items: CardStackItem[];
  initialIndex?: number;
  autoAdvance?: boolean;
  intervalMs?: number;
  pauseOnHover?: boolean;
  showDots?: boolean;
};

type FanPosition = {
  x: string;
  y: number;
  rotate: number;
  scale: number;
  zIndex: number;
  opacity: number;
};

const fanPositions: Record<number, FanPosition> = {
  "-2": { x: "-120%", y: 170, rotate: -25, scale: 0.7, zIndex: 10, opacity: 0.9 },
  "-1": { x: "-66%", y: 60, rotate: -13, scale: 0.85, zIndex: 20, opacity: 0.96 },
  "0": { x: "0%", y: 0, rotate: 0, scale: 1.06, zIndex: 30, opacity: 1 },
  "1": { x: "66%", y: 60, rotate: 13, scale: 0.85, zIndex: 20, opacity: 0.96 },
  "2": { x: "120%", y: 170, rotate: 25, scale: 0.7, zIndex: 10, opacity: 0.9 },
};

function getRelativePosition(index: number, activeIndex: number, length: number) {
  let position = index - activeIndex;
  if (position > length / 2) position -= length;
  if (position < -length / 2) position += length;
  return position;
}

export function CardStack({
  items,
  initialIndex = 0,
  autoAdvance = false,
  intervalMs = 4000,
  pauseOnHover = true,
  showDots = true,
}: CardStackProps) {
  const [activeIndex, setActiveIndex] = useState(() =>
    items.length ? Math.min(Math.max(initialIndex, 0), items.length - 1) : 0,
  );
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!autoAdvance || isPaused || items.length < 2) return;
    const timer = window.setInterval(
      () => setActiveIndex((index) => (index + 1) % items.length),
      intervalMs,
    );
    return () => window.clearInterval(timer);
  }, [autoAdvance, intervalMs, isPaused, items.length]);

  if (!items.length) return null;

  return (
    <div
      className="mx-auto w-full max-w-none"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div className="relative h-[310px] overflow-visible sm:h-[400px] lg:h-[450px]" style={{ perspective: "1200px" }}>
        <AnimatePresence initial={false}>
          {items.map((item, index) => {
            const position = getRelativePosition(index, activeIndex, items.length);
            const fanPosition = fanPositions[position];
            if (!fanPosition) return null;

            const isActive = position === 0;
            const card = (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{
                  x: fanPosition.x,
                  y: fanPosition.y,
                  rotate: fanPosition.rotate,
                  scale: fanPosition.scale,
                  opacity: fanPosition.opacity,
                }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ type: "spring", stiffness: 190, damping: 22 }}
                className="absolute left-1/2 top-0 h-[240px] w-[330px] -translate-x-1/2 overflow-hidden rounded-2xl border-2 border-violet-300 shadow-[0_18px_38px_rgba(0,0,0,0.42)] sm:h-[290px] sm:w-[440px] lg:h-[325px] lg:w-[520px]"
                style={{ zIndex: fanPosition.zIndex }}
              >
                <Image src={item.imageSrc} alt={item.title} fill sizes="(max-width: 640px) 330px, (max-width: 1024px) 440px, 520px" className="object-cover" priority={isActive} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <h4 className="text-lg font-bold  text-white sm:text-2xl">{item.title}</h4>
                </div>
              </motion.article>
            );

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${item.title}`}
                aria-current={isActive}
                className="focus:outline-none"
              >
                {card}
              </button>
            );
          })}
        </AnimatePresence>
      </div>

      {showDots && items.length > 1 && (
        <div className="relative z-40 mt-1 flex justify-center gap-2 sm:mt-3" aria-label="Use case selection">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${item.title}`}
              aria-current={index === activeIndex}
              className={`h-2.5 rounded-full transition-all duration-300 ease-out ${index === activeIndex
                ? "w-8 bg-violet-600 shadow-[0_0_12px_rgba(124,58,237,0.45)]"
                : "w-2.5 bg-violet-200 hover:bg-violet-400"
                }`}
            />))}
        </div>
      )}
    </div>
  );
}
