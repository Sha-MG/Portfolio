import { useTheme } from '@/pages';

export default function SpecialFeature() {
  const { activeColorTheme } = useTheme();
  const strokeColor =
    activeColorTheme?.id === 'sea'
      ? '#4B7A85'
      : activeColorTheme?.id === 'forest'
      ? '#455647'
      : '#666BA2';

  return (
    <svg
      width='115'
      height='75'
      viewBox='0 0 115 75'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <line
        x1='14.8192'
        y1='2.42654'
        x2='17.6865'
        y2='6.5227'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='101.181'
        y1='72.3337'
        x2='98.3135'
        y2='68.2376'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='25.9806'
        y1='0.196116'
        x2='24.9806'
        y2='5.19612'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='90.0194'
        y1='74.5641'
        x2='91.0194'
        y2='69.5641'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='7.6247'
        y1='8.21913'
        x2='11.529'
        y2='11.3426'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='108.375'
        y1='66.5411'
        x2='104.471'
        y2='63.4176'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='1.15206'
        y1='18.0116'
        x2='6.09392'
        y2='18.7719'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='114.848'
        y1='56.7486'
        x2='109.906'
        y2='55.9883'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='0.847943'
        y1='28.0116'
        x2='5.7898'
        y2='27.2513'
        stroke={strokeColor}
        stroke-width='2'
      />
    </svg>
  );
}
