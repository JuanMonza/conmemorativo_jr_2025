'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { motion } from 'framer-motion';

const quotes = [
  { text: "La vida es lo que pasa mientras estás ocupado", author: "John Lennon" },
  { text: "Vive como si fueras a morir mañana", author: "Mahatma Gandhi" },
  { text: "Cada día es una nueva oportunidad", author: "Frida Kahlo" },
  { text: "La verdadera riqueza es la salud", author: "Jorge Mojica" },
  { text: "Ama profundamente", author: "Frida Kahlo" },
  { text: "La vida es un viaje", author: "Ralph Waldo Emerson" },
  { text: "Lo que importa es cómo vives", author: "Anónimo" },
  { text: "Vivir es arriesgarse", author: "Jorge Mojica" },
  { text: "En la vida el camino es lo importante", author: "Confucio" },
  { text: "La vida nos da segundas oportunidades", author: "Paulo Coelho" },
  { text: "Vive intensamente", author: "Frida Kahlo" },
  { text: "Honra tu esencia", author: "Anónimo" },
  { text: "El gran poder existe en la fuerza irresistible del amor", author: "Gabriel García Márquez" }
  

];

const MUSIC_SRC = "/relaxing-soft-piano-music-431679.mp3"; // Archivo mp3 actualizado

function createTextSprite(text: string, author: string, size: number = 60) {
  const canvas = document.createElement('canvas');
  const padding = 15;
  const lineHeight = 24;
  
  // Calcular dimensiones basadas en el texto
  const context = canvas.getContext('2d')!;
  context.font = 'bold 26px Arial';
  
  // Envolver texto principal y calcular altura
  const maxWidth = 150;
  const words = text.split(' ');
  let line = '';
  let lines = [];

  for (let word of words) {
    const testLine = line + word + ' ';
    const metrics = context.measureText(testLine);
    if (metrics.width > maxWidth && line !== '') {
      lines.push(line);
      line = word + ' ';
    } else {
      line = testLine;
    }
  }
  lines.push(line);

  // Calcular dimensiones del canvas
  const textWidth = Math.max(...lines.map(l => context.measureText(l).width));
  const mainTextHeight = lines.length * lineHeight;
  const authorHeight = 18;
  const totalHeight = mainTextHeight + authorHeight + 5;
  
  canvas.width = textWidth + padding * 2;
  canvas.height = totalHeight + padding * 2;

  // Limpiar canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar burbuja redondeada (pensamiento)
  const borderRadius = 12;
  const x = 0;
  const y = 0;
  const w = canvas.width;
  const h = canvas.height;

  // Fondo blanco con borde
  context.fillStyle = 'rgba(255, 255, 255, 0.95)';
  context.strokeStyle = 'rgba(16, 185, 129, 0.8)';
  context.lineWidth = 2;
  
  // Dibujar rectángulo redondeado
  context.beginPath();
  context.moveTo(x + borderRadius, y);
  context.lineTo(x + w - borderRadius, y);
  context.quadraticCurveTo(x + w, y, x + w, y + borderRadius);
  context.lineTo(x + w, y + h - borderRadius);
  context.quadraticCurveTo(x + w, y + h, x + w - borderRadius, y + h);
  context.lineTo(x + borderRadius, y + h);
  context.quadraticCurveTo(x, y + h, x, y + h - borderRadius);
  context.lineTo(x, y + borderRadius);
  context.quadraticCurveTo(x, y, x + borderRadius, y);
  context.closePath();
  context.fill();
  context.stroke();

  // Dibuja bolitas de pensamiento
  const bubbles = [
    { x: padding / 2, y: h - 8, r: 4 },
    { x: 15, y: h + 2, r: 2 },
  ];

  context.fillStyle = 'rgba(16, 185, 129, 0.6)';
  for (let bubble of bubbles) {
    context.beginPath();
    context.arc(bubble.x, bubble.y, bubble.r, 0, Math.PI * 2);
    context.fill();
  }

  // Dibujar texto principal
  context.fillStyle = 'rgba(30, 41, 59, 0.95)';
  context.font = 'bold 26px Arial';
  context.textAlign = 'left';
  context.textBaseline = 'top';

  let y_text = padding;
  for (let lineText of lines) {
    context.fillText(lineText, padding, y_text);
    y_text += lineHeight;
  }

  // Dibujar autor
  context.fillStyle = 'rgba(107, 114, 128, 0.8)';
  context.font = 'italic 16px Arial';
  context.fillText('— ' + author, padding, y_text + 5);

  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearFilter;
  
  const material = new THREE.SpriteMaterial({ map: texture, sizeAttenuation: true });
  const sprite = new THREE.Sprite(material);
  
  // Escala proporcional al tamaño del texto (más pequeña)
  const scale = size / 100;
  sprite.scale.set(textWidth * scale / 100, totalHeight * scale / 100, 1);

  return sprite;
}

