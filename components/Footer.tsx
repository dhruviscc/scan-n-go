'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const footerNavItems = [
    { name: 'Home', href: '/' },
    { name: 'Use-cases', href: '/use-cases' },
    { name: 'Features', href: '/features' },
    { name: 'Our Partners', href: '/our-partners' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#070B18] text-white">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Purple Glow */}
        <div className="absolute right-[-250px] top-[-250px] w-[650px] h-[650px] rounded-full bg-purple-700/20 blur-[160px]" />

        <div className="absolute left-[-220px] bottom-[-220px] w-[500px] h-[500px] rounded-full bg-indigo-700/20 blur-[150px]" />

        {/* Curved Rings */}

        <div className="absolute right-[-420px] bottom-[-420px] w-[900px] h-[900px] rounded-full border border-indigo-500/10"></div>

        <div className="absolute right-[-340px] bottom-[-340px] w-[760px] h-[760px] rounded-full border border-indigo-500/10"></div>

        <div className="absolute right-[-260px] bottom-[-260px] w-[620px] h-[620px] rounded-full border border-indigo-500/10"></div>

        {/* Dot Pattern */}

        <div className="absolute right-24 bottom-20 grid grid-cols-8 gap-2 opacity-20">

          {[...Array(64)].map((_, i) => (
            <span
              key={i}
              className="w-1 h-1 rounded-full bg-white"
            />
          ))}

        </div>

      </div>

      {/* ================= Main Footer ================= */}

      <div className="relative z-10 max-w-8xl mx-auto px-4 lg:px-6 py-10">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ================================================= */}
          {/* Column 1 */}
          {/* ================================================= */}

          <div>

            {/* Logo */}

            <Link href="/">

              <Image
                src="/images/logo/logo_with_text.png"
                alt="Scan N Go"
                width={185}
                height={58}
                className="object-contain"
              />

            </Link>

            {/* Description */}

            <p className="mt-8 text-[16px] leading-8 text-gray-400 max-w-sm">

              We provide smart QR solutions for secure access,
              contactless experiences and real-time visitor
              management. Simple to use, powerful to trust.

            </p>

            {/* Contact */}

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">

                  <Phone size={18} className="text-indigo-400" />

                </div>

                <span className="text-gray-300">
                  +91 93633 34349
                </span>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">

                  <Mail size={18} className="text-indigo-400" />

                </div>

                <span className="text-gray-300">
                  info@scan-n-go.com
                </span>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">

                  <MapPin size={18} className="text-indigo-400" />

                </div>

                <span className="text-gray-300">
                  Coimbatore, Tamil Nadu, India
                </span>

              </div>

            </div>



          </div>

          {/* ================================================= */}
          {/* Column 2 - Quick Links */}
          {/* ================================================= */}

          <div className="lg:pl-10">

            <div className="inline-flex items-center gap-3 mb-6">

              <h3 className="text-2xl font-bold text-white">
                Quick Links
              </h3>

            </div>

            <ul className="space-y-5">

              {footerNavItems.map((item) => (
                <li key={item.name}>

                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </span>

                  </Link>

                </li>
              ))}

            </ul>
          </div>

          {/* ================================================= */}
          {/* Column 3 - Download App */}
          {/* ================================================= */}

          <div>

            <div className="inline-flex items-center gap-3 mb-8">
              <h3 className="text-2xl font-bold text-white">
                Download App
              </h3>
            </div>
            <p className="text-gray-400 leading-8 max-w-sm mb-10">
              Experience Scan N Go on your mobile. Download the app for secure QR access, instant notifications and seamless management.
            </p>

            {/* ================= App Store ================= */}

            <a
              href="https://apps.apple.com/us/app/scan-n-go-easy-entry/id6502510648"
            >
              <div className="flex items-center gap-4">

                <div className="w-40 h-14 flex items-center justify-center">
                  <Image
                    src="/images/appstore.png"
                    alt="Download on the App Store"
                    width={160}
                    height={48}
                  />

                </div>
              </div>
            </a>

            {/* ================= Google Play ================= */}

            <a
              href="https://play.google.com/store/apps/details?id=com.scc.global"
            >

              <div className="flex items-center gap-4">

                <div className="w-40 h-14 flex items-center justify-center">
                  <Image
                    src="/images/googleplay.png"
                    alt="Get it on Google Play"
                    width={180}
                    height={48}
                  />

                </div>
              </div>
            </a>
          </div>
        </div>

        {/* ================================================= */}
        {/* Bottom Bar */}
        {/* ================================================= */}

        <div className="mt-16 pt-6 border-t border-white/10">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* Copyright */}

            <p className="text-sm text-gray-400 text-center lg:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">
                Scan N Go
              </span>
              . All Rights Reserved.
            </p>

            {/* Footer Links */}

            <div className="flex flex-wrap items-center justify-center gap-8">

              <Link
                href="/privacy-policy"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>



            </div>

            {/* Social Icons */}

            <div className="flex items-center gap-3">

              <Link
                href="https://www.facebook.com/app.scanngo"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 hover:-translate-y-1"
              >
                <FaFacebookF
                  className="text-gray-300 group-hover:text-white text-[18px]"
                />
              </Link>

              <Link
                href="https://www.instagram.com/scan_n_go_/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E4405F] hover:border-[#E4405F] transition-all duration-300 hover:-translate-y-1"
              >
                <FaInstagram
                  className="text-gray-300 group-hover:text-white text-[18px]"
                />
              </Link>

              <Link
                href="https://scan-n-go.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300 hover:-translate-y-1"
              >
                <FaYoutube
                  className="text-gray-300 group-hover:text-white text-[18px]"
                />
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}