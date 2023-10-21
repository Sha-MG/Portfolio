import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function NuageHautDroite() {
  const nuageHautDroiteParallax = useParallax({
    translateX: [0, 200],
  });

  return (
    <Box
      position='absolute'
      bottom={{ 'base': '430', '2xl': '500' }}
      left={{
        'base': '25vw',
        'md': '30vw',
        'lg': '35vw',
        'xl': '39vw',
        '2xl': '44vw',
      }}
      ref={nuageHautDroiteParallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='74'
        height='21'
        viewBox='0 0 74 21'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect y='0.584381' width='57' height='4' rx='2' fill='#F7F7F7' />
      </svg>
    </Box>
  );
}
