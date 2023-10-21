import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function NuageHautGauche() {
  const nuageHautGaucheParallax = useParallax({
    translateX: [0, 100],
  });
  return (
    <Box
      position='absolute'
      bottom={{ 'base': '430', '2xl': '500' }}
      left={{
        'base': '35vw',
        'md': '38vw',
        'lg': '42vw',
        'xl': '45vw',
        '2xl': '47vw',
      }}
      ref={nuageHautGaucheParallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='74'
        height='21'
        viewBox='0 0 74 21'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='16'
          y='11.5844'
          width='58'
          height='9'
          rx='4.28675'
          fill='#F7F7F7'
        />
      </svg>
    </Box>
  );
}
