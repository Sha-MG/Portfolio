import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Center } from '@chakra-ui/react';

export default function TraitsVitesse2() {
  const fuseeTrait2Parallax = useParallax({
    speed: 13,
  });
  return (
    <Center h='278' ref={fuseeTrait2Parallax.ref as LegacyRef<HTMLDivElement>}>
      <svg
        width='3'
        height='25'
        viewBox='0 0 3 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1.61719 23.505L1.61719 2.07124'
          stroke='#F7F7F7'
          stroke-width='2.57205'
          stroke-linecap='round'
        />
      </svg>
    </Center>
  );
}
