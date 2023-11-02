import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Center } from '@chakra-ui/react';

export default function SubBulles2() {
  const parallax = useParallax({ speed: -5 });

  return (
    <Center
      position='absolute'
      bottom={-10}
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
          {/* <circle cx='354' cy='115' r='5' fill='#F7F7F7' /> */}
          {/* <circle cx='994' cy='43' r='5' fill='#F7F7F7' /> */}
          <circle cx='621' cy='101' r='5' fill='#F7F7F7' />
          {/* <circle cx='1256' cy='124' r='5' fill='#F7F7F7' /> */}
          {/* <circle cx='1239.5' cy='26.5' r='2.5' fill='#F7F7F7' /> */}
          <circle cx='680.5' cy='86.5' r='2.5' fill='#F7F7F7' />
          {/* <circle cx='568.5' cy='24.5' r='2.5' fill='#F7F7F7' /> */}
          {/* <circle cx='1147.5' cy='93.5' r='2' stroke='#F7F7F7' /> */}
          {/* <circle cx='600' cy='106' r='4.5' stroke='#F7F7F7' /> */}
          <circle cx='1055' cy='125' r='4.5' stroke='#F7F7F7' />
          <circle cx='809.5' cy='57.5' r='2' stroke='#F7F7F7' />
          {/* <circle cx='432.5' cy='11.5' r='2' stroke='#F7F7F7' /> */}
          {/* <circle cx='910.5' cy='43.5' r='2.5' fill='#F7F7F7' /> */}
          <circle cx='414.5' cy='2.5' r='2.5' fill='#F7F7F7' />
          {/* <circle cx='325.5' cy='119.5' r='2.5' fill='#F7F7F7' /> */}
        </g>
      </svg>
    </Center>
  );
}
