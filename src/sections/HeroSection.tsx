"use client";

import { motion } from "framer-motion";
import { Camera, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-10 overflow-hidden bg-black text-white">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Logo Central */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
             <Image
              src="/Logo.jpg"
              alt="Apple Store Mundo"
              width={180}
              height={180}
              className="rounded-full shadow-2xl shadow-[#0077b6]/30 border-2 border-white/10"
            />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Apple Store <span className="text-[#0077b6]">MUNDO</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
            Servicio técnico especializado y mantenimiento de dispositivos móviles. Soluciones rápidas y seguras para tus equipos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* Botón WhatsApp */}
            <a
              href="https://wa.me/573046264670"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-lg hover:scale-105 transition-transform duration-300"
            >
              <MessageCircle size={24} />
              WhatsApp
            </a>

            {/* Botón Instagram */}
            <a
              href="https://www.instagram.com/applestoremundo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white font-bold text-lg hover:scale-105 transition-transform duration-300"
            >
              <Camera size={24} />
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}