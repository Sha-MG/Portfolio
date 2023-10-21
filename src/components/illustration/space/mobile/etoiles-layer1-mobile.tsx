import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import useWideScreen from '@/hooks/useWideScreen';
import { Center } from '@chakra-ui/react';

export default function EtoilesLayer1Mobile() {
  const etoilesLayer1Parallax = useParallax({
    speed: -10,
  });
  return (
    <Center
      h={{ 'base': '500', '2xl': '700' }}
      position='absolute'
      bottom='0'
      w='full'
      ref={etoilesLayer1Parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='450'
        height='500'
        viewBox='0 0 450 500'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M33.1619 328.718C33.1619 329.335 32.6553 329.839 32.0242 329.839C31.393 329.839 30.8864 329.335 30.8864 328.718C30.8864 328.102 31.393 327.598 32.0242 327.598C32.6553 327.598 33.1619 328.102 33.1619 328.718Z'
          stroke='#F7F7F7'
          stroke-width='0.48676'
        />
        <path
          d='M423.578 282.754C423.578 283.371 423.071 283.875 422.44 283.875C421.809 283.875 421.302 283.371 421.302 282.754C421.302 282.138 421.809 281.634 422.44 281.634C423.071 281.634 423.578 282.138 423.578 282.754Z'
          stroke='#F7F7F7'
          stroke-width='0.48676'
        />
        <path
          d='M6.5662 437.22C6.5662 438.94 5.15362 440.34 3.40479 440.34C1.65597 440.34 0.24338 438.94 0.24338 437.22C0.24338 435.499 1.65597 434.1 3.40479 434.1C5.15362 434.1 6.5662 435.499 6.5662 437.22Z'
          stroke='#F7F7F7'
          stroke-width='0.48676'
        />
        <ellipse
          cx='159.174'
          cy='171.805'
          rx='1.41866'
          ry='1.40135'
          fill='#F7F7F7'
        />
        <ellipse
          cx='448.581'
          cy='452.074'
          rx='1.41866'
          ry='1.40135'
          fill='#F7F7F7'
        />
        <path
          d='M22.4552 113.229C22.4552 114.949 21.0427 116.349 19.2938 116.349C17.545 116.349 16.1324 114.949 16.1324 113.229C16.1324 111.508 17.545 110.109 19.2938 110.109C21.0427 110.109 22.4552 111.508 22.4552 113.229Z'
          stroke='#F7F7F7'
          stroke-width='0.48676'
        />
      </svg>
    </Center>
  );
}
