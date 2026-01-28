"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useContext } from "react";
import { LangContext } from "./LangContext";
import Image from "next/image";

export default function Purpose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useContext(LangContext) ?? { lang: "es" };

  const title =
    lang === "es" ? (
      <>
        Nuestro <span className="text-emerald-600">Propósito</span>
      </>
    ) : (
      <>
        Our <span className="text-emerald-600">Purpose</span>
      </>
    );

  const p1 =
    lang === "es"
      ? "Jardines de Renacer nace de la necesidad de crear un espacio donde las familias puedan encontrar consuelo, paz y una conexión especial con sus seres queridos. Cada elemento del parque ha sido cuidadosamente diseñado para ofrecer serenidad y belleza."
      : "Jardines de Renacer was born from the need to create a space where families can find comfort, peace, and a special connection with their loved ones. Every element of the park has been carefully designed to offer serenity and beauty.";

  const p2 =
    lang === "es"
      ? "Nuestros jardines especializados, senderos meditativos y espacios de contemplación brindan diferentes formas de honrar la memoria y encontrar sanación en un entorno natural excepcional."
      : "Our specialized gardens, meditative paths, and contemplation spaces provide different ways to honor memory and find healing in an exceptional natural environment.";

  const bullets =
    lang === "es"
      ? [
          "Jardines especializados",
          "Contamos con un lugar cómodo y solemne en memoria de nuestros seres queridos",
          "Espacios para ceremonias y recordación",
        ]
      : [
          "Specialized gardens",
          "A comfortable and solemn place in memory of our loved ones",
          "Spaces for ceremonies and remembrance",
        ];

  const imgAlt =
    lang === "es"
      ? "Panorama del Parque - Nuestro Propósito"
      : "Park Panorama - Our Purpose";

  return (
    <section id="proposito" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{title}</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">{p1}</p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{p2}</p>
            <div className="space-y-4">
              {bullets.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-4" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm"
          >
            <Image
              src="/img/img_1_19.webp"
              alt={imgAlt}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
