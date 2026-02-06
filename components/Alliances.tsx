"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useContext } from 'react';
import Image from 'next/image';
import { LangContext } from './LangContext';

export default function Alliances() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);
  const { lang } = useContext(LangContext) ?? { lang: 'es' };

  const benefits = [
    {
      icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 15.5l-4-4 1.41-1.41L11 14.67l5.59-5.58L18 10.5l-7 7z"/></svg>,
      title: lang === 'es' ? 'Beneficios de Salud' : 'Health Benefits',
      description: lang === 'es'
        ? 'Acceso a servicios médicos y programas de bienestar para toda la familia'
        : 'Access to medical services and wellness programs for the whole family'
    },
    {
      icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>,
      title: lang === 'es' ? 'Programas Educativos' : 'Educational Programs',
      description: lang === 'es'
        ? 'Talleres y capacitaciones para el desarrollo personal y familiar'
        : 'Workshops and training for personal and family development'
    },
    {
      icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/></svg>,
      title: lang === 'es' ? 'Asesoría Legal' : 'Legal Advice',
      description: lang === 'es'
        ? 'Orientación legal y trámites administrativos sin complicaciones'
        : 'Legal guidance and administrative procedures made easy'
    },
    {
      icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>,
      title: lang === 'es' ? 'Protección Familiar' : 'Family Protection',
      description: lang === 'es'
        ? 'Seguros y coberturas especiales para mayor tranquilidad'
        : 'Special insurance and coverage for greater peace of mind'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

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
          <h2 className="text-4xl md:text-5xl font-bold title-underline title-shadow">
            <span className="text-blue-600">{lang === 'es' ? 'Alianzas' : 'Alliances'}</span> <span className="text-emerald-600">Vive+</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            {lang === 'es' ? 'Beneficios adicionales para ti y tu familia' : 'Additional benefits for you and your family'}
          </p>
        </motion.div>
{/* Desktop: 4 columnas */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-full shadow-xl hover:shadow-2xl transition-all aspect-square flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="text-emerald-600">{benefit.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Carrusel */}
        <div className="md:hidden relative overflow-hidden">
          <div className="px-4 py-12">
            <div className="relative h-[280px] flex items-center justify-center">
              {benefits.map((benefit, index) => {
                const offset = index - currentSlide;
                const isActive = index === currentSlide;
                return (
                  <motion.div
                    key={index}
                    className="absolute w-full px-2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.8,
                      zIndex: isActive ? 10 : 1
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <motion.div
                      className="glass-card p-5 rounded-full shadow-xl aspect-square flex items-center justify-center mx-auto max-w-[220px]"
                    >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <div className="text-emerald-600">{benefit.icon}</div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
              })}
            </div>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all z-10"
            aria-label={lang === 'es' ? 'Anterior' : 'Previous'}
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all z-10"
            aria-label={lang === 'es' ? 'Siguiente' : 'Next'}
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navegación del carrusel */}
          <div className="flex justify-center gap-2 mt-6">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-emerald-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={lang === 'es' ? `Ir a slide ${index + 1}` : `Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700 mb-6">
            {lang === 'es'
              ? 'Descubre todos los beneficios exclusivos de nuestras alianzas'
              : 'Discover all the exclusive benefits of our alliances'}
          </p>
          <motion.a
            href={
              lang === 'es'
                ? 'https://wa.me/573228147191?text=Hola,%20quiero%20conocer%20las%20Alianzas%20VIVE%20MÁS'
                : 'https://wa.me/573228147191?text=Hello,%20I%20want%20to%20know%20about%20the%20VIVE%20MÁS%20Alliances.'
            }
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg"
          >
            {lang === 'es' ? 'Conocer Alianzas' : 'Learn About Alliances'}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
