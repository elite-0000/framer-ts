// AnimatedImage.tsx
import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface AnimationProps {
  x?: MotionValue<number>;
  y?: MotionValue<number>;
  rotateX?: MotionValue<number>;
  rotateY?: MotionValue<number>;
  rotate?: MotionValue<number>;
  rotateZ?: MotionValue<number>;
  scale?: MotionValue<number>;
}

interface AnimatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  animationProps: AnimationProps;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  animationProps,
}) => {
  return (
    <motion.div style={{ perspective: 1000, ...animationProps }}>
      <img src={src} alt={alt} width={width} height={height} className={className} />
    </motion.div>
  );
};

export default AnimatedImage;
