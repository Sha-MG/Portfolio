import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Center } from '@chakra-ui/react';

export default function BullesEcume4() {
  const parallax = useParallax({ translateX: [0, -20] });
  return (
    <Center
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
      w='full'
      position='absolute'
      top={0}
      right={0}
    >
      <svg
        width='377'
        height='32'
        viewBox='0 0 377 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='323' cy='14' r='5' fill='#F7F7F7' />
        <circle cx='312.5' cy='13.5' r='2' stroke='#F7F7F7' />
        <circle cx='79.5' cy='10.5' r='2' stroke='#F7F7F7' />
        <circle cx='178.5' cy='18.5' r='2.5' fill='#F7F7F7' />
        <circle cx='232.5' cy='11.5' r='2' stroke='#F7F7F7' />
      </svg>
    </Center>
  );
}
