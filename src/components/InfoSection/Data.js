import imagem from '../../images/svg-1.svg';
import imagem2 from '../../images/svg-2.svg';
import imagem3 from '../../images/svg-3.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headline: 'Unlimited Transactions with zero fees',
  description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
  buttonLabel: 'Get started',
  imgStart: false,
  img: imagem,
  alt: 'Car',
  dark: false,
  primary: true,
  darkText: false
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Unlimited Access',
  headline: 'Unlimited Transactions with zero fees',
  description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
  buttonLabel: 'Learn more',
  imgStart: true,
  img: imagem2,
  alt: 'Car',
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: 'Join our Team',
  headline: 'Creating an account is extremely easy',
  description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
  buttonLabel: 'Start Now',
  imgStart: false,
  img: imagem3,
  alt: 'Paper',
  dark: false,
  primary: true,
  darkText: false
};
