import { useTheme } from '@/pages';

export default function Photoshop() {
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
        fill='#BBDEF9'
        stroke={strokeColor}
        stroke-width='2'
      />
      <rect x='5' y='5' width='40' height='40' rx='5' fill='#6E91CE' />
      <mask id='path-3-inside-1_39_1620' fill='white'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M10 5C7.23858 5 5 7.23858 5 10V40C5 42.7614 7.23858 45 10 45H14V43H37V45H40C42.7614 45 45 42.7614 45 40V10C45 7.23858 42.7614 5 40 5H10Z'
        />
      </mask>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M10 5C7.23858 5 5 7.23858 5 10V40C5 42.7614 7.23858 45 10 45H14V43H37V45H40C42.7614 45 45 42.7614 45 40V10C45 7.23858 42.7614 5 40 5H10Z'
        fill='#6E91CE'
      />
      <path
        d='M14 45V47H16V45H14ZM14 43V41H12V43H14ZM37 43H39V41H37V43ZM37 45H35V47H37V45ZM7 10C7 8.34315 8.34315 7 10 7V3C6.13401 3 3 6.13401 3 10H7ZM7 40V10H3V40H7ZM10 43C8.34315 43 7 41.6569 7 40H3C3 43.866 6.13401 47 10 47V43ZM14 43H10V47H14V43ZM16 45V43H12V45H16ZM14 45H37V41H14V45ZM35 43V45H39V43H35ZM40 43H37V47H40V43ZM43 40C43 41.6569 41.6569 43 40 43V47C43.866 47 47 43.866 47 40H43ZM43 10V40H47V10H43ZM40 7C41.6569 7 43 8.34315 43 10H47C47 6.13401 43.866 3 40 3V7ZM10 7H40V3H10V7Z'
        fill={strokeColor}
        mask='url(#path-3-inside-1_39_1620)'
      />
      <rect x='10' y='38' width='29' height='5' fill='#6E91CE' />
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
        d='M17 37.778V20.278C17 20.278 21.109 19.3944 23 20.7781C24.6972 22.0199 25.0793 23.1764 25 25.278C24.9275 27.1997 24.6793 28.8407 23 29.778C21.636 30.5393 17 30.278 17 30.278'
        stroke='#F7F7F7'
        stroke-width='2'
      />
      <path
        d='M33.7311 27.7261C33.7311 27.7261 33.7834 26.4264 33.231 25.9305C32.6785 25.4347 31.4859 24.8549 30.7301 25.0328C29.5203 25.3176 28.6434 26.2181 28.2293 27.2773C27.9706 27.9389 27.8799 28.8945 28.2293 29.5217C29.2296 31.3172 31.8168 30.034 33.231 31.3172C33.9177 31.9403 33.6912 31.6685 34 32.5C34.3088 33.3315 34.5001 35 33.7311 36C33.2684 36.6016 32 37.2281 30.7301 37.2281C29.7452 37.2281 29.3406 36.9794 28.5 36.5C27.6757 36.0299 28.2293 33.5 28.2293 33.5'
        stroke='#F7F7F7'
        stroke-width='2'
      />
    </svg>
  );
}
