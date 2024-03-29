import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Center } from '@chakra-ui/react';

export default function TraitsFuseeGauche() {
  const fuseeTraitsDecorationGaucheParallax = useParallax({
    translateX: [0, -5],
    speed: 3,
  });

  return (
    <Center
      position='absolute'
      top={{ 'base': '160', '2xl': '280' }}
      w='full'
      h='278'
      ref={fuseeTraitsDecorationGaucheParallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='390'
        height='90'
        viewBox='0 0 390 90'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M147.321 5.77865L71.8741 2.34924C62.4432 2.34924 56.4418 16.0669 71.8741 16.0669C88.2144 16.0669 98.8806 15.2095 98.8806 23.783C98.8806 43.949 2 13.4948 2 36.2146C2 58.9344 125.887 36.2146 125.887 58.9344C125.887 64.2539 117.281 66.9526 105.739 68.1799L46.5822 67.0792C32.436 67.0792 26.4345 69.0245 26.4345 75.2241C26.4345 80.7786 30.7213 88.0843 46.5822 86.5134L147.321 88.0843'
          stroke='#F7F7F7'
          stroke-width='3'
          stroke-linecap='round'
        />
      </svg>
    </Center>
  );
}
