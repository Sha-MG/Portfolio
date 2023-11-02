import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function Lucioles3() {
  const parallax = useParallax({ speed: 10 });

  return (
    <Box ref={parallax.ref as LegacyRef<HTMLDivElement>}>
      <svg
        width='1304'
        height='500'
        viewBox='0 0 1304 443'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='171' cy='182' r='10' fill='#F0DC73' />
        <circle cx='1042' cy='365' r='9' stroke='#F0DC73' stroke-width='2' />
        <circle
          cx='496'
          cy='250'
          r='4'
          fill='#F0DC73'
          stroke='#F0DC73'
          stroke-width='2'
        />
        <circle cx='993' cy='271' r='4' stroke='#F0DC73' stroke-width='2' />
        <circle cx='94' cy='10' r='9' stroke='#F0DC73' stroke-width='2' />
        <circle cx='1149' cy='413' r='10' fill='#F0DC73' />
        <circle
          cx='395'
          cy='365'
          r='4'
          fill='#F0DC73'
          stroke='#F0DC73'
          stroke-width='2'
        />
      </svg>
    </Box>
  );
}
