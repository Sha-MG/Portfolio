import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Center } from '@chakra-ui/react';

export default function Ecume3() {
  const parallax = useParallax({ speed: -2 });

  return (
    <Center
      w='full'
      position='absolute'
      bottom={0}
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='281'
        height='92'
        viewBox='0 0 281 92'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='94' cy='24' r='10' fill='#F7F7F7' />
        <ellipse cx='128' cy='22' rx='13' ry='12' fill='#F7F7F7' />
        <circle cx='171' cy='24' r='10' fill='#F7F7F7' />
        <circle cx='184' cy='22' r='10' fill='#F7F7F7' />
        <ellipse cx='237.5' cy='12' rx='12.5' ry='12' fill='#F7F7F7' />
        <circle cx='36' cy='14' r='10' fill='#F7F7F7' />
        <circle cx='23' cy='17' r='10' fill='#F7F7F7' />
      </svg>
    </Center>
  );
}
