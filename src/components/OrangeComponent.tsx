// OrangeHero.tsx
import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import canOrange from '../assets/can-orange.png';
import orange1 from '../assets/orange1.png';
import leafImage from '../assets/leaf.png';
import AnimatedImage from './AnimatedImage';

export default function OrangeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: MouseEvent) => {
    const container = containerRef.current;
    if (container) {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      mouseX.set(x / width);
      mouseY.set(y / height);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: '#FFEFDA' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-12xl font-bold"
          style={{ color: '#FFD399' }}
        >
          Orange
        </motion.h2>
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatedImage
          src={canOrange}
          alt="Tarragon Orange Can"
          width={200}
          height={300}
          className="object-contain relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1"
          animationProps={{
            x: useTransform(mouseX, [0, 1], [-30, 30]),
            y: useTransform(mouseY, [0, 1], [-30, 30]),
            rotateY: useTransform(mouseX, [0, 1], [-15, 15]),
            rotateX: useTransform(mouseY, [0, 1], [15, -15]),
            rotateZ: useTransform(mouseX, [0, 1], [-10, 10]),
          }}
        />
      </div>

      {/* Slice Image */}
      <div className="relative top-1/3 left-1/2">
        <AnimatedImage
          src={orange1}
          alt="Orange Slice"
          width={250}
          height={250}
          className="object-contain absolute top-1/4 right-3/4"
          animationProps={{
            x: useTransform(mouseX, [0, 1], [-50, 50]),
            y: useTransform(mouseY, [0, 1], [-50, 50]),
            rotate: useTransform(mouseX, [0, 1], [-25, 25]),
            rotateZ: useTransform(mouseX, [0, 1], [-10, 10]),
            scale: useTransform(mouseY, [0, 1], [0.9, 1.1]),
          }}
        />
      </div>

      {/* Leaf Image */}
      <div className="relative top-1/3 left-1/2">
        <AnimatedImage
          src={leafImage}
          alt="Leaf"
          width={100}
          height={100}
          className="object-contain relative bottom-1/2 right-1/4"
          animationProps={{
            x: useTransform(mouseX, [0, 1], [40, -40]),
            y: useTransform(mouseY, [0, 1], [-40, 40]),
            rotate: useTransform(mouseX, [0, 1], [-5, 15]),
            rotateY: useTransform(mouseX, [0, 1], [-10, 10]),
            scale: useTransform(mouseY, [0, 1], [0.9, 1.1]),
          }}
        />
      </div>
    </div>
  );
}
