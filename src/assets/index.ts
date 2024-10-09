// src/assets/index.ts

import canOrange from './can-orange.png';
import canPineapple from './can-pineapple.png';
import leafImage from './leaf.png';
import orange1 from './orange1.png';
import orange2 from './orange2.png';
import pineapple1 from './pineapple1.png';
import pineapple2 from './pineapple2.png';
import pineapple3 from './pineapple3.png';


export {
  canOrange,
  canPineapple,
  leafImage,
  orange1,
  orange2,
  pineapple1,
  pineapple2,
  pineapple3,
};

const images = {
  orange: {
    can: canOrange,
    leaf: leafImage,
    slices: [orange1, orange2], 
  },
  pineapple: {
    can: canPineapple,
    leaf: leafImage,
    slices: [pineapple1, pineapple2, pineapple3], 
  },
};

export default images; 