import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function NuageDroite1() {
  const parallax = useParallax({ translateX: [0, -100] });

  return (
    <Box
      position='absolute'
      left={0}
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='202'
        height='22'
        viewBox='0 0 202 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          width='156'
          height='10'
          rx='5'
          transform='matrix(1 0 0 -1 0 22)'
          fill='#F7F7F7'
        />
      </svg>
    </Box>
  );
}
