'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Protocolo / Gala",
      icon: (
        <svg className="w-10 h-10 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="10" r="1.5" fill="currentColor"/>
        </svg>
      ),
      color: "yellow",
      bgColor: "bg-yellow-100",
      items: ["Calle de Honor", "Acompañamiento musical", "Globos", "Pergamino", "Fotografía"]
    },
    {
      title: "Clásico",
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M12 3c-1.5 0-2.5 1-2.5 2v3h5V5c0-1-1-2-2.5-2zM12 21c1.5 0 2.5-1 2.5-2v-3h-5v3c0 1 1 2 2.5 2zM5 12h14M5 12c0-1.5 1-2.5 2-2.5h3v5H7c-1 0-2-1-2-2.5zM19 12c0 1.5-1 2.5-2 2.5h-3v-5h3c1 0 2 1 2 2.5z"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      ),
      color: "blue",
      bgColor: "bg-blue-100",
      description: "Ritual de acuerdo a la religión. Una ceremonia tradicional que honra las creencias y valores de tu ser querido"
    },
    {
      title: "Lúdico",
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
          <path strokeLinecap="round" d="M12 2v3M12 19v3M22 12h-3M5 12H2M19.07 4.93l-2.12 2.12M7.05 16.95l-2.12 2.12M19.07 19.07l-2.12-2.12M7.05 7.05L4.93 4.93"/>
          <circle cx="12" cy="12" r="6" strokeDasharray="2 2" opacity="0.5"/>
          <circle cx="12" cy="12" r="9" strokeDasharray="3 3" opacity="0.3"/>
        </svg>
      ),
      color: "purple",
      bgColor: "bg-purple-100",
      items: ["Su vida contada en un video", "Juegos pirotécnicos", "Celebración de la vida"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 title-underline title-shadow">
            <span className="text-emerald-600">Servicios</span> <span className="text-blue-600">Personalizados</span>
          </h2>
          <p className="text-xl text-gray-600">Despedida final con el toque especial que tu ser querido merece</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`glass-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-t-4 border-${service.color}-500`}
            >
              <div className="text-center mb-6">
                <div className={`w-20 h-20 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
              </div>
              {service.items ? (
                <ul className="space-y-3 text-gray-700">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`text-${service.color}-500 mr-2`}>▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700">{service.description}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://wa.me/573228147191?text=Hola,%20deseo%20información%20sobre%20servicios%20personalizados"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
          >
            Consultar Servicios
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
