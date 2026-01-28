"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useContext } from "react";
import { LangContext } from "./LangContext";
import Image from "next/image";

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentImage, setCurrentImage] = useState(0);
  const { lang } = useContext(LangContext) ?? { lang: "es" };

  const images =
    lang === "es"
      ? [
          {
            src: "/img/img_1_26.webp",
            alt: "Cenizarios del Parque Conmemorativo",
          },
          {
            src: "/img/img_1_15.webp",
            alt: "Vista del Parque",
          },
          {
            src: "/img/img_1_12.webp",
            alt: "Panorama del Parque",
          },
        ]
      : [
          {
            src: "/img/img_1_26.webp",
            alt: "Columbariums at the Memorial Park",
          },
          {
            src: "/img/img_1_15.webp",
            alt: "Park View",
          },
          {
            src: "/img/img_1_12.webp",
            alt: "Park Panorama",
          },
        ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 title-underline title-shadow">
            <span className="text-emerald-600">{lang === 'es' ? 'Beneficios' : 'Benefits'}</span> {lang === 'es' ? 'del Producto' : 'of the Product'}
          </h2>
          <p className="text-xl text-gray-600">{lang === 'es' ? 'Espacios diseñados con amor y respeto para honrar la memoria' : 'Spaces designed with love and respect to honor memory'}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Cenizarios */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            style={{ background: 'linear-gradient(135deg, rgba(220, 252, 231, 0.85), rgba(219, 234, 254, 0.85))' }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6">
                <svg className="w-9 h-9 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800">{lang === 'es' ? 'Cenizarios' : 'Columbariums'}</h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg font-semibold">
              {lang === 'es'
                ? 'Espacios individuales o grupales que se adquieren a comodato para la custodia de cenizas.'
                : 'Individual or group spaces acquired for the custody of ashes.'}
            </p>
            <div className="space-y-4">
              {(lang === 'es'
                ? [
                    "Dirigido especialmente a usuarios más tradicionales que valoran la conservación en el tiempo",
                    "Pueden ser espacios en altura exteriores o interiores",
                    "Se paga un valor adicional individual por cada ocupación"
                  ]
                : [
                    "Especially aimed at more traditional users who value long-term preservation",
                    "Can be outdoor or indoor elevated spaces",
                    "An additional individual fee is paid for each occupation"
                  ]
              ).map((item, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Osarios - Reemplazado por carrusel de Cenizarios */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(250, 245, 255, 0.85), rgba(252, 231, 243, 0.85))' }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{lang === 'es' ? 'Nuestros Cenizarios' : 'Our Columbariums'}</h3>
            <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={images[currentImage].src}
                    alt={images[currentImage].alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Botones de navegación */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-md text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
                aria-label="Imagen anterior"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-md text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
                aria-label="Siguiente imagen"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Indicadores */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImage 
                        ? 'bg-white w-6' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Ver imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-700 mt-6 text-center text-lg">
              {lang === 'es'
                ? 'Espacios diseñados con dignidad y respeto para preservar el recuerdo de tus seres queridos.'
                : 'Spaces designed with dignity and respect to preserve the memory of your loved ones.'}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            {lang === 'es'
              ? 'Permite que su esencia siga iluminando el mundo desde un lugar de calma y trascendencia.'
              : 'Let their essence continue to illuminate the world from a place of calm and transcendence.'}
          </p>
          <motion.a
            href={
              lang === 'es'
                ? "https://wa.me/573228147191?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20cenizarios"
                : "https://wa.me/573228147191?text=Hello,%20I%20am%20interested%20in%20learning%20more%20about%20the%20columbariums"
            }
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg"
          >
            {lang === 'es' ? 'Solicitar Información' : 'Request Information'}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
