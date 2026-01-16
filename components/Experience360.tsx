'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Experience360() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [loaded, setLoaded] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const matterportUrl = "https://my.matterport.com/models/gXBj66LW7wm?section=media";

  return (
    <section id="experiencia-360" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Experiencia Virtual <span className="text-emerald-600">360°</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora el parque desde la comodidad de tu hogar con nuestra experiencia inmersiva 360°
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="w-full h-96 md:h-[500px] rounded-xl overflow-hidden bg-gray-200 relative shadow-2xl border-4 border-white/50 backdrop-blur-sm">
            {!loaded ? (
              <div className="absolute inset-0 flex items-center justify-center p-4 bg-gradient-to-br from-green-50/90 to-blue-50/90 backdrop-blur-xl">
                <div className="text-center glass-card p-8 rounded-2xl shadow-xl">
                  <p className="text-gray-600 mb-4 text-lg font-semibold">Experiencia 360° disponible.</p>
                  <motion.button
                    onClick={() => setLoaded(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition-colors"
                  >
                    Cargar Experiencia 360
                  </motion.button>
                </div>
              </div>
            ) : (
              <>
                <iframe
                  src={matterportUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="xr-spatial-tracking; fullscreen; autoplay"
                  className="w-full h-full rounded-xl"
                  title="Tour 360° Jardines de Renacer"
                />
                <motion.button
                  onClick={() => setFullscreen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-black/70 transition-all shadow-lg"
                >
                  Ver en pantalla completa
                </motion.button>
              </>
            )}
          </div>

          <div className="mt-8 text-center">
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { icon: "🖱️", text: "Arrastra para explorar" },
                { icon: "🔍", text: "Zoom con scroll" },
                { icon: "🔄", text: "Rotación automática" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center justify-center space-x-2 text-gray-600"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
        >
          <button
            onClick={() => setFullscreen(false)}
            className="absolute top-4 right-4 text-white text-3xl bg-black/50 px-4 py-2 rounded hover:bg-black/70 z-10"
          >
            Cerrar
          </button>
          <iframe
            src={matterportUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="xr-spatial-tracking; fullscreen; autoplay"
            title="Tour 360° Jardines de Renacer - Pantalla Completa"
          />
        </motion.div>
      )}
    </section>
  );
}
