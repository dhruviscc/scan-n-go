"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CarouselItem {
    id: string;
    title: string;
    description: string;
    tag?: string;
}

export interface CircularCarouselProps {
    items: CarouselItem[];
    activeIndex?: number;
    onActiveChange?: (index: number) => void;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    className?: string;
}

const VISIBLE_COUNT = 5;
const RADIUS_X = 420;
const RADIUS_Y = 100;

function getItemPosition(index: number, activeIndex: number, total: number) {
    const offset = index - activeIndex;
    const half = Math.floor(VISIBLE_COUNT / 2);
    let adjustedOffset = offset;

    if (offset > half) adjustedOffset = offset - total;
    if (offset < -half) adjustedOffset = offset + total;

    if (Math.abs(adjustedOffset) > half * 2) return null;

    const angle = (adjustedOffset / VISIBLE_COUNT) * Math.PI;
    const x = Math.sin(angle) * RADIUS_X;
    const y = -Math.cos(angle) * RADIUS_Y;

    const distance = Math.abs(adjustedOffset);
    const maxDistance = half + 1;
    const scale = Math.max(0, 1 - (distance / maxDistance) * 0.3);
    const opacity = Math.max(0.3, 1 - (distance / maxDistance) * 0.7);
    const zIndex = VISIBLE_COUNT - distance;

    return { x, y, scale, opacity, zIndex, adjustedOffset };
}

export function CircularCarousel({
    items,
    activeIndex: controlledIndex,
    onActiveChange,
    autoPlay = true,
    autoPlayInterval = 4000,
    className,
}: CircularCarouselProps) {
    const [internalIndex, setInternalIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const activeIndex = controlledIndex ?? internalIndex;
    const total = items.length;

    const goTo = useCallback(
        (index: number) => {
            const newIndex = ((index % total) + total) % total;
            if (controlledIndex === undefined) {
                setInternalIndex(newIndex);
            }
            onActiveChange?.(newIndex);
        },
        [total, controlledIndex, onActiveChange],
    );

    const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
    const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

    useEffect(() => {
        if (!autoPlay || isHovered || isFocused) return;
        intervalRef.current = setInterval(next, autoPlayInterval);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [autoPlay, autoPlayInterval, isHovered, isFocused, next]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        const el = containerRef.current;
        el?.addEventListener("keydown", handler);
        return () => el?.removeEventListener("keydown", handler);
    }, [next, prev]);

    if (!items.length) {
        return null;
    }

    const activeItem = items[activeIndex];

    return (
        <div
            ref={containerRef}
            tabIndex={0}
            role="region"
            aria-label="Circular carousel"
            aria-roledescription="carousel"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
                "relative flex flex-col items-center justify-center gap-8 outline-none",
                className,
            )}
        >
            <div className="relative h-[280px] w-full max-w-lg">
                <AnimatePresence mode="popLayout">
                    {items.map((item, i) => {
                        const pos = getItemPosition(i, activeIndex, total);
                        if (!pos) return null;

                        const isActive = i === activeIndex;

                        return (
                            <motion.button
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    x: pos.x,
                                    y: pos.y,
                                    scale: pos.scale,
                                    opacity: pos.opacity,
                                    zIndex: pos.zIndex,
                                }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{
                                    duration: 0.65,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                onClick={() => goTo(i)}
                                aria-label={item.title}
                                aria-selected={isActive}
                                role="option"
                                className={cn(
                                    "absolute left-1/2 top-1/2 flex h-44 w-72 -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col justify-between rounded-[28px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-indigo-50 p-6 backdrop-blur-xl transition-all duration-300",
                                    isActive
                                        ? "shadow-[0_30px_80px_-15px_rgba(79,70,229,0.28)] ring-1 ring-indigo-300/40 scale-105"
                                        : "shadow-[0_12px_35px_-8px_rgba(15,23,42,0.12)] hover:shadow-[0_20px_50px_-10px_rgba(79,70,229,0.18)] hover:scale-[1.02]"
                                )}
                                style={{ transformOrigin: "center center" }}
                            >
                                {item.tag && (
                                    <span
                                        className={cn(
                                            "inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide",
                                            isActive
                                                ? "bg-indigo-100 text-indigo-700"
                                                : "bg-slate-100 text-slate-600"
                                        )}
                                    >
                                        {item.tag}
                                    </span>
                                )}

                                <div className="w-full">
                                    <h3
                                        className={cn(
                                            "font-bold leading-tight transition-all duration-300",
                                            isActive
                                                ? "text-slate-900 text-xl"
                                                : "text-slate-700 text-lg"
                                        )}
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className={cn(
                                            "mt-3 text-sm leading-6 transition-colors duration-300",
                                            isActive
                                                ? "text-slate-600"
                                                : "text-slate-500"
                                        )}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </motion.button>
                        );
                    })}
                </AnimatePresence>
            </div>

            <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center top-20 pointer-events-none"
            >
                <span className="text-5xl font-bold tracking-tight text-slate/90">
                    {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 text-xs text-slate/40">
                    of {String(total).padStart(2, "0")}
                </span>
            </motion.div>

            <div className="flex items-center gap-4">
                <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prev}
                    aria-label="Previous item"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-indigo-50 text-slate-700 shadow-lg shadow-slate-200/60 transition-all duration-300 hover:border-indigo-300 hover:from-indigo-50 hover:to-violet-100 hover:text-indigo-700 hover:shadow-indigo-200/50 focus-visible:ring-2 focus-visible:ring-indigo-300"
                >
                    <ChevronLeft size={20} />
                </motion.button>

                <div className="flex items-center gap-2" role="tablist">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            role="tab"
                            aria-selected={i === activeIndex}
                            onClick={() => goTo(i)}
                            className={cn(
                                "h-2 rounded-full transition-all duration-300",
                                i === activeIndex
                                    ? "w-8 bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-500 shadow-md shadow-indigo-300/40"
                                    : "w-2 bg-white-200 hover:bg-slate-400"
                            )}
                            aria-label={`Go to item ${i + 1}`}
                        />
                    ))}
                </div>

                <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={next}
                    aria-label="Next item"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-indigo-50 text-slate-700 shadow-lg shadow-slate-200/60 transition-all duration-300 hover:border-indigo-300 hover:from-indigo-50 hover:to-violet-100 hover:text-indigo-700 hover:shadow-indigo-200/50 focus-visible:ring-2 focus-visible:ring-indigo-300"
                >
                    <ChevronRight size={20} />
                </motion.button>
            </div>
        </div>
    );
}

export default CircularCarousel;
