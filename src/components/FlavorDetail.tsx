import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface FlavorDisplayProps {
  flavorName: string;
  textColor: string;
}

const FlavorDisplay: FC<FlavorDisplayProps> = ({ flavorName, textColor }): JSX.Element => {
  return (
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
        style={{ color: textColor }}
      >
        {flavorName}
      </motion.h2>
    </motion.div>
  );
};

export default FlavorDisplay;
