import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Center } from '@chakra-ui/react';

export default function TraitsVitesse3Mobile() {
  const fuseeTrait3Parallax = useParallax({
    speed: 10,
  });

  return (
    <Center h='278' ref={fuseeTrait3Parallax.ref as LegacyRef<HTMLDivElement>}>
      <svg
        width='2'
        height='28'
        viewBox='0 0 4 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M2.19067 26.0771L2.19067 23.5051'
          stroke='#F7F7F7'
          stroke-width='2.57205'
          stroke-linecap='round'
        />
        <path
          d='M2.19067 17.5035L2.19067 2.07123'
          stroke='#F7F7F7'
          stroke-width='2.57205'
          stroke-linecap='round'
        />
      </svg>
    </Center>
  );
}
