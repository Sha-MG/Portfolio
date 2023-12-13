import { useTheme } from '@/pages';

export default function AfterEffect() {
  const { activeColorTheme } = useTheme();
  const strokeColor =
    activeColorTheme?.id === 'sea'
      ? '#4B7A85'
      : activeColorTheme?.id === 'forest'
      ? '#455647'
      : '#666BA2';

  return (
    <svg
      width='50'
      height='50'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='1'
        y='1'
        width='48'
        height='48'
        rx='4'
        fill='#A2A2EA'
        stroke={strokeColor}
        stroke-width='2'
      />
      <rect x='5' y='5' width='40' height='40' rx='5' fill='#8686CE' />
      <mask id='path-3-inside-1_39_1654' fill='white'>
        <path
          stroke={strokeColor}
          d='M10 5C7.23858 5 5 7.23858 5 10V40C5 42.7614 7.23858 45 10 45H14V43H37V45H40C42.7614 45 45 42.7614 45 40V10C45 7.23858 42.7614 5 40 5H10Z'
        />
      </mask>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M10 5C7.23858 5 5 7.23858 5 10V40C5 42.7614 7.23858 45 10 45H14V43H37V45H40C42.7614 45 45 42.7614 45 40V10C45 7.23858 42.7614 5 40 5H10Z'
        fill={'#8686CE'}
      />
      <path
        d='M14 45V47H16V45H14ZM14 43V41H12V43H14ZM37 43H39V41H37V43ZM37 45H35V47H37V45ZM7 10C7 8.34315 8.34315 7 10 7V3C6.13401 3 3 6.13401 3 10H7ZM7 40V10H3V40H7ZM10 43C8.34315 43 7 41.6569 7 40H3C3 43.866 6.13401 47 10 47V43ZM14 43H10V47H14V43ZM16 45V43H12V45H16ZM14 45H37V41H14V45ZM35 43V45H39V43H35ZM40 43H37V47H40V43ZM43 40C43 41.6569 41.6569 43 40 43V47C43.866 47 47 43.866 47 40H43ZM43 10V40H47V10H43ZM40 7C41.6569 7 43 8.34315 43 10H47C47 6.13401 43.866 3 40 3V7ZM10 7H40V3H10V7Z'
        fill={strokeColor}
        mask='url(#path-3-inside-1_39_1654)'
      />
      <rect x='10' y='38' width='29' height='5' fill='#8686CE' />
      <line
        x1='17'
        y1='46'
        x2='17'
        y2='43'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='21'
        y1='46'
        x2='21'
        y2='43'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='26'
        y1='46'
        x2='26'
        y2='43'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='30'
        y1='46'
        x2='30'
        y2='43'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='34'
        y1='46'
        x2='34'
        y2='43'
        stroke={strokeColor}
        stroke-width='2'
      />
      <path
        d='M13 38L18.5 21L23.5 38M15.1029 31.5H22'
        stroke={'#F7F7F7'}
        stroke-width='2'
      />
      <path
        d='M27.9999 30.0001H36.4999C36.4999 30.0001 35.6233 24.6904 32.9999 24.0001C29.7953 23.1568 27.3882 26.7092 26.9999 30.0001C26.6723 32.7765 27.4142 35.4371 29.9999 36.5001C31.4447 37.094 32.5725 37.1345 33.9999 36.5001C35.2616 35.9393 36.4999 34.0001 36.4999 34.0001'
        stroke='#F7F7F7'
        stroke-width='2'
      />
    </svg>
  );
}
