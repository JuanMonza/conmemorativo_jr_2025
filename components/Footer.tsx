'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#introduccion", label: "Un Espacio de Paz" },
    { href: "#proposito", label: "Nuestro Propósito" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#servicios", label: "Servicios" },
    { href: "#galeria", label: "Galería" },
    { href: "#alianzas", label: "Alianzas" },
    { href: "#talleres", label: "Talleres de Duelo" },
    { href: "#arbol-3d", label: "Árbol 3D" },
    { href: "#experiencia-360", label: "Experiencia 360°" },
    { href: "#cotizacion", label: "Cotización" },
    { href: "#contacto", label: "Contacto" },
    { href: "#ubicacion", label: "Ubicación" }
  ];

  const socials = [
    { 
      name: "Instagram", 
      url: "https://www.instagram.com/parqueconmemorativo?igsh=MWhydTFyem54MXBtYQ%3D%3D&utm_source=qr", 
      label: "Instagram de Jardines de Renacer",
      color: "hover:text-pink-400",
      svg: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    },
    { 
      name: "Facebook", 
      url: "https://www.facebook.com/share/1CMoDBhJvA/?mibextid=wwXIfr", 
      label: "Facebook de Jardines de Renacer",
      color: "hover:text-blue-400",
      svg: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    },
    { 
      name: "TikTok", 
      url: "https://tiktok.com/@jardinesderenacer", 
      label: "TikTok de Jardines de Renacer",
      color: "hover:text-white",
      svg: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/img/banner_parque_conmemorativo.png"
              alt="Logo Jardines de Renacer"
              width={256}
              height={64}
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Un descanso eterno con significado, armonía y amor. Cenizarios y osarios en Cartago.
            </p>
            
            {/* Botón Experiencia 360 */}
            <motion.a
              href="#experiencia-360"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
              </svg>
              Tour Virtual 360°
            </motion.a>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: 5, color: '#10b981' }}
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Cartago, Valle del Cauca</p>
              <p>Km 2.5 vía Zaragoza</p>
              <motion.a
                href="tel:+573228147191"
                whileHover={{ color: '#10b981' }}
                className="block hover:text-green-400 transition-colors"
              >
                322 814 7191
              </motion.a>
              <motion.a
                href="mailto:redes.parqueconm@jardinesdelrenacer.co"
                whileHover={{ color: '#10b981' }}
                className="block hover:text-green-400 transition-colors break-all"
              >
                redes.parqueconm@jardinesdelrenacer.co
              </motion.a>
            </div>
            <div className="mt-4 flex space-x-3">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  aria-label={social.label}
                  className={`text-gray-300 ${social.color} transition-colors`}
                >
                  {social.svg}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">© 2026 Jardines de Renacer. Todos los derechos reservados.</p>
          <p className="text-gray-300 text-sm">Parque Conmemorativo Espiritual.</p>
          <p className="text-gray-400 text-sm mt-2">
            Diseñado y desarrollado por{' '}
            <motion.a
              href="https://github.com/JuanMonza"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, color: '#10b981' }}
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              Juan Monza
            </motion.a>
          </p>
        </div>
      </div>
    </footer>
  );
}
