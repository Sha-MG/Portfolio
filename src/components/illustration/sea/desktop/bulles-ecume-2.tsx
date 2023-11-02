import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Center } from '@chakra-ui/react';

export default function BullesEcume2() {
  const parallax = useParallax({ speed: -5 });

  return (
    <Center
      w='full'
      position='absolute'
      top={-3}
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='377'
        height='32'
        viewBox='0 0 377 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        {/* <circle cx='34' cy='11' r='5' fill='#F7F7F7' /> */}
        <circle cx='256' cy='5' r='5' fill='#F7F7F7' />
        {/* <circle cx='323' cy='14' r='5' fill='#F7F7F7' /> */}
        <circle cx='338.5' cy='21.5' r='2.5' fill='#F7F7F7' />
        {/* <circle cx='243.5' cy='11.5' r='2.5' fill='#F7F7F7' /> */}
        {/* <circle cx='312.5' cy='13.5' r='2' stroke='#F7F7F7' /> */}
        <circle cx='350.5' cy='12.5' r='2' stroke='#F7F7F7' />
        {/* <circle cx='79.5' cy='10.5' r='2' stroke='#F7F7F7' /> */}
        <circle cx='128.5' cy='16.5' r='2' stroke='#F7F7F7' />
        {/* <circle cx='178.5' cy='18.5' r='2.5' fill='#F7F7F7' /> */}
        <circle cx='113.5' cy='8.5' r='2.5' fill='#F7F7F7' />
        {/* <circle cx='21.5' cy='18.5' r='2.5' fill='#F7F7F7' /> */}
        {/* <circle cx='232.5' cy='11.5' r='2' stroke='#F7F7F7' /> */}
        <circle cx='218' cy='5' r='4.5' stroke='#F7F7F7' />
        {/* <circle cx='5' cy='22' r='4.5' stroke='#F7F7F7' /> */}
      </svg>
    </Center>
  );
}
