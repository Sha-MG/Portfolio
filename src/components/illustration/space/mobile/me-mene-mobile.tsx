import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function MeMèneMobile() {
  const parallax = useParallax({
    translateX: [0, 500],
  });

  return (
    <Box
      position='absolute'
      top='53'
      right='12'
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='40'
        height='12'
        viewBox='0 0 51 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11.995 10.4294C12.005 10.4194 12.02 10.4144 12.04 10.4144C12.08 10.4144 12.115 10.4344 12.145 10.4744C12.185 10.5044 12.195 10.5294 12.175 10.5494C11.855 10.9594 11.575 11.2594 11.335 11.4494C11.105 11.6294 10.865 11.7194 10.615 11.7194C10.055 11.7194 9.775 11.3244 9.775 10.5344L9.79 7.86435C9.79 6.74435 9.51 6.18435 8.95 6.18435C8.59 6.18435 8.255 6.39935 7.945 6.82935C7.645 7.24935 7.405 7.85935 7.225 8.65935C7.045 9.45935 6.955 10.3994 6.955 11.4794C6.955 11.5494 6.91 11.6044 6.82 11.6444C6.74 11.6844 6.625 11.7044 6.475 11.7044C6.325 11.7044 6.225 11.6944 6.175 11.6744C6.125 11.6644 6.095 11.6444 6.085 11.6144C6.085 11.5744 6.09 11.4644 6.1 11.2844C6.11 11.0944 6.115 10.8244 6.115 10.4744L6.13 7.86435C6.12 6.74435 5.845 6.18435 5.305 6.18435C4.955 6.18435 4.63 6.39435 4.33 6.81435C4.03 7.23435 3.785 7.83935 3.595 8.62935C3.415 9.40935 3.325 10.3194 3.325 11.3594V11.4794C3.325 11.5494 3.28 11.6044 3.19 11.6444C3.11 11.6844 2.99 11.7044 2.83 11.7044C2.69 11.7044 2.595 11.6944 2.545 11.6744C2.495 11.6644 2.46 11.6444 2.44 11.6144L2.485 10.5494L2.515 7.12935C2.515 6.82935 2.475 6.60935 2.395 6.46935C2.315 6.31935 2.205 6.24435 2.065 6.24435C1.845 6.24435 1.51 6.48435 1.06 6.96435C1.04 6.98435 1.02 6.99435 1 6.99435C0.97 6.99435 0.945 6.97935 0.925 6.94935C0.895 6.90935 0.885 6.87435 0.895 6.84435C1.195 6.44435 1.475 6.14935 1.735 5.95935C1.995 5.75935 2.265 5.65935 2.545 5.65935C2.825 5.65935 3.025 5.75435 3.145 5.94435C3.275 6.13435 3.34 6.42435 3.34 6.81435V8.80935C3.52 7.79935 3.815 7.01435 4.225 6.45435C4.645 5.88435 5.15 5.59935 5.74 5.59935C6.16 5.59935 6.47 5.75935 6.67 6.07935C6.88 6.38935 6.98 6.88935 6.97 7.57935V8.83935C7.15 7.80935 7.445 7.01435 7.855 6.45435C8.275 5.88435 8.78 5.59935 9.37 5.59935C9.8 5.59935 10.115 5.75935 10.315 6.07935C10.515 6.39935 10.62 6.89935 10.63 7.57935L10.615 10.2494C10.615 10.8294 10.755 11.1194 11.035 11.1194C11.285 11.1194 11.605 10.8894 11.995 10.4294ZM17.2789 10.7594C17.3089 10.7594 17.3389 10.7744 17.3689 10.8044C17.4089 10.8344 17.4189 10.8644 17.3989 10.8944C16.7389 11.4744 16.0039 11.7644 15.1939 11.7644C14.6339 11.7644 14.1539 11.6344 13.7539 11.3744C13.3539 11.1144 13.0539 10.7694 12.8539 10.3394C12.6539 9.90935 12.5539 9.44935 12.5539 8.95935C12.5539 8.37935 12.6889 7.83435 12.9589 7.32435C13.2289 6.80435 13.5989 6.38935 14.0689 6.07935C14.5489 5.75935 15.0889 5.59935 15.6889 5.59935C16.0889 5.59935 16.3989 5.67435 16.6189 5.82435C16.8489 5.96435 16.9639 6.15935 16.9639 6.40935C16.9539 6.84935 16.6139 7.25435 15.9439 7.62435C15.2739 7.98435 14.4489 8.23435 13.4689 8.37435C13.4889 9.24435 13.6889 9.94435 14.0689 10.4744C14.4589 10.9944 15.0089 11.2544 15.7189 11.2544C15.9789 11.2544 16.2439 11.2144 16.5139 11.1344C16.7839 11.0544 17.0289 10.9294 17.2489 10.7594H17.2789ZM15.0439 6.00435C14.5339 6.00435 14.1489 6.20435 13.8889 6.60435C13.6289 7.00435 13.4889 7.52435 13.4689 8.16435C15.0789 7.89435 15.8839 7.37935 15.8839 6.61935C15.8839 6.41935 15.8089 6.26935 15.6589 6.16935C15.5089 6.05935 15.3039 6.00435 15.0439 6.00435ZM32.078 10.4294C32.088 10.4194 32.103 10.4144 32.123 10.4144C32.163 10.4144 32.198 10.4344 32.228 10.4744C32.268 10.5044 32.278 10.5294 32.258 10.5494C31.938 10.9594 31.658 11.2594 31.418 11.4494C31.188 11.6294 30.948 11.7194 30.698 11.7194C30.138 11.7194 29.858 11.3244 29.858 10.5344L29.873 7.86435C29.873 6.74435 29.593 6.18435 29.033 6.18435C28.673 6.18435 28.338 6.39935 28.028 6.82935C27.728 7.24935 27.488 7.85935 27.308 8.65935C27.128 9.45935 27.038 10.3994 27.038 11.4794C27.038 11.5494 26.993 11.6044 26.903 11.6444C26.823 11.6844 26.708 11.7044 26.558 11.7044C26.408 11.7044 26.308 11.6944 26.258 11.6744C26.208 11.6644 26.178 11.6444 26.168 11.6144C26.168 11.5744 26.173 11.4644 26.183 11.2844C26.193 11.0944 26.198 10.8244 26.198 10.4744L26.213 7.86435C26.203 6.74435 25.928 6.18435 25.388 6.18435C25.038 6.18435 24.713 6.39435 24.413 6.81435C24.113 7.23435 23.868 7.83935 23.678 8.62935C23.498 9.40935 23.408 10.3194 23.408 11.3594V11.4794C23.408 11.5494 23.363 11.6044 23.273 11.6444C23.193 11.6844 23.073 11.7044 22.913 11.7044C22.773 11.7044 22.678 11.6944 22.628 11.6744C22.578 11.6644 22.543 11.6444 22.523 11.6144L22.568 10.5494L22.598 7.12935C22.598 6.82935 22.558 6.60935 22.478 6.46935C22.398 6.31935 22.288 6.24435 22.148 6.24435C21.928 6.24435 21.593 6.48435 21.143 6.96435C21.123 6.98435 21.103 6.99435 21.083 6.99435C21.053 6.99435 21.028 6.97935 21.008 6.94935C20.978 6.90935 20.968 6.87435 20.978 6.84435C21.278 6.44435 21.558 6.14935 21.818 5.95935C22.078 5.75935 22.348 5.65935 22.628 5.65935C22.908 5.65935 23.108 5.75435 23.228 5.94435C23.358 6.13435 23.423 6.42435 23.423 6.81435V8.80935C23.603 7.79935 23.898 7.01435 24.308 6.45435C24.728 5.88435 25.233 5.59935 25.823 5.59935C26.243 5.59935 26.553 5.75935 26.753 6.07935C26.963 6.38935 27.063 6.88935 27.053 7.57935V8.83935C27.233 7.80935 27.528 7.01435 27.938 6.45435C28.358 5.88435 28.863 5.59935 29.453 5.59935C29.883 5.59935 30.198 5.75935 30.398 6.07935C30.598 6.39935 30.703 6.89935 30.713 7.57935L30.698 10.2494C30.698 10.8294 30.838 11.1194 31.118 11.1194C31.368 11.1194 31.688 10.8894 32.078 10.4294ZM37.274 10.7594C37.304 10.7594 37.334 10.7744 37.364 10.8044C37.404 10.8344 37.414 10.8644 37.394 10.8944C36.734 11.4744 35.999 11.7644 35.189 11.7644C34.629 11.7644 34.149 11.6344 33.749 11.3744C33.349 11.1144 33.049 10.7694 32.849 10.3394C32.649 9.90935 32.549 9.44935 32.549 8.95935C32.549 8.37935 32.684 7.83435 32.954 7.32435C33.224 6.80435 33.594 6.38935 34.064 6.07935C34.544 5.75935 35.084 5.59935 35.684 5.59935C36.084 5.59935 36.394 5.67435 36.614 5.82435C36.844 5.96435 36.959 6.15935 36.959 6.40935C36.949 6.84935 36.609 7.25435 35.939 7.62435C35.269 7.98435 34.444 8.23435 33.464 8.37435C33.484 9.24435 33.684 9.94435 34.064 10.4744C34.454 10.9944 35.004 11.2544 35.714 11.2544C35.974 11.2544 36.239 11.2144 36.509 11.1344C36.779 11.0544 37.024 10.9294 37.244 10.7594H37.274ZM35.039 6.00435C34.529 6.00435 34.144 6.20435 33.884 6.60435C33.624 7.00435 33.484 7.52435 33.464 8.16435C35.074 7.89435 35.879 7.37935 35.879 6.61935C35.879 6.41935 35.804 6.26935 35.654 6.16935C35.504 6.05935 35.299 6.00435 35.039 6.00435ZM33.989 0.67935C33.979 0.63935 34.024 0.61935 34.124 0.61935C34.264 0.61935 34.419 0.64435 34.589 0.69435C34.769 0.74435 34.864 0.79435 34.874 0.84435L35.429 4.44435C35.439 4.46435 35.419 4.47935 35.369 4.48935C35.329 4.49935 35.309 4.48935 35.309 4.45935L33.989 0.67935ZM45.1225 10.4144C45.1625 10.4144 45.1975 10.4344 45.2275 10.4744C45.2675 10.5044 45.2775 10.5294 45.2575 10.5494C44.9475 10.9494 44.6725 11.2444 44.4325 11.4344C44.2025 11.6244 43.9575 11.7194 43.6975 11.7194C43.1275 11.7194 42.8525 11.3244 42.8725 10.5344L42.8875 7.86435C42.8875 6.74435 42.5925 6.18435 42.0025 6.18435C41.6225 6.18435 41.2725 6.38935 40.9525 6.79935C40.6425 7.20935 40.3925 7.81435 40.2025 8.61435C40.0125 9.41435 39.9125 10.3694 39.9025 11.4794C39.9025 11.5494 39.8575 11.6044 39.7675 11.6444C39.6875 11.6844 39.5675 11.7044 39.4075 11.7044C39.2575 11.7044 39.1575 11.6944 39.1075 11.6744C39.0575 11.6644 39.0225 11.6444 39.0025 11.6144C39.0025 11.5744 39.0075 11.4394 39.0175 11.2094C39.0375 10.9694 39.0475 10.7244 39.0475 10.4744L39.0775 7.12935C39.0775 6.82935 39.0375 6.60935 38.9575 6.46935C38.8775 6.31935 38.7675 6.24435 38.6275 6.24435C38.4075 6.24435 38.0725 6.48435 37.6225 6.96435C37.6025 6.98435 37.5875 6.99435 37.5775 6.99435C37.5375 6.99435 37.5025 6.97935 37.4725 6.94935C37.4425 6.90935 37.4375 6.87435 37.4575 6.84435C37.7575 6.44435 38.0375 6.14935 38.2975 5.95935C38.5575 5.75935 38.8275 5.65935 39.1075 5.65935C39.3875 5.65935 39.5875 5.75435 39.7075 5.94435C39.8375 6.13435 39.9025 6.42435 39.9025 6.81435V8.94435C40.0925 7.89435 40.4025 7.07435 40.8325 6.48435C41.2725 5.89435 41.8025 5.59935 42.4225 5.59935C42.8625 5.59935 43.1925 5.75935 43.4125 6.07935C43.6325 6.38935 43.7375 6.88935 43.7275 7.57935L43.7125 10.2494C43.7125 10.5494 43.7425 10.7694 43.8025 10.9094C43.8725 11.0494 43.9825 11.1194 44.1325 11.1194C44.3625 11.1194 44.6825 10.8894 45.0925 10.4294L45.1225 10.4144ZM50.355 10.7594C50.385 10.7594 50.415 10.7744 50.445 10.8044C50.485 10.8344 50.495 10.8644 50.475 10.8944C49.815 11.4744 49.08 11.7644 48.27 11.7644C47.71 11.7644 47.23 11.6344 46.83 11.3744C46.43 11.1144 46.13 10.7694 45.93 10.3394C45.73 9.90935 45.63 9.44935 45.63 8.95935C45.63 8.37935 45.765 7.83435 46.035 7.32435C46.305 6.80435 46.675 6.38935 47.145 6.07935C47.625 5.75935 48.165 5.59935 48.765 5.59935C49.165 5.59935 49.475 5.67435 49.695 5.82435C49.925 5.96435 50.04 6.15935 50.04 6.40935C50.03 6.84935 49.69 7.25435 49.02 7.62435C48.35 7.98435 47.525 8.23435 46.545 8.37435C46.565 9.24435 46.765 9.94435 47.145 10.4744C47.535 10.9944 48.085 11.2544 48.795 11.2544C49.055 11.2544 49.32 11.2144 49.59 11.1344C49.86 11.0544 50.105 10.9294 50.325 10.7594H50.355ZM48.12 6.00435C47.61 6.00435 47.225 6.20435 46.965 6.60435C46.705 7.00435 46.565 7.52435 46.545 8.16435C48.155 7.89435 48.96 7.37935 48.96 6.61935C48.96 6.41935 48.885 6.26935 48.735 6.16935C48.585 6.05935 48.38 6.00435 48.12 6.00435Z'
          fill='#F7F7F7'
        />
      </svg>
    </Box>
  );
}
