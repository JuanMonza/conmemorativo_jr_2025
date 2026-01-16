'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: "🚗", title: "En Automóvil", description: "Fácil acceso desde la vía principal" },
    { icon: "🚌", title: "Transporte Público", description: "Rutas disponibles desde el centro" },
    { icon: "🅿️", title: "Estacionamiento", description: "Amplio parqueadero gratuito" }
  ];

  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">¿Cómo Llegar?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos ubicados en Cartago, Valle del Cauca - Km 2.5 vía Zaragoza
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-xl overflow-hidden shadow-2xl h-96 mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3976.498!2d-75.92003!3d4.71133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNDInNDAuOCJOIDc1wrA1NScxMi4xIlc!5e0!3m2!1ses!2sco!4v1699999999999!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-green-50 rounded-xl"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
