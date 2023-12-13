import { useTheme } from '@/pages';

export default function DotFeature() {
  const { activeColorTheme } = useTheme();
  const strokeColor =
    activeColorTheme?.id === 'sea'
      ? '#4B7A85'
      : activeColorTheme?.id === 'forest'
      ? '#455647'
      : '#666BA2';

  return (
    <svg
      width='83'
      height='81'
      viewBox='0 0 83 81'
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
        x1='68.1808'
        y1='78.5735'
        x2='65.3135'
        y2='74.4773'
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
        x1='57.0194'
        y1='80.8039'
        x2='58.0194'
        y2='75.8039'
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
        x1='75.3753'
        y1='72.7809'
        x2='71.471'
        y2='69.6574'
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
        x1='81.8479'
        y1='62.9884'
        x2='76.9061'
        y2='62.2281'
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
      <line
        x1='82.1521'
        y1='52.9884'
        x2='77.2102'
        y2='53.7487'
        stroke={strokeColor}
        stroke-width='2'
      />
    </svg>
  );
}
