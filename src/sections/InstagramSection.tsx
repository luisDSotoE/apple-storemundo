// src/sections/InstagramSection.tsx
"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const posts = [
  "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1592890288564-76628a30a657?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601784551446-20c9e07cdbfd?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512054502232-10a0a035d672?q=80&w=600&auto=format&fit=crop",
];

export default function InstagramSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Únete a la comunidad
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Síguenos en Instagram para tips y procesos.
          </motion.p>
        </div>
        <motion.a 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://instagram.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          <Camera className="w-5 h-5" />
          Ver Instagram
        </motion.a>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {posts.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="break-inside-avoid relative group rounded-3xl overflow-hidden cursor-pointer"
          >
            <img src={src} alt={`Instagram post ${i}`} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Camera className="w-10 h-10 text-white" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}