import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Center } from '@chakra-ui/react';

export default function Ecume1() {
  const parallax = useParallax({ speed: -1 });

  return (
    <Center
      w='full'
      position='absolute'
      bottom={0}
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='281'
        height='92'
        viewBox='0 0 281 92'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='62' cy='17' r='10' fill='#F7F7F7' />
        {/* <circle cx='62' cy='17' r='10' fill='#F7F7F7' /> */}
        <ellipse cx='78' cy='15.5' rx='13' ry='11.5' fill='#F7F7F7' />
        {/* <circle cx='94' cy='24' r='10' fill='#F7F7F7' /> */}
        {/* <circle cx='110' cy='24' r='10' fill='#F7F7F7' /> */}
        {/* <ellipse cx='128' cy='22' rx='13' ry='12' fill='#F7F7F7' /> */}
        <circle cx='141' cy='27' r='10' fill='#F7F7F7' />
        {/* <circle cx='156' cy='32' r='10' fill='#F7F7F7' /> */}
        {/* <circle cx='171' cy='24' r='10' fill='#F7F7F7' /> */}
        {/* <circle cx='184' cy='22' r='10' fill='#F7F7F7' /> */}
        <ellipse cx='194.5' cy='17' rx='12.5' ry='10' fill='#F7F7F7' />
        {/* <circle cx='212' cy='17' r='10' fill='#F7F7F7' /> */}
        <circle cx='228' cy='17' r='10' fill='#F7F7F7' />
        {/* <ellipse cx='237.5' cy='12' rx='12.5' ry='12' fill='#F7F7F7' /> */}
        <circle cx='259' cy='14' r='10' fill='#F7F7F7' />
        <circle cx='271' cy='19' r='10' fill='#F7F7F7' />
        {/* <circle cx='48' cy='17' r='10' fill='#F7F7F7' /> */}
        {/* <circle cx='36' cy='14' r='10' fill='#F7F7F7' /> */}
        {/* <circle cx='23' cy='17' r='10' fill='#F7F7F7' /> */}
        {/* <circle cx='10' cy='20' r='10' fill='#F7F7F7' /> */}
        <rect y='27' width='281' height='65' fill='#F7F7F7' />
        <rect x='184' y='15' width='97' height='75' fill='#F7F7F7' />
        <rect y='17' width='97' height='75' fill='#F7F7F7' />
      </svg>
    </Center>
  );
}
