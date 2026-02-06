"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useContext } from 'react';
import { LangContext } from './LangContext';

export default function CorporateExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useContext(LangContext) ?? { lang: 'es' };

  const benefits = [
    {
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m0 10v10l8 4m0-10l8-4" />
        </svg>
      ),
      title: lang === 'es' ? 'Retiros Corporativos' : 'Corporate Retreats',
      description: lang === 'es'
        ? 'Espacios diseñados para que tu equipo conecte, reflexione y fortalezca vínculos'
        : 'Spaces designed for your team to connect, reflect, and strengthen bonds'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: lang === 'es' ? 'Bienestar Emocional' : 'Emotional Well-being',
      description: lang === 'es'
        ? 'Actividades de mindfulness, meditación y conexión con la naturaleza'
        : 'Mindfulness, meditation, and nature connection activities'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: lang === 'es' ? 'Team Building Significativo' : 'Meaningful Team Building',
      description: lang === 'es'
        ? 'Experiencias que generan impacto emocional y cohesión de equipo'
        : 'Experiences that create emotional impact and team cohesion'
    },
    {
      icon: (
        <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: lang === 'es' ? 'Responsabilidad Social' : 'Social Responsibility',
      description: lang === 'es'
        ? 'Actividades de voluntariado y cuidado del espacio que generan propósito compartido'
        : 'Volunteering and space care activities that create shared purpose'
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="corporate-experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido izquierdo */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {lang === 'es'
                ? <>Tu Equipo Merece <span className="text-emerald-600">Espacios Significativos</span></>
                : <>Your Team Deserves <span className="text-emerald-600">Meaningful Spaces</span></>}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {lang === 'es'
                ? 'Jardines de Renacer ofrece un ambiente único para experiencias corporativas que van más allá del entretenimiento. Generamos conexiones profundas, reflexión y bienestar emocional en tu equipo.'
                : 'Jardines de Renacer offers a unique environment for corporate experiences that go beyond entertainment. We foster deep connections, reflection, and emotional well-being in your team.'}
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-1">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.a
                  href={
                    lang === 'es'
                      ? 'https://wa.me/573228147191?text=Hola,%20me%20interesa%20llevar%20a%20mi%20equipo%20al%20Parque%20Conmemorativo%20Jardines%20del%20Renacer%20para%20una%20experiencia%20significativa'
                      : 'https://wa.me/573228147191?text=Hello,%20I%20am%20interested%20in%20taking%20my%20team%20to%20the%20Parque%20Conmemorativo%20Jardines%20del%20Renacer%20for%20a%20meaningful%20experience.'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg"
                >
                  {lang === 'es' ? 'Quiero llevar a mi equipo' : 'I want to take my team'}
                </motion.a>
              </motion.div>

              {/* Contenido derecho - Showcase */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-emerald-100 to-blue-100 rounded-3xl p-8 md:p-12 border-2 border-emerald-200">
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m0 10v10l8 4m0-10l8-4" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2">
                        {lang === 'es' ? 'Retiros Personalizados' : 'Personalized Retreats'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {lang === 'es'
                          ? 'Diseñamos experiencias a medida para tu empresa, considerando tus objetivos y valores.'
                          : 'We design tailored experiences for your company, considering your goals and values.'}
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2">
                        {lang === 'es' ? 'Impacto Medible' : 'Measurable Impact'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {lang === 'es'
                          ? 'Mejora en cohesión, bienestar y productividad del equipo.'
                          : 'Improvement in team cohesion, well-being, and productivity.'}
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-50 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2">
                        {lang === 'es' ? 'Responsabilidad Social' : 'Social Responsibility'}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {lang === 'es'
                          ? 'Conecta tu marca con valores sostenibles y humanitarios.'
                          : 'Connect your brand with sustainable and humanitarian values.'}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    }
