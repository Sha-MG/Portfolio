import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function NuageBasDroite() {
  const nuageBasDroiteParallax = useParallax({
    translateX: [0, -200],
  });

  return (
    <Box
      position='absolute'
      bottom={{ 'base': '300', '2xl': '350' }}
      left={{ 'base': '55vw', '2xl': '54vw' }}
      ref={nuageBasDroiteParallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='132'
        height='23'
        viewBox='0 0 132 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          y='0.584351'
          width='111.456'
          height='8.57351'
          rx='4.28675'
          fill='#F7F7F7'
        />
      </svg>
    </Box>
  );
}
