'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function Analytics() {
  useEffect(() => {
    // Cargar Google Analytics - Script 1
    const script1 = document.createElement('script');
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    script1.async = true;
    document.head.appendChild(script1);

    // Script 2 - Inicializar Google Analytics
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `;
    document.head.appendChild(script2);

    // Rastrear scroll
    const handleScroll = () => {
      if (typeof window.gtag === 'undefined') return;
      
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage >= 100) {
        window.gtag('event', 'scroll_to_bottom', {
          page_path: window.location.pathname
        });
      }
    };

    // Rastrear tiempo en página
    let timeOnPage = 0;
    const timeInterval = setInterval(() => {
      if (typeof window.gtag === 'undefined') return;
      
      timeOnPage++;
      if (timeOnPage % 30 === 0) {
        window.gtag('event', 'time_on_page', {
          time_seconds: timeOnPage,
          page_path: window.location.pathname
        });
      }
    }, 1000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  return null;
}
