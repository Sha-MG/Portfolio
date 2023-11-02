import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Center } from '@chakra-ui/react';

export default function BullesEcume3() {
  const parallax = useParallax({ translateX: [0, 20] });
  return (
    <Center
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
      w='full'
      position='absolute'
      top={2}
      left={2}
    >
      <svg
        width='377'
        height='32'
        viewBox='0 0 377 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='138' cy='14' r='5' fill='#F7F7F7' />
        <circle cx='149.5' cy='6.5' r='2' stroke='#F7F7F7' />
        <circle cx='34' cy='11' r='5' fill='#F7F7F7' />
        <circle cx='243.5' cy='11.5' r='2.5' fill='#F7F7F7' />
        <circle cx='21.5' cy='18.5' r='2.5' fill='#F7F7F7' />
        <circle cx='5' cy='22' r='4.5' stroke='#F7F7F7' />
      </svg>
    </Center>
  );
}
