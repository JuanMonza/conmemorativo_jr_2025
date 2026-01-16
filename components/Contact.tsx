'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socials = [
    { name: "Instagram", url: "https://www.instagram.com/parqueconmemorativo?igsh=MWhydTFyem54MXBtYQ%3D%3D&utm_source=qr", icon: "📷", gradient: "from-purple-500 to-pink-500" },
    { name: "Facebook", url: "https://www.facebook.com/share/1CMoDBhJvA/?mibextid=wwXIfr", icon: "👍", color: "bg-blue-600" },
    { name: "TikTok", url: "https://tiktok.com/@jardinesderenacer", icon: "🎵", color: "bg-black" }
  ];

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 title-underline title-shadow">
            <span className="title-gradient-green">Contáctanos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para acompañarte y responder todas tus preguntas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 rounded-2xl shadow-lg"
              style={{ background: 'linear-gradient(135deg, rgba(220, 252, 231, 0.7), rgba(219, 234, 254, 0.7))' }}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contáctanos por WhatsApp</h3>
              <p className="text-gray-600 mb-6 text-center">Escríbenos directamente y recibe atención personalizada inmediata</p>
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-5xl">📱</span>
                </div>
              </div>
              <motion.a
                href="https://wa.me/573228147191?text=Hola,%20quiero%20más%20información%20sobre%20Jardines%20de%20Renacer"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full bg-green-500 text-white text-center py-4 px-6 rounded-full hover:bg-green-600 transition-all duration-300 font-semibold text-lg shadow-lg"
              >
                Chatear en WhatsApp
              </motion.a>
              <p className="text-center text-gray-600 mt-4">Línea: <strong>322 814 7191</strong></p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📍</span>
                  <span className="text-gray-700">Cartago, Valle del Cauca - Km 2.5 vía Zaragoza</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📞</span>
                  <span className="text-gray-700">322 814 7191</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✉️</span>
                  <span className="text-gray-700">redes.parqueconm@jardinesdelrenacer.co</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Horarios de Atención</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between"><span>Lunes - Viernes:</span> <span>8:00 AM - 6:00 PM</span></div>
                <div className="flex justify-between"><span>Sábados:</span> <span>9:00 AM - 5:00 PM</span></div>
                <div className="flex justify-between"><span>Domingos:</span> <span>10:00 AM - 4:00 PM</span></div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Síguenos en Redes Sociales</h3>
              <div className="flex space-x-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 ${social.color || `bg-gradient-to-br ${social.gradient}`} rounded-full flex items-center justify-center text-white transition-transform text-xl`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
