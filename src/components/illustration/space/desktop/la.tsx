import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function La() {
  const parallax = useParallax({
    translateX: [0, 2000],
  });

  return (
    <Box
      position='absolute'
      top='12'
      right='260'
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='20'
        height='12'
        viewBox='0 0 20 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1.095 11.4344C1.355 11.4344 1.575 11.3444 1.755 11.1644C1.945 10.9744 2.045 10.7494 2.055 10.4894V2.17938C2.045 1.91938 1.945 1.69938 1.755 1.51938C1.575 1.32938 1.355 1.23438 1.095 1.23438H0.9V1.08438H4.185V1.23438H3.99C3.63 1.23438 3.355 1.38938 3.165 1.69938C3.075 1.84938 3.03 2.00938 3.03 2.17938V11.1194H5.175C5.915 11.1194 6.48 10.9544 6.87 10.6244C7.26 10.2944 7.585 9.80438 7.845 9.15438H7.995L7.125 11.5844H0.9V11.4344H1.095ZM19.1629 11.4344H19.2829V11.5844H15.9079V11.4344H16.0429C16.2529 11.4344 16.4079 11.3694 16.5079 11.2394C16.6179 11.0994 16.6729 10.9694 16.6729 10.8494C16.6729 10.7294 16.6529 10.6094 16.6129 10.4894L15.6529 7.93938H11.6029L10.5979 10.5044C10.5579 10.6244 10.5379 10.7444 10.5379 10.8644C10.5379 10.9744 10.5879 11.0994 10.6879 11.2394C10.7979 11.3694 10.9579 11.4344 11.1679 11.4344H11.3029V11.5844H8.28785V11.4344H8.42285C8.67285 11.4344 8.91785 11.3544 9.15785 11.1944C9.39785 11.0344 9.59285 10.7994 9.74285 10.4894L13.1329 2.41938C13.5029 1.60938 13.6879 1.09438 13.6879 0.87438H13.8229L17.8429 10.4894C17.9829 10.7994 18.1729 11.0344 18.4129 11.1944C18.6529 11.3544 18.9029 11.4344 19.1629 11.4344ZM11.7829 7.48938H15.4729L13.6729 2.67438L11.7829 7.48938Z'
          fill='#F7F7F7'
        />
      </svg>
    </Box>
  );
}
