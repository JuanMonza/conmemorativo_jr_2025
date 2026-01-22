'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Mostrar el popup después de 3 segundos
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay oscuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden">
              {/* Botón cerrar */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                aria-label="Cerrar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Contenido del popup */}
              <div className="p-8 md:p-12 text-center">
                {/* Imagen/Logo */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <Image
                    src="/img/banner_parque_conmemorativo_logo.png"
                    alt="Parque Conmemorativo"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Título */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Oferta Especial
                </h2>

                {/* Descripción */}
                <p className="text-xl text-gray-600 mb-6">
                  Aprovecha nuestra promoción exclusiva en <span className="text-emerald-600 font-bold">Cenizarios</span>
                </p>

                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-6 mb-8">
                  <p className="text-2xl font-bold text-emerald-600 mb-2">
                    20% de Descuento
                  </p>
                  <p className="text-gray-700">
                    En todos nuestros servicios durante este mes
                  </p>
                </div>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="https://wa.me/573228147191?text=Hola,%20quiero%20información%20sobre%20la%20promoción%20especial"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg"
                  >
                    Contactar por WhatsApp
                  </motion.a>
                  
                  <motion.button
                    onClick={closePopup}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-200 text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300"
                  >
                    Ver más tarde
                  </motion.button>
                </div>

                {/* Texto adicional */}
                <p className="text-sm text-gray-500 mt-6">
                  * Promoción válida por tiempo limitado
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
