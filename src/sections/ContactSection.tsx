// src/sections/ContactSection.tsx
"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Camera, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 px-6 max-w-7xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#111827] border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A84FF]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contacta con <br/>Apple Store Mundo</h2>
            <p className="text-gray-400 text-lg mb-12">Estamos aquí para revivir tus dispositivos. Contáctanos por WhatsApp o visítanos en nuestro local.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#0A84FF]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Visítanos</h4>
                  <p className="text-gray-400 mt-1">📍 Cra. 13 #16A-56 Local 07<br/>Valledupar, Cesar</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#0A84FF]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Servicios</h4>
                  <p className="text-gray-400 mt-1">👨🏽‍🔧 Servicio Técnico<br/>📲 Teléfonos y Accesorios<br/>🪪 Créditos</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-12">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/573000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#0A84FF] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-[#0A84FF]/90 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                <Camera className="w-5 h-5" />
                Instagram
              </motion.a>
            </div>
          </div>

          <div className="h-[400px] lg:h-auto rounded-3xl overflow-hidden border border-white/10 bg-white/5 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.32488106752!2d-73.25055812386187!3d10.47504386469493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8ab9c025d57b51%3A0xd64f1d6b7b6de2c1!2sCra.%2013%20%2316a-56%2C%20Valledupar%2C%20Cesar%2C%20Colombia!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(50%)" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}