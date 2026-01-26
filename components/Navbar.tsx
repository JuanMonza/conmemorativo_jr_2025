'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#beneficios', label: 'Beneficios' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#alianzas', label: 'Alianzas' },
    { href: '#talleres', label: 'Talleres' },
    { href: '#cotizacion', label: 'Cotización' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b-4 ${
          isScrolled 
            ? 'bg-white/85 backdrop-blur-xl shadow-2xl border-emerald-500/40' 
            : 'bg-white/75 backdrop-blur-lg shadow-lg border-emerald-400/30'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 -ml-4 md:ml-0"
            >
              <Image
                src="/img/banner_parque_conmemorativo.png"
                alt="Logo Jardines de Renacer"
                width={256}
                height={64}
                className="h-16 w-auto pl-4"
              />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, color: '#10b981' }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isScrolled ? 'text-gray-800 hover:text-emerald-600' : 'text-gray-900 hover:text-emerald-600'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              
              {/* CTA Button - Experiencia 360 */}
              <motion.a
                href="#experiencia-360"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.8
                }}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                whileTap={{ scale: 0.95 }}
                className="relative ml-4 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                />
                <span className="relative flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                  </svg>
                  Tour Virtual 360°
                </span>
                <motion.div
                  className="absolute inset-0 border-2 border-white/50 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden -mr-4 p-4 focus:outline-none"
            >
              <svg
                className={`h-6 w-6 transition-colors ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel - Circular/Semi-circular Design */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="fixed top-24 right-4 w-72 bg-white/95 backdrop-blur-xl shadow-2xl z-40 md:hidden rounded-3xl border-2 border-emerald-100"
          >
            <div className="flex flex-col p-6 space-y-3">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ x: 5, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                  className="text-gray-900 text-base font-medium hover:text-emerald-600 transition-all px-4 py-2 rounded-2xl"
                >
                  {item.label}
                </motion.a>
              ))}
              
              {/* CTA Button Mobile - Experiencia 360 */}
              <motion.a
                href="#experiencia360"
                onClick={handleLinkClick}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
                className="relative mt-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-2xl font-bold text-center shadow-lg"
              >
                <span className="flex items-center justify-center gap-2 text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                  </svg>
                  Tour Virtual 360°
                </span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
