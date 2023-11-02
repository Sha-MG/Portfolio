import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import useWideScreen from '@/hooks/useWideScreen';
import { Center } from '@chakra-ui/react';

export default function EtoilesLayer2() {
  const etoilesLayer2Parallax = useParallax({
    speed: 8,
  });
  const isWideScreen = useWideScreen();
  return isWideScreen ? (
    <Center
      h={{ 'base': '500', '2xl': '700' }}
      position='absolute'
      bottom='0'
      w='full'
      ref={etoilesLayer2Parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='2245'
        height='606'
        viewBox='0 0 2245 606'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='1191' cy='560' r='5' fill='#F7F7F7' />
        <circle cx='1478' cy='356' r='5' fill='#F7F7F7' />
        <circle cx='1937.5' cy='326.5' r='2.5' fill='#F7F7F7' />
        <circle cx='1728.5' cy='101.5' r='2.5' fill='#F7F7F7' />
        <circle cx='553.5' cy='509.5' r='2.5' fill='#F7F7F7' />
        <circle cx='1030.5' cy='186.5' r='2.5' fill='#F7F7F7' />
        <circle cx='845.5' cy='211.5' r='2' stroke='#F7F7F7' />
        <circle cx='479.5' cy='89.5' r='2.5' fill='#F7F7F7' />
        <circle cx='153.5' cy='7.5' r='7.5' fill='#F7F7F7' />
        <circle cx='1535.5' cy='212.5' r='7' stroke='#F7F7F7' />
        <circle cx='2237.5' cy='191.5' r='7' stroke='#F7F7F7' />
        <circle cx='1278' cy='84' r='4.5' stroke='#F7F7F7' />
        <circle cx='672' cy='35' r='5' fill='#F7F7F7' />
        <circle cx='1541' cy='5' r='5' fill='#F7F7F7' />
        <circle cx='1911.5' cy='32.5' r='7.5' fill='#F7F7F7' />
      </svg>
    </Center>
  ) : (
    <Center
      h={{ 'base': '500', '2xl': '700' }}
      position='absolute'
      bottom='0'
      w='full'
      ref={etoilesLayer2Parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='1284'
        height='434'
        viewBox='0 0 1284 434'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='351' cy='158.584' r='5' fill='#F7F7F7' />
        <circle cx='961.5' cy='396.084' r='2.5' fill='#F7F7F7' />
        <circle cx='76.5' cy='431.084' r='2.5' fill='#F7F7F7' />
        <circle cx='553.5' cy='108.084' r='2.5' fill='#F7F7F7' />
        <circle cx='875.5' cy='227.084' r='2.5' fill='#F7F7F7' />
        <circle cx='2.5' cy='11.0844' r='2.5' fill='#F7F7F7' />
        <circle cx='1058.5' cy='134.084' r='7' stroke='#F7F7F7' />
        <circle cx='701' cy='139.584' r='5' fill='#F7F7F7' />
      </svg>
    </Center>
  );
}
