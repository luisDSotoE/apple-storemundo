// src/sections/StatsSection.tsx
"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, { duration, ease: "easeOut" });
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, to, duration, rounded]);

  return <>{displayValue}</>;
}

export default function StatsSection() {
  const [hasViewed, setHasViewed] = useState(false);

  return (
    <section className="py-10 px-6 max-w-7xl mx-auto w-full border-t border-b border-white/5 my-10">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setHasViewed(true)}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-white/10"
      >
        <div className="py-4">
          <h4 className="text-5xl font-bold text-white mb-2">
            {hasViewed ? <Counter from={0} to={505} /> : "0"}+
          </h4>
          <p className="text-gray-500 uppercase tracking-widest text-sm font-medium">Publicaciones</p>
        </div>
        <div className="py-4">
          <h4 className="text-5xl font-bold text-white mb-2 flex justify-center items-end gap-1">
            {hasViewed ? <Counter from={0} to={50} /> : "0"}.
            {hasViewed ? <Counter from={0} to={7} /> : "0"}K+
          </h4>
          <p className="text-gray-500 uppercase tracking-widest text-sm font-medium">Seguidores</p>
        </div>
        <div className="py-4">
          <h4 className="text-5xl font-bold text-white mb-2">
            {hasViewed ? <Counter from={0} to={171} /> : "0"}+
          </h4>
          <p className="text-gray-500 uppercase tracking-widest text-sm font-medium">Seguidos</p>
        </div>
      </motion.div>
    </section>
  );
}