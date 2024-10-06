import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, MotionValue } from 'framer-motion';
import canOrange from './assets/can-orange.png';
import orange1 from './assets/orange1.png';
import pineapple1 from './assets/pineapple1.png';
import canPineapple from './assets/can-pineapple.png';
import leafImage from './assets/leaf.png';
import orangeSlice from './assets/orange2.png';
import pineappleSlice from './assets/pineapple3.png'; 
import pineapple from './assets/pineapple2.png'; 

type Flavor = 'orange' | 'pineapple';

interface FlavorDetails {
  name: string;
  color: string;
  textColor: string;
  can: string;
  slice: string;
}

interface Flavors {
  [key: string]: FlavorDetails;
}

const flavors: Flavors = {
  orange: {
    name: 'Orange',
    color: '#FFEFDA',
    textColor: '#FFD399',
    can: canOrange,
    slice: orange1,
  },
  pineapple: {
    name: 'Pineapple',
    color: '#E4FFC0',
    textColor: '#B7EC73',
    can: canPineapple,
    slice: pineapple,
  },
};

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

export default function TarragonHero() {
  const [currentFlavor, setCurrentFlavor] = useState<Flavor>('orange');
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const switchFlavor = () => {
    setCurrentFlavor((prev) => (prev === 'orange' ? 'pineapple' : 'orange'));
  };

  useEffect(() => {
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

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: flavors[currentFlavor].color }}
    >
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          Tarragon
        </motion.h1>
        <nav>
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="flex space-x-6"
          >
            {['Products', 'About', 'Insights'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }}>
                <a href="#" className="text-lg">
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </header>

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
          style={{ color: flavors[currentFlavor].textColor }}
        >
          {flavors[currentFlavor].name}
        </motion.h2>
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatedImage
          src={flavors[currentFlavor].can}
          alt={`Tarragon ${currentFlavor} Can`}
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
          src={flavors[currentFlavor].slice}
          alt={`${currentFlavor} Slice`}
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
            src={currentFlavor === 'pineapple' ? pineapple1 : leafImage} 
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
         {/* slice Image */}
      <div className="relative top-1/2 left-3/4">
        <AnimatedImage
           src={currentFlavor === 'pineapple' ? pineappleSlice : orangeSlice}
          alt="Slice"
          width={250}
          height={250}
          className="object-contain relative bottom-3/4 right-1/2"
          animationProps={{
            x: useTransform(mouseX, [0, 1], [40, -40]),
            y: useTransform(mouseY, [0, 1], [-40, 40]),
            rotateZ: useTransform(mouseX, [1, 0], [-1, 1]),
            scale: useTransform(mouseY, [0, 1], [0.9, 1.1]),
          }}
        />
      </div>
      <button
        onClick={switchFlavor}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-4 bg-transparent border-2 border-black rounded-md shadow-md"
      >
        Switch Flavor
      </button>
    </div>
  );
}