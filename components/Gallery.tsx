'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { src: "/img/img_1_1.webp", alt: "Vista aérea del parque" },
    { src: "/img/img_1_10.webp", alt: "Zona verde y jardines" },
    { src: "/img/img_1_12.webp", alt: "Caminos y senderos" },
    { src: "/img/img_1_17.webp", alt: "Árboles y naturaleza" },
    { src: "/img/img_1_20.webp", alt: "Vista panorámica" },
    { src: "/img/img_1_21.webp", alt: "Espacios de contemplación" },
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Galería del <span className="text-emerald-600">Parque</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre la belleza y serenidad de nuestros espacios a través de estas imágenes
          </p>
        </motion.div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setSelectedImage(index)}
              className="relative h-64 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer border-2 border-white/50 backdrop-blur-sm"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile: Carrusel */}
        <div className="md:hidden relative overflow-hidden px-4">
          <div className="py-8">
            <div className="relative h-80 flex items-center justify-center">
              {images.map((image, index) => {
                const offset = index - currentSlide;
                const isActive = index === currentSlide;
                return (
                  <motion.div
                    key={index}
                    className="absolute w-full px-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.8,
                      zIndex: isActive ? 10 : 1
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onClick={() => isActive && setSelectedImage(index)}
                  >
                    <div
                      className="relative h-72 rounded-xl overflow-hidden shadow-xl cursor-pointer border-2 border-white/50 backdrop-blur-sm"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all z-10"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all z-10"
            aria-label="Siguiente"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicadores de navegación */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-emerald-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-8 text-white text-5xl font-bold hover:text-gray-300 bg-black/30 backdrop-blur-md rounded-full w-14 h-14 flex items-center justify-center"
          >
            &times;
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white text-3xl bg-black/50 backdrop-blur-md p-4 rounded-full hover:bg-black/70 transition-all"
          >
            ‹
          </button>
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white text-3xl bg-black/50 backdrop-blur-md p-4 rounded-full hover:bg-black/70 transition-all"
          >
            ›
          </button>
        </motion.div>
      )}
    </section>
  );
}
