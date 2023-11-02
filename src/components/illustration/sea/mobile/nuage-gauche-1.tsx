import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function NuageGaucheMobile1() {
  const parallax = useParallax({ translateX: [0, -100] });

  return (
    <Box
      position='absolute'
      left={20}
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='130'
        height='34'
        viewBox='0 0 222 34'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          width='156'
          height='10'
          rx='5'
          transform='matrix(1 0 0 -1 20 22)'
          fill='#F7F7F7'
        />
      </svg>
    </Box>
  );
}
