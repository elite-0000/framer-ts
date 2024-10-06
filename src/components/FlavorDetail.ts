export type Flavor = 'orange' | 'pineapple';

export interface FlavorDetails {
  name: string;
  color: string;
  textColor: string;
  can: string;
  slice: string;
}

export interface Flavors {
  [key: string]: FlavorDetails;
}

export const flavors: Flavors = {
  orange: {
    name: 'Orange',
    color: '#FFEFDA',
    textColor: '#FFD399',
    can: '/assets/can-orange.png',
    slice: '/assets/orange1.png',
  },
  pineapple: {
    name: 'Pineapple',
    color: '#E4FFC0',
    textColor: '#B7EC73',
    can: '/assets/can-pineapple.png',
    slice: '/assets/pineapple1.png',
  },
};
