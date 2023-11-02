import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Center } from '@chakra-ui/react';

export default function Ecume2() {
  const parallax = useParallax({ speed: 1 });

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
        <circle cx='62' cy='17' r='10' fill='#F7F7F7' />
        <circle cx='110' cy='24' r='10' fill='#F7F7F7' />
        <circle cx='156' cy='32' r='10' fill='#F7F7F7' />
        <circle cx='212' cy='17' r='10' fill='#F7F7F7' />
        <circle cx='48' cy='17' r='10' fill='#F7F7F7' />
        <circle cx='10' cy='20' r='10' fill='#F7F7F7' />
      </svg>
    </Center>
  );
}
