import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Center } from '@chakra-ui/react';

export default function BullesEcume1() {
  const parallax = useParallax({ speed: 3 });

  return (
    <Center
      w='full'
      position='absolute'
      top={0}
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='377'
        height='32'
        viewBox='0 0 377 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='190' cy='23' r='5' fill='#F7F7F7' />
        <circle cx='353.5' cy='21.5' r='2.5' fill='#F7F7F7' />
        <circle cx='150.5' cy='18.5' r='2.5' fill='#F7F7F7' />
        <circle cx='21.5' cy='6.5' r='2' stroke='#F7F7F7' />
        <circle cx='210.5' cy='18.5' r='2.5' fill='#F7F7F7' />
        <circle cx='58.5' cy='6.5' r='2.5' fill='#F7F7F7' />
        <circle cx='372' cy='27' r='4.5' stroke='#F7F7F7' />
        <circle cx='100' cy='9' r='4.5' stroke='#F7F7F7' />
      </svg>
    </Center>
  );
}
