'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#servicios", label: "Servicios" },
    { href: "#alianzas", label: "Alianzas" },
    { href: "#talleres", label: "Talleres de Duelo" }
  ];

  const socials = [
    { name: "Instagram", url: "https://www.instagram.com/parqueconmemorativo?igsh=MWhydTFyem54MXBtYQ%3D%3D&utm_source=qr", icon: "📷", label: "Instagram de Jardines de Renacer" },
    { name: "Facebook", url: "https://www.facebook.com/share/1CMoDBhJvA/?mibextid=wwXIfr", icon: "👍", label: "Facebook de Jardines de Renacer" },
    { name: "TikTok", url: "https://tiktok.com/@jardinesderenacer", icon: "🎵", label: "TikTok de Jardines de Renacer" }
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
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              {links.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: '#10b981' }}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Nuestros Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Cenizarios y Osarios</li>
              <li>Protocolo / Gala</li>
              <li>Ceremonias Clásicas</li>
              <li>Servicios Lúdicos</li>
              <li>Talleres de Duelo</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Cartago, Valle del Cauca</p>
              <p>Km 2.5 vía Zaragoza</p>
              <p>322 814 7191</p>
              <p>redes.parqueconm@jardinesdelrenacer.co</p>
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
                  className="text-2xl"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">© 2026 Jardines de Renacer. Todos los derechos reservados.</p>
          <p className="text-gray-300 text-sm">Parque Conmemorativo Espiritual.</p>
          <p className="text-gray-400 text-sm mt-2">Diseñado y desarrollado por Juan Monsalve</p>
        </div>
      </div>
    </footer>
  );
}
