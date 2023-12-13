import { useTheme } from '@/pages';

export default function JavaScript() {
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
      height='50'
      viewBox='0 0 51 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='1'
        y='1'
        width='49'
        height='48'
        rx='4'
        fill='#F6D397'
        stroke={strokeColor}
        stroke-width='2'
      />
      <path
        d='M2 5C2 3.34315 3.34315 2 5 2H46C47.6569 2 49 3.34315 49 5V9H2V5Z'
        fill='#F9E3AE'
      />
      <line
        x1='8'
        y1='6'
        x2='8'
        y2='12'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='13'
        y1='6'
        x2='13'
        y2='12'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='18'
        y1='6'
        x2='18'
        y2='12'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='23'
        y1='6'
        x2='23'
        y2='12'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='28'
        y1='6'
        x2='28'
        y2='12'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='33'
        y1='6'
        x2='33'
        y2='12'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='38'
        y1='6'
        x2='38'
        y2='12'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='43'
        y1='6'
        x2='43'
        y2='12'
        stroke={strokeColor}
        stroke-width='2'
      />
      <path
        d='M24 25H28.5V40.5C28.5 42 27.5 43.75 25 45C23.8992 45.5504 19.7555 46.0096 18 44.5C15.7687 42.5813 16 38.5 16 38.5H20C20 38.5 20 41.5 21.5 41.5C23 41.5 24 40 24 38.5L24 25Z'
        fill='#F7F7F7'
        stroke={strokeColor}
        stroke-width='2'
      />
      <path
        d='M45.1537 27.742L41.9786 30.1025C41.9786 30.1025 41.0715 28.6863 40.1643 28.2141C39.3722 27.8019 38.5834 28.1043 37.8965 28.6862C36.8502 29.5726 37.4429 31.0468 38.8036 31.5188C39.7835 31.8588 41.0646 32.4346 41.9786 32.9352C43.667 33.8597 44.7001 34.9652 45.6072 36.712C46.2811 38.0095 46.0608 40.4888 45.1537 41.9052C44.2465 43.3215 42.941 44.342 41.0715 44.7378C38.9886 45.1787 37.6008 45.0907 35.6286 44.2657C33.8815 43.5348 32 40.9609 32 40.9609L35.175 38.1283C35.175 38.1283 37.0502 40.9425 38.8036 40.9609C39.7575 40.971 40.5567 40.8526 41.0715 40.0167C41.5495 39.2406 41.5251 38.6004 41.0715 37.6562C39.5769 34.5448 35.0645 36.1612 33.8143 32.9351C33.0192 30.8834 32.7784 29.2018 33.8143 27.2699C34.6776 25.66 35.7625 25.0203 37.4429 24.4373C39.1233 23.8542 40.2982 23.8542 41.9786 24.4373C43.6591 25.0203 45.1537 27.742 45.1537 27.742Z'
        fill='#F7F7F7'
        stroke={strokeColor}
        stroke-width='2'
      />
    </svg>
  );
}
