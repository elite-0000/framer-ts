/* eslint-disable @typescript-eslint/no-explicit-any */
// AnimatedImagesContainer.tsx
import React from 'react';
import AnimatedImage from './AnimatedImage';
import { useTransform } from 'framer-motion';

interface AnimatedImagesContainerProps {
  currentFlavor: string;
  flavors: { [key: string]: any };
  mouseX: any;
  mouseY: any;
}

const AnimatedImagesContainer: React.FC<AnimatedImagesContainerProps> = ({
  currentFlavor,
  flavors,
  mouseX,
  mouseY,
}) => {
  return (
    <>
      {/* Can Image */}
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
          src={currentFlavor === 'pineapple' ? flavors['pineapple'].leafImage : flavors['orange'].leafImage}
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

      {/* Additional Slice Image */}
      <div className="relative top-1/2 left-3/4">
        <AnimatedImage
          src={currentFlavor === 'pineapple' ? flavors['pineapple'].sliceImage : flavors['orange'].sliceImage}
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
    </>
  );
};

export default AnimatedImagesContainer;
