import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Center } from '@chakra-ui/react';

export default function SubBulles1() {
  const parallax = useParallax({ speed: 2 });

  return (
    <Center
      position='absolute'
      bottom={0}
      w='full'
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='1261'
        height='139'
        viewBox='0 0 1261 139'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g style={{ mixBlendMode: 'soft-light' }} opacity='0.7'>
          <circle cx='5' cy='29' r='5' fill='#F7F7F7' />
          <circle cx='793.5' cy='119.5' r='2.5' fill='#F7F7F7' />
          <circle cx='712.5' cy='11.5' r='2.5' fill='#F7F7F7' />
          <circle cx='825.5' cy='69.5' r='2.5' fill='#F7F7F7' />
          <circle cx='578.5' cy='11.5' r='2' stroke='#F7F7F7' />
          <circle cx='1018.5' cy='16.5' r='2' stroke='#F7F7F7' />
          <circle cx='365.5' cy='131.5' r='2' stroke='#F7F7F7' />
          <circle cx='189.5' cy='40.5' r='2' stroke='#F7F7F7' />
          <circle cx='1123.5' cy='83.5' r='2.5' fill='#F7F7F7' />
          <circle cx='309.5' cy='48.5' r='2.5' fill='#F7F7F7' />
          <circle cx='74.5' cy='107.5' r='2.5' fill='#F7F7F7' />
        </g>
      </svg>
    </Center>
  );
}
