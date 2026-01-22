'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openGoogleMaps = () => {
    const destination = "4.711330,-75.920030"; // Coordenadas del parque
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(url, '_blank');
  };

  const features = [
    { 
      icon: <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>,
      title: "En Automóvil", 
      description: "Fácil acceso desde la vía principal",
      action: openGoogleMaps
    },
    { 
      icon: <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/></svg>,
      title: "Transporte Público", 
      description: "Rutas disponibles desde el centro" 
    },
    { 
      icon: <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/></svg>,
      title: "Estacionamiento", 
      description: "Amplio parqueadero gratuito" 
    }
  ];

  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"><span className="text-blue-600">¿Cómo Llegar?</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos ubicados en Cartago, Valle del Cauca - Km 2.5 vía Zaragoza
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl h-96 mb-8 border-4 border-white/50 backdrop-blur-sm">
            {/* Overlay con Logo y Nombre - Posicionado en el centro del mapa */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <Image
                    src="/img/banner_parque_conmemorativo_logo.png"
                    alt="Logo Parque Conmemorativo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">Parque Conmemorativo</h3>
                  <p className="text-xs text-gray-600">Jardines de Renacer</p>
                </div>
              </div>
            </div>
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3976.498!2d-75.92003!3d4.71133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNDInNDAuOCJOIDc1wrA1NScxMi4xIlc!5e0!3m2!1ses!2sco!4v1699999999999!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={feature.action}
                className={`text-center p-6 bg-blue-50/90 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-blue-100 ${feature.action ? 'cursor-pointer' : ''}`}
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
