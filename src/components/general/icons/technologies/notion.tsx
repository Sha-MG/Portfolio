import { useTheme } from '@/pages';

export default function Notion() {
  const { activeColorTheme } = useTheme();
  const strokeColor =
    activeColorTheme?.id === 'sea'
      ? '#4B7A85'
      : activeColorTheme?.id === 'forest'
      ? '#455647'
      : '#666BA2';

  return (
    <svg
      width='51'
      height='51'
      viewBox='0 0 51 51'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.5 49.4481V13.9269L49 11.0788V47.5494L11.5 49.4481Z'
        fill='#F7F7F7'
        stroke={strokeColor}
        stroke-width='2'
      />
      <path
        d='M10 48.0041V13.9007L1.5 4.9959V39.0993L10 48.0041Z'
        fill='#8B8E98'
        stroke={strokeColor}
        stroke-width='2'
      />
      <path
        d='M10.9081 13.4478L2.08414 3.36328L37.1897 1.02291L47.9279 9.28306L10.9081 13.4478Z'
        fill='#F7F7F7'
        stroke={strokeColor}
        stroke-width='2'
      />
      <path
        d='M18 40H21V23H19C16 23 15.5 18 19 18H29L36.5 31.5V21.5H34.5C32.5 21.5 32 16.5 35 16.5H44.5C46.5 16.5 46.5 21 44.5 21H42V43.5H34.5L26 29.5V39H28C30 39 30 43.5 28 43.5L18 44C16 44 16 40 18 40Z'
        fill='#8B8E98'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='13.5'
        y1='7.5'
        x2='13.5'
        y2='11.5'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='19.5'
        y1='6.5'
        x2='19.5'
        y2='10.5'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='25.5'
        y1='5.5'
        x2='25.5'
        y2='9.5'
        stroke={strokeColor}
        stroke-width='2'
      />
      <path d='M31 5L31 9' stroke={strokeColor} stroke-width='2' />
      <line
        x1='36.5'
        y1='4.5'
        x2='36.5'
        y2='8.5'
        stroke={strokeColor}
        stroke-width='2'
      />
    </svg>
  );
}
