'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Introduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: (
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
        </svg>
      ),
      title: "Más Sostenible",
      description: "Una decisión consciente en armonía con la tierra, porque protege el entorno",
      color: "green"
    },
    {
      icon: (
        <svg className="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Más Íntimo",
      description: "Un tributo eterno que acerca el recuerdo al corazón de la familia",
      color: "pink"
    },
    {
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H9a2 2 0 00-2 2v2m2 4h6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Más Accesible",
      description: "Evita los altos costos de un entierro tradicional sin sacrificar dignidad",
      color: "blue"
    }
  ];

  return (
    <section id="introduccion" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 title-underline title-shadow">
            <span className="title-gradient-green">Un espacio de paz</span> para recordar con amor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cuando despedimos a alguien que amamos, buscamos más que un lugar: queremos un espacio lleno de paz, 
            belleza y recuerdo. Un cenizario ofrece justo eso: un entorno diseñado para conservar las cenizas con 
            respeto, armonía y conexión con la naturaleza.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="text-center glass-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-20 h-20 bg-${feature.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-2xl text-gray-700 font-semibold mb-6">
            La despedida no es el final, sino el inicio de una nueva forma de presencia
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En nuestros cenizarios, las cenizas descansan en un entorno lleno de energía, serenidad y belleza natural, 
            donde cada flor y cada suspiro del viento se convierten en un homenaje a la vida.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
