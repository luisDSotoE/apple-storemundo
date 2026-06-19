import Image from "next/image";
import { MapPin, Wrench, MessageCircle, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f16] text-gray-300 py-12 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Sección de Contacto */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contacta con<br />Apple Store <span className="text-[#0077b6]">MUNDO</span>
          </h2>
          <p className="mb-8 text-gray-400 max-w-xl text-lg">
            Estamos aquí para revivir tus dispositivos. Contáctanos por WhatsApp o visítanos en nuestro local.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-full text-[#0077b6]">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Visítanos</h3>
                <p className="text-sm text-gray-400">📍 Cra. 13 #16A-56 Local 07</p>
                <p className="text-sm text-gray-400">Valledupar, Cesar</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-full text-[#0077b6]">
                <Wrench size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Servicios</h3>
                <p className="text-sm text-gray-400">👨‍🔧 Servicio Técnico</p>
                <p className="text-sm text-gray-400">📲 Teléfonos y Accesorios</p>
                <p className="text-sm text-gray-400">💳 Créditos</p>
              </div>
            </div>
          </div>

          {/* Botones de colores correctos */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/573046264670"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1ebe57] transition-colors"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/applestoremundo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white font-semibold hover:opacity-90 transition-opacity border-none"
            >
              <Camera size={20} />
              Instagram
            </a>
          </div>
        </div>

        {/* Parte inferior con tu logo */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Logo Apple Store Mundo"
              width={35}
              height={35}
              className="rounded-full border border-white/20"
            />
            <span className="text-xl font-bold text-white tracking-wide">
              Apple Store <span className="text-[#0077b6]">MUNDO</span>
            </span>
          </div>
          <p className="text-sm text-gray-500">
            © 2026 Apple Store MUNDO. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}