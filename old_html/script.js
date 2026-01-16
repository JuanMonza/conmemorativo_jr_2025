/**
 * @file script.js
 * @description Este archivo contiene toda la lógica de JavaScript para la página "Jardines de Renacer".
 */

// Espera a que todo el contenido del DOM esté cargado antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', async () => {

    // --- SDK Initialization for Editable Content ---
    const defaultConfig = {
        hero_title: "Parque Conmemorativo Jardines de Renacer",
        hero_subtitle: "Un espacio de memoria, paz y reflexión",
        intro_title: "Bienvenidos al Parque Conmemorativo",
        intro_text: "Un lugar sagrado dedicado a la memoria, donde cada jardín cuenta una historia y cada sendero invita a la reflexión. Jardines de Renacer es más que un parque; es un espacio de sanación y remembranza.",
        purpose_title: "Nuestro Propósito",
        contact_title: "Contáctanos"
    };

    if (window.elementSdk) {
        try {
            await window.elementSdk.init({
                defaultConfig,
                onConfigChange: (config) => {
                    document.getElementById('hero-title').textContent = config.hero_title || defaultConfig.hero_title;
                    document.getElementById('hero-subtitle').textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
                    document.getElementById('intro-title').textContent = config.intro_title || defaultConfig.intro_title;
                    document.getElementById('intro-text').textContent = config.intro_text || defaultConfig.intro_text;
                    document.getElementById('purpose-title').textContent = config.purpose_title || defaultConfig.purpose_title;
                    document.getElementById('contact-title').textContent = config.contact_title || defaultConfig.contact_title;
                }
            });
        } catch (error) {
            console.error("Error initializing Elements SDK:", error);
        }
    }

    // --- Mobile Menu Functionality ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // --- Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                mobileMenu?.classList.add('hidden');
            }
        });
    });

    // --- Intersection Observer for Fade-in Animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    document.querySelectorAll('.title-underline').forEach(el => {
        observer.observe(el);
    });

    // --- 360° Viewer Initialization ---
    let viewer360 = null;
    const init360Viewer = () => {
        const container = document.getElementById('viewer-360');
        if (!container || viewer360) return;

        try {
            const samplePanorama = 'data:image/svg+xml,' + encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 1024">
                <defs>
                    <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#98FB98;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="2048" height="1024" fill="url(#skyGradient)"/>
                
                <!-- Trees -->
                <g fill="#228B22">
                    <circle cx="200" cy="800" r="80"/>
                    <circle cx="400" cy="780" r="90"/>
                    <circle cx="600" cy="820" r="70"/>
                    <circle cx="1000" cy="790" r="85"/>
                    <circle cx="1200" cy="810" r="75"/>
                    <circle cx="1400" cy="785" r="95"/>
                    <circle cx="1600" cy="800" r="80"/>
                    <circle cx="1800" cy="795" r="88"/>
                </g>
                
                <!-- Tree trunks -->
                <g fill="#8B4513">
                    <rect x="190" y="800" width="20" height="100"/>
                    <rect x="390" y="780" width="20" height="120"/>
                    <rect x="590" y="820" width="20" height="80"/>
                    <rect x="990" y="790" width="20" height="110"/>
                    <rect x="1190" y="810" width="20" height="90"/>
                    <rect x="1390" y="785" width="20" height="115"/>
                    <rect x="1590" y="800" width="20" height="100"/>
                    <rect x="1790" y="795" width="20" height="105"/>
                </g>
                
                <!-- Ground -->
                <rect x="0" y="900" width="2048" height="124" fill="#90EE90"/>
                
                <!-- Paths -->
                <path d="M0,950 Q512,930 1024,950 T2048,950" stroke="#D2B48C" stroke-width="40" fill="none"/>
                
                <!-- Flowers -->
                <g fill="#FF69B4">
                    <circle cx="300" cy="920" r="8"/>
                    <circle cx="500" cy="935" r="6"/>
                    <circle cx="800" cy="925" r="7"/>
                    <circle cx="1100" cy="940" r="9"/>
                    <circle cx="1300" cy="930" r="8"/>
                    <circle cx="1500" cy="945" r="6"/>
                </g>
                
                <!-- Benches -->
                <g fill="#8B4513">
                    <rect x="450" y="880" width="80" height="15"/>
                    <rect x="460" y="870" width="10" height="25"/>
                    <rect x="520" y="870" width="10" height="25"/>
                    
                    <rect x="1250" y="885" width="80" height="15"/>
                    <rect x="1260" y="875" width="10" height="25"/>
                    <rect x="1320" y="875" width="10" height="25"/>
                </g>
                
                <!-- Clouds -->
                <g fill="#FFFFFF" opacity="0.8">
                    <ellipse cx="300" cy="200" rx="60" ry="30"/>
                    <ellipse cx="800" cy="150" rx="80" ry="40"/>
                    <ellipse cx="1400" cy="180" rx="70" ry="35"/>
                    <ellipse cx="1800" cy="160" rx="90" ry="45"/>
                </g>
            </svg>
        `);
            viewer360 = new PhotoSphereViewer.Viewer({
                container: container,
                panorama: samplePanorama,
                autorotateDelay: 3000,
                autorotateSpeed: '0.5rpm',
                navbar: ['autorotate', 'zoom', 'fullscreen'],
                loadingTxt: 'Cargando vista panorámica...'
            });
        } catch (error) {
            console.error('Error initializing 360° viewer:', error);
            container.innerHTML = `
            <div class="flex items-center justify-center h-full">
                <div class="text-center">
                    <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                    </svg>
                    <p class="text-gray-600">Error al cargar la experiencia 360°</p>
                </div>
            </div>
        `;
        }
    };

    const viewer360Section = document.getElementById('experiencia-360');
    if (viewer360Section) {
        new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(init360Viewer, 300);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 }).observe(viewer360Section);
    }

    // --- Contact Form Handling ---
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    const showFormMessage = (message, type) => {
        if (!formMessage) return;
        formMessage.textContent = message;
        formMessage.className = `mt-4 p-4 rounded-lg ${type === 'success'
            ? 'bg-green-100 text-green-700 border border-green-200'
            : 'bg-red-100 text-red-700 border border-red-200'
        }`;
        formMessage.classList.remove('hidden');
        setTimeout(() => formMessage.classList.add('hidden'), 5000);
    };

    contactForm?.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        if (!data.nombre || !data.email || !data.mensaje) {
            showFormMessage('Por favor, completa todos los campos requeridos.', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showFormMessage('Por favor, ingresa un correo electrónico válido.', 'error');
            return;
        }

        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;

        setTimeout(() => {
            showFormMessage('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.', 'success');
            this.reset();
            submitBtn.textContent = 'Enviar Mensaje';
            submitBtn.disabled = false;
        }, 1500);
    });

    // --- Scroll Effects (Navbar & Scroll-to-Top Button) ---
    const navbar = document.querySelector('nav');
    const scrollTopBtn = document.getElementById('scroll-top-btn');

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Navbar effect
        if (navbar) {
            if (currentScrollY > 50) {
                navbar.classList.add('scrolled', 'shadow-lg');
            } else {
                navbar.classList.remove('scrolled', 'shadow-lg');
            }
        }

        // Scroll-to-top button visibility
        if (scrollTopBtn) {
            if (currentScrollY > 300) {
                scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                scrollTopBtn.classList.add('opacity-0', 'pointer-events-none');
            }
        }
    });

    // --- Scroll to Top Functionality ---
    scrollTopBtn?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    console.log('Parque Conmemorativo Jardines de Renacer - Landing page loaded successfully');
});
