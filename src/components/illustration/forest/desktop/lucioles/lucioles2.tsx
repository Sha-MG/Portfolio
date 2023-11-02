import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function Lucioles2() {
  const parallax = useParallax({ speed: -20 });

  return (
    <Box
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
      zIndex={3}
      position='absolute'
      top={-40}
    >
      <svg
        width='1304'
        height='500'
        viewBox='0 0 1304 443'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='317' cy='117' r='10' fill='#F0DC73' />
        <circle cx='882' cy='107' r='10' fill='#F0DC73' />
        <circle cx='526' cy='267' r='9' stroke='#F0DC73' stroke-width='2' />
        <circle cx='760' cy='345' r='4' stroke='#F0DC73' stroke-width='2' />
        <circle
          cx='1022'
          cy='52'
          r='4'
          fill='#F0DC73'
          stroke='#F0DC73'
          stroke-width='2'
        />
        <circle
          cx='1299'
          cy='117'
          r='4'
          fill='#F0DC73'
          stroke='#F0DC73'
          stroke-width='2'
        />
        <circle cx='121' cy='418' r='4' stroke='#F0DC73' stroke-width='2' />
        <circle cx='805' cy='97' r='9' stroke='#F0DC73' stroke-width='2' />
        <circle cx='199' cy='143' r='4' stroke='#F0DC73' stroke-width='2' />
        <circle
          cx='5'
          cy='267'
          r='4'
          fill='#F0DC73'
          stroke='#F0DC73'
          stroke-width='2'
        />
      </svg>
    </Box>
  );
}
