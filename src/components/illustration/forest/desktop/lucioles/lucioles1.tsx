import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function Lucioles1() {
  const parallax = useParallax({ speed: 20 });
  return (
    <Box
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
      position='absolute'
      top={8}
      zIndex={3}
    >
      <svg
        width='1304'
        height='500'
        viewBox='0 0 1304 443'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='723' cy='345' r='10' fill='#F0DC73' />
        <circle cx='171' cy='433' r='10' fill='#F0DC73' />
        <circle cx='1101' cy='29' r='9' stroke='#F0DC73' stroke-width='2' />
        <circle
          cx='755'
          cy='132'
          r='4'
          fill='#F0DC73'
          stroke='#F0DC73'
          stroke-width='2'
        />
        <circle cx='1189' cy='433' r='4' stroke='#F0DC73' stroke-width='2' />
        <circle cx='422' cy='183' r='4' stroke='#F0DC73' stroke-width='2' />
        <circle
          cx='921'
          cy='428'
          r='4'
          fill='#F0DC73'
          stroke='#F0DC73'
          stroke-width='2'
        />
      </svg>
    </Box>
  );
}
