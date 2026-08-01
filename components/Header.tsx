"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Vehicle QR", href: "/vehicle-qr" },
  { label: "Our Partners", href: "/our-partners" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Floating pill header ── */}
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center px-5 pt-3">
        <header
          className={`
      w-full max-w-8xl
      rounded-[22px]
      transition-all duration-300
      ${scrolled
              ? "bg-white/90 shadow-2xl"
              : "bg-white/75 shadow-lg"
            }
      backdrop-blur-xl
      border border-white/30
    `}
        >
          <div className="flex items-center justify-between px-4 py-3">

            {/* Logo */}
            <Link
              href="/"
              onClick={() => setActiveLink("/")}
              className="flex items-center shrink-0"
            >
              <Image
                src="/images/logo/logo_with_text.png"
                alt="Scan-n-Go"
                width={190}
                height={42}
                priority
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = activeLink === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setActiveLink(link.href)}
                    className={`relative px-4 py-2 rounded-2xl text-[18px] font-medium transition-colors duration-300
              ${active
                        ? "text-white"
                        : "text-gray-700 hover:bg-violet-50 hover:text-violet-700"
                      }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="active-nav-link"
                        className="absolute inset-0 bg-violet-600 rounded-2xl shadow-lg shadow-violet-500/30"
                        initial={{ borderRadius: 16 }}
                        animate={{ borderRadius: 16 }}
                        exit={{ borderRadius: 16 }}
                      />
                    )}
                    <span className="relative z-10">
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>



            {/* Mobile Menu Button */}
            <button
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center
        hover:bg-violet-50 transition-colors"
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-gray-700 transition-all duration-300
            ${menuOpen ? "rotate-45 top-2.5" : ""}`}
                />
                <span
                  className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-gray-700 transition-all duration-300
            ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-gray-700 transition-all duration-300
            ${menuOpen ? "-rotate-45 top-2.5" : ""}`}
                />
              </div>
            </button>
          </div>
        </header>
      </div>

      {/* ── Mobile dropdown ── */}
      <div
        aria-hidden={!menuOpen}
        className={[
          "lg:hidden fixed z-[99] top-20 left-4 right-4",
          "bg-white/80 backdrop-blur-xl backdrop-saturate-150",
          "border border-white/75 rounded-3xl",
          "shadow-[0_12px_40px_rgba(139,92,246,0.15)]",
          "overflow-hidden transition-all duration-[380ms] ease-in-out",
          menuOpen ? "max-h-[480px] opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="flex flex-col gap-0.5 p-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => { setActiveLink(link.href); setMenuOpen(false); }}
              className={[
                "px-4 py-[11px] text-[15px] font-medium rounded-2xl transition-colors duration-200",
                activeLink === link.href
                  ? "bg-violet-500/10 text-violet-700"
                  : "text-gray-700 hover:bg-violet-500/10 hover:text-violet-700",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}


        </div>
      </div>
    </>
  );
}
