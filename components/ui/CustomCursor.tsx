"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const INTERACTIVE =
  "a, button, [role='button'], label, summary, .cursor-pointer";

const TEXT_TARGET = "input, textarea, select, [contenteditable='true']";

export default function CustomCursor() {
  const pathname = usePathname();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, rx: 0, ry: 0 });
  const frame = useRef(0);
  const [enabled, setEnabled] = useState(false);

  const skip =
    pathname.startsWith("/admin") || pathname === "/login";

  useEffect(() => {
    if (skip) {
      setEnabled(false);
      return;
    }

    const media = [
      window.matchMedia("(pointer: fine)"),
      window.matchMedia("(hover: hover)"),
      window.matchMedia("(prefers-reduced-motion: reduce)"),
    ] as const;

    const update = () => {
      setEnabled(media[0].matches && media[1].matches && !media[2].matches);
    };

    update();
    media.forEach((m) => m.addEventListener("change", update));
    return () => media.forEach((m) => m.removeEventListener("change", update));
  }, [skip]);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    pos.current.x = window.innerWidth / 2;
    pos.current.y = window.innerHeight / 2;
    pos.current.rx = pos.current.x;
    pos.current.ry = pos.current.y;

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      dot.classList.add("is-visible");
      ring.classList.add("is-visible");

      const target = e.target as Element | null;
      if (target?.closest(TEXT_TARGET)) {
        dot.classList.add("is-hidden");
        ring.classList.add("is-hidden");
        return;
      }

      dot.classList.remove("is-hidden");
      ring.classList.remove("is-hidden");

      if (target?.closest(INTERACTIVE)) {
        dot.classList.add("is-hover");
        ring.classList.add("is-hover");
      } else {
        dot.classList.remove("is-hover");
        ring.classList.remove("is-hover");
      }
    };

    const onDown = () => {
      dot.classList.add("is-click");
      ring.classList.add("is-click");
    };

    const onUp = () => {
      dot.classList.remove("is-click");
      ring.classList.remove("is-click");
    };

    const onLeave = () => {
      dot.classList.remove("is-visible");
      ring.classList.remove("is-visible");
    };

    const tick = () => {
      const { x, y } = pos.current;
      pos.current.rx += (x - pos.current.rx) * 0.18;
      pos.current.ry += (y - pos.current.ry) * 0.18;

      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      ring.style.transform = `translate3d(${pos.current.rx}px, ${pos.current.ry}px, 0)`;

      frame.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    frame.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden>
        <span className="custom-cursor-ring-inner" />
      </div>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden>
        <span className="custom-cursor-dot-inner" />
      </div>
    </>
  );
}
