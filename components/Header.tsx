"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';

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

  const prefetchRoute = (href: string) => {
    router.prefetch(href);
  };


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === '/login' || pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-8xl z-50 px-4 sm:px-6">
        <header
          className={`
            flex justify-between items-center
            transition-all duration-300
            ${scrolled
              ? "bg-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.25)]"
              : "bg-white/75 shadow-[0_8px_30px_rgb(0,0,0,0.25)]"
            }
            backdrop-blur-md px-4 sm:px-8 py-3.5 rounded-2xl border border-white/20
          `}
        >
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/images/logo/logo_with_text.png"
                alt="Scan n Go Logo"
                width={140}
                height={40}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block grow">
            <ul className="flex justify-end items-center space-x-5 pr-2">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    prefetch={true}
                    className="relative px-3 py-2 text-[17px] font-medium transition-all duration-300"
                  >
                    <span
                      className= {`${pathname === item.href
                        ? "text-violet-600 font-semibold"
                        : "text-slate-700 hover:text-violet-600"
                        }`}
                    >
                      {pathname === item.href ? `${item.label}` : item.label}
                    </span>

                    {pathname === item.href && (
                      <span
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[15px]  text-violet-600  font-bold sparkle-indicator select-none"
                      >
                        ✦
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </button>
        </header>
      </div>

      {/* ── Mobile dropdown ── */}
      <div
        className={`
          lg:hidden fixed z-[60] top-[84px] left-3 right-3 sm:left-5 sm:right-5
          bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_16px_40px_rgba(109,40,217,0.18)] border border-violet-100
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
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
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
