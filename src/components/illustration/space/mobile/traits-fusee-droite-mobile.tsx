import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Center } from '@chakra-ui/react';

export default function TraitsFuseeDroiteMobile() {
  const fuseeTraitsDecorationDroiteParallax = useParallax({
    translateX: [0, 5],
    speed: 3,
  });

  return (
    <Center
      position='absolute'
      top='120'
      w='full'
      h='278'
      ref={fuseeTraitsDecorationDroiteParallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='200'
        height='90'
        viewBox='0 0 390 90'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M242.916 5.77865L318.362 2.34924C327.793 2.34924 333.795 16.0669 318.362 16.0669C302.022 16.0669 291.356 15.2095 291.356 23.783C291.356 43.949 388.237 13.4948 388.237 36.2146C388.237 58.9344 264.349 36.2146 264.349 58.9344C264.349 64.2539 272.955 66.9526 284.497 68.1799L343.654 67.0792C357.801 67.0792 363.802 69.0245 363.802 75.2241C363.802 80.7786 359.515 88.0843 343.654 86.5134L242.916 88.0843'
          stroke='#F7F7F7'
          stroke-width='3'
          stroke-linecap='round'
        />
      </svg>
    </Center>
  );
}
