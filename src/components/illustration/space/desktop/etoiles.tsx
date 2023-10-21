import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function Etoiles() {
  const parallax = useParallax({
    translateX: [0, 400],
  });

  return (
    <Box
      position='absolute'
      top='6'
      right='170'
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='105'
        height='28'
        viewBox='0 0 105 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8.832 23.5844C7.25333 23.5844 5.856 23.275 4.64 22.6564C3.424 22.0377 2.47467 21.1737 1.792 20.0644C1.13067 18.9337 0.8 17.6644 0.8 16.2564C0.8 14.8697 1.13067 13.5897 1.792 12.4164C2.47467 11.243 3.41333 10.3044 4.608 9.60038C5.80267 8.89638 7.15733 8.54438 8.672 8.54438C10.0373 8.54438 11.2427 8.82171 12.288 9.37638C13.3333 9.93105 14.1333 10.667 14.688 11.5844C15.2427 12.4804 15.52 13.419 15.52 14.4004C15.52 16.0004 14.912 17.1737 13.696 17.9204C12.5013 18.6457 11.072 19.0084 9.408 19.0084C8.29867 19.0084 7.36 18.8697 6.592 18.5924C7.232 19.6377 8.288 20.1604 9.76 20.1604C10.3573 20.1604 10.9973 20.0857 11.68 19.9364C11.936 19.8724 12.1813 19.8404 12.416 19.8404C12.8853 19.8404 13.2587 19.9577 13.536 20.1924C13.8347 20.427 13.984 20.747 13.984 21.1524C13.984 21.8137 13.5787 22.3897 12.768 22.8804C11.9573 23.3497 10.6453 23.5844 8.832 23.5844ZM6.688 14.6884C6.88 14.987 7.136 15.211 7.456 15.3604C7.79733 15.4884 8.17067 15.5524 8.576 15.5524C9.04533 15.5524 9.45067 15.4457 9.792 15.2324C10.1547 15.019 10.336 14.7417 10.336 14.4004C10.336 14.0164 10.176 13.6857 9.856 13.4084C9.55733 13.131 9.12 12.9924 8.544 12.9924C7.968 12.9924 7.50933 13.1737 7.168 13.5364C6.848 13.8777 6.688 14.2617 6.688 14.6884ZM7.2 7.74438C6.752 7.74438 6.37867 7.59505 6.08 7.29638C5.78133 6.97638 5.632 6.62438 5.632 6.24038C5.632 5.85638 5.84533 5.36571 6.272 4.76838C6.72 4.14971 7.232 3.61638 7.808 3.16838C8.40533 2.69905 8.90667 2.46438 9.312 2.46438C9.93067 2.46438 10.4213 2.67771 10.784 3.10438C11.1467 3.50971 11.3173 3.94705 11.296 4.41638C11.296 4.80038 11.04 5.25905 10.528 5.79238C10.016 6.30438 9.42933 6.76305 8.768 7.16838C8.128 7.55238 7.60533 7.74438 7.2 7.74438ZM32.7285 9.72838C32.7285 10.8377 32.2058 11.595 31.1605 12.0004C30.1152 12.3844 28.6858 12.587 26.8725 12.6084C26.8512 13.1417 26.8405 14.0057 26.8405 15.2004C26.8405 16.4164 26.9258 17.2804 27.0965 17.7924C27.2032 18.155 27.3632 18.3897 27.5765 18.4964C27.8112 18.603 28.1525 18.6777 28.6005 18.7204C28.7498 18.7417 28.9098 18.7737 29.0805 18.8164C29.2725 18.8377 29.4858 18.8697 29.7205 18.9124C30.2112 19.019 30.5952 19.2857 30.8725 19.7124C31.1498 20.1177 31.2885 20.6404 31.2885 21.2804C31.2885 22.0057 30.9152 22.571 30.1685 22.9764C29.4218 23.3817 28.3978 23.5844 27.0965 23.5844C25.9018 23.5844 24.7605 23.243 23.6725 22.5604C22.5845 21.8564 21.8378 20.9177 21.4325 19.7444C21.0058 18.4857 20.7925 16.107 20.7925 12.6084C19.2992 12.5657 18.0938 12.3737 17.1765 12.0324C16.2805 11.6697 15.8325 11.0297 15.8325 10.1124C15.8325 8.96038 16.2592 8.19238 17.1125 7.80838C17.9658 7.40305 19.1925 7.18971 20.7925 7.16838C20.8565 5.46171 21.1232 4.04305 21.5925 2.91238C22.0618 1.76038 22.9045 1.18438 24.1205 1.18438C25.3578 1.18438 26.1578 1.71771 26.5205 2.78438C26.9045 3.85105 27.0752 5.31238 27.0325 7.16838C28.9738 7.14705 30.4032 7.29638 31.3205 7.61638C32.2592 7.93638 32.7285 8.64038 32.7285 9.72838ZM40.7375 23.6164C39.2015 23.6377 37.8255 23.3177 36.6095 22.6564C35.4148 21.995 34.4762 21.0884 33.7935 19.9364C33.1322 18.763 32.7802 17.4617 32.7375 16.0324C32.7162 14.603 33.0468 13.323 33.7295 12.1924C34.4122 11.0617 35.3615 10.1657 36.5775 9.50438C37.8148 8.84305 39.2015 8.51238 40.7375 8.51238C42.2308 8.51238 43.5748 8.83238 44.7695 9.47238C45.9855 10.1124 46.9455 11.0084 47.6495 12.1604C48.3535 13.3124 48.7268 14.603 48.7695 16.0324C48.7908 17.419 48.4602 18.6884 47.7775 19.8404C47.0948 20.971 46.1348 21.8777 44.8975 22.5604C43.6815 23.243 42.2948 23.595 40.7375 23.6164ZM40.8335 18.9444C41.4095 18.9444 41.9108 18.7204 42.3375 18.2724C42.7642 17.8244 42.9775 17.3017 42.9775 16.7044C42.9775 16.107 42.7642 15.595 42.3375 15.1684C41.9108 14.7204 41.4095 14.4964 40.8335 14.4964C40.2575 14.4964 39.7562 14.7204 39.3295 15.1684C38.9028 15.595 38.6895 16.107 38.6895 16.7044C38.6895 17.3017 38.9028 17.8244 39.3295 18.2724C39.7562 18.7204 40.2575 18.9444 40.8335 18.9444ZM52.8253 8.06438C51.7799 8.06438 50.8946 7.69105 50.1693 6.94438C49.4439 6.17638 49.0813 5.24838 49.0813 4.16038C49.0813 3.09371 49.4439 2.18705 50.1693 1.44038C50.8946 0.67238 51.7799 0.28838 52.8253 0.28838C53.8493 0.28838 54.7239 0.67238 55.4493 1.44038C56.1959 2.18705 56.5693 3.09371 56.5693 4.16038C56.5693 5.24838 56.1959 6.17638 55.4493 6.94438C54.7239 7.69105 53.8493 8.06438 52.8253 8.06438ZM52.8253 23.5844C51.9506 23.5844 51.2999 23.339 50.8733 22.8484C50.4679 22.3364 50.1906 21.579 50.0413 20.5764C49.9133 19.5524 49.8493 18.1017 49.8493 16.2244C49.8493 14.6457 49.9239 13.3977 50.0733 12.4804C50.2439 11.563 50.5426 10.8804 50.9693 10.4324C51.3959 9.98438 52.0146 9.76038 52.8253 9.76038C53.6999 9.76038 54.3399 10.0164 54.7453 10.5284C55.1719 11.019 55.4493 11.7764 55.5773 12.8004C55.7266 13.803 55.8013 15.243 55.8013 17.1204C55.8013 18.699 55.7159 19.947 55.5453 20.8644C55.3959 21.7817 55.1079 22.4644 54.6813 22.9124C54.2546 23.3604 53.6359 23.5844 52.8253 23.5844ZM61.919 23.5204C60.8523 23.5204 60.0523 23.1257 59.519 22.3364C58.9857 21.547 58.623 20.3844 58.431 18.8484C58.2603 17.291 58.175 15.1257 58.175 12.3524C58.175 9.68571 58.239 7.60571 58.367 6.11238C58.5163 4.61905 58.8577 3.42438 59.391 2.52838C59.9457 1.63238 60.799 1.18438 61.951 1.18438C63.103 1.18438 63.9457 1.63238 64.479 2.52838C65.0337 3.42438 65.375 4.61905 65.503 6.11238C65.6523 7.60571 65.727 9.68571 65.727 12.3524C65.727 14.9764 65.6097 17.099 65.375 18.7204C65.1617 20.3204 64.7777 21.5257 64.223 22.3364C63.6683 23.1257 62.9003 23.5204 61.919 23.5204ZM74.7383 23.5844C73.1596 23.5844 71.7623 23.275 70.5463 22.6564C69.3303 22.0377 68.3809 21.1737 67.6983 20.0644C67.0369 18.9337 66.7063 17.6644 66.7063 16.2564C66.7063 14.8697 67.0369 13.5897 67.6983 12.4164C68.3809 11.243 69.3196 10.3044 70.5143 9.60038C71.7089 8.89638 73.0636 8.54438 74.5783 8.54438C75.9436 8.54438 77.1489 8.82171 78.1943 9.37638C79.2396 9.93105 80.0396 10.667 80.5943 11.5844C81.1489 12.4804 81.4263 13.419 81.4263 14.4004C81.4263 16.0004 80.8183 17.1737 79.6023 17.9204C78.4076 18.6457 76.9783 19.0084 75.3142 19.0084C74.2049 19.0084 73.2663 18.8697 72.4983 18.5924C73.1383 19.6377 74.1943 20.1604 75.6663 20.1604C76.2636 20.1604 76.9036 20.0857 77.5863 19.9364C77.8423 19.8724 78.0876 19.8404 78.3223 19.8404C78.7916 19.8404 79.1649 19.9577 79.4423 20.1924C79.7409 20.427 79.8903 20.747 79.8903 21.1524C79.8903 21.8137 79.4849 22.3897 78.6743 22.8804C77.8636 23.3497 76.5516 23.5844 74.7383 23.5844ZM72.5943 14.6884C72.7863 14.987 73.0423 15.211 73.3623 15.3604C73.7036 15.4884 74.0769 15.5524 74.4823 15.5524C74.9516 15.5524 75.3569 15.4457 75.6983 15.2324C76.0609 15.019 76.2423 14.7417 76.2423 14.4004C76.2423 14.0164 76.0823 13.6857 75.7623 13.4084C75.4636 13.131 75.0263 12.9924 74.4503 12.9924C73.8743 12.9924 73.4156 13.1737 73.0743 13.5364C72.7543 13.8777 72.5943 14.2617 72.5943 14.6884ZM88.5378 23.5844C86.6604 23.5844 85.1671 23.275 84.0578 22.6564C82.9484 22.0377 82.3938 21.2377 82.3938 20.2564C82.3938 19.6164 82.6071 19.1257 83.0338 18.7844C83.4818 18.4217 84.0471 18.2404 84.7298 18.2404C85.1138 18.2404 85.4231 18.2937 85.6578 18.4004C85.8924 18.507 86.1271 18.6564 86.3618 18.8484C86.5324 18.9977 86.6711 19.1044 86.7778 19.1684C86.9058 19.2324 87.0551 19.2644 87.2258 19.2644C87.6738 19.2644 87.8978 19.1044 87.8978 18.7844C87.8978 18.4857 87.7804 18.2617 87.5458 18.1124C87.3111 17.9417 86.9058 17.739 86.3298 17.5044C85.7964 17.291 85.4444 17.1417 85.2738 17.0564C84.2924 16.587 83.5671 16.0324 83.0978 15.3924C82.6284 14.7524 82.3938 14.0697 82.3938 13.3444C82.3938 12.5337 82.6818 11.7657 83.2578 11.0404C83.8551 10.2937 84.6871 9.69638 85.7538 9.24838C86.8418 8.77905 88.0898 8.54438 89.4978 8.54438C90.7138 8.54438 91.8124 8.71505 92.7938 9.05638C93.7964 9.39771 94.5858 9.86705 95.1618 10.4644C95.7378 11.0404 96.0258 11.6804 96.0258 12.3844C96.0258 13.0457 95.8124 13.547 95.3858 13.8884C94.9804 14.2297 94.4258 14.4004 93.7218 14.4004C93.4444 14.4004 93.2204 14.379 93.0498 14.3364C92.9004 14.2724 92.6978 14.1764 92.4418 14.0484C92.2924 13.963 92.1324 13.8884 91.9618 13.8244C91.8124 13.7604 91.6418 13.7284 91.4498 13.7284C91.2791 13.7284 91.1298 13.7924 91.0017 13.9204C90.8738 14.027 90.8098 14.1657 90.8098 14.3364C90.8098 14.6564 91.0444 14.891 91.5138 15.0404C92.7511 15.4457 93.7431 15.9577 94.4898 16.5764C95.2578 17.195 95.6418 18.0484 95.6418 19.1364C95.6418 20.523 94.9911 21.611 93.6898 22.4004C92.4098 23.1897 90.6924 23.5844 88.5378 23.5844ZM104.397 21.5684C104.397 22.635 104.151 23.595 103.661 24.4484C103.191 25.323 102.615 26.0057 101.933 26.4964C101.271 26.987 100.674 27.2324 100.141 27.2324C99.6925 27.2324 99.3298 27.1044 99.0525 26.8484C98.7965 26.5924 98.6685 26.2724 98.6685 25.8884C98.6685 25.611 98.7218 25.3764 98.8285 25.1844C98.9565 24.9924 99.1592 24.747 99.4365 24.4484C99.6072 24.2777 99.7672 24.0857 99.9165 23.8724C100.066 23.659 100.173 23.4457 100.237 23.2324C99.5325 23.0404 98.9992 22.7097 98.6365 22.2404C98.2738 21.7497 98.0925 21.195 98.0925 20.5764C98.0925 19.787 98.3698 19.083 98.9245 18.4644C99.5005 17.8457 100.215 17.5364 101.069 17.5364C102.071 17.5364 102.871 17.8777 103.469 18.5604C104.087 19.2217 104.397 20.2244 104.397 21.5684Z'
          fill='#F1C9C1'
        />
      </svg>
    </Box>
  );
}
