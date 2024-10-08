// SwitchFlavorButton.tsx
import React from 'react';

interface SwitchFlavorButtonProps {
  onClick: () => void;
}

const SwitchFlavorButton: React.FC<SwitchFlavorButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-4 bg-transparent border-2 border-black rounded-md shadow-md"
    >
      Switch Flavor
    </button>
  );
};

export default SwitchFlavorButton;
