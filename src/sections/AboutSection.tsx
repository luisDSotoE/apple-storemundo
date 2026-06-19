// src/sections/AboutSection.tsx
"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 px-6 w-full relative">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1588508065123-287b28e0141c?q=80&w=2000&auto=format&fit=crop" 
          alt="Apple Store Mundo background" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Sobre Apple Store Mundo
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-3xl font-medium leading-relaxed text-gray-200"
        >
          "Apple Store Mundo es una marca especializada en servicio técnico y contenido sobre mantenimiento y reparación de dispositivos móviles. Nuestro objetivo es ofrecer calidad, confianza y una experiencia premium."
        </motion.p>
      </div>
    </section>
  );
}