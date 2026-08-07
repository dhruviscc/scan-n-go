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
} from "react-icons/fa";
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  const footerNavItems = [
    { name: 'Home', href: '/' },
    { name: 'Use-cases', href: '/use-cases' },
    { name: 'Features', href: '/features' },
    { name: 'Our Partners', href: '/our-partners' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  if (pathname === '/login' || pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="relative overflow-hidden bg-[#070B18] rounded-t-[100px] p-6 text-white">

      {/* White Glow */}
      <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[900px] h-[250px] rounded-full bg-white/30 blur-[140px] opacity-70 pointer-events-none" />

      {/* Background Text */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none">
        <h2 className="text-[90px] md:text-[180px] lg:text-[230px] font-black tracking-tight leading-none text-white/[0.05]">
          Scan n Go
        </h2>
      </div>

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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* Column 1 */}
          <div >

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
            <p className="mt-7 max-w-md text-[15px] leading-8 text-gray-400">
              We provide smart QR solutions for secure access, contactless
              experiences and real-time visitor management. Simple to use,
              powerful to trust.
            </p>

            {/* Social Icons */}
            <div className="mt-8">
              {/* Heading */}
              <h3 className="mb-5 text-lg font-semibold text-white">
                Social Links
              </h3>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.facebook.com/app.scanngo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1877F2] hover:bg-[#1877F2]"
                >
                  <FaFacebookF className="text-[18px] text-gray-300 transition-colors group-hover:text-white" />
                </Link>

                <Link
                  href="https://www.instagram.com/scan_n_go_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#E4405F] hover:bg-[#E4405F]"
                >
                  <FaInstagram className="text-[18px] text-gray-300 transition-colors group-hover:text-white" />
                </Link>

                <Link
                  href="https://scan-n-go.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF0000] hover:bg-[#FF0000]"
                >
                  <FaYoutube className="text-[18px] text-gray-300 transition-colors group-hover:text-white" />
                </Link>
              </div>
            </div>

          </div>

          {/* Column 2 - Quick Links */}

          <div className="lg:pl-20">

            <div className="inline-flex items-center gap-3 mb-6">

              <h3 className="text-xl text-white">
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
                    <span className="group-hover:translate-x-1 text-[15px] transition-transform duration-300">
                      {item.name}
                    </span>

                  </Link>

                </li>
              ))}

            </ul>
          </div>

          {/* Column 3 - Contact */}

          <div >
            {/* Contact */}
            <div className="inline-flex items-center gap-3 mb-3">

              <h3 className="text-xl text-white">
                Contact
              </h3>

            </div>
            <div className="mt-5 space-y-5">

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">

                  <Phone size={18} className="text-indigo-400" />

                </div>

                <span className="text-gray-300 text-[15px]">
                  +91 79906 00155

                </span>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">

                  <Mail size={18} className="text-indigo-400" />

                </div>

                <span className="text-gray-300  text-[15px]">
                  info@scan-n-go.com
                </span>

              </div>

              <div className="flex gap-4">
                <div className="mt-1.5 flex-shrink-0 w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                  <MapPin className="w-[18px] h-[18px] text-indigo-400" />
                </div>

                <span className="text-[15px] leading-7 text-gray-300">
                  349-350, Vikas Shoppers, B/H Filter House Bhagvan Nagar Circle,
                  Near Sarthana Jakat Naka, Nana Varachha, Surat, Gujarat 395006
                </span>
              </div>

            </div>
          </div>

          {/* Column 4 - Download App */}

          <div >

            <div className="inline-flex items-center gap-3 mb-8">
              <h3 className="text-xl text-white">
                Download App
              </h3>
            </div>
            <p className="text-gray-400 leading-8 max-w-sm text-[15px] mb-10">
              Experience Scan n Go on your mobile. Download the app for secure QR access, instant notifications and seamless management.
            </p>
            {/* ================= App Store ================= */}
            <div className="flex items-center justify-center sm:justify-start gap-4">
              {/* App Store */}
              <a
                href="https://apps.apple.com/us/app/scan-n-go-easy-entry/id6502510648"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/images/appstore.png"
                  alt="Download on the App Store"
                  width={180}
                  height={54}
                  className="h-13 w-auto object-contain"
                />
              </a>

              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.scc.global"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/images/googleplay.png"
                  alt="Get it on Google Play"
                  width={180}
                  height={54}
                  className="h-13 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}

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



          </div>

        </div>

      </div>

    </footer>
  );
}