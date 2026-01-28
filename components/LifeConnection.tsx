'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useContext } from 'react';
import { LangContext } from './LangContext';


export default function LifeConnection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useContext(LangContext) ?? { lang: 'es' };

  const activities = lang === 'es' ? [
    {
      title: "Talleres de Duelo",
      description: "Acompañamiento profesional para procesos de sanación en comunidad",
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Encuentros Culturales",
      description: "Espacios de reflexión, arte y celebración de la memoria",
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.59 14.37a6 6 0 01-5.84 7.38A6 6 0 016.95 14.36m12.73-1.72A6 6 0 1012.55 20.92m6.96-1.07A9 9 0 1110.02 3.9a9 9 0 019.53 15.02z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Eventos de Vida",
      description: "Celebraciones que honran historias, logros y trascendencia",
      icon: (
        <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Espacios de Conexión",
      description: "Zonas diseñadas para encuentros significativos y reflexión compartida",
      icon: (
        <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ),
      color: "from-amber-500 to-amber-600"
    }
  ] : [
    {
      title: "Grief Workshops",
      description: "Professional support for healing processes in community",
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Cultural Gatherings",
      description: "Spaces for reflection, art, and celebration of memory",
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.59 14.37a6 6 0 01-5.84 7.38A6 6 0 016.95 14.36m12.73-1.72A6 6 0 1012.55 20.92m6.96-1.07A9 9 0 1110.02 3.9a9 9 0 019.53 15.02z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Life Events",
      description: "Celebrations that honor stories, achievements, and transcendence",
      icon: (
        <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Connection Spaces",
      description: "Areas designed for meaningful encounters and shared reflection",
      icon: (
        <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ),
      color: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <section id="vida-conexion" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {lang === 'es' ? (
              <>Un Espacio de <span className="text-emerald-600">Vida y Conexión</span></>
            ) : (
              <><span className="text-emerald-600">Life & Connection</span> Space</>
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {lang === 'es'
              ? 'Jardines de Renacer es más que un parque conmemorativo. Es un espacio vivo donde la memoria, la comunidad y la trascendencia se encuentran en actividades significativas que celebran la vida en todas sus formas.'
              : 'Jardines de Renacer is more than a memorial park. It is a living space where memory, community, and transcendence meet in meaningful activities that celebrate life in all its forms.'}
          </p>
        </motion.div>

        {/* Grid de actividades */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Destacado: Memoria, Vida y Conmemoración */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-8 md:p-12 border-2 border-emerald-200"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              {lang === 'es' ? 'Memoria, Vida y Trascendencia' : 'Memory, Life & Transcendence'}
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              {lang === 'es'
                ? 'Nuestro compromiso es crear un ambiente donde cada visita es un acto de amor y respeto. Cada actividad, cada espacio, cada momento está diseñado para honrar vidas, fortalecer conexiones y recordar que la trascendencia de quienes amamos vive en nuestros corazones y acciones.'
                : 'Our commitment is to create an environment where every visit is an act of love and respect. Every activity, every space, every moment is designed to honor lives, strengthen connections, and remember that the transcendence of those we love lives on in our hearts and actions.'}
            </p>
            <motion.a
              href={lang === 'es'
                ? 'https://wa.me/573228147191?text=Hola,%20deseo%20conocer%20m%C3%A1s%20sobre%20las%20actividades%20y%20eventos%20en%20el%20Parque%20Conmemorativo%20Jardines%20del%20Renacer'
                : 'https://wa.me/573228147191?text=Hello,%20I%20want%20to%20know%20more%20about%20the%20activities%20and%20events%20at%20Jardines%20de%20Renacer%20Memorial%20Park'}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-lg"
            >
              {lang === 'es' ? 'Conocer más sobre nuestros eventos' : 'Learn more about our events'}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
