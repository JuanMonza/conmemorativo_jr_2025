'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Purpose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Nuestro <span className="text-emerald-600">Propósito</span></h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Jardines de Renacer nace de la necesidad de crear un espacio donde las familias puedan encontrar 
              consuelo, paz y una conexión especial con sus seres queridos. Cada elemento del parque ha sido 
              cuidadosamente diseñado para ofrecer serenidad y belleza.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nuestros jardines especializados, senderos meditativos y espacios de contemplación brindan diferentes 
              formas de honrar la memoria y encontrar sanación en un entorno natural excepcional.
            </p>
            <div className="space-y-4">
              {[
                "Jardines especializados",
                "Contamos con un lugar cómodo y solemne en memoria de nuestros seres queridos",
                "Espacios para ceremonias y recordación"
              ].map((item, index) => (
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
              src="/img/panorama-del-parque-de-la-ciudad-de-un-hermoso-parque.webp"
              alt="Panorama del Parque - Nuestro Propósito"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
