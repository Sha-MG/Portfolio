import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function Ma() {
  const parallax = useParallax({ translateX: [0, 2000] });

  return (
    <Box
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
      position='absolute'
      top={16}
      left={{ 'base': -280, 'md': -295, '2xl': -330 }}
      pt={2}
    >
      <svg
        width='27'
        height='10'
        viewBox='0 0 27 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11.351 0.0095188C12.0384 0.0095188 12.6276 0.160601 13.1186 0.462765C13.6096 0.757375 13.9836 1.21062 14.2404 1.8225C14.5048 2.43439 14.637 3.21624 14.637 4.16806V9.58435H12.688V4.56465C12.688 3.55995 12.5483 2.80454 12.2688 2.29841C11.9893 1.79229 11.4794 1.53923 10.7391 1.53923C10.3463 1.53923 9.96856 1.64876 9.60597 1.86783C9.25092 2.07934 8.95631 2.40795 8.72214 2.85364C8.49551 3.29933 8.3822 3.86967 8.3822 4.56465V9.58435H6.54655V4.56465C6.54655 3.55995 6.37281 2.80454 6.02532 2.29841C5.67783 1.79229 5.19059 1.53923 4.5636 1.53923C4.16323 1.53923 3.78553 1.64498 3.43048 1.8565C3.083 2.06046 2.79972 2.38529 2.58065 2.83098C2.36158 3.27667 2.25204 3.85456 2.25204 4.56465V9.58435H0.291752V0.281467H2.25204V1.70919C2.33514 1.47502 2.51266 1.22573 2.78461 0.961336C3.06411 0.696942 3.41915 0.474096 3.84974 0.292798C4.28788 0.103945 4.77512 0.0095188 5.31146 0.0095188C5.87046 0.0095188 6.33882 0.12283 6.71652 0.349453C7.09423 0.576077 7.39261 0.855579 7.61168 1.18796C7.83075 1.51279 7.98183 1.82628 8.06493 2.12845C8.17069 1.80362 8.37465 1.47879 8.67681 1.15397C8.97898 0.821585 9.36046 0.549637 9.82126 0.338122C10.2821 0.119053 10.792 0.0095188 11.351 0.0095188ZM24.8421 9.58435V7.77136C24.7817 7.96022 24.6042 8.22083 24.3096 8.55321C24.0225 8.8856 23.6259 9.18776 23.1198 9.45971C22.6212 9.7241 22.032 9.8563 21.3521 9.8563C20.491 9.8563 19.7091 9.65234 19.0066 9.24442C18.3116 8.83649 17.7564 8.26616 17.3409 7.53341C16.933 6.79311 16.729 5.92816 16.729 4.93857C16.729 3.94899 16.933 3.08782 17.3409 2.35507C17.7564 1.61477 18.3116 1.04065 19.0066 0.632733C19.7091 0.217257 20.491 0.0095188 21.3521 0.0095188C22.0244 0.0095188 22.6061 0.130385 23.0971 0.372116C23.5957 0.613848 23.9923 0.893349 24.2869 1.21062C24.5891 1.52789 24.7666 1.79984 24.8195 2.02647V0.281467H26.7684V9.58435H24.8421ZM18.678 4.93857C18.678 5.61089 18.8253 6.19256 19.1199 6.68357C19.4145 7.17459 19.796 7.55607 20.2643 7.82802C20.7403 8.09241 21.2464 8.22461 21.7827 8.22461C22.3568 8.22461 22.8705 8.08864 23.3238 7.81669C23.777 7.54474 24.1358 7.16326 24.4002 6.67224C24.6646 6.17367 24.7968 5.59578 24.7968 4.93857C24.7968 4.28137 24.6646 3.70725 24.4002 3.21624C24.1358 2.71767 23.777 2.33241 23.3238 2.06046C22.8705 1.78096 22.3568 1.64121 21.7827 1.64121C21.2464 1.64121 20.7403 1.77718 20.2643 2.04913C19.796 2.32108 19.4145 2.70256 19.1199 3.19358C18.8253 3.68459 18.678 4.26626 18.678 4.93857Z'
          fill='black'
        />
      </svg>
    </Box>
  );
}
