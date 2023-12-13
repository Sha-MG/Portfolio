import { useTheme } from '@/pages';

export default function Typescript() {
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
        fill='#6E91CE'
        stroke={strokeColor}
        stroke-width='2'
      />
      <path
        d='M45.1537 28.742L41.9786 31.1025C41.9786 31.1025 41.0715 29.6863 40.1643 29.2141C39.3722 28.8019 38.5834 29.1043 37.8965 29.6862C36.8502 30.5726 37.4429 32.0468 38.8036 32.5188C39.7835 32.8588 41.0646 33.4346 41.9786 33.9352C43.667 34.8597 44.7001 35.9652 45.6072 37.712C46.2811 39.0095 46.0608 41.4888 45.1537 42.9052C44.2465 44.3215 42.941 45.342 41.0715 45.7378C38.9886 46.1787 37.6008 46.0907 35.6286 45.2657C33.8815 44.5348 32 41.9609 32 41.9609L35.175 39.1283C35.175 39.1283 37.0502 41.9425 38.8036 41.9609C39.7575 41.971 40.5567 41.8526 41.0715 41.0167C41.5495 40.2406 41.5251 39.6004 41.0715 38.6562C39.5769 35.5448 35.0645 37.1612 33.8143 33.9351C33.0192 31.8834 32.7784 30.2018 33.8143 28.2699C34.6776 26.66 35.7625 26.0203 37.4429 25.4373C39.1233 24.8542 40.2982 24.8542 41.9786 25.4373C43.6591 26.0203 45.1537 28.742 45.1537 28.742Z'
        fill='#F7F7F7'
        stroke={strokeColor}
        stroke-width='2'
      />
      <path
        d='M2 5C2 3.34315 3.34315 2 5 2H46C47.6569 2 49 3.34315 49 5V9H2V5Z'
        fill='#90B3F1'
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
        d='M22.2941 29.6512V45H26.7059V29.6512H32V25H17.0001L17 29.6512H22.2941Z'
        fill='#F7F7F7'
        stroke={strokeColor}
        stroke-width='2'
      />
    </svg>
  );
}
