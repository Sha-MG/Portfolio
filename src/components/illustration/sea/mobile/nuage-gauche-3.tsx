import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function NuageGaucheMobile3() {
  const parallax = useParallax({ translateX: [0, 100] });

  return (
    <Box
      position='absolute'
      left={-40}
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='160'
        height='34'
        viewBox='0 0 222 34'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          width='49'
          height='5'
          rx='2.5'
          transform='matrix(1 0 0 -1 0 34)'
          fill='#F7F7F7'
        />
      </svg>
    </Box>
  );
}
