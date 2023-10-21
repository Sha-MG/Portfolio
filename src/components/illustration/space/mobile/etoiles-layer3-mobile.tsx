import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import useWideScreen from '@/hooks/useWideScreen';
import { Center } from '@chakra-ui/react';

export default function EtoilesLayer3Mobile() {
  const etoilesLayer3Parallax = useParallax({
    speed: 5,
  });

  return (
    <Center
      h={{ 'base': '500', '2xl': '700' }}
      position='absolute'
      bottom='0'
      w='full'
      ref={etoilesLayer3Parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='450'
        height='500'
        viewBox='0 0 450 500'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M441.245 53.8117C441.245 55.5319 439.832 56.9315 438.083 56.9315C436.334 56.9315 434.922 55.5319 434.922 53.8117C434.922 52.0914 436.334 50.6918 438.083 50.6918C439.832 50.6918 441.245 52.0914 441.245 53.8117Z'
          stroke='#F7F7F7'
          stroke-width='0.48676'
        />
        <ellipse
          cx='401.765'
          cy='340.807'
          rx='3.40479'
          ry='3.36323'
          fill='#F7F7F7'
        />
        <ellipse
          cx='419.924'
          cy='496.637'
          rx='3.40479'
          ry='3.36323'
          fill='#F7F7F7'
        />
        <ellipse
          cx='291.961'
          cy='1.40135'
          rx='1.41866'
          ry='1.40135'
          fill='#F7F7F7'
        />
        <ellipse
          cx='60.1513'
          cy='257.848'
          rx='3.40479'
          ry='3.36323'
          fill='#F7F7F7'
        />
      </svg>
    </Center>
  );
}
