import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function Arbres() {
  const parallax = useParallax({ translateX: [0, 700] });

  return (
    <Box
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
      position='absolute'
      left={-459}
      top={14}
    >
      <svg
        width='121'
        height='29'
        viewBox='0 0 121 29'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5.22777 21.1687H17.0484L9.61519 3.65523L1.71057 22.2565H0.550263L9.61519 0.863234L18.6801 22.2565H5.22777V21.1687ZM31.6642 11.7049L36.5955 22.2565H35.399L30.3226 11.3786C30.371 11.3544 30.5764 11.2577 30.939 11.0885C31.3258 10.8951 31.5917 10.7621 31.7367 10.6896C31.8818 10.5929 32.1235 10.4358 32.4619 10.2182C32.8004 10.0007 33.0542 9.79521 33.2234 9.60183C33.3926 9.38427 33.5739 9.14254 33.7673 8.87663C33.9848 8.58655 34.142 8.2723 34.2387 7.93388C34.3354 7.57128 34.3837 7.18451 34.3837 6.77357C34.3837 5.25066 33.6585 4.12661 32.2081 3.40141C30.7577 2.67622 28.9568 2.31362 26.8054 2.31362H23.9046V22.2565H22.8168V1.22583H26.8054C29.6578 1.22583 31.8093 1.72138 33.2596 2.71248C34.7342 3.70358 35.4715 5.05728 35.4715 6.77357C35.4715 7.88553 35.0968 8.87663 34.3474 9.74687C33.5981 10.5929 32.7037 11.2456 31.6642 11.7049ZM46.7347 22.2565H41.5133V1.22583H45.5018C48.3543 1.22583 50.5057 1.72138 51.9561 2.71248C53.4306 3.70358 54.1679 5.05728 54.1679 6.77357C54.1679 8.82829 53.2614 10.3149 51.4484 11.2335C52.778 11.6928 53.7691 12.3817 54.4217 13.3003C55.0744 14.1947 55.4007 15.2342 55.4007 16.4187C55.4007 18.1591 54.6755 19.5733 53.2252 20.661C51.7989 21.7247 49.6354 22.2565 46.7347 22.2565ZM46.7347 21.1687C48.8619 21.1687 50.6507 20.7819 52.1011 20.0084C53.5757 19.2348 54.3129 18.0383 54.3129 16.4187C54.3129 15.6693 54.035 14.8595 53.479 13.9893C52.923 13.0948 52.0648 12.4422 50.9045 12.0312L49.019 11.3786L50.7595 10.4721C51.3638 10.1578 51.8956 9.68643 52.3549 9.05793C52.8384 8.40526 53.0801 7.6438 53.0801 6.77357C53.0801 5.25066 52.3549 4.12661 50.9045 3.40141C49.4541 2.67622 47.6532 2.31362 45.5018 2.31362H42.6011V21.1687H46.7347ZM69.8007 11.7049L74.732 22.2565H73.5354L68.4591 11.3786C68.5074 11.3544 68.7129 11.2577 69.0755 11.0885C69.4622 10.8951 69.7281 10.7621 69.8732 10.6896C70.0182 10.5929 70.26 10.4358 70.5984 10.2182C70.9368 10.0007 71.1906 9.79521 71.3598 9.60183C71.529 9.38427 71.7103 9.14254 71.9037 8.87663C72.1213 8.58655 72.2784 8.2723 72.3751 7.93388C72.4718 7.57128 72.5201 7.18451 72.5201 6.77357C72.5201 5.25066 71.7949 4.12661 70.3446 3.40141C68.8942 2.67622 67.0933 2.31362 64.9419 2.31362H62.0411V22.2565H60.9533V1.22583H64.9419C67.7943 1.22583 69.9457 1.72138 71.3961 2.71248C72.8707 3.70358 73.6079 5.05728 73.6079 6.77357C73.6079 7.88553 73.2333 8.87663 72.4839 9.74687C71.7345 10.5929 70.8401 11.2456 69.8007 11.7049ZM93.7185 20.1171C92.389 21.7851 90.2134 22.6191 87.1917 22.6191C84.1701 22.6191 82.0066 21.7609 80.7012 20.0446C79.3959 18.3283 78.7432 15.5605 78.7432 11.7412C78.7432 7.92179 79.3959 5.15397 80.7012 3.43767C82.0066 1.72138 84.1701 0.863234 87.1917 0.863234C90.6968 0.863234 93.0779 2.01146 94.3349 4.30791L85.4513 11.7412H83.7471L92.9208 4.09035C91.8571 2.66413 89.9475 1.95103 87.1917 1.95103C85.9831 1.95103 84.9678 2.08398 84.1459 2.34988C83.324 2.59161 82.5626 3.06299 81.8615 3.76401C81.1847 4.44086 80.6771 5.44405 80.3386 6.77357C80.0002 8.07892 79.831 9.73478 79.831 11.7412C79.831 13.7475 80.0002 15.4155 80.3386 16.745C80.6771 18.0503 81.1847 19.0535 81.8615 19.7545C82.5626 20.4314 83.324 20.9028 84.1459 21.1687C84.9678 21.4104 85.9831 21.5313 87.1917 21.5313C89.9475 21.5313 91.8571 20.8182 92.9208 19.392L93.7185 20.1171ZM105.062 0.790715C108.06 0.790715 110.187 1.45548 111.444 2.785L110.719 3.58271C109.559 2.44657 107.721 1.87851 105.207 1.87851C101.436 1.87851 99.5509 3.37724 99.5509 6.37471C99.5509 7.53502 100.01 8.46569 100.929 9.16671C101.847 9.84356 102.959 10.3633 104.265 10.7259C105.594 11.0885 106.912 11.4752 108.217 11.8862C109.547 12.273 110.671 12.9135 111.589 13.808C112.508 14.6782 112.967 15.8264 112.967 17.2526C112.967 18.9206 112.278 20.2501 110.9 21.2412C109.522 22.2323 107.528 22.7278 104.917 22.7278C103.636 22.7278 102.367 22.5586 101.11 22.2202C99.8772 21.8818 98.9587 21.3862 98.3543 20.7336L99.0795 19.9358C100.312 21.072 102.21 21.6401 104.772 21.6401C107.117 21.6401 108.882 21.2049 110.066 20.3347C111.275 19.4645 111.879 18.4492 111.879 17.2889C111.879 16.0802 111.42 15.1012 110.501 14.3519C109.583 13.6025 108.459 13.0465 107.129 12.6839C105.824 12.2971 104.506 11.9104 103.177 11.5236C101.872 11.1126 100.76 10.4841 99.841 9.63809C98.9224 8.79203 98.4631 7.68006 98.4631 6.30219C98.4631 4.44086 99.0795 3.06299 100.312 2.16858C101.569 1.25 103.153 0.790715 105.062 0.790715ZM117.195 27.913C117.461 27.5504 117.775 26.801 118.138 25.6649C118.524 24.5287 118.718 23.3926 118.718 22.2565H117.666V20.1534H120.059C120.059 23.8036 119.407 26.5835 118.101 28.4931L117.195 27.913Z'
          fill='black'
        />
      </svg>
    </Box>
  );
}