'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Workshops() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: "👥", title: "Grupos de Apoyo", description: "Comparte experiencias y encuentra consuelo en comunidad" },
    { icon: "👨‍⚕️", title: "Terapia Profesional", description: "Psicólogos especializados en procesos de duelo" },
    { icon: "📚", title: "Material de Apoyo", description: "Recursos y guías para entender el proceso de duelo" },
    { icon: "🕯️", title: "Ceremonias de Sanación", description: "Rituales terapéuticos para honrar y recordar" }
  ];

  return (
    <section id="talleres" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 title-underline title-shadow">
            Talleres de <span className="title-gradient">Duelo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Acompañamiento profesional en tu proceso de sanación</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
            style={{ background: 'linear-gradient(135deg, rgba(243, 232, 255, 0.7), rgba(252, 231, 243, 0.7))' }}
          >
            <div className="text-center flex flex-col items-center justify-center h-full">
              <div className="text-6xl mb-6">💜</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Te acompañamos en cada paso</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-start"
              >
                <div className="text-4xl mr-4">{feature.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <motion.a
                href="https://wa.me/573228147191?text=Hola,%20me%20interesa%20participar%20en%20los%20Talleres%20de%20Duelo"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg"
              >
                Inscribirme a Talleres
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
