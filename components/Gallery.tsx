'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: "/img/letreo.jpg", alt: "Vista del parque 1" },
    { src: "/img/cenizarios.jpg", alt: "Vista del parque 2" },
    { src: "/img/panorama-del-parque-de-la-ciudad-de-un-hermoso-parque.webp", alt: "Vista del parque 3" },
    { src: "/img/parque-con-un-camino-de-madera-y-bancos.webp", alt: "Vista del parque 4" },
    { src: "/img/pathway-3596034_1280.webp", alt: "Vista del parque 5" },
    { src: "/img/autumn-3731094_1280.jpg", alt: "Vista del parque 6" },
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
