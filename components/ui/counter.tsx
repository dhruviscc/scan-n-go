"use client";


import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { cn } from "@/lib/utils";


interface NumberTickerProps {
  value: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  startOnView?: boolean;
  className?: string;
}


export function NumberTicker({
  value,
  from = 0,
  duration = 1.5,
  prefix = "",
  suffix = "",
  startOnView = true,
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);


  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });


  const [count, setCount] = useState(from);


  useEffect(() => {
    if (startOnView && !isInView) {
      return;
    }


    if (from >= value) {
      setCount(value);
      return;
    }


    let startTime: number | null = null;
    let animationFrame: number;


    const animateCount = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }


      const elapsed = currentTime - startTime;


      const progress = Math.min(
        elapsed / (duration * 1000),
        1
      );




      const currentValue = Math.floor(
        from + (value - from) * progress
      );


      setCount(currentValue);


      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animateCount);
      } else {
        setCount(value);
      }
    };


    animationFrame =
      requestAnimationFrame(animateCount);


    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [
    value,
    from,
    duration,
    startOnView,
    isInView,
  ]);


  return (
    <span
      ref={ref}
      className={cn(
        "tabular-nums",
        className
      )}
    >
      {prefix}
      {count}
      {suffix}
    </span>
  );
}



