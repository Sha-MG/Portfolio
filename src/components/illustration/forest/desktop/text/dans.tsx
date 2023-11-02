import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function Dans() {
  const parallax = useParallax({ translateX: [0, 400] });
  return (
    <Box
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
      position='absolute'
      left={-5}
    >
      <svg
        width='48'
        height='20'
        viewBox='0 0 48 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1.40945 0.462219C2.16486 0.432002 2.89761 0.416894 3.6077 0.416894C4.33289 0.401786 5.15629 0.394232 6.07789 0.394232C7.02971 0.394232 8.0193 0.545314 9.04666 0.847478C10.074 1.14964 11.0107 1.64066 11.8568 2.32053C12.7028 3.0004 13.3978 3.89178 13.9417 4.99468C14.4856 6.09758 14.7576 7.44977 14.7576 9.05124C14.7576 10.411 14.5687 11.6952 14.191 12.9038C13.8284 14.1125 13.277 15.1701 12.5367 16.0766C11.7964 16.9679 10.8672 17.678 9.74919 18.2068C8.63118 18.7356 7.33187 19 5.85127 19H1.6814C1.42456 19 1.2206 18.9849 1.06952 18.9547C0.933544 18.9245 0.865557 18.8489 0.865557 18.7281C0.865557 18.6223 0.918436 18.5392 1.02419 18.4788C1.12995 18.4032 1.31125 18.3655 1.56809 18.3655C1.7645 18.3655 1.97601 18.3655 2.20263 18.3655C2.44437 18.3503 2.66343 18.3277 2.85984 18.2975C3.07136 18.2673 3.2451 18.2144 3.38108 18.1388C3.51705 18.0633 3.58504 17.9575 3.58504 17.8216C3.58504 16.9453 3.58504 16.205 3.58504 15.6007C3.58504 14.9963 3.58504 14.392 3.58504 13.7877C3.60014 13.1833 3.6077 12.5261 3.6077 11.816C3.6077 11.0908 3.6077 10.1844 3.6077 9.09656C3.6077 8.80951 3.60014 8.34871 3.58504 7.71416C3.56993 7.07962 3.54727 6.4073 3.51705 5.69722C3.50194 4.98713 3.48683 4.29971 3.47172 3.63494C3.45662 2.97018 3.44906 2.44895 3.44906 2.07124C3.44906 1.84462 3.40374 1.67088 3.31309 1.55001C3.22244 1.41404 3.08646 1.31583 2.90517 1.2554C2.73898 1.19497 2.53502 1.1572 2.29328 1.14209C2.05155 1.12698 1.77205 1.11943 1.45478 1.11943C1.25837 1.11943 1.1224 1.08166 1.04686 1.00611C0.971315 0.915466 0.933544 0.83237 0.933544 0.756828C0.933544 0.57553 1.09218 0.477327 1.40945 0.462219ZM5.94192 1.18741C5.71529 1.18741 5.48112 1.20252 5.23939 1.23274C4.99765 1.24785 4.76348 1.26295 4.53685 1.27806V18.0029C4.53685 18.0633 4.58218 18.1086 4.67283 18.1388C4.77859 18.169 4.89945 18.1917 5.03542 18.2068C5.1714 18.2219 5.32248 18.2295 5.48867 18.2295C5.65486 18.2295 5.80594 18.2295 5.94192 18.2295C7.30166 18.2295 8.47254 17.9953 9.45458 17.5269C10.4366 17.0586 11.2449 16.4165 11.8794 15.6007C12.514 14.7697 12.9823 13.7952 13.2845 12.6772C13.5867 11.5592 13.7378 10.3505 13.7378 9.05124C13.7378 7.96345 13.5867 6.94364 13.2845 5.99183C12.9823 5.04001 12.514 4.20906 11.8794 3.49897C11.2449 2.78888 10.4366 2.22988 9.45458 1.82196C8.47254 1.39893 7.30166 1.18741 5.94192 1.18741ZM23.0075 14.037C23.0075 13.8405 23.0075 13.6517 23.0075 13.4704C23.0226 13.274 23.0302 13.1229 23.0302 13.0171C23.0302 11.8387 22.8187 10.9322 22.3956 10.2977C21.9726 9.64801 21.2625 9.32319 20.2654 9.32319C19.933 9.32319 19.6082 9.36096 19.2909 9.4365C18.9736 9.49693 18.6866 9.59514 18.4297 9.73111C18.188 9.86708 17.9916 10.0333 17.8405 10.2297C17.6894 10.4261 17.6139 10.6452 17.6139 10.8869C17.6139 11.0682 17.6592 11.1815 17.7499 11.2268C17.8405 11.2721 17.9463 11.3099 18.0671 11.3401C18.188 11.3704 18.3089 11.4232 18.4297 11.4988C18.5657 11.5592 18.6337 11.7103 18.6337 11.952C18.6337 12.1786 18.5582 12.3675 18.4071 12.5186C18.2711 12.6697 18.0747 12.7452 17.8179 12.7452C17.4704 12.7452 17.1984 12.6092 17.002 12.3373C16.8207 12.0502 16.7301 11.7103 16.7301 11.3175C16.7301 10.9096 16.8207 10.547 17.002 10.2297C17.1984 9.8973 17.4553 9.6178 17.7725 9.39117C18.1049 9.14944 18.4977 8.96814 18.951 8.84728C19.4042 8.7113 19.9028 8.64332 20.4467 8.64332C21.6402 8.64332 22.5165 8.98325 23.0755 9.66312C23.6496 10.343 23.9367 11.4308 23.9367 12.9265C23.9367 13.1078 23.9291 13.342 23.914 13.629C23.914 13.901 23.9065 14.188 23.8914 14.4902C23.8914 14.7924 23.8838 15.1021 23.8687 15.4194C23.8687 15.7215 23.8687 15.9935 23.8687 16.2352C23.8687 16.7036 23.8838 17.0888 23.914 17.391C23.9442 17.6931 23.9971 17.9349 24.0727 18.1162C24.1633 18.2824 24.2691 18.4032 24.3899 18.4788C24.5259 18.5392 24.6845 18.5694 24.8658 18.5694C25.0774 18.5694 25.2435 18.5392 25.3644 18.4788C25.4853 18.4032 25.5759 18.305 25.6364 18.1842C25.7119 18.0633 25.7572 17.9273 25.7723 17.7762C25.8026 17.61 25.8252 17.4439 25.8403 17.2777C25.8554 17.0964 25.931 17.0057 26.0669 17.0057C26.1878 17.0057 26.2634 17.051 26.2936 17.1417C26.3389 17.2323 26.3616 17.3608 26.3616 17.5269C26.3616 18.1766 26.218 18.6298 25.931 18.8867C25.6439 19.1284 25.2813 19.2493 24.8432 19.2493C24.4353 19.2493 24.0651 19.1511 23.7327 18.9547C23.4155 18.7432 23.1888 18.3957 23.0529 17.9122C22.5694 18.3503 22.0331 18.6827 21.4438 18.9094C20.8697 19.136 20.2276 19.2493 19.5175 19.2493C18.46 19.2493 17.6139 19.0076 16.9794 18.5241C16.3599 18.0406 16.0502 17.3985 16.0502 16.5978C16.0502 16.1899 16.1408 15.8122 16.3221 15.4647C16.5034 15.1021 16.7603 14.7924 17.0927 14.5355C17.425 14.2787 17.8254 14.0823 18.2938 13.9463C18.7621 13.7952 19.2834 13.7197 19.8575 13.7197C20.4316 13.7197 20.983 13.8028 21.5118 13.969C22.0406 14.1352 22.5392 14.3995 23.0075 14.7621V14.037ZM16.9794 16.5978C16.9794 17.2021 17.2211 17.6856 17.7045 18.0482C18.2031 18.3957 18.8452 18.5694 19.6308 18.5694C20.0841 18.5694 20.5147 18.509 20.9226 18.3881C21.3305 18.2673 21.6856 18.1086 21.9877 17.9122C22.305 17.7007 22.5543 17.4665 22.7356 17.2097C22.9169 16.9377 23.0075 16.6507 23.0075 16.3485C23.0075 16.0766 22.9244 15.8197 22.7582 15.578C22.6072 15.3363 22.3956 15.1323 22.1237 14.9661C21.8518 14.7848 21.5269 14.6488 21.1492 14.5582C20.7866 14.4524 20.3938 14.3995 19.9708 14.3995C19.5478 14.3995 19.1549 14.4524 18.7923 14.5582C18.4297 14.6639 18.1125 14.815 17.8405 15.0114C17.5686 15.1927 17.3571 15.4194 17.206 15.6913C17.0549 15.9632 16.9794 16.2654 16.9794 16.5978ZM36.8333 19.0227H38.0571C38.2837 19.0227 38.5103 19.0453 38.737 19.0906C38.9787 19.136 39.0996 19.2417 39.0996 19.4079C39.0996 19.4986 39.0618 19.559 38.9862 19.5892C38.9107 19.6345 38.82 19.6572 38.7143 19.6572C38.669 19.6572 38.533 19.6572 38.3064 19.6572C38.0797 19.6572 37.8078 19.6572 37.4905 19.6572C37.1733 19.6723 36.8333 19.6799 36.4707 19.6799C36.1081 19.6799 35.7682 19.6799 35.4509 19.6799C35.1336 19.695 34.8617 19.7025 34.6351 19.7025C34.4085 19.7025 34.2725 19.7025 34.2272 19.7025C33.8646 19.7025 33.6833 19.6119 33.6833 19.4306C33.6833 19.2342 33.857 19.1209 34.2045 19.0906C34.5218 19.0604 34.7786 19.0302 34.975 19C35.1865 18.9698 35.3527 18.932 35.4736 18.8867C35.5944 18.8263 35.6851 18.7583 35.7455 18.6827C35.806 18.5921 35.8362 18.4712 35.8362 18.3201C35.8664 17.6403 35.8891 16.9679 35.9042 16.3032C35.9193 15.6233 35.9268 15.0416 35.9268 14.5582C35.9268 13.969 35.9042 13.3722 35.8588 12.7679C35.8286 12.1484 35.7304 11.5894 35.5642 11.0908C35.398 10.5772 35.1412 10.1617 34.7937 9.84442C34.4613 9.52715 33.993 9.36851 33.3886 9.36851C32.7692 9.36851 32.1649 9.54981 31.5757 9.91241C31.0015 10.275 30.5407 10.8189 30.1933 11.5441C29.9364 12.1031 29.7853 12.647 29.74 13.1758C29.6947 13.6895 29.672 14.2258 29.672 14.7848V18.0029H31.1904C31.4019 18.0029 31.5832 18.0255 31.7343 18.0708C31.8854 18.1162 31.9609 18.2068 31.9609 18.3428C31.9609 18.5543 31.7041 18.6601 31.1904 18.6601C31.1451 18.6601 31.0242 18.6601 30.8278 18.6601C30.6314 18.6601 30.3897 18.6601 30.1026 18.6601C29.8307 18.6601 29.5285 18.6676 29.1961 18.6827C28.8788 18.6827 28.5767 18.6827 28.2896 18.6827C28.0026 18.6827 27.7533 18.6827 27.5418 18.6827C27.3303 18.6827 27.2018 18.6827 27.1565 18.6827C26.8997 18.6827 26.7184 18.6676 26.6126 18.6374C26.5069 18.5921 26.454 18.5316 26.454 18.4561C26.454 18.3503 26.5069 18.2673 26.6126 18.2068C26.7335 18.1313 26.8846 18.086 27.0659 18.0708L28.0857 18.0029C28.3123 17.9877 28.4709 17.9122 28.5616 17.7762C28.6522 17.6403 28.7051 17.3305 28.7202 16.8471C28.7353 16.137 28.7504 15.5024 28.7655 14.9434C28.7806 14.3693 28.7882 13.8179 28.7882 13.2891C28.8033 12.7603 28.8109 12.2315 28.8109 11.7027C28.826 11.1739 28.8335 10.5998 28.8335 9.98039C28.8335 9.82931 28.8109 9.70845 28.7655 9.6178C28.7202 9.52715 28.6296 9.48182 28.4936 9.48182H26.9299C26.6579 9.48182 26.3784 9.46672 26.0914 9.4365C25.8194 9.40628 25.6835 9.3383 25.6835 9.23254C25.6835 9.12678 25.8194 9.04369 26.0914 8.98325C26.3784 8.92282 26.7108 8.8775 27.0885 8.84728C27.4662 8.81706 27.8515 8.80195 28.2443 8.80195C28.6371 8.78685 28.9468 8.77929 29.1735 8.77929C29.3548 8.77929 29.4832 8.81706 29.5587 8.8926C29.6494 8.95304 29.7022 9.11167 29.7173 9.36851L29.7853 10.9096C30.1328 10.2146 30.6238 9.67068 31.2584 9.27786C31.908 8.88505 32.6181 8.68864 33.3886 8.68864C33.7815 8.68864 34.1818 8.75663 34.5897 8.8926C34.9977 9.02858 35.3678 9.26275 35.7002 9.59514C36.0326 9.92752 36.3045 10.3808 36.516 10.9549C36.7276 11.5139 36.8333 12.2315 36.8333 13.1078V19.0227ZM40.3979 18.1615C40.413 18.2824 40.4205 18.4108 40.4205 18.5468C40.4205 18.6827 40.4205 18.796 40.4205 18.8867C40.4205 19.1133 40.3979 19.3022 40.3525 19.4532C40.3072 19.6043 40.2014 19.6799 40.0353 19.6799C39.9295 19.6799 39.8389 19.6421 39.7633 19.5666C39.7029 19.491 39.6727 19.3475 39.6727 19.136C39.6727 19.0151 39.6802 18.8111 39.6953 18.5241C39.7104 18.237 39.718 17.9877 39.718 17.7762C39.718 17.4892 39.7029 17.1644 39.6727 16.8018C39.6424 16.4392 39.6273 16.1219 39.6273 15.8499C39.6273 15.3665 39.7331 15.1247 39.9446 15.1247C40.1712 15.1247 40.3072 15.3891 40.3525 15.9179C40.3827 16.4467 40.4432 16.8546 40.5338 17.1417C40.6245 17.4287 40.8133 17.7007 41.1004 17.9575C41.4479 18.2748 41.8331 18.5014 42.2562 18.6374C42.6943 18.7583 43.1476 18.8187 43.6159 18.8187C43.903 18.8187 44.2051 18.7885 44.5224 18.7281C44.8397 18.6525 45.1267 18.5392 45.3836 18.3881C45.6404 18.2219 45.8519 18.0104 46.0181 17.7536C46.1994 17.4967 46.2901 17.1719 46.2901 16.7791C46.2901 16.4316 46.2145 16.1521 46.0634 15.9406C45.9124 15.714 45.6933 15.5251 45.4062 15.374C45.1192 15.2078 44.7641 15.0719 44.3411 14.9661C43.9181 14.8452 43.4346 14.7244 42.8907 14.6035C41.9389 14.392 41.1986 14.0672 40.6698 13.629C40.141 13.1909 39.8766 12.5412 39.8766 11.6801C39.8766 11.1362 39.9748 10.6754 40.1712 10.2977C40.3827 9.91996 40.6547 9.61024 40.9871 9.36851C41.3346 9.11167 41.7198 8.93037 42.1429 8.82462C42.581 8.70375 43.0267 8.64332 43.4799 8.64332C43.9181 8.64332 44.2958 8.68864 44.613 8.77929C44.9303 8.86994 45.2023 8.99081 45.4289 9.14189C45.6555 9.29297 45.8368 9.45916 45.9728 9.64046C46.1088 9.80665 46.2221 9.96529 46.3127 10.1164C46.2976 9.91996 46.2825 9.716 46.2674 9.50449C46.2674 9.29297 46.2674 9.12678 46.2674 9.00592C46.2674 8.70375 46.2976 8.49979 46.358 8.39403C46.4185 8.28827 46.5091 8.2354 46.63 8.2354C46.766 8.2354 46.8642 8.29583 46.9246 8.41669C47.0001 8.52245 47.0379 8.65843 47.0379 8.82462C47.0379 9.73111 47.0228 10.4865 46.9926 11.0908C46.9775 11.6801 46.9699 12.0578 46.9699 12.224C46.9699 12.3599 46.9473 12.4959 46.9019 12.6319C46.8566 12.7528 46.766 12.8132 46.63 12.8132C46.494 12.8132 46.3958 12.7528 46.3354 12.6319C46.2901 12.4959 46.2598 12.3675 46.2447 12.2466C46.2296 12.1258 46.2145 11.9898 46.1994 11.8387C46.1994 11.6725 46.1616 11.4761 46.0861 11.2495C46.0106 10.9775 45.9048 10.7283 45.7688 10.5016C45.6329 10.2599 45.4591 10.0559 45.2476 9.88975C45.0361 9.72356 44.7792 9.59514 44.4771 9.50449C44.1749 9.39873 43.8123 9.34585 43.3893 9.34585C43.0116 9.34585 42.6565 9.39117 42.3242 9.48182C41.9918 9.55736 41.7047 9.69334 41.463 9.88975C41.2213 10.071 41.0324 10.3128 40.8964 10.6149C40.7605 10.902 40.6925 11.257 40.6925 11.6801C40.6925 12.0729 40.7529 12.3977 40.8738 12.6545C41.0097 12.8963 41.2061 13.1002 41.463 13.2664C41.7349 13.4175 42.0673 13.5535 42.4601 13.6744C42.868 13.7801 43.344 13.8934 43.8879 14.0143C44.3864 14.1352 44.8321 14.2636 45.2249 14.3995C45.6329 14.5204 45.9728 14.6791 46.2447 14.8755C46.5318 15.0568 46.7509 15.2985 46.9019 15.6007C47.0681 15.8877 47.1512 16.2428 47.1512 16.6658C47.1512 17.3154 47.0001 17.8291 46.698 18.2068C46.3958 18.5845 46.0408 18.8716 45.6329 19.068C45.24 19.2644 44.8397 19.3853 44.4317 19.4306C44.0238 19.491 43.7217 19.5212 43.5253 19.5212C43.2231 19.5212 42.9058 19.4835 42.5734 19.4079C42.2562 19.3475 41.954 19.2568 41.6669 19.136C41.3799 19.0151 41.1231 18.8716 40.8964 18.7054C40.6698 18.5392 40.5036 18.3579 40.3979 18.1615Z'
          fill='black'
        />
      </svg>
    </Box>
  );
}