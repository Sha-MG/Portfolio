import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Center } from '@chakra-ui/react';

export default function SubBullesWide3() {
  const parallax = useParallax({ speed: 5 });

  return (
    <Center
      position='absolute'
      bottom={0}
      w='full'
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='3989'
        height='139'
        viewBox='0 0 3989 139'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g style={{ mixBlendMode: 'soft-light' }} opacity='0.7'>
          <circle cx='5' cy='29' r='5' fill='#F7F7F7' />
          <circle cx='621' cy='101' r='5' fill='#F7F7F7' />
          <circle cx='712.5' cy='11.5' r='2.5' fill='#F7F7F7' />
          <circle cx='825.5' cy='69.5' r='2.5' fill='#F7F7F7' />
          <circle cx='1147.5' cy='93.5' r='2' stroke='#F7F7F7' />
          <circle cx='600' cy='106' r='4.5' stroke='#F7F7F7' />
          <circle cx='432.5' cy='11.5' r='2' stroke='#F7F7F7' />
          <circle cx='74.5' cy='107.5' r='2.5' fill='#F7F7F7' />
        </g>
        <g style={{ mixBlendMode: 'soft-light' }} opacity='0.7'>
          <circle cx='1369' cy='29' r='5' fill='#F7F7F7' />
          <circle cx='2157.5' cy='119.5' r='2.5' fill='#F7F7F7' />
          <circle cx='2076.5' cy='11.5' r='2.5' fill='#F7F7F7' />
          <circle cx='2189.5' cy='69.5' r='2.5' fill='#F7F7F7' />
          <circle cx='2382.5' cy='16.5' r='2' stroke='#F7F7F7' />
          <circle cx='1553.5' cy='40.5' r='2' stroke='#F7F7F7' />
          <circle cx='2419' cy='125' r='4.5' stroke='#F7F7F7' />
          <circle cx='1689.5' cy='119.5' r='2.5' fill='#F7F7F7' />
        </g>
        <g style={{ mixBlendMode: 'soft-light' }} opacity='0.7'>
          <circle cx='2733' cy='29' r='5' fill='#F7F7F7' />
          <circle cx='3521.5' cy='119.5' r='2.5' fill='#F7F7F7' />
          <circle cx='3408.5' cy='86.5' r='2.5' fill='#F7F7F7' />
          <circle cx='3306.5' cy='11.5' r='2' stroke='#F7F7F7' />
          <circle cx='2787' cy='134' r='4.5' stroke='#F7F7F7' />
          <circle cx='3328' cy='106' r='4.5' stroke='#F7F7F7' />
          <circle cx='3053.5' cy='119.5' r='2.5' fill='#F7F7F7' />
        </g>
      </svg>
    </Center>
  );
}
