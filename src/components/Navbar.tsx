import Image from "next/image";
import Link from "next/link";
import { Camera, MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 bg-black py-4 px-6 flex items-center justify-between z-50 sticky top-0">
      {/* Logo y Nombre */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/Logo.jpg"
          alt="Apple Store Mundo Logo"
          width={50}
          height={50}
          className="rounded-full object-cover border border-white/20"
        />
        <span className="text-xl font-bold text-white tracking-wide hidden sm:block">
          Apple Store <span className="text-[#0077b6]">MUNDO</span>
        </span>
      </Link>

      {/* Botones de Redes y Contacto */}
      <div className="flex items-center gap-4">
        {/* Botón Instagram */}
        <a
          href="https://www.instagram.com/applestoremundo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white font-semibold hover:opacity-90 transition-opacity"
        >
          <Camera size={20} />
          <span className="hidden md:inline">Instagram</span>
        </a>

        {/* Botón WhatsApp */}
        <a
          href="https://wa.me/573046264670"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1ebe57] transition-colors"
        >
          <MessageCircle size={20} />
          <span className="hidden md:inline">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}