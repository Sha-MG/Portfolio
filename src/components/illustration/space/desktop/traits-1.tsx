import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Center } from '@chakra-ui/react';

export default function TraitsVitesse1() {
  const fuseeTrait1Parallax = useParallax({
    speed: 15,
  });

  return (
    <Center h='278' ref={fuseeTrait1Parallax.ref as LegacyRef<HTMLDivElement>}>
      <svg
        width='4'
        height='47'
        viewBox='0 0 4 47'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M2.0437 30.5065L2.0437 2.21389'
          stroke='#F7F7F7'
          stroke-width='2.57205'
          stroke-linecap='round'
        />
        <path
          d='M2.0437 45.0814L2.0437 37.3653'
          stroke='#F7F7F7'
          stroke-width='2.57205'
          stroke-linecap='round'
        />
      </svg>
    </Center>
  );
}
