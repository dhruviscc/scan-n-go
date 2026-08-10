"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { useState } from "react";
import { Menu, X, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Features", href: "/features" },
  { label: "Our Partners", href: "/our-partners" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === '/login' || pathname.startsWith('/admin')) {
    return null;
  }

  const prefetchRoute = (href: string) => {
    router.prefetch(href);
  };

  return (
    <>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-8xl z-50 px-4 sm:px-6">
        <header
          className={`
            relative
            flex
            justify-between
            items-center
            overflow-hidden
            rounded-2xl
            backdrop-blur-2xl
            supports-[backdrop-filter]:backdrop-saturate-150
            transition-all
            duration-500
            px-4
            sm:px-8
            py-3.5
            ${scrolled
              ? `
                  bg-white/10
                  shadow-[0_12px_40px_rgba(79,70,229,0.16)]
                `
              : `
                  bg-white/30
                  shadow-[0_8px_30px_rgba(79,70,229,0.10)]
                `
            }
          `}
        >
          {/* Swoosh backdrop decorative elements with the curved pill background matching the reference */}
          <div className="absolute inset-0  rounded-2xl pointer-events-none z-0">
            {/* Soft glowing orb on left */}
            <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-indigo-400/30 blur-3xl" />
            {/* Custom Curved Pill Overlay Layout */}
            <div
              className="
                        absolute
                        left-[-25px]
                        -top-16
                        h-[150px]
                        w-[300px]
                        rotate-[-10deg]
                        rounded-[50%]
                        border border-indigo-400/30
                        bg-[linear-gradient(90deg,rgba(124,58,237,0.28)_0%,rgba(139,92,246,0.18)_30%,rgba(196,181,253,0.12)_55%,rgba(255,255,255,0.65)_82%,rgba(255,255,255,0.85)_100%)]
                        shadow-[0_0_20px_rgba(99,102,241,0.10),inset_0_7px_30px_rgba(255,255,255,0.8)]
                        backdrop-blur-md
  "
            />
          </div>

          {/* Logo with Indigo filter styling */}
          <div className="shrink-0 flex items-center z-10 pl-2">
            <Link href="/">
              <Image
                src="/images/logo/logo_with_text.png"
                alt="Scan n Go Logo"
                width={130}
                height={35}
                priority
                className="
                  block
                  w-[120px]
                  sm:w-[160px]
                  h-auto
                  object-contain
                "
              />
            </Link>
          </div>

          {/* Desktop Navigation with black text */}
          <nav className="hidden lg:block grow z-10">
            <ul className="relative flex justify-end items-center space-x-3 xl:space-x-5 pr-2">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    prefetch={true}
                    className="relative px-3 py-2 text-[16px] font-medium transition-all duration-300"
                  >
                    <span
                      className={`transition-colors duration-300 ${pathname === item.href
                        ? "font-semibold text-[#5B21B6]"
                        : "font-medium text-slate-800 hover:text-[#6D28D9]"
                        }`}
                    >
                      {item.label}
                    </span>

                    {pathname === item.href && (
                      <motion.div
                        layoutId="active-nav-indicator"
                        className="pointer-events-none absolute inset-x-0 -bottom-[10px] h-[2px]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      >
                        <div className="relative w-full h-full">
                          {/* Active Line */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8B73D1] via-[#6B4BC3] to-[#8B73D1]" />

                          {/* Line Glow */}
                          <div className="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-[#6B4BC3]/15 blur-md" />

                          {/* Soft Glow */}
                          <div className="absolute left-1/2 top-1/2 h-3 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6B4BC3]/20 blur-md" />

                          {/* Center Sparkle */}
                          <div
                            className="
                              pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-[18px] w-[18px]
                              -translate-x-1/2 -translate-y-1/2 items-center justify-center
                              rounded-full bg-white text-[12px] font-bold leading-none text-[#6B4BC3]
                            "
                          >
                            ✦
                          </div>
                        </div>
                      </motion.div>
                    )}

                  </Link>
                </li>
              ))}
            </ul>
          </nav>



          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-indigo-500/10 text-neutral-900 transition-all duration-300 z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>
      </div>

      {/* ── Mobile dropdown ── */}
      <div
        className={`
          lg:hidden fixed z-[60] top-[84px] left-3 right-3 sm:left-5 sm:right-5
          bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.15)] border border-indigo-100
          overflow-hidden transition-all duration-300 ease-in-out origin-top
          ${mobileMenuOpen ? "max-h-[calc(100dvh-100px)] opacity-100 pointer-events-auto translate-y-0" : "max-h-0 opacity-0 pointer-events-none -translate-y-2"}
        `}
      >
        <nav className="py-4">
          <ul className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                onMouseEnter={() => prefetchRoute(item.href)}
                onFocus={() => prefetchRoute(item.href)}
                className={`block px-6 py-3 text-sm font-medium transition-colors ${pathname === item.href
                  ? 'text-indigo-700 bg-indigo-50 font-bold'
                  : 'text-neutral-800 hover:bg-indigo-50/50 hover:text-indigo-600'
                  }`}
              >
                {item.label}
              </Link>
            ))}

          </ul>
        </nav>
      </div>
    </>
  );
}