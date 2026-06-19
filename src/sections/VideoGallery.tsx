// src/sections/VideoGallery.tsx
"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
// Simulated Dialog without shadcn CLI dependency for immediate use
import { DialogContent, DialogOverlay } from "@/components/ui/dialog-custom";

const videos = [
  {
    id: 1,
    title: "Cambio de pantalla iPhone 15 Pro",
    thumbnail: "https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?q=80&w=800&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "Reparación",
  },
  {
    id: 2,
    title: "Mantenimiento preventivo",
    thumbnail: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "Mantenimiento",
  },
  {
    id: 3,
    title: "Diagnóstico de batería",
    thumbnail: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbfd?q=80&w=800&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "Batería",
  },
];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="py-20 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Contenido Destacado
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Aprende más sobre reparación y mantenimiento.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="group cursor-pointer rounded-3xl overflow-hidden bg-[#111827] border border-white/5 shadow-2xl relative"
            onClick={() => setSelectedVideo(video.video)}
          >
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform scale-90 group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <span className="text-[#0A84FF] text-xs font-semibold uppercase tracking-wider mb-2 block">
                {video.category}
              </span>
              <h3 className="text-xl font-medium text-white line-clamp-2">
                {video.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <DialogOverlay isOpen={!!selectedVideo} onClose={() => setSelectedVideo(null)}>
        <DialogContent>
          {selectedVideo && (
            <video 
              src={selectedVideo} 
              controls 
              autoPlay 
              className="w-full rounded-2xl outline-none"
            />
          )}
        </DialogContent>
      </DialogOverlay>
    </section>
  );
}