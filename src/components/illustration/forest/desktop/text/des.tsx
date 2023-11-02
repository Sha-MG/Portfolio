import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function Des() {
  const parallax = useParallax({ translateX: [0, 800] });

  return (
    <Box
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
      position='absolute'
      top={12}
      left={-20}
    >
      <svg
        width='27'
        height='16'
        viewBox='0 0 27 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M2.58655 15.3924C1.93388 15.3924 1.47156 15.1205 1.19962 14.5766C0.927669 14.0327 0.791695 13.4344 0.791695 12.7817C0.791695 12.1109 0.891409 11.5308 1.09084 11.0413C1.34466 10.3705 1.71632 9.6906 2.20582 9.00167C2.69533 8.2946 3.28455 7.70538 3.97349 7.23401C4.66242 6.7445 5.41481 6.49975 6.23065 6.49975C7.13715 6.49975 7.59039 7.02551 7.59039 8.07705C7.59039 8.60281 7.48161 9.16484 7.26406 9.76312L11.6968 1.06079H11.7512C11.8237 1.13331 11.9506 1.16957 12.1319 1.16957C12.5126 1.16957 12.9659 0.961075 13.4917 0.544088L13.5461 0.598477L9.46683 8.40338C7.88954 11.4311 7.10089 13.4163 7.10089 14.359C7.10089 14.8485 7.30031 15.0933 7.69917 15.0933C7.91673 15.0933 8.17961 15.0117 8.48782 14.8485C8.79603 14.6854 9.12237 14.4134 9.46683 14.0327C9.90195 13.5251 10.2736 13.0446 10.5818 12.5914C10.9082 12.12 11.2798 11.4855 11.6968 10.6877C11.7512 10.5971 11.8056 10.5518 11.86 10.5518C11.9688 10.5518 11.9688 10.6424 11.86 10.8237C11.5336 11.4401 11.1801 12.0565 10.7994 12.673C10.4368 13.2712 9.9926 13.8333 9.46683 14.359C8.81416 15.0117 8.20681 15.3381 7.64478 15.3381C7.19154 15.3381 6.81081 15.2111 6.5026 14.9573C6.21252 14.7035 6.06748 14.2684 6.06748 13.652C6.06748 13.0718 6.1672 12.4282 6.36663 11.7211C5.09754 14.1687 3.83751 15.3924 2.58655 15.3924ZM2.77691 15.1477C3.26642 15.1477 3.84658 14.7851 4.51738 14.0599C5.18819 13.3347 5.88619 12.2832 6.61138 10.9053C6.6839 10.7603 6.77455 10.5336 6.88333 10.2254C7.01024 9.8991 7.11902 9.54556 7.20967 9.16484C7.31844 8.76598 7.37283 8.39432 7.37283 8.04985C7.37283 7.68725 7.30031 7.38811 7.15528 7.15242C7.01024 6.91673 6.75642 6.79889 6.39382 6.79889C6.04935 6.79889 5.67769 6.9258 5.27884 7.17962C4.89811 7.4153 4.49925 7.82323 4.08226 8.40338C3.39333 9.32801 2.89476 10.2254 2.58655 11.0957C2.55029 11.2044 2.48684 11.422 2.39619 11.7483C2.30554 12.0565 2.22395 12.4101 2.15143 12.8089C2.07891 13.1897 2.04266 13.5613 2.04266 13.9239C2.04266 14.2684 2.09704 14.5585 2.20582 14.7942C2.3146 15.0298 2.50497 15.1477 2.77691 15.1477ZM13.5157 15.5284C12.6273 15.5284 12.0109 15.2837 11.6664 14.7942C11.322 14.2865 11.1497 13.5795 11.1497 12.673C11.1497 11.3676 11.6936 10.0079 12.7814 8.59375C13.9417 7.1071 15.1474 6.36377 16.3983 6.36377C17.3229 6.36377 17.7853 6.68105 17.7853 7.31559C17.7853 8.09517 17.3592 8.91102 16.5071 9.76312C15.2924 10.996 14.0142 11.6124 12.6726 11.6124C12.4551 12.1744 12.3463 12.7364 12.3463 13.2984C12.3463 13.9149 12.4641 14.3953 12.6998 14.7398C12.9355 15.0842 13.28 15.2565 13.7332 15.2565C14.2046 15.2565 14.6941 15.1296 15.2017 14.8757C15.7094 14.6038 16.1445 14.2865 16.5071 13.9239C16.8153 13.6157 17.1598 13.1987 17.5405 12.673C17.9394 12.1291 18.3382 11.4673 18.7371 10.6877C18.7915 10.5971 18.8458 10.5518 18.9002 10.5518C19.009 10.5518 19.009 10.6424 18.9002 10.8237C18.592 11.4401 18.2566 12.0294 17.894 12.5914C17.5496 13.1534 17.0873 13.6973 16.5071 14.2231C16.1626 14.5675 15.7275 14.8757 15.2017 15.1477C14.676 15.4015 14.114 15.5284 13.5157 15.5284ZM12.6998 11.422C13.697 11.422 14.812 10.8872 16.0448 9.81751V9.79032C16.3893 9.50024 16.7156 9.10138 17.0238 8.59375C17.3864 8.03172 17.5677 7.55128 17.5677 7.15242C17.5677 6.86234 17.3501 6.71731 16.915 6.71731C16.2261 6.71731 15.3921 7.33372 14.4131 8.56655C13.9599 9.11045 13.5973 9.61808 13.3253 10.0895C13.0534 10.5608 12.8449 11.005 12.6998 11.422ZM20.363 15.5828C18.5319 15.5828 17.6163 14.7126 17.6163 12.9721C17.6163 12.4826 17.6979 11.9568 17.8611 11.3948V11.422C17.9517 11.0957 18.124 10.7784 18.3778 10.4702C18.686 10.0895 18.967 9.8991 19.2208 9.8991C19.2208 9.8991 19.248 9.8991 19.3024 9.8991C19.3568 9.8991 19.4475 9.91723 19.5744 9.95349L19.8735 9.49117C20.1273 9.11045 20.354 8.72972 20.5534 8.34899C20.7709 7.95014 20.9976 7.56034 21.2333 7.17962C21.9041 6.01931 22.4117 5.39383 22.7562 5.30318C22.8649 5.26692 22.9465 5.24879 23.0009 5.24879C23.2729 5.24879 23.4088 5.3485 23.4088 5.54793C23.4088 5.78362 23.2094 5.92866 22.8106 5.98305C22.448 6.03744 22.2213 6.08276 22.1307 6.11902C21.9856 6.2278 21.9131 6.46349 21.9131 6.82608C21.9131 7.20681 22.1579 7.85042 22.6474 8.75691C23.1369 9.64528 23.3816 10.4339 23.3816 11.1229C23.3816 11.3042 23.3635 11.4764 23.3273 11.6396C23.3091 11.8027 23.2819 11.975 23.2457 12.1563C22.7562 14.2049 21.4599 15.2293 19.3568 15.2293C19.7738 15.3199 20.1545 15.3652 20.499 15.3652C21.1335 15.3652 21.75 15.2565 22.3482 15.0389C22.9465 14.8032 23.4995 14.486 24.0071 14.0871C24.5329 13.6701 25.0133 13.1715 25.4484 12.5914C25.9017 11.9931 26.2915 11.3585 26.6178 10.6877C26.6722 10.579 26.7266 10.5246 26.781 10.5246C26.8898 10.5246 26.8988 10.6152 26.8082 10.7965C26.5181 11.3404 26.2099 11.8571 25.8836 12.3466C25.5754 12.818 25.24 13.2441 24.8774 13.6248C24.4422 14.0599 23.853 14.495 23.1097 14.9301C22.3664 15.3652 21.4508 15.5828 20.363 15.5828ZM19.1664 15.0117C20.0911 15.0117 20.8525 14.3137 21.4508 12.9177C21.9403 11.8299 22.1851 10.7331 22.1851 9.62715C22.1851 9.48211 22.1579 9.29175 22.1035 9.05606C22.0672 8.80224 22.0038 8.5031 21.9131 8.15863C21.8406 7.83229 21.7862 7.55128 21.75 7.31559C21.7137 7.06177 21.7046 6.84421 21.7228 6.66292C21.3783 7.35185 21.0338 7.97733 20.6894 8.53936C20.3449 9.10138 20.0186 9.60902 19.7103 10.0623C19.801 10.2073 19.8463 10.3523 19.8463 10.4974C19.8463 10.7512 19.7466 11.0322 19.5472 11.3404C19.4203 11.5217 19.2027 11.694 18.8945 11.8571C18.5863 12.0203 18.3687 12.1744 18.2418 12.3194C18.0424 12.6095 17.9427 12.9902 17.9427 13.4616C17.9427 14.495 18.3506 15.0117 19.1664 15.0117Z'
          fill='black'
        />
      </svg>
    </Box>
  );
}
