import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function Chante() {
  const parallax = useParallax({ translateX: [0, 600] });

  return (
    <Box
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
      position='absolute'
      bottom={12}
      left={-270}
    >
      <svg
        width='108'
        height='36'
        viewBox='0 0 108 36'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5.91126 35.3823C4.46087 35.3823 3.25221 34.8988 2.28529 33.9319C1.31836 32.965 0.8349 31.5146 0.8349 29.5807C0.8349 28.0699 1.12196 26.6044 1.69607 25.1842C2.3004 23.7338 3.08602 22.4345 4.05295 21.2863C5.01988 20.1381 6.09256 19.2316 7.271 18.5668C8.44944 17.8718 9.61277 17.5244 10.761 17.5244C11.9999 17.5244 12.8459 17.887 13.2992 18.6121C13.7524 19.3373 13.979 20.0928 13.979 20.8784C13.979 21.7547 13.7675 22.5252 13.3445 23.1899C12.9517 23.8547 12.4078 24.1871 11.7128 24.1871C11.1991 24.1871 10.761 23.9605 10.3984 23.5072C10.8516 23.2655 11.2445 22.782 11.5768 22.0568C11.9092 21.3014 12.0754 20.5913 12.0754 19.9266C12.0754 19.564 11.9999 19.292 11.8488 19.1107C11.7279 18.8992 11.4711 18.7934 11.0783 18.7934C10.2624 18.7934 9.41637 19.156 8.54009 19.8812C7.69403 20.6064 6.89329 21.5431 6.13788 22.6914C5.41269 23.8396 4.80836 25.0482 4.3249 26.3173C3.87165 27.5864 3.64503 28.78 3.64503 29.898C3.64503 30.8347 3.87165 31.6959 4.3249 32.4815C4.77814 33.2671 5.65442 33.6599 6.95373 33.6599C8.16238 33.6599 9.37104 33.3275 10.5797 32.6628C11.8186 31.998 12.9668 31.0462 14.0244 29.8073C15.0819 28.5685 15.928 27.1181 16.5626 25.4562L17.1518 25.9094C16.4568 27.7224 15.505 29.3541 14.2963 30.8045C13.0877 32.2246 11.7581 33.3427 10.3078 34.1585C8.85736 34.9743 7.39187 35.3823 5.91126 35.3823ZM17.8426 34.5664C17.2685 34.5664 16.8153 34.083 16.4829 33.116C16.1505 32.1491 15.9843 31.0613 15.9843 29.8527C15.9843 28.4023 16.226 26.6799 16.7095 24.6856C17.193 22.6914 17.8275 20.5913 18.6131 18.3855C19.3988 16.1797 20.275 14.0192 21.242 11.9041C22.2391 9.78895 23.2514 7.8702 24.2787 6.14787C25.3061 4.42553 26.273 3.05068 27.1795 2.02333C28.086 0.995966 28.8716 0.482286 29.5364 0.482286C30.0803 0.482286 30.458 0.814667 30.6695 1.47943C30.9112 2.11398 31.0321 2.73341 31.0321 3.33774C31.0321 4.1838 30.8357 5.21116 30.4429 6.41982C30.0803 7.62847 29.5666 8.92778 28.9018 10.3177C28.2371 11.6775 27.4666 13.0221 26.5903 14.3516C25.714 15.6812 24.7622 16.9049 23.7348 18.0229C22.7075 19.1107 21.665 19.9719 20.6074 20.6064C20.2448 21.4827 19.9276 22.4647 19.6556 23.5525C19.4139 24.6403 19.2326 25.713 19.1117 26.7706C18.9908 27.7979 18.9304 28.7195 18.9304 29.5354C18.9304 29.8678 18.9304 30.1548 18.9304 30.3966C18.9606 30.6383 18.9908 30.8649 19.0211 31.0764C19.4441 29.8376 19.8973 28.644 20.3808 27.4958C20.8945 26.3173 21.4384 25.2447 22.0125 24.2777C22.5866 23.2806 23.1909 22.4194 23.8255 21.6942C24.4902 20.9388 25.1852 20.3647 25.9104 19.9719C26.6356 19.5489 27.4061 19.3373 28.222 19.3373C29.068 19.3373 29.7328 19.5489 30.2162 19.9719C30.7299 20.3647 31.0925 20.8784 31.304 21.5129C31.5458 22.1173 31.6666 22.7518 31.6666 23.4166C31.6666 24.3533 31.5004 25.2598 31.1681 26.136C30.8659 27.0123 30.5486 27.8584 30.2162 28.6742C29.8839 29.4901 29.7177 30.2757 29.7177 31.0311C29.7177 31.6354 29.8385 32.0736 30.0803 32.3455C30.3522 32.6175 30.6846 32.7534 31.0774 32.7534C31.7724 32.7534 32.5429 32.4211 33.389 31.7563C34.2653 31.0915 35.1264 30.2153 35.9725 29.1275C36.8185 28.0095 37.5437 26.8008 38.1481 25.5015L38.7373 26.0454C38.1027 27.526 37.3322 28.8706 36.4257 30.0793C35.5192 31.2577 34.5221 32.1944 33.4343 32.8894C32.3465 33.5844 31.2134 33.9319 30.035 33.9319C29.0076 33.9319 28.222 33.6599 27.6781 33.116C27.1644 32.5721 26.9075 31.8923 26.9075 31.0764C26.9075 30.4419 27.0284 29.7318 27.2701 28.9462C27.5119 28.1605 27.7385 27.3598 27.95 26.544C28.1917 25.7281 28.3126 24.9576 28.3126 24.2324C28.3126 23.4468 28.1464 22.8878 27.814 22.5554C27.4817 22.223 27.0737 22.0568 26.5903 22.0568C25.8349 22.0568 25.155 22.359 24.5507 22.9633C23.9463 23.5676 23.3873 24.3533 22.8737 25.3202C22.3902 26.2569 21.9218 27.254 21.4686 28.3116C21.0456 29.3692 20.6376 30.3814 20.2448 31.3484C19.852 32.2851 19.4592 33.0556 19.0664 33.6599C18.6736 34.2643 18.2656 34.5664 17.8426 34.5664ZM21.1966 18.8388C22.0427 18.174 22.8585 17.3279 23.6442 16.3006C24.46 15.2732 25.2154 14.1854 25.9104 13.0372C26.6054 11.8588 27.2248 10.7105 27.7687 9.59254C28.3126 8.47453 28.7356 7.46228 29.0378 6.55579C29.34 5.6493 29.4911 4.96943 29.4911 4.51618C29.4911 4.3651 29.4759 4.27445 29.4457 4.24423C29.4155 4.1838 29.3702 4.15358 29.3098 4.15358C29.0982 4.15358 28.6601 4.57661 27.9953 5.42267C27.3608 6.23852 26.6205 7.34142 25.7744 8.73137C24.9284 10.1213 24.0974 11.6926 23.2816 13.4451C22.4657 15.1977 21.7708 16.9956 21.1966 18.8388ZM39.4437 34.9743C38.507 34.9743 37.7214 34.6571 37.0868 34.0225C36.4221 33.4182 36.0897 32.4815 36.0897 31.2124C36.0897 30.1246 36.3314 28.9613 36.8149 27.7224C37.2983 26.4533 37.9631 25.2144 38.8092 24.0058C39.6552 22.7669 40.607 21.6489 41.6646 20.6518C42.7524 19.6244 43.8855 18.8086 45.064 18.2042C46.2726 17.5999 47.4662 17.2977 48.6446 17.2977C49.8231 17.2977 50.8051 17.615 51.5907 18.2495C52.3763 18.8539 52.7692 19.6697 52.7692 20.6971C52.7692 21.4525 52.5576 21.9662 52.1346 22.2381C51.7418 22.5101 51.213 22.646 50.5482 22.646C50.6087 22.4043 50.654 22.1475 50.6842 21.8755C50.7447 21.5734 50.7749 21.3014 50.7749 21.0597C50.7749 20.3647 50.6087 19.7755 50.2763 19.292C49.9439 18.7783 49.3698 18.5215 48.554 18.5215C47.7079 18.5215 46.8467 18.8237 45.9705 19.428C45.0942 20.0021 44.2481 20.7877 43.4323 21.7849C42.6164 22.7518 41.8912 23.8094 41.2567 24.9576C40.6222 26.1058 40.1236 27.2389 39.761 28.3569C39.3984 29.475 39.2171 30.4721 39.2171 31.3484C39.2171 32.5268 39.625 33.116 40.4409 33.116C41.1358 33.116 41.8912 32.7988 42.7071 32.1642C43.5229 31.4995 44.3539 30.6685 45.1999 29.6714C46.0762 28.644 46.9072 27.5864 47.6928 26.4986C48.4784 25.4108 49.1734 24.4137 49.7777 23.5072C49.8986 23.3259 49.9741 23.2353 50.0044 23.2353C50.1857 23.2655 50.4123 23.3259 50.6842 23.4166C50.9864 23.5072 51.2432 23.6281 51.4547 23.7792C51.6663 23.9302 51.772 24.1266 51.772 24.3684C51.772 24.6403 51.636 25.018 51.3641 25.5015C51.0921 25.9547 50.79 26.4835 50.4576 27.0879C50.1252 27.6922 49.8231 28.3116 49.5511 28.9462C49.2792 29.5505 49.1432 30.1246 49.1432 30.6685C49.1432 31.1217 49.2641 31.575 49.5058 32.0282C49.7475 32.4513 50.1403 32.6628 50.6842 32.6628C51.5001 32.6628 52.5728 32.0736 53.9023 30.8951C55.2318 29.6865 56.5764 27.8886 57.9362 25.5015L58.3894 25.9547C57.7549 27.5864 56.939 29.0217 55.9419 30.2606C54.9447 31.4995 53.8721 32.4664 52.7238 33.1614C51.6058 33.8563 50.5029 34.2038 49.4151 34.2038C48.2971 34.2038 47.4662 33.8714 46.9223 33.2067C46.4086 32.5419 46.1518 31.8167 46.1518 31.0311C46.1518 30.8498 46.1669 30.6534 46.1971 30.4419C46.2273 30.2001 46.2575 29.9584 46.2877 29.7167C44.9884 31.4692 43.7949 32.7837 42.7071 33.6599C41.6495 34.5362 40.5617 34.9743 39.4437 34.9743ZM71.649 33.7506C70.5914 33.7506 69.7907 33.4786 69.2468 32.9347C68.7331 32.3908 68.4763 31.6959 68.4763 30.8498C68.4763 30.2153 68.582 29.5505 68.7935 28.8555C69.0353 28.1605 69.2619 27.4505 69.4734 26.7253C69.6849 25.9698 69.7907 25.2447 69.7907 24.5497C69.7907 23.7036 69.6094 23.1295 69.2468 22.8273C68.9144 22.495 68.4914 22.3288 67.9777 22.3288C67.041 22.3288 66.0892 22.7216 65.1222 23.5072C64.1553 24.2626 63.2186 25.2447 62.3121 26.4533C61.4056 27.6318 60.5596 28.8555 59.7739 30.1246C58.9883 31.3937 58.2933 32.5268 57.689 33.524C57.2055 33.524 56.7523 33.4333 56.3293 33.252C55.876 33.1009 55.5285 32.8592 55.2868 32.5268C55.2868 32.3757 55.453 31.9074 55.7854 31.1217C56.0875 30.3361 56.4501 29.3692 56.8732 28.221C57.2962 27.0727 57.6739 25.8943 58.0063 24.6856C58.3387 23.477 58.5048 22.3741 58.5048 21.3769C58.6861 21.1654 58.9732 20.9539 59.366 20.7424C59.7588 20.5309 60.1668 20.4251 60.5898 20.4251C61.4056 20.4251 61.8135 20.8179 61.8135 21.6036C61.8135 22.087 61.6776 22.9029 61.4056 24.0511C61.1337 25.1691 60.7862 26.3476 60.3632 27.5864C61.179 26.3476 62.0855 25.1238 63.0826 23.9151C64.11 22.6763 65.1978 21.6489 66.346 20.8331C67.4942 20.0172 68.6425 19.6093 69.7907 19.6093C70.9691 19.6093 71.8152 20.0323 72.3289 20.8784C72.8728 21.7244 73.1447 22.6611 73.1447 23.6885C73.1447 24.6252 72.9936 25.5015 72.6915 26.3173C72.3893 27.103 72.072 27.8735 71.7396 28.6289C71.4375 29.3541 71.2864 30.0944 71.2864 30.8498C71.2864 31.4843 71.4073 31.9376 71.649 32.2095C71.9209 32.4513 72.2533 32.5721 72.6461 32.5721C73.4016 32.5721 74.157 32.2246 74.9124 31.5297C75.6678 30.8045 76.393 29.898 77.088 28.8102C77.8131 27.7224 78.4477 26.6195 78.9916 25.5015L79.4902 26.0907C78.8556 27.5713 78.1455 28.8857 77.3599 30.034C76.5743 31.1822 75.7131 32.0887 74.7764 32.7534C73.8397 33.4182 72.7972 33.7506 71.649 33.7506ZM81.9749 34.929C80.6756 34.929 79.6784 34.5513 78.9834 33.7959C78.2885 33.0405 77.941 31.9225 77.941 30.4419C77.941 29.1124 78.1827 27.4807 78.6662 25.5468C79.1799 23.5827 79.8144 21.5734 80.5698 19.5186C80.2676 19.4582 79.9806 19.4129 79.7086 19.3827C79.4367 19.3222 79.1799 19.2467 78.9381 19.156V18.3402C79.1799 18.3704 79.4669 18.4006 79.7993 18.4308C80.1317 18.4611 80.5094 18.4913 80.9324 18.5215C81.5669 16.8898 82.2468 15.3186 82.972 13.8077C83.6972 12.2667 84.4073 10.907 85.1023 9.72851C85.8275 8.51986 86.5073 7.56804 87.1419 6.87306C87.8066 6.14787 88.3656 5.78527 88.8189 5.78527C89.0606 5.78527 89.2721 5.87592 89.4534 6.05722C89.665 6.2083 89.7707 6.45003 89.7707 6.78241C89.7707 7.29609 89.4534 8.14215 88.8189 9.32059C88.1843 10.4688 87.3987 11.8437 86.462 13.4451C85.5253 15.0466 84.6188 16.7841 83.7425 18.6575C84.0145 18.6575 84.2864 18.6575 84.5584 18.6575C84.8605 18.6575 85.1476 18.6575 85.4195 18.6575C86.4167 18.6575 87.4592 18.6424 88.5469 18.6121C89.665 18.5819 90.783 18.5064 91.901 18.3855V19.2014C90.2391 19.3827 88.7434 19.5186 87.4138 19.6093C86.1145 19.6999 84.9512 19.7453 83.9238 19.7453C83.803 19.7453 83.6821 19.7453 83.5612 19.7453C83.4706 19.7453 83.3648 19.7453 83.244 19.7453C82.549 21.3467 81.9598 22.9935 81.4763 24.6856C80.9928 26.3778 80.7511 28.0246 80.7511 29.626C80.7511 30.9253 80.9475 31.8621 81.3403 32.4362C81.7331 32.9801 82.3828 33.252 83.2893 33.252C84.8605 33.252 86.4016 32.557 87.9124 31.1671C89.4232 29.7771 90.7527 27.8886 91.901 25.5015L92.4902 25.9547C91.765 27.6469 90.8434 29.1728 89.7254 30.5325C88.6376 31.8923 87.4289 32.965 86.0994 33.7506C84.7699 34.5362 83.395 34.929 81.9749 34.929ZM95.9419 34.8384C94.0987 34.8384 92.7088 34.3247 91.7721 33.2973C90.8656 32.3002 90.4123 31.0613 90.4123 29.5807C90.4123 28.221 90.7447 26.7857 91.4095 25.2749C92.1045 23.764 93.011 22.3439 94.129 21.0144C95.2772 19.6848 96.5312 18.6121 97.8909 17.7963C99.2506 16.9502 100.595 16.5272 101.925 16.5272C102.62 16.5272 103.254 16.7085 103.828 17.0711C104.433 17.4337 104.735 18.174 104.735 19.292C104.735 20.4402 104.387 21.528 103.692 22.5554C103.028 23.5525 102.136 24.4439 101.018 25.2295C99.9305 26.0152 98.7219 26.6648 97.3923 27.1785C96.093 27.662 94.7937 27.9641 93.4944 28.085C93.434 28.3872 93.3887 28.6742 93.3584 28.9462C93.3282 29.2181 93.3131 29.475 93.3131 29.7167C93.3131 30.1699 93.3584 30.6232 93.4491 31.0764C93.57 31.5297 93.7664 31.9527 94.0383 32.3455C94.3103 32.7081 94.6729 32.9952 95.1261 33.2067C95.6096 33.4182 96.1988 33.524 96.8938 33.524C98.1931 33.524 99.4773 33.1614 100.746 32.4362C102.015 31.6808 103.194 30.6987 104.282 29.4901C105.369 28.2814 106.291 26.9519 107.046 25.5015L107.59 25.9094C106.775 27.7224 105.732 29.2937 104.463 30.6232C103.224 31.9527 101.864 32.9801 100.384 33.7053C98.9334 34.4607 97.4528 34.8384 95.9419 34.8384ZM93.721 27.2238C94.5369 26.9519 95.4585 26.5591 96.4858 26.0454C97.5132 25.5015 98.4952 24.8669 99.4319 24.1418C100.399 23.4166 101.184 22.6158 101.789 21.7395C102.423 20.8633 102.741 19.9417 102.741 18.9747C102.741 18.6424 102.68 18.3855 102.559 18.2042C102.438 18.0229 102.182 17.9323 101.789 17.9323C101.064 17.9323 100.293 18.2193 99.4773 18.7934C98.6614 19.3373 97.8758 20.0625 97.1204 20.969C96.365 21.8755 95.6851 22.8727 95.0808 23.9605C94.4764 25.0482 94.0232 26.136 93.721 27.2238Z'
          fill='#9CB380'
        />
      </svg>
    </Box>
  );
}
