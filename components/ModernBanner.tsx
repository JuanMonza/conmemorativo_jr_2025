'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useContext, useState, useEffect } from 'react';
import { LangContext } from './LangContext';
import Image from 'next/image';

export default function ModernBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useContext(LangContext) ?? { lang: 'es' };
  const [currentImage, setCurrentImage] = useState(0);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden" ref={ref}>
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
              alt={`Jardines de Renacer ${currentImage + 1}`}
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

      {/* Geometric shapes overlay */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-[15%] w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-[40%] blur-2xl z-[1]"
      />
      
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-32 left-[10%] w-80 h-80 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-[50%] blur-3xl z-[1]"
      />

      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-[20%] w-40 h-40 border-4 border-emerald-400/30 rounded-[30%] backdrop-blur-sm z-[1]"
        style={{ transform: 'rotate(45deg)' }}
      />

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-[25%] w-32 h-32 border-3 border-teal-400/40 rounded-[40%] z-[1]"
        style={{ transform: 'rotate(-20deg)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.div variants={itemVariants} className="space-y-6 mb-12">
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
                    className="text-4xl sm:text-5xl md:text-7xl font-bold text-white drop-shadow-2xl"
                  >
                    {frase}
                  </motion.h1>
                )
              )}
            </AnimatePresence>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.a
              href="https://wa.me/573228147191?text=Hola,%20deseo%20más%20información"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-full font-semibold text-lg shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">{lang === 'es' ? 'CONOCER MÁS' : 'LEARN MORE'}</span>
              <motion.svg 
                className="w-5 h-5 relative z-10" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </motion.svg>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              href="tel:+573228147191"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 text-white/90 font-semibold hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
                <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.291.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.086-1.391l-4.064-3.696z"/>
              </svg>
              <span>322 814 7191</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