export default function Tree3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const treeGroupRef = useRef<THREE.Group | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const dragRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [selectedQuote, setSelectedQuote] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Configurar escena
    const scene = new THREE.Scene();
    scene.background = null; // Transparente para ver el fondo del div
    sceneRef.current = scene;

    // Configurar cámara
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Configurar renderizador
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Crear grupo para el árbol
    const treeGroup = new THREE.Group();
    sceneRef.current.add(treeGroup);
    treeGroupRef.current = treeGroup;

    // Luces
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Cargar modelo GLB
    const loader = new GLTFLoader();
    loader.load('/img/árbol_3d_modelo.glb', (gltf) => {
      const model = gltf.scene;
      model.position.set(0, 0, 0);
      model.scale.set(5, 5, 5); // Más grande
      
      // Configurar sombras
      model.traverse((node) => {
        if ((node as THREE.Mesh).isMesh) {
          (node as THREE.Mesh).castShadow = true;
          (node as THREE.Mesh).receiveShadow = true;
        }
      });

      treeGroup.add(model);

      // Agregar dichos alrededor del árbol
      const radius = 3;
      quotes.forEach((quote, index) => {
        const angle = (index / quotes.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.cos(index / quotes.length * Math.PI) * 0.8;

        const sprite = createTextSprite(quote.text, quote.author, 50);
        sprite.position.set(x, y, z);

        // Hacer que mire hacia el centro
        sprite.lookAt(0, 0, 0);

        // Hacer el sprite interactivo
        (sprite as any).userData.quote = quote.text + ' — ' + quote.author;

        treeGroup.add(sprite);
      });

      setIsLoading(false);
    }, undefined, (error) => {
      console.error('Error cargando el modelo:', error);
      setIsLoading(false);
    });

    // Raycaster para detectar clics
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseClick = (e: MouseEvent) => {
      if (isDragging) return;

      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      if (treeGroup) {
        const intersects = raycaster.intersectObjects(treeGroup.children);
        
        for (let i = 0; i < intersects.length; i++) {
          const quote = (intersects[i].object as any).userData.quote;
          if (quote) {
            setSelectedQuote(quote);
            setTimeout(() => setSelectedQuote(null), 4000); // Auto cerrar después de 4 segundos
            break;
          }
        }
      }
    };

    // Manejo de mouse para rotación
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();

      const deltaX = e.clientX - dragRef.current.x;
      const deltaY = e.clientY - dragRef.current.y;

      dragRef.current.targetX += deltaY * 0.005;
      dragRef.current.targetY += deltaX * 0.005;

      dragRef.current.x = e.clientX;
      dragRef.current.y = e.clientY;
    };

    const onMouseDown = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'CANVAS') {
        setIsDragging(true);
        dragRef.current.x = e.clientX;
        dragRef.current.y = e.clientY;
      }
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !e.touches[0]) return;
      e.preventDefault();

      const deltaX = e.touches[0].clientX - dragRef.current.x;
      const deltaY = e.touches[0].clientY - dragRef.current.y;

      dragRef.current.targetX += deltaY * 0.005;
      dragRef.current.targetY += deltaX * 0.005;

      dragRef.current.x = e.touches[0].clientX;
      dragRef.current.y = e.touches[0].clientY;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches[0]) {
        setIsDragging(true);
        dragRef.current.x = e.touches[0].clientX;
        dragRef.current.y = e.touches[0].clientY;
      }
    };

    const onTouchEnd = () => {
      setIsDragging(false);
    };

    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('click', onMouseClick);
    renderer.domElement.addEventListener('touchmove', onTouchMove);
    renderer.domElement.addEventListener('touchstart', onTouchStart);
    renderer.domElement.addEventListener('touchend', onTouchEnd);

    // Autoplay al cargar
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(() => {});
    }

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);

      if (treeGroup) {
        treeGroup.rotation.x += (dragRef.current.targetX - treeGroup.rotation.x) * 0.1;
        treeGroup.rotation.y += (dragRef.current.targetY - treeGroup.rotation.y) * 0.1;

        // Rotación automática suave si no está siendo arrastrado
        if (!isDragging) {
          dragRef.current.targetY += 0.0005;
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    // Manejo de redimensionamiento
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Limpiar
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      renderer.domElement.removeEventListener('mouseup', onMouseUp);
      renderer.domElement.removeEventListener('click', onMouseClick);
      renderer.domElement.removeEventListener('touchmove', onTouchMove);
      renderer.domElement.removeEventListener('touchstart', onTouchStart);
      renderer.domElement.removeEventListener('touchend', onTouchEnd);
      renderer.dispose();
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

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
    <section id="arbol-3d" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Árbol de <span className="text-emerald-600">Vida y Memoria</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactúa con nuestro árbol 3D. Rota, explora y toca los dichos inspiradores que flotan alrededor.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Botón de música estilo glass */}
          <button
            onClick={toggleMusic}
            className="absolute top-6 right-6 z-20 backdrop-blur-md bg-white/30 border border-white/40 rounded-full shadow-lg p-4 flex items-center justify-center transition hover:bg-white/50"
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
          </button>
          <audio ref={audioRef} src={MUSIC_SRC} loop autoPlay />

          <div
            ref={containerRef}
            className="w-full h-[700px] rounded-3xl shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing relative"
            style={{ 
              touchAction: 'none',
              backgroundImage: 'url(/img/illustration-tourist-attraction-city.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              backgroundColor: '#f3f4f6'
            }}
          >
            {/* Dicho seleccionado debajo del canvas */}
            {selectedQuote && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-6 right-6 z-10 pointer-events-auto max-w-xs"
              >
                <div className="bg-gradient-to-r from-emerald-100 to-blue-100 border-2 border-emerald-500 rounded-2xl p-4 shadow-2xl">
                  <p className="text-sm font-semibold text-gray-800 italic text-center">
                    "{selectedQuote}"
                  </p>
                </div>
              </motion.div>
            )}
          </div>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 rounded-3xl">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Cargando árbol 3D...</p>
              </div>
            </div>
          )}
          
          {/* Info */}
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">
              💫 Arrastra para rotar el árbol | Toca los dichos para verlos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
