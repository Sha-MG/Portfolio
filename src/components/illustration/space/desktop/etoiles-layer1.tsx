import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import useWideScreen from '@/hooks/useWideScreen';
import { Center } from '@chakra-ui/react';

export default function EtoilesLayer1() {
  const etoilesLayer1Parallax = useParallax({
    speed: -10,
  });
  const isWideScreen = useWideScreen();

  return isWideScreen ? (
    <Center
      h={{ 'base': '500', '2xl': '700' }}
      position='absolute'
      bottom='0'
      w='full'
      ref={etoilesLayer1Parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='2245'
        height='606'
        viewBox='0 0 2245 606'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='828' cy='237' r='5' fill='#F7F7F7' />
        <circle cx='1438.5' cy='474.5' r='2.5' fill='#F7F7F7' />
        <circle cx='1623.5' cy='338.5' r='2.5' fill='#F7F7F7' />
        <circle cx='967.5' cy='321.5' r='2.5' fill='#F7F7F7' />
        <circle cx='155.5' cy='391.5' r='2' stroke='#F7F7F7' />
        <circle cx='1454.5' cy='123.5' r='2' stroke='#F7F7F7' />
        <circle cx='1352.5' cy='305.5' r='2.5' fill='#F7F7F7' />
        <circle cx='1428.5' cy='139.5' r='7.5' fill='#F7F7F7' />
        <circle cx='659.5' cy='364.5' r='7' stroke='#F7F7F7' />
        <circle cx='1188.5' cy='208.5' r='2' stroke='#F7F7F7' />
        <circle cx='1178' cy='218' r='5' fill='#F7F7F7' />
        <circle cx='179.5' cy='229.5' r='2.5' fill='#F7F7F7' />
        <circle cx='242.5' cy='94.5' r='2.5' fill='#F7F7F7' />
        <circle cx='2054' cy='417' r='5' fill='#F7F7F7' />
        <circle cx='2071.5' cy='391.5' r='2' stroke='#F7F7F7' />
        <circle cx='7.5' cy='519.5' r='7.5' fill='#F7F7F7' />
      </svg>
    </Center>
  ) : (
    <Center
      h={{ 'base': '500', '2xl': '700' }}
      position='absolute'
      bottom='0'
      w='full'
      ref={etoilesLayer1Parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='1284'
        height='434'
        viewBox='0 0 1284 434'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='1001' cy='277.584' r='5' fill='#F7F7F7' />
        <circle cx='490.5' cy='243.084' r='2.5' fill='#F7F7F7' />
        <circle cx='38.5' cy='232.084' r='2.5' fill='#F7F7F7' />
        <circle cx='1251.5' cy='23.0844' r='2.5' fill='#F7F7F7' />
        <circle
          cx='368.5'
          cy='133.084'
          r='2'
          stroke={isWideScreen ? 'blue' : 'orange'}
        />
        <circle cx='467.5' cy='49.0844' r='7.5' fill='#F7F7F7' />
        <circle cx='182.5' cy='286.084' r='7' stroke='#F7F7F7' />
        <circle cx='1279' cy='403.584' r='4.5' stroke='#F7F7F7' />
      </svg>
    </Center>
  );
}
