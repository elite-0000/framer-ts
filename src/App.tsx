// TarragonHero.tsx
import React, { useState, useRef, useEffect } from 'react';
import { useMotionValue } from 'framer-motion';
import Header from './components/Header';
import FlavorDisplay from './components/FlavorDetail';
import AnimatedImagesContainer from './components/AnimatedImagesContainer';
import SwitchFlavorButton from './components/Button';
import {
  canOrange,
  canPineapple,
  orange1,
  orange2,
  pineapple1,
  pineapple2,
  pineapple3,
  leafImage,
} from './assets';

// Define your types
type Flavor = 'orange' | 'pineapple';

interface FlavorDetails {
  name: string;
  color: string;
  textColor: string;
  can: string;
  slice: string;
  leafImage: string;
  sliceImage: string;
}

interface Flavors {
  [key: string]: FlavorDetails;
}

// Define flavors with additional images
const flavors: Flavors = {
  orange: {
    name: 'Orange',
    color: '#FFEFDA',
    textColor: '#FFD399',
    can: canOrange,
    slice: orange1,
    leafImage: leafImage,
    sliceImage: orange2,
  },
  pineapple: {
    name: 'Pineapple',
    color: '#E4FFC0',
    textColor: '#B7EC73',
    can: canPineapple,
    slice: pineapple1,
    leafImage: pineapple2, 
    sliceImage: pineapple3,
  },
};

const App: React.FC = () => {
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
      <Header title="Tarragon" navItems={['Products', 'About', 'Insights']} />

      <FlavorDisplay
        flavorName={flavors[currentFlavor].name}
        textColor={flavors[currentFlavor].textColor}
      />

      <AnimatedImagesContainer
        currentFlavor={currentFlavor}
        flavors={flavors}
        mouseX={mouseX}
        mouseY={mouseY}
      />

      <SwitchFlavorButton onClick={switchFlavor} />
    </div>
  );
};

export default App;
