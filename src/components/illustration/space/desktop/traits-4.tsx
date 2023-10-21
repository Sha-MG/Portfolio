import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Center } from '@chakra-ui/react';

export default function TraitsVitesse4() {
  const fuseeTrait4Parallax = useParallax({
    speed: 8,
  });
  return (
    <Center h='278' ref={fuseeTrait4Parallax.ref as LegacyRef<HTMLDivElement>}>
      <svg
        width='4'
        height='37'
        viewBox='0 0 2 37'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1.76416 35.6506L1.76416 2.21395'
          stroke='#F7F7F7'
          stroke-width='2.57205'
          stroke-linecap='round'
        />
      </svg>
    </Center>
  );
}
