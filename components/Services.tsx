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
        <svg className="w-12 h-12 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5,16L3,5L8.5,10L12,4L15.5,10L21,5L19,16H5M19,19A1,1 0 0,1 18,20H6A1,1 0 0,1 5,19V18H19V19Z" />
        </svg>
      ),
      color: "yellow",
      items: ["Calle de Honor", "Acompañamiento musical", "Globos", "Pergamino", "Fotografía"]
    },
    {
      title: "Clásico",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V11H21V22H3V11H2V8A2,2 0 0,1 4,6H8V4A2,2 0 0,1 10,2M10,6H14V4H10V6M13,16V18H11V16H13M13,12V14H11V12H13Z" />
        </svg>
      ),
      color: "blue",
      description: "Ritual de acuerdo a la religión. Una ceremonia tradicional que honra las creencias y valores de tu ser querido"
    },
    {
      title: "Lúdico",
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
        </svg>
      ),
      color: "purple",
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
            <span className="text-emerald-600">Servicios</span> Personalizados
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
                <div className="flex justify-center mb-4">{service.icon}</div>
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
