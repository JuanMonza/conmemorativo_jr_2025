'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useContext } from 'react';
import { LangContext } from './LangContext';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const { lang } = useContext(LangContext) ?? { lang: 'es' };
  const services = lang === 'es' ? [
    {
      title: "Protocolo / Gala",
      icon: (
        <svg className="w-10 h-10 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      benefit: "Ceremonia de Honor",
      description: "Despedida ceremonial con elegancia, música y tributo especial",
      items: ["Calle de Honor", "Acompañamiento musical", "Globos biodegradables", "Pergamino personalizado", "Fotografía profesional"],
      color: "yellow",
      bgColor: "bg-yellow-100"
    },
    {
      title: "Clásico",
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M12 3c-1.5 0-2.5 1-2.5 2v3h5V5c0-1-1-2-2.5-2zM12 21c1.5 0 2.5-1 2.5-2v-3h-5v3c0 1 1 2 2.5 2zM5 12h14M5 12c0-1.5 1-2.5 2-2.5h3v5H7c-1 0-2-1-2-2.5zM19 12c0 1.5-1 2.5-2 2.5h-3v-5h3c1 0 2 1 2 2.5z"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      ),
      benefit: "Ritual Significativo",
      description: "Ceremonia tradicional que honra creencias y valores personales",
      items: ["Ritual personalizado", "Acompañamiento espiritual", "Música seleccionada", "Flores naturales", "Espacio privado"],
      color: "blue",
      bgColor: "bg-blue-100"
    },
    {
      title: "Celebración de Vida",
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      benefit: "Fiesta de Memoria",
      description: "Celebración llena de vida, colores y recuerdos que honran su legado",
      items: ["Video de vida", "Proyección de recuerdos", "Música festiva", "Espacio colaborativo", "Ceremonia personalizada"],
      color: "purple",
      bgColor: "bg-purple-100"
    }
  ] : [
    {
      title: "Protocol / Gala",
      icon: (
        <svg className="w-10 h-10 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      benefit: "Honor Ceremony",
      description: "Ceremonial farewell with elegance, music, and special tribute",
      items: ["Honor Walk", "Musical accompaniment", "Biodegradable balloons", "Personalized parchment", "Professional photography"],
      color: "yellow",
      bgColor: "bg-yellow-100"
    },
    {
      title: "Classic",
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M12 3c-1.5 0-2.5 1-2.5 2v3h5V5c0-1-1-2-2.5-2zM12 21c1.5 0 2.5-1 2.5-2v-3h-5v3c0 1 1 2 2.5 2zM5 12h14M5 12c0-1.5 1-2.5 2-2.5h3v5H7c-1 0-2-1-2-2.5zM19 12c0 1.5-1 2.5-2 2.5h-3v-5h3c1 0 2 1 2 2.5z"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      ),
      benefit: "Meaningful Ritual",
      description: "Traditional ceremony that honors personal beliefs and values",
      items: ["Personalized ritual", "Spiritual accompaniment", "Selected music", "Natural flowers", "Private space"],
      color: "blue",
      bgColor: "bg-blue-100"
    },
    {
      title: "Celebration of Life",
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      benefit: "Memory Party",
      description: "A celebration full of life, colors, and memories that honor their legacy",
      items: ["Life video", "Memory projection", "Festive music", "Collaborative space", "Personalized ceremony"],
      color: "purple",
      bgColor: "bg-purple-100"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {lang === 'es'
              ? <>Honra su Memoria con <span className="text-emerald-600">Experiencias Significativas</span></>
              : <>Honor their Memory with <span className="text-emerald-600">Meaningful Experiences</span></>}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {lang === 'es'
              ? <>Cada servicio está diseñado para celebrar la vida y la trascendencia de quienes amas. Elige la experiencia que mejor represente su legado.</>
              : <>Each service is designed to celebrate the life and transcendence of your loved ones. Choose the experience that best represents their legacy.</>}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className={`${
                expandedIndex === index ? 'rounded-2xl' : 'rounded-full'
              } bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-gray-100 cursor-pointer`}
              style={{
                aspectRatio: expandedIndex === index ? 'auto' : '1'
              }}
            >
              {/* Encabezado con color */}
              <div className={`${service.bgColor} p-6 text-center border-b-4 border-${service.color}-400`}>
                <div className={`w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-3`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                <p className="text-sm font-semibold text-emerald-600 mt-2">
                  ✓ {service.benefit}
                </p>
              </div>

              {/* Contenido - Oculto por defecto, mostrado cuando expandido */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={expandedIndex === index ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6">
                  <p className="text-gray-700 text-sm mb-6 italic">
                    "{service.description}"
                  </p>

                  {/* Lista de beneficios */}
                  <ul className="space-y-3 mb-6">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-emerald-600 font-bold text-xl">•</span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Botones de acción */}
                  <div className="space-y-3">
                    <motion.a
                      href={
                        lang === 'es'
                          ? `https://wa.me/573228147191?text=Hola,%20deseo%20cotizar%20el%20servicio%20de%20${service.title}`
                          : `https://wa.me/573228147191?text=Hello,%20I%20want%20to%20get%20a%20quote%20for%20the%20${service.title}%20service.`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block w-full bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 transition-all text-center shadow-md"
                    >
                      {lang === 'es' ? 'Cotizar' : 'Get a Quote'}
                    </motion.a>
                    <motion.a
                      href={
                        lang === 'es'
                          ? `https://wa.me/573228147191?text=Hola,%20deseo%20más%20información%20sobre%20el%20servicio%20${service.title}`
                          : `https://wa.me/573228147191?text=Hello,%20I%20want%20more%20information%20about%20the%20${service.title}%20service.`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block w-full border-2 border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all text-center"
                    >
                      {lang === 'es' ? 'Solicitar Asesor' : 'Request Advisor'}
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Botón Ver Más - Visible solo cuando colapsado */}
              {expandedIndex !== index && (
                <motion.div
                  className="p-4 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <button className="text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors">
                    {lang === 'es' ? 'Ver más' : 'See more'}
                  </button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
