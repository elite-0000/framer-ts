import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  title: string;
  navItems: string[];
}

const Header: React.FC<HeaderProps> = ({ title, navItems }) => {
  return (
    <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 z-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold"
      >
        {title}
      </motion.h1>
      <nav>
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="flex space-x-6"
        >
          {navItems.map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <a href="#" className="text-lg">
                {item}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </header>
  );
};

export default Header;
