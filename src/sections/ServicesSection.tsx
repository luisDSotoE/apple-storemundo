// src/sections/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import { 
  Smartphone, 
  Battery, 
  Stethoscope, 
  Wrench, 
  RefreshCw, 
  Sparkles, 
  Settings, 
  Headphones 
} from "lucide-react";

const services = [
  { icon: Smartphone, title: "Cambio de Pantalla", desc: "Repuestos originales y calidad premium para tu display." },
  { icon: Battery, title: "Cambio de Batería", desc: "Restaura la autonomía de tu dispositivo al 100%." },
  { icon: Stethoscope, title: "Diagnóstico", desc: "Revisión profunda para encontrar la raíz de cualquier fallo." },
  { icon: Sparkles, title: "Mantenimiento Preventivo", desc: "Cuidado integral para prolongar la vida útil de tu equipo." },
  { icon: RefreshCw, title: "Actualización de Software", desc: "Instalación limpia y segura de sistemas operativos." },
  { icon: Settings, title: "Limpieza Interna", desc: "Eliminación de polvo y humedad en componentes clave." },
  { icon: Wrench, title: "Reparación General", desc: "Solución a problemas de placa, cámaras, pines de carga y más." },
  { icon: Headphones, title: "Accesorios", desc: "Cables, cargadores y periféricos de la mejor calidad." },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Servicios
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#111827] rounded-3xl p-8 border border-white/5 hover:border-[#0A84FF]/50 transition-all group shadow-lg hover:shadow-[0_0_30px_rgba(10,132,255,0.15)] flex flex-col items-start text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#0A84FF]/10 transition-colors">
              <service.icon className="w-6 h-6 text-[#0A84FF]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}