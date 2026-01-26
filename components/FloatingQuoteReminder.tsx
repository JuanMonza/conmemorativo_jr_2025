'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FloatingQuoteReminder() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Mostrar el popup después de 10 segundos de navegación
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const closeReminder = () => {
    setIsOpen(false);
  };

  const handleQuoteClick = () => {
    window.open(
      'https://wa.me/573228147191?text=Hola,%20deseo%20información%20inmediata%20y%20cotización%20de%20cenizarios%20para%20el%20Parque%20Conmemorativo%20Jardines%20del%20Renacer',
      '_blank'
    );
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-24 right-6 z-40 max-w-xs"
        >
          <div className="bg-white/90 rounded-2xl shadow-2xl overflow-hidden border border-white/50 backdrop-blur-xl">
            {/* Encabezado con color */}
            <div className="bg-gradient-to-r from-emerald-600/90 to-emerald-700/90 text-white p-4 backdrop-blur-md">
              <h3 className="font-bold text-lg">¿Deseas información inmediata?</h3>
            </div>

            {/* Contenido */}
            <div className="p-4">
              <p className="text-gray-700 text-sm mb-4">
                Cotiza tu cenizario ahora y conoce nuestras opciones personalizadas. Responderemos en minutos.
              </p>

              {/* Botones de acción */}
              <div className="flex gap-2">
                <motion.button
                  onClick={handleQuoteClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all text-sm"
                >
                  Cotizar ahora
                </motion.button>
                <motion.button
                  onClick={closeReminder}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Cerrar"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Indicador de posición */}
            <div className="bg-emerald-500/20 backdrop-blur-md px-4 py-2 text-center text-xs text-emerald-700 font-medium border-t border-white/20">
              🎯 Promoción vigente — Consulta sin compromiso
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
