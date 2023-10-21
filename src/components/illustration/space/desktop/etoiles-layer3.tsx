import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import useWideScreen from '@/hooks/useWideScreen';
import { Center } from '@chakra-ui/react';

export default function EtoilesLayer3() {
  const etoilesLayer3Parallax = useParallax({
    speed: 5,
  });
  const isWideScreen = useWideScreen();

  return isWideScreen ? (
    <Center
      h={{ 'base': '500', '2xl': '700' }}
      position='absolute'
      bottom='0'
      w='full'
      ref={etoilesLayer3Parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='2245'
        height='606'
        viewBox='0 0 2245 606'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='138' cy='417' r='5' fill='#F7F7F7' />
        <circle cx='886' cy='384' r='5' fill='#F7F7F7' />
        <circle cx='515.5' cy='310.5' r='2.5' fill='#F7F7F7' />
        <circle cx='598.5' cy='240.5' r='2.5' fill='#F7F7F7' />
        <circle cx='2000.5' cy='191.5' r='2.5' fill='#F7F7F7' />
        <circle cx='944.5' cy='127.5' r='7.5' fill='#F7F7F7' />
        <circle cx='2194.5' cy='519.5' r='7.5' fill='#F7F7F7' />
        <circle cx='1756' cy='482' r='4.5' stroke='#F7F7F7' />
        <circle cx='1278' cy='84' r='4.5' stroke='#F7F7F7' />
        <circle cx='1633.5' cy='598.5' r='7' stroke='#F7F7F7' />
        <circle cx='22.5' cy='198.5' r='7' stroke='#F7F7F7' />
        <circle cx='298.5' cy='454.5' r='7' stroke='#F7F7F7' />
      </svg>
    </Center>
  ) : (
    <Center
      h={{ 'base': '500', '2xl': '700' }}
      position='absolute'
      bottom='0'
      w='full'
      ref={etoilesLayer3Parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='1284'
        height='434'
        viewBox='0 0 1284 434'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='409' cy='405.584' r='5' fill='#F7F7F7' />
        <circle cx='1146.5' cy='260.084' r='2.5' fill='#F7F7F7' />
        <circle cx='121.5' cy='162.084' r='2.5' fill='#F7F7F7' />
        <circle cx='977.5' cy='45.0844' r='2' stroke='#F7F7F7' />
        <circle cx='951.5' cy='61.0844' r='7.5' fill='#F7F7F7' />
        <circle cx='801' cy='5.58438' r='4.5' stroke='#F7F7F7' />
        <circle cx='711.5' cy='130.084' r='2' stroke='#F7F7F7' />
      </svg>
    </Center>
  );
}
