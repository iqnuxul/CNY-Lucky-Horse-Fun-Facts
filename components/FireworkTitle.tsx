import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number; // Original target X (home)
  baseY: number; // Original target Y (home)
  vx: number;
  vy: number;
  color: string;
  size: number;
  density: number; // Mass/inertia factor
}

export const FireworkTitle: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let isActive = true;
    let resizeCleanup: (() => void) | null = null;
    let width = 0;
    let height = 0;

    const init = async () => {
      await document.fonts.ready;
      
      const updateCanvasSize = () => {
         if (!container || !canvas) return;

         const rect = container.getBoundingClientRect();
         width = rect.width;
         const isMobile = width < 768;
         // Taller height for 2-3 lines of text + explosion space
         const displayHeight = isMobile ? 160 : 250; 
         
         const dpr = window.devicePixelRatio || 1;
         
         canvas.width = width * dpr;
         canvas.height = displayHeight * dpr;
         canvas.style.width = `${width}px`;
         canvas.style.height = `${displayHeight}px`;
         
         ctx.scale(dpr, dpr);
         
         createParticles(width, displayHeight, isMobile);
      };

      const createParticles = (w: number, h: number, isMobile: boolean) => {
        // Clear canvas for text sampling
        ctx.clearRect(0, 0, w, h);
        
        const fontSize = isMobile ? 32 : 60;
        const lineHeight = fontSize * 1.2;
        // Changed from 900 to 700 to match standard "font-bold"
        ctx.font = `700 ${fontSize}px "Noto Serif SC", serif`;
        ctx.fillStyle = '#960000'; // Color doesn't matter for sampling, just alpha
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Multi-line Text
        const textLines = ["Happy", "Chinese New Year"];
        const totalTextHeight = textLines.length * lineHeight;
        const startY = (h - totalTextHeight) / 2 + (lineHeight / 2);

        textLines.forEach((line, index) => {
            ctx.fillText(line, w / 2, startY + index * lineHeight);
        });
        
        const dpr = window.devicePixelRatio || 1;
        // Get image data from the scaled canvas size
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        
        particles = [];
        // High density for clarity: gap of 2 pixels (good balance)
        const gap = 2; 

        // Colors: Dominantly Red, with some Gold
        const colors = [
            '#D91E18', // CNY Red
            '#D91E18', 
            '#D91E18', 
            '#FF0000', // Bright Red
            '#F4B400', // Gold
            '#FFD700'  // Bright Gold
        ];

        for (let y = 0; y < canvas.height; y += gap) {
          for (let x = 0; x < canvas.width; x += gap) {
            const i = (y * canvas.width + x) * 4;
            // Check alpha > 128
            if (data[i + 3] > 128) {
              const logicalX = x / dpr;
              const logicalY = y / dpr;
              
              particles.push({
                x: w / 2, // Start at center for "Big Bang" entry
                y: h / 2, 
                baseX: logicalX,
                baseY: logicalY,
                vx: (Math.random() - 0.5) * 20, 
                vy: (Math.random() - 0.5) * 20,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: (Math.random() * 1.5 + 1), 
                density: (Math.random() * 30) + 1,
              });
            }
          }
        }
      };

      updateCanvasSize();
      window.addEventListener('resize', updateCanvasSize);
      resizeCleanup = () => window.removeEventListener('resize', updateCanvasSize);
    };

    const animate = () => {
      if (!isActive || !container || !canvas) return;
      
      const w = container.clientWidth;
      const h = canvas.height / (window.devicePixelRatio || 1);
      
      ctx.clearRect(0, 0, w, h);
      
      const scrollY = window.scrollY;
      
      // Physics Constants
      const springConstant = 0.1; // Strength of pulling back to base position
      const friction = 0.88; // Damping
      
      // Random "Firework Pop" when idle (at top)
      if (scrollY < 10 && Math.random() < 0.03) {
          const randX = Math.random() * w;
          const randY = Math.random() * h;
          const radius = 80; 
          
          particles.forEach(p => {
              const dx = p.x - randX;
              const dy = p.y - randY;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < radius) {
                  const force = (radius - distance) / radius;
                  const angle = Math.atan2(dy, dx);
                  const blastPower = 15; 
                  p.vx += Math.cos(angle) * force * blastPower;
                  p.vy += Math.sin(angle) * force * blastPower;
              }
          });
      }

      for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // 1. Calculate Force to Home (Spring)
          let dx = p.baseX - p.x;
          let dy = p.baseY - p.y;
          
          // 2. Scroll Interaction
          if (scrollY > 0) {
             const influence = Math.min(1, scrollY / 200);
             const effectiveSpring = springConstant * (1 - influence);
             
             const forceX = dx * effectiveSpring;
             const forceY = dy * effectiveSpring;
             
             p.vx += forceX;
             p.vy += forceY;

             // Gravity
             p.vy += (0.5 * influence);
             // Dispersion
             p.vx += (Math.random() - 0.5) * 2 * influence;
             // Dripping
             p.y += scrollY * 0.02 * influence;

          } else {
             // Idle State: Spring back
             p.vx += dx * springConstant;
             p.vy += dy * springConstant;
          }

          // Friction
          p.vx *= friction;
          p.vy *= friction;

          // Position
          p.x += p.vx;
          p.y += p.vy;

          // Draw
          const fadeThreshold = 300; 
          let alpha = 1;
          if (scrollY > 0) {
              alpha = Math.max(0, 1 - scrollY / fadeThreshold);
              if (Math.random() > alpha) continue; 
          }

          if (alpha > 0.05) {
             ctx.fillStyle = p.color;
             ctx.globalAlpha = alpha;
             ctx.beginPath();
             ctx.rect(p.x, p.y, p.size, p.size);
             ctx.fill();
          }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      isActive = false;
      cancelAnimationFrame(animationFrameId);
      if (resizeCleanup) resizeCleanup();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full flex justify-center h-40 md:h-64 overflow-hidden relative z-10 pointer-events-none mt-2">
      <canvas ref={canvasRef} className="absolute top-0 left-0" />
    </div>
  );
};
