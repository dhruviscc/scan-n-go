"use client";

import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from 'next/navigation';

export default function FloatingWhatsApp() {
    const pathname = usePathname();

    if (pathname === '/login' || pathname.startsWith('/admin')) {
        return null;
    }

    return (
        <a
            href="https://wa.me/917990600155"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-[9999] group"
        >
            <div className="relative flex items-center justify-center">
                {/* Ping Animation */}
                <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-500 opacity-30 animate-ping"></span>

                {/* Button */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl shadow-green-500/40 transition-all duration-300 hover:scale-110 hover:shadow-green-500/60">
                    <FaWhatsapp className="h-8 w-8 text-white" />
                </div>
            </div>
        </a>
    );
}