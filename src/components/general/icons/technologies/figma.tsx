import { useTheme } from '@/pages';

export default function Figma() {
  const { activeColorTheme } = useTheme();
  const strokeColor =
    activeColorTheme?.id === 'sea'
      ? '#4B7A85'
      : activeColorTheme?.id === 'forest'
      ? '#455647'
      : '#666BA2';

  return (
    <svg
      width='33'
      height='50'
      viewBox='0 0 33 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <line
        x1='18.15'
        y1='36.675'
        x2='22.275'
        y2='36.675'
        stroke={strokeColor}
        stroke-width='1.65'
      />
      <line
        x1='18.15'
        y1='40.0085'
        x2='22.275'
        y2='40.0085'
        stroke={strokeColor}
        stroke-width='1.65'
      />
      <line
        x1='18.15'
        y1='43.3417'
        x2='22.275'
        y2='43.3417'
        stroke={strokeColor}
        stroke-width='1.65'
      />
      <line
        x1='18.15'
        y1='46.675'
        x2='22.275'
        y2='46.675'
        stroke={strokeColor}
        stroke-width='1.65'
      />
      <path
        d='M0.825 8.33333C0.825 4.2218 4.16003 0.825 8.25 0.825H15.675V15.8417H8.25C4.16003 15.8417 0.825 12.4449 0.825 8.33333Z'
        fill='#CA797E'
        stroke={strokeColor}
        stroke-width='1.65'
      />
      <path
        d='M0.825 25.0001C0.825 20.8886 4.16003 17.4917 8.25 17.4917H15.675V32.5084H8.25C4.16003 32.5084 0.825 29.1116 0.825 25.0001Z'
        fill='#A696B7'
        stroke={strokeColor}
        stroke-width='1.65'
      />
      <path
        d='M0.825 41.6666C0.825 37.5551 4.16003 34.1583 8.25 34.1583H15.675V41.7499C15.675 45.8506 12.3507 49.1749 8.25 49.1749C4.16003 49.1749 0.825 45.7781 0.825 41.6666Z'
        fill='#74C795'
        stroke={strokeColor}
        stroke-width='1.65'
      />
      <mask id='path-8-inside-1_39_1528' fill='white'>
        <path d='M16.5 0H24.75C29.3063 0 33 3.77698 33 8.33333C33 12.8897 29.3063 16.6667 24.75 16.6667H16.5V0Z' />
      </mask>
      <path
        d='M16.5 0H24.75C29.3063 0 33 3.77698 33 8.33333C33 12.8897 29.3063 16.6667 24.75 16.6667H16.5V0Z'
        fill='#DDAC95'
      />
      <path
        d='M16.5 -1.65H24.75C30.2176 -1.65 34.65 2.78238 34.65 8.25H31.35C31.35 4.60492 28.3951 1.65 24.75 1.65H16.5V-1.65ZM34.65 8.41667C34.65 13.8843 30.2176 18.3167 24.75 18.3167H16.5V15.0167H24.75C28.3951 15.0167 31.35 12.0617 31.35 8.41667H34.65ZM16.5 16.6667V0V16.6667ZM24.75 -1.65C30.2176 -1.65 34.65 2.78238 34.65 8.25V8.41667C34.65 13.8843 30.2176 18.3167 24.75 18.3167V15.0167C28.3951 15.0167 31.35 12.0617 31.35 8.41667V8.25C31.35 4.60492 28.3951 1.65 24.75 1.65V-1.65Z'
        fill={strokeColor}
        mask='url(#path-8-inside-1_39_1528)'
      />
      <rect
        x='17.325'
        y='17.4917'
        width='14.85'
        height='15.0167'
        rx='7.425'
        fill='#BBDEF9'
        stroke={strokeColor}
        stroke-width='1.65'
      />
    </svg>
  );
}
