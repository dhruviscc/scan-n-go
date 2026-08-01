"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const solutionLinks = [
  { label: "Vehicle QR", href: "/vehicle-qr" },
  { label: "Visitor Management", href: "/solutions" },
  { label: "Emergency QR", href: "/features" },
  { label: "Digital Identity", href: "/features" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Our Partners", href: "/our-partners" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#371879] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-violet-600/20 blur-[110px]" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-8xl px-6 pb-7 pt-16 lg:px-12 lg:pt-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:pb-16">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">
              <Image src="/images/logo/logo_with_text.png" alt="Scan-N-Go" width={190} height={42} className="h-14 w-auto rounded-xl bg-white px-2 py-1" />
            </Link>
            <p className="mt-5 max-w-sm text-lg leading-7  text-white">
              One intelligent QR platform for safer access, instant verification, and simple management across every location.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-red-400/50 hover:bg-red-500 hover:text-white">
                <BsYoutube size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-600 hover:text-white">
                <FaFacebookF size={17} />
              </a>
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-pink-400/50 hover:bg-pink-600 hover:text-white">
                <BsInstagram size={18} />
              </a>
            </div>
            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.scc.global"
                className="transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                <img
                  src="/images/googleplay.png"
                  alt="Get it on Google Play"
                  className="h-14 w-auto"
                />
              </a>

              {/* App Store */}
              <a
                href="https://apps.apple.com/us/app/scan-n-go-easy-entry/id6502510648"
                className="transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                <img
                  src="/images/appstore.png"
                  alt="Download on the App Store"
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </div>

          <FooterLinks title="Solutions" links={solutionLinks} />
          <FooterLinks title="Company" links={companyLinks} />

          <div className="lg:col-span-3">
            <p className="text-md font-bold uppercase tracking-[0.18em] text-violet-300">Get in touch</p>
            <h3 className="mt-3 text-xl font-black text-white">Let&apos;s make access smarter.</h3>
            <div className="mt-5 space-y-3">
              <ContactItem icon={<Phone size={17} />} label="Call us" value="+1 (555) 019-2834" />
              <ContactItem icon={<Mail size={17} />} label="Email us" value="support@scanngo.com" />
              <ContactItem icon={<MapPin size={17} />} label="Our office" value="100 Security Plaza, CA 94107" />
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-5 pt-7 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Scan-N-Go Platform. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link href="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-violet-200">
            <ShieldCheck size={16} /> Secure QR access, built for trust
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="lg:col-span-2">
      <p className="text-lg font-bold uppercase tracking-[0.18em] text-violet-300">{title}</p>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link href={link.href} className="group inline-flex items-center gap-1 text-md text-lg leading-7  text-white">
              {link.label} <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.045] p-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-violet-500/20 text-violet-300">{icon}</span>
      <div className="min-w-0">
        <p className="text-[13px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
        <p className="mt-0.5 text-sm text-slate-200">{value}</p>
      </div>
    </div>
  );
}
