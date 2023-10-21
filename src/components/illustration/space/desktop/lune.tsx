import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function Lune() {
  const luneParallax = useParallax({
    speed: -10,
  });

  return (
    <Box
      position='absolute'
      top='0'
      left='15vw'
      w='full'
      h='278'
      ref={luneParallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='130'
        height='131'
        viewBox='0 0 130 131'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle opacity='0.5' cx='65' cy='65.5844' r='65' fill='#F1C9C1' />
        <circle cx='65' cy='65.5844' r='50' fill='#F1C9C1' />
        <circle cx='72.5' cy='28.0844' r='7.5' fill='#F7F7F7' />
        <circle cx='88' cy='33.5844' r='3' fill='#F7F7F7' />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M19.6105 86.5844C18.8591 84.9629 18.1919 83.2943 17.6147 81.5844L36.5 81.5844C37.8807 81.5844 39 82.7037 39 84.0844C39 85.4651 37.8807 86.5844 36.5 86.5844H19.6105Z'
          fill='#F1DDCD'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M114.753 70.5844C114.916 68.9398 115 67.2719 115 65.5844H85.5C84.1193 65.5844 83 66.7037 83 68.0844C83 69.4651 84.1193 70.5844 85.5 70.5844H114.753Z'
          fill='#F1DDCD'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M25.7673 96.5844C24.5084 94.9933 23.3442 93.3238 22.2832 91.5844L30.5 91.5844C31.8807 91.5844 33 92.7037 33 94.0844C33 95.4651 31.8807 96.5844 30.5 96.5844H25.7673Z'
          fill='#F1DDCD'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M114 55.5844C114.333 57.2234 114.585 58.8914 114.753 60.5844H108.5C107.119 60.5844 106 59.4651 106 58.0844C106 56.7037 107.119 55.5844 108.5 55.5844H114Z'
          fill='#F1DDCD'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M22 50.5844C38.0163 50.5844 51 37.8245 51 22.0844C51 20.5839 50.882 19.1105 50.6547 17.6727C34.9143 22.3788 22.431 34.6298 17.4023 50.2282C18.8998 50.4626 20.4354 50.5844 22 50.5844Z'
          fill='#F1DDCD'
        />
      </svg>
    </Box>
  );
}
