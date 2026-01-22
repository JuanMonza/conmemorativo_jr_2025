'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Workshops() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { 
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      bgColor: "bg-purple-100",
      title: "Grupos de Apoyo", 
      description: "Comparte experiencias y encuentra consuelo en comunidad" 
    },
    { 
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v6a1 1 0 001 1h6" />
        </svg>
      ),
      bgColor: "bg-blue-100",
      title: "Terapia Profesional", 
      description: "Psicólogos especializados en procesos de duelo" 
    },
    { 
      icon: (
        <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      bgColor: "bg-emerald-100",
      title: "Material de Apoyo", 
      description: "Recursos y guías para entender el proceso de duelo" 
    },
    { 
      icon: (
        <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
      bgColor: "bg-amber-100",
      title: "Ceremonias de Sanación", 
      description: "Rituales terapéuticos para honrar y recordar" 
    }
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
          {/* CAMBIO AQUÍ: Eliminé 'title-underline' y 'title-shadow' */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Talleres de <span className="text-emerald-600">Duelo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Acompañamiento profesional en tu proceso de sanación</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center min-h-[450px]"
          >
            {/* Corazón de fondo */}
            <svg className="absolute w-full h-full max-w-md max-h-md" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              <path d="M50,85 C50,85 15,60 15,40 C15,25 25,15 35,15 C42,15 48,20 50,25 C52,20 58,15 65,15 C75,15 85,25 85,40 C85,60 50,85 50,85 Z" 
                    fill="#dbeafe" />
            </svg>
            
            {/* Contenido sobre el corazón */}
            <div className="relative z-10 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg className="w-56 h-56 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </motion.div>
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
                <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                  {feature.icon}
                </div>
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