'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Botón de música flotante
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 left-6 flex flex-col-reverse gap-4 z-50 items-start">
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-800 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-gray-700 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={toggleMusic}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="backdrop-blur-md bg-white/30 border border-white/40 rounded-full shadow-lg p-4 flex items-center justify-center transition hover:bg-white/50"
            aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
          >
            {isPlaying ? (
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="#16a34a"/>
              </svg>
            ) : (
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7L8 5z" fill="#16a34a"/>
              </svg>
            )}
            <audio ref={audioRef} src="/img/relaxing-soft-piano-music-431679.mp3" loop autoPlay />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
