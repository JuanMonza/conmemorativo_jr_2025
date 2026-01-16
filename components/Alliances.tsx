'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Alliances() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    { icon: "🏥", title: "Beneficios de Salud", description: "Acceso a servicios médicos y programas de bienestar para toda la familia" },
    { icon: "🎓", title: "Programas Educativos", description: "Talleres y capacitaciones para el desarrollo personal y familiar" },
    { icon: "💼", title: "Asesoría Legal", description: "Orientación legal y trámites administrativos sin complicaciones" },
    { icon: "🛡️", title: "Protección Familiar", description: "Seguros y coberturas especiales para mayor tranquilidad" }
  ];

  return (
    <section id="alianzas" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Image src="/img/vive+_logo.png" alt="Vive+ Logo" width={96} height={96} className="mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold title-underline title-shadow">Alianzas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">Beneficios adicionales para ti y tu familia</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="glass-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700 mb-6">Descubre todos los beneficios exclusivos de nuestras alianzas</p>
          <motion.a
            href="https://wa.me/573228147191?text=Hola,%20quiero%20conocer%20las%20Alianzas%20VIVE%20MÁS"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg"
          >
            Conocer Alianzas
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
