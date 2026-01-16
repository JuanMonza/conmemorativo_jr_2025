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
      icon: "✨",
      color: "yellow",
      items: ["Calle de Honor", "Acompañamiento musical", "Globos", "Pergamino", "Fotografía"]
    },
    {
      title: "Clásico",
      icon: "🏛️",
      color: "blue",
      description: "Ritual de acuerdo a la religión. Una ceremonia tradicional que honra las creencias y valores de tu ser querido"
    },
    {
      title: "Lúdico",
      icon: "🎉",
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
                <div className="text-5xl mb-4">{service.icon}</div>
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
