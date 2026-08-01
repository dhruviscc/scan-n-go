"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'; // Import usePathname
import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';

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

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-8xl z-50 px-4 sm:px-6">
        <header
          className={`
            flex justify-between items-center
            transition-all duration-300
            ${scrolled
              ? "bg-white/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
              : "bg-white/75 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            }
            backdrop-blur-md px-4 sm:px-8 py-3.5 rounded-full border border-white/20
          `}
        >
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/images/logo/logo_with_text.png" // Corrected image path
                alt="Scan n Go Logo"
                width={140}
                height={40}
                priority
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block grow">
            <ul className="flex justify-end items-center space-x-8 pr-2">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    prefetch={true}
                    className={`relative text-gray-700 font-medium text-md no-underline transition-colors duration-200 ${pathname === item.href
                        ? 'text-indigo-600 font-semibold after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-indigo-600 after:rounded-full'
                        : 'hover:text-indigo-600'
                      }`}
                  >
                    {item.label}
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
