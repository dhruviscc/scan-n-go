'use client';


import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";
import { usePathname } from 'next/navigation';

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 79906 00155",
    href: "tel:+917990600155",
  },
  {
    icon: Mail,
    title: "Email",
    value: "support@scan-n-go.com",
    href: "mailto:support@scan-n-go.com",
  },
  {
    icon: MapPin,
    title: "Office Address",
    value:
      "349-350, Vikas Shoppers, B/H Filter House Bhagvan Nagar Circle, near Sarthana Jakat Naka, Nana Varachha, Surat, Gujarat 395006",
    href:
      "https://www.google.com/maps/place/Vikas+Shoppers,+149-150,+Vraj+Chowk+Rd,+nr.+Bhagavan+Nagar+Road,+Sarthana+Jakat+Naka,+Zeal+Park,+Nana+Varachha,+Surat,+Gujarat+395013/@21.226313,72.9000808,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0458bb9aebeb1:0xf108b91bde351df3!8m2!3d21.226313!4d72.9026557!16s%2Fg%2F11gjd_062r?entry=ttu",
  },
];


export default function Footer() {
  const pathname = usePathname();

  const footerNavItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
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
    <footer
      className="
    relative
    isolate
    overflow-hidden
    bg-[#070B18]
    px-4
    py-6
    text-white
    -mt-15
    [clip-path:url(#footerCurveMobile)]
    sm:-mt-14
    md:-mt-16
    lg:-mt-15
    lg:px-6
    lg:[clip-path:url(#footerCurveDesktop)]
  "
      style={{
        minHeight: "auto",
      }}
    >
      {/* ================= SVG Definition for the Curve ================= */}
      <svg width="0" height="0" className="absolute">
        <defs>
          {/* Desktop Curve - Deeper because height is shorter */}
          <clipPath id="footerCurveDesktop" clipPathUnits="objectBoundingBox">
            <path d="M 0 0.15 C 0.3 0.25, 0.7 0.0, 1 0.15 L 1 1 L 0 1 Z" />
          </clipPath>

          {/* Mobile Curve - Flatter because stacked content increases total height */}
          <clipPath id="footerCurveMobile" clipPathUnits="objectBoundingBox">
            <path d="M 0 0.04 C 0.3 0.07, 0.7 0.0, 1 0.04 L 1 1 L 0 1 Z" />
          </clipPath>
        </defs>
      </svg>


      {/* White Glow (Positioned relative to the clipped container) */}
      <div className="absolute -bottom-[10rem] left-1/2 -translate-x-1/2 w-[900px] h-[250px] rounded-full bg-white/30 blur-[140px] opacity-70 pointer-events-none z-0" />


      {/* Background Text (Responsive sizing & no-wrap to avoid breaking weirdly) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <h2 className="text-[70px] sm:text-[120px] md:text-[180px] lg:text-[250px] xl:text-[350px] whitespace-nowrap font-black tracking-tight leading-none text-white/[0.02]">
          Scan n Go
        </h2>
      </div>


      {/* ================= Background Elements ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Purple Glow (Top Right) */}
        <div className="absolute right-[-250px] top-[-250px] w-[650px] h-[650px] rounded-full bg-purple-700/20 blur-[160px]" />


        {/* Indigo Glow (Bottom Left) */}
        <div className="absolute left-[-220px] bottom-[-220px] w-[500px] h-[500px] rounded-full bg-indigo-700/20 blur-[150px]" />


        {/* Curved Rings */}
        <div className="absolute right-[-420px] bottom-[-420px] w-[900px] h-[900px] rounded-full border border-indigo-500/10"></div>
        <div className="absolute right-[-340px] bottom-[-340px] w-[760px] h-[760px] rounded-full border border-indigo-500/10"></div>
        <div className="absolute right-[-260px] bottom-[-260px] w-[620px] h-[620px] rounded-full border border-indigo-500/10"></div>


        {/* Dot Pattern */}
        <div className="absolute right-24 bottom-20 grid grid-cols-8 gap-2 opacity-20 hidden md:grid">
          {[...Array(64)].map((_, i) => (
            <span key={i} className="w-1 h-1 rounded-full bg-white" />
          ))}
        </div>
      </div>


      {/* ================= Main Footer Content ================= */}
      <div className="relative z-10 max-w-[1600px] mx-auto  lg:px-4  pt-20 sm:pt-24 lg:pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-12">
          {/* Column 1 */}
          <div>
            <Link href="/">
              <Image
                src="/images/logo/logo_with_text.png"
                alt="Scan N Go"
                width={185}
                height={58}
                className="object-contain"
              />
            </Link>


            <p className="mt-7 max-w-md text-[15px] leading-8 text-gray-400">
              We provide smart QR solutions for secure access, contactless
              experiences and real-time visitor management. Simple to use,
              powerful to trust.
            </p>


            <div className="mt-8">


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


               
              </div>
            </div>
          </div>


          {/* Column 2 - Quick Links */}
          <div className="lg:pl-10 xl:pl-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <h3 className="text-xl text-white">Quick Links</h3>
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
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <h3 className="text-xl text-white">Contact</h3>
            </div>

            <div className="space-y-5">
              {contactDetails.map((item, index) => {
                const IconComponent = item.icon;
                const isAddress = item.title === "Office Address";

                return (
                  <div
                    key={index}
                    className={`flex ${isAddress
                      ? "items-start gap-4"
                      : "items-center gap-4"
                      }`}
                  >
                    {/* Icon */}
                    <a
                      href={item.href}
                      target={isAddress ? "_blank" : undefined}
                      rel={isAddress ? "noopener noreferrer" : undefined}
                      aria-label={`Contact via ${item.title}`}
                      className={`
              flex-shrink-0
              w-11 h-11
              rounded-full
              bg-white/5
              border border-white/10
              flex items-center justify-center
              transition-all duration-300
              hover:border-indigo-400
              hover:bg-indigo-400/10
              hover:scale-105
              ${isAddress ? "mt-1" : ""}
            `}
                    >
                      <IconComponent
                        size={18}
                        className="text-indigo-400"
                      />
                    </a>

                    {/* Details */}
                    <a
                      href={item.href}
                      target={isAddress ? "_blank" : undefined}
                      rel={isAddress ? "noopener noreferrer" : undefined}
                      className={`
              min-w-0
              text-gray-300
              text-[15px]
              hover:text-white
              transition-colors duration-300
              ${isAddress ? "leading-7" : ""}
            `}
                    >
                      {item.value}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>


          {/* Column 4 - Download App */}
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <h3 className="text-xl text-white">Download App</h3>
            </div>
            <p className="text-gray-400 leading-8 max-w-sm text-[15px] mb-8">
              Experience Scan n Go on your mobile. Download the app for secure QR
              access, instant notifications and seamless management.
            </p>
            <div className="flex flex-wrap items-center justify-start gap-4">
              <a
                href="https://apps.apple.com/us/app/scan-n-go-easy-entry/id6502510648"
                className="transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/images/appstore.png"
                  alt="Download on the App Store"
                  width={150}
                  height={45}
                  className="h-[45px] w-auto object-contain"
                />
              </a>


              <a
                href="https://play.google.com/store/apps/details?id=com.scc.global"
                className="transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/images/googleplay.png"
                  alt="Get it on Google Play"
                  width={150}
                  height={45}
                  className="h-[45px] w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-white/10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6">
            <p className="text-sm text-gray-400 text-center lg:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">Scan n Go</span>. All
              Rights Reserved.
            </p>


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
