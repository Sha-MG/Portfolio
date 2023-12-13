import { useTheme } from '@/pages';

export default function Chakra() {
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
      <circle
        cx='25'
        cy='25'
        r='24'
        fill='#74C7C2'
        stroke={strokeColor}
        stroke-width='2'
      />
      <path
        d='M15 24.5L32 9L23.5 22L34.5 24L15 40.5L23.5 26.5L15 24.5Z'
        fill='#F7F7F7'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='29.2425'
        y1='47.0934'
        x2='28.0298'
        y2='42.2427'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='35.3417'
        y1='44.9194'
        x2='33.1056'
        y2='40.4472'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='40.8284'
        y1='41.2428'
        x2='37.2929'
        y2='37.7072'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='44.4'
        y1='36.8'
        x2='40.4'
        y2='33.8'
        stroke={strokeColor}
        stroke-width='2'
      />
    </svg>
  );
}
