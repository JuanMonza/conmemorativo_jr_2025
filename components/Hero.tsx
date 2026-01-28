'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';
import { LangContext } from './LangContext';


export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  // El idioma ahora se controla desde el Navbar
  
  const images = [
    '/img/img_1_1.webp',
    '/img/img_1_20.webp',
    '/img/img_1_12.webp',
    '/img/img_1_17.webp',
    '/img/img_1_20.webp',
    '/img/img_1_21.webp',
    '/img/img_1_26.webp',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Frases para el carrusel de texto
  const { lang } = useContext(LangContext) ?? { lang: 'es' };
  const frases = lang === 'es'
    ? [
        '"Conmemora el recuerdo, la trascendencia y el amor"',
        '"Trasciende en el amor del recuerdo y la vida"',
        '"Celebra la memoria, siembra esperanza"',
        '"El amor trasciende el tiempo y el espacio"'
      ]
    : [
        '"Commemorate memory, transcendence and love"',
        '"Transcend in the love of memory and life"',
        '"Celebrate memory, sow hope"',
        '"Love transcends time and space"'
      ];

  // Calcula el índice de frase sincronizado con las imágenes
  const fraseIndex = currentImage % frases.length;

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage]}
              alt={`Parque Conmemorativo Jardines de Renacer ${currentImage + 1}`}
              fill
              priority={currentImage === 0}
              className="object-cover"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        
        {/* Botones de navegación del carrusel */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Imagen anterior"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Siguiente imagen"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentImage 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/75 w-2'
              }`}
              aria-label={`Ver imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <AnimatePresence mode="wait">
            {frases.map((frase, idx) =>
              fraseIndex === idx && (
                <motion.h1
                  key={fraseIndex}
                  initial={
                    idx === 0 ? { opacity: 0, y: 30 }
                    : idx === 1 ? { opacity: 0, scale: 0.8 }
                    : idx === 2 ? { opacity: 0, x: -60 }
                    : { opacity: 0, rotate: -10, y: 30 }
                  }
                  animate={{ opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 }}
                  exit={
                    idx === 0 ? { opacity: 0, y: -30 }
                    : idx === 1 ? { opacity: 0, scale: 1.2 }
                    : idx === 2 ? { opacity: 0, x: 60 }
                    : { opacity: 0, rotate: 10, y: -30 }
                  }
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
                >
                  {frase}
                </motion.h1>
              )
            )}
          </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col xs:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#cotizador"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-emerald-700 px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:bg-emerald-50 text-lg"
          >
            {lang === 'es' ? 'Cotiza tu cenizario ahora' : 'Get your columbarium quote now'}
          </motion.a>

          <motion.a
            href={
              lang === 'es'
                ? "https://wa.me/573228147191?text=Hola,%20deseo%20información%20inmediata%20sobre%20los%20cenizarios%20del%20Parque%20Conmemorativo%20Jardines%20del%20Renacer"
                : "https://wa.me/573228147191?text=Hello,%20I%20want%20immediate%20information%20about%20the%20columbariums%20at%20Parque%20Conmemorativo%20Jardines%20del%20Renacer."
            }
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-green-600"
          >
            {lang === 'es' ? 'Solicita información inmediata' : 'Request immediate information'}
          </motion.a>
        </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
