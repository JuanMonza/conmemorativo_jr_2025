'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socials = [
    { 
      name: "Instagram", 
      url: "https://www.instagram.com/parqueconmemorativo?igsh=MWhydTFyem54MXBtYQ%3D%3D&utm_source=qr", 
      gradient: "from-purple-500 to-pink-500",
      svg: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    },
    { 
      name: "Facebook", 
      url: "https://www.facebook.com/share/1CMoDBhJvA/?mibextid=wwXIfr", 
      color: "bg-blue-600",
      svg: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    },
    { 
      name: "TikTok", 
      url: "https://tiktok.com/@jardinesderenacer", 
      color: "bg-black",
      svg: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
    }
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
            <span className="text-emerald-600">Contáctanos</span>
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
            <div className="glass-card p-8 rounded-2xl shadow-xl"
              style={{ background: 'linear-gradient(135deg, rgba(220, 252, 231, 0.85), rgba(219, 234, 254, 0.85))' }}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contáctanos por WhatsApp</h3>
              <p className="text-gray-600 mb-6 text-center">Escríbenos directamente y recibe atención personalizada inmediata</p>
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border-2 border-green-200">
                  <img 
                    src="/img/banner_parque_conmemorativo_logo.png" 
                    alt="Logo Parque Conmemorativo" 
                    className="w-20 h-20 object-contain"
                  />
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
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Cartago, Valle del Cauca - Km 2.5 vía Zaragoza</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <motion.a
                    href="tel:+573228147191"
                    whileHover={{ color: '#2563eb' }}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    322 814 7191
                  </motion.a>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                    </svg>
                  </div>
                  <motion.a
                    href="mailto:redes.parqueconm@jardinesdelrenacer.co"
                    whileHover={{ color: '#9333ea' }}
                    className="text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    redes.parqueconm@jardinesdelrenacer.co
                  </motion.a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Horarios de Atención</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between"><span>Lunes - Viernes:</span> <span>7:30 AM - 5:00 PM</span></div>
                <div className="flex justify-between"><span>Sábados:</span> <span>7:30 AM - 5:00 PM</span></div>
                <div className="flex justify-between"><span>Domingos:</span> <span>Cerrado</span></div>
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
                    className={`w-12 h-12 ${social.color || `bg-gradient-to-br ${social.gradient}`} rounded-full flex items-center justify-center text-white transition-transform`}
                  >
                    {social.svg}
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
