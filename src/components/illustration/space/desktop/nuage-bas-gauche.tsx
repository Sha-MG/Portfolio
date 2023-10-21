import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function NuageBasGauche() {
  const nuageBasGaucheParallax = useParallax({
    translateX: [0, -100],
  });

  return (
    <Box
      position='absolute'
      bottom={{ 'base': '330', '2xl': '380' }}
      left={{ 'base': '50vw', '2xl': '48vw' }}
      ref={nuageBasGaucheParallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='132'
        height='23'
        viewBox='0 0 132 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='19.7191'
          y='18.5887'
          width='111.456'
          height='4.28675'
          rx='2.14338'
          fill='#F7F7F7'
        />
      </svg>
    </Box>
  );
}
