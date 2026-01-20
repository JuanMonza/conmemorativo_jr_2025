'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function QuoteForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    celular: '',
    programa: ''
  });

  const programas = [
    'Programa Tradicional - Cenizario de 1 urna',
    'Programa Tradicional - Cenizario de 2 urnas',
    'Programa Trascender - Cenizario por 4 años',
    'Programa Protección - Cenizario por 1 año',
    'Programa Conmemorativo',
    'Post-Finales'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crear mensaje profesional para WhatsApp
    const mensaje = `¡HOLA! Me gustaría recibir una cotización personalizada.

*MIS DATOS:*
• Nombre: ${formData.nombre} ${formData.apellido}
• Celular: ${formData.celular}
• Programa de interés: ${formData.programa}

Me interesa conocer más sobre este servicio del Parque Conmemorativo Jardines del Renacer. ¿Podrían brindarme información detallada sobre precios, opciones de pago y beneficios?

¡Quedo atento a su respuesta!`;

    const whatsappURL = `https://wa.me/573228147191?text=${encodeURIComponent(mensaje)}`;
    
    window.open(whatsappURL, '_blank');
    
    // Limpiar formulario
    setFormData({
      nombre: '',
      apellido: '',
      celular: '',
      programa: ''
    });
  };

  return (
    <section id="cotizacion" className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="bg-emerald-100 rounded-full p-4">
              <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-emerald-600">Cotiza</span> Aquí
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Completa tus datos y te contactaremos por WhatsApp para brindarte una cotización personalizada
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-8 md:p-12 rounded-2xl shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label htmlFor="nombre" className="block text-sm font-bold text-gray-800 mb-2">
                Nombre *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ingresa tu nombre"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none bg-white/50 backdrop-blur-sm text-gray-900 placeholder:text-gray-400"
              />
            </motion.div>

            {/* Apellido */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <label htmlFor="apellido" className="block text-sm font-bold text-gray-800 mb-2">
                Apellido *
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                required
                value={formData.apellido}
                onChange={handleChange}
                placeholder="Ingresa tu apellido"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none bg-white/50 backdrop-blur-sm text-gray-900 placeholder:text-gray-400"
              />
            </motion.div>

            {/* Celular */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label htmlFor="celular" className="block text-sm font-bold text-gray-800 mb-2">
                Celular *
              </label>
              <input
                type="tel"
                id="celular"
                name="celular"
                required
                value={formData.celular}
                onChange={handleChange}
                placeholder="Ej: 3001234567"
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none bg-white/50 backdrop-blur-sm text-gray-900 placeholder:text-gray-400"
              />
              <p className="text-xs text-gray-500 mt-1">Ingresa 10 dígitos sin espacios</p>
            </motion.div>

            {/* Programa */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <label htmlFor="programa" className="block text-sm font-bold text-gray-800 mb-2">
                Programa de Interés *
              </label>
              <select
                id="programa"
                name="programa"
                required
                value={formData.programa}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none bg-white/50 backdrop-blur-sm text-gray-900 cursor-pointer"
              >
                <option value="">Selecciona un programa</option>
                {programas.map((programa, index) => (
                  <option key={index} value={programa}>
                    {programa}
                  </option>
                ))}
              </select>
            </motion.div>

            {/* Botón Enviar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-4"
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar Cotización por WhatsApp
              </motion.button>
            </motion.div>
          </form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-center text-sm text-gray-500 mt-6"
          >
            Al enviar, serás redirigido a WhatsApp con tus datos pre-cargados
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
