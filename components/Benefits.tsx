'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 title-underline title-shadow">
            <span className="text-emerald-600">Beneficios</span> del Producto
          </h2>
          <p className="text-xl text-gray-600">Espacios diseñados con amor y respeto para honrar la memoria</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Cenizarios */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            style={{ background: 'linear-gradient(135deg, rgba(220, 252, 231, 0.85), rgba(219, 234, 254, 0.85))' }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6">
                <svg className="w-9 h-9 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Cenizarios</h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg font-semibold">
              Espacios individuales o grupales que se adquieren a perpetuidad o temporalidad para la custodia de cenizas.
            </p>
            <div className="space-y-4">
              {[
                "Dirigido especialmente a usuarios más tradicionales que valoran la conservación en el tiempo",
                "Pueden ser espacios en altura exteriores o interiores",
                "Para espacios interiores, el cenizario puede convertirse en una biblioteca con libros-urnas que conservan las cenizas familiares",
                "Se paga un valor adicional individual por cada ocupación"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Osarios - Reemplazado por imagen de Cenizarios */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(250, 245, 255, 0.85), rgba(252, 231, 243, 0.85))' }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Nuestros Cenizarios</h3>
            <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/img/cenizarios.jpg" 
                alt="Cenizarios del Parque Conmemorativo" 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-700 mt-6 text-center text-lg">
              Espacios diseñados con dignidad y respeto para preservar el recuerdo de tus seres queridos.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Permite que su esencia siga iluminando el mundo desde un lugar de calma y trascendencia.
          </p>
          <motion.a
            href="https://wa.me/573228147191?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20cenizarios"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg"
          >
            Solicitar Información
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
