'use client';

import { useEffect, useRef } from 'react';

export default function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const time = useRef(0);
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      target.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      };
    };

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      time.current += 0.005;
      
      // Smooth mouse following
      mouse.current.x += (target.current.x - mouse.current.x) * 0.1;
      mouse.current.y += (target.current.y - mouse.current.y) * 0.1;
      
      const width = canvas.width;
      const height = canvas.height;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#4f46e5');  // indigo-600
      gradient.addColorStop(1, '#7c3aed');  // violet-600
      
      // Draw fluid
      ctx.fillStyle = gradient;
      ctx.beginPath();
      
      const centerX = width / 2 + Math.sin(time.current * 0.5) * 100 + mouse.current.x * 50;
      const centerY = height / 2 + Math.cos(time.current * 0.3) * 100 + mouse.current.y * 50;
      
      const radius = Math.min(width, height) * 0.6;
      
      // Create blob shape
      ctx.ellipse(
        centerX,
        centerY,
        radius + Math.sin(time.current) * 50,
        radius + Math.cos(time.current * 0.7) * 50,
        time.current * 0.2,
        0,
        Math.PI * 2
      );
      
      // Apply blur
      ctx.filter = 'blur(80px)';
      ctx.fill();
      ctx.filter = 'none';
      
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Initial setup
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-10"
      style={{ pointerEvents: 'none' }}
    />
  );
}
