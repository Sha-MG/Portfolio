import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import useWideScreen from '@/hooks/useWideScreen';
import { Center } from '@chakra-ui/react';

export default function EtoilesLayer2Mobile() {
  const etoilesLayer2Parallax = useParallax({
    speed: 8,
  });
  return (
    <Center
      h={{ 'base': '500', '2xl': '700' }}
      position='absolute'
      bottom='0'
      w='full'
      ref={etoilesLayer2Parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='450'
        height='500'
        viewBox='0 0 450 500'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M184.108 41.723C184.108 42.3392 183.601 42.8439 182.97 42.8439C182.339 42.8439 181.832 42.3392 181.832 41.723C181.832 41.1068 182.339 40.6021 182.97 40.6021C183.601 40.6021 184.108 41.1068 184.108 41.723Z'
          stroke='#F7F7F7'
          stroke-width='0.48676'
        />
        {/* <path
          d='M441.245 53.8117C441.245 55.5319 439.832 56.9315 438.083 56.9315C436.334 56.9315 434.922 55.5319 434.922 53.8117C434.922 52.0914 436.334 50.6918 438.083 50.6918C439.832 50.6918 441.245 52.0914 441.245 53.8117Z'
          stroke='#F7F7F7'
          stroke-width='0.48676'
        /> */}
        <path
          d='M331.157 377.803C331.157 379.523 329.744 380.923 327.995 380.923C326.246 380.923 324.834 379.523 324.834 377.803C324.834 376.082 326.246 374.683 327.995 374.683C329.744 374.683 331.157 376.082 331.157 377.803Z'
          stroke='#F7F7F7'
          stroke-width='0.48676'
        />
        {/* <ellipse
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
        /> */}
        <ellipse
          cx='66.1097'
          cy='490.191'
          rx='1.41866'
          ry='1.40135'
          fill='#F7F7F7'
        />
        {/* <ellipse
          cx='291.961'
          cy='1.40135'
          rx='1.41866'
          ry='1.40135'
          fill='#F7F7F7'
        /> */}
        <ellipse
          cx='293.096'
          cy='440.863'
          rx='1.41866'
          ry='1.40135'
          fill='#F7F7F7'
        />
        {/* <ellipse
          cx='60.1513'
          cy='257.848'
          rx='3.40479'
          ry='3.36323'
          fill='#F7F7F7'
        /> */}
        <ellipse
          cx='409.71'
          cy='13.4529'
          rx='3.40479'
          ry='3.36323'
          fill='#F7F7F7'
        />
        <ellipse
          cx='156.62'
          cy='6.72645'
          rx='3.40479'
          ry='3.36323'
          fill='#F7F7F7'
        />
      </svg>
    </Center>
  );
}
