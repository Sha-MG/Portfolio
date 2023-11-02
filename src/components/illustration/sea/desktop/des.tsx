import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function Des() {
  const parallax = useParallax({ translateX: [0, 400] });

  return (
    <Box
      position='absolute'
      bottom={-97}
      right={130}
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='27'
        height='12'
        viewBox='0 0 27 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5.985 0.499999C7.585 0.499999 8.88 0.984999 9.87 1.955C10.87 2.915 11.37 4.18 11.37 5.75C11.37 7.32 10.87 8.59 9.87 9.56C8.88 10.52 7.585 11 5.985 11H0.9V10.85H1.095C1.355 10.85 1.575 10.76 1.755 10.58C1.945 10.39 2.045 10.165 2.055 9.905V1.505C2.055 1.265 1.955 1.065 1.755 0.904999C1.565 0.734999 1.345 0.649999 1.095 0.649999H0.915L0.9 0.499999H5.985ZM3.03 0.95V10.55H5.985C6.825 10.55 7.565 10.35 8.205 9.95C8.855 9.55 9.355 8.99 9.705 8.27C10.065 7.54 10.245 6.7 10.245 5.75C10.245 4.31 9.85 3.15 9.06 2.27C8.28 1.39 7.255 0.95 5.985 0.95H3.03ZM12.9016 10.85C13.1616 10.85 13.3816 10.76 13.5616 10.58C13.7516 10.39 13.8516 10.165 13.8616 9.905V1.505C13.8616 1.265 13.7666 1.065 13.5766 0.904999C13.3866 0.734999 13.1616 0.649999 12.9016 0.649999H12.7216L12.7066 0.499999H17.1016C17.4116 0.499999 17.7466 0.469999 18.1066 0.41C18.4766 0.35 18.7366 0.29 18.8866 0.229999V2.12H18.7366V1.85C18.7366 1.61 18.6516 1.405 18.4816 1.235C18.3216 1.065 18.1266 0.974999 17.8966 0.965H14.8366V5.6H17.3716C17.5716 5.59 17.7416 5.515 17.8816 5.375C18.0216 5.235 18.0916 5.06 18.0916 4.85V4.64H18.2416V7.01H18.0916V6.785C18.0916 6.585 18.0216 6.415 17.8816 6.275C17.7516 6.135 17.5866 6.06 17.3866 6.05H14.8366V10.535H16.9816C17.7216 10.535 18.2866 10.37 18.6766 10.04C19.0666 9.71 19.3916 9.22 19.6516 8.57H19.8016L18.9316 11H12.7066V10.85H12.9016ZM21.3789 10.385C21.3489 10.245 21.3339 9.975 21.3339 9.575C21.3339 9.175 21.4089 8.75 21.5589 8.3H21.6939C21.6839 8.41 21.6789 8.52 21.6789 8.63C21.6789 9.24 21.8639 9.75 22.2339 10.16C22.6039 10.56 23.0939 10.76 23.7039 10.76C24.3339 10.76 24.8489 10.57 25.2489 10.19C25.6589 9.81 25.8639 9.335 25.8639 8.765C25.8639 8.185 25.6689 7.715 25.2789 7.355L22.3989 4.685C21.8589 4.185 21.5889 3.58 21.5889 2.87C21.5889 2.16 21.8239 1.555 22.2939 1.055C22.7739 0.544999 23.4189 0.289999 24.2289 0.289999C24.6089 0.289999 25.0389 0.339999 25.5189 0.439999H26.1039V2.285H25.9689C25.9689 1.815 25.8039 1.44 25.4739 1.16C25.1539 0.88 24.7389 0.74 24.2289 0.74C23.7189 0.74 23.2889 0.91 22.9389 1.25C22.5989 1.59 22.4289 2.015 22.4289 2.525C22.4289 3.035 22.6289 3.475 23.0289 3.845L25.9839 6.575C26.4839 7.035 26.7339 7.665 26.7339 8.465C26.7339 9.265 26.4789 9.925 25.9689 10.445C25.4589 10.955 24.7789 11.21 23.9289 11.21C23.4889 11.21 23.0189 11.14 22.5189 11C22.0289 10.87 21.6489 10.665 21.3789 10.385Z'
          fill='#525C60'
        />
      </svg>
    </Box>
  );
}