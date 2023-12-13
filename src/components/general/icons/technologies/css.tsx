import { useTheme } from '@/pages';

export default function CSS() {
  const { activeColorTheme } = useTheme();
  const strokeColor =
    activeColorTheme?.id === 'sea'
      ? '#4B7A85'
      : activeColorTheme?.id === 'forest'
      ? '#455647'
      : '#666BA2';

  return (
    <svg
      width='49'
      height='52'
      viewBox='0 0 49 52'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M24.0089 1H47.4602L43.0354 44.3628L24.0089 51V1Z'
        fill='#ACE3FF'
      />
      <path d='M24.4513 1H1L5.42478 44.3628L24.4513 51V1Z' fill='#7BBEEB' />
      <path
        d='M1 1V0.115044H0.0201473L0.119616 1.08984L1 1ZM47.4602 1L48.3406 1.08984L48.44 0.115044H47.4602V1ZM43.0354 44.3628L43.333 45.1962L43.8591 45.0084L43.9158 44.4527L43.0354 44.3628ZM24.4513 51L24.1598 51.8356L24.4548 51.9385L24.749 51.8334L24.4513 51ZM5.42478 44.3628L4.54439 44.4527L4.60156 45.0129L5.1333 45.1984L5.42478 44.3628ZM24.0089 0.115044H1V1.88496H24.0089V0.115044ZM24.0089 1.88496H24.4513V0.115044H24.0089V1.88496ZM24.4513 1.88496H47.4602V0.115044H24.4513V1.88496ZM46.5798 0.910165L42.155 44.273L43.9158 44.4527L48.3406 1.08984L46.5798 0.910165ZM42.7378 43.5294L24.1537 50.1666L24.749 51.8334L43.333 45.1962L42.7378 43.5294ZM5.1333 45.1984L24.1598 51.8356L24.7428 50.1644L5.71626 43.5273L5.1333 45.1984ZM0.119616 1.08984L4.54439 44.4527L6.30516 44.273L1.88038 0.910165L0.119616 1.08984Z'
        fill={strokeColor}
      />
      <line
        x1='6.30976'
        y1='3.65479'
        x2='6.30976'
        y2='7.19461'
        stroke={strokeColor}
        stroke-width='1.76991'
      />
      <line
        x1='11.6195'
        y1='3.65479'
        x2='11.6195'
        y2='7.19461'
        stroke={strokeColor}
        stroke-width='1.76991'
      />
      <line
        x1='16.9291'
        y1='3.65479'
        x2='16.9291'
        y2='7.19461'
        stroke={strokeColor}
        stroke-width='1.76991'
      />
      <line
        x1='22.239'
        y1='3.65479'
        x2='22.239'
        y2='7.19461'
        stroke={strokeColor}
        stroke-width='1.76991'
      />
      <line
        x1='27.5487'
        y1='3.65479'
        x2='27.5487'
        y2='7.19461'
        stroke={strokeColor}
        stroke-width='1.76991'
      />
      <line
        x1='32.8585'
        y1='3.65479'
        x2='32.8585'
        y2='7.19461'
        stroke={strokeColor}
        stroke-width='1.76991'
      />
      <line
        x1='38.1682'
        y1='3.65479'
        x2='38.1682'
        y2='7.19461'
        stroke={strokeColor}
        stroke-width='1.76991'
      />
      <line
        x1='43.4779'
        y1='3.65479'
        x2='43.4779'
        y2='7.19461'
        stroke={strokeColor}
        stroke-width='1.76991'
      />
      <path
        d='M18.2566 44.8052L24.4513 47.4601L30.646 45.2477M32.8584 44.3627L35.0708 43.4778'
        stroke={strokeColor}
        stroke-width='1.76991'
      />
      <path
        d='M38 11H10L10.4375 16.9265H30.125V21.4853H18.3125V27.8676H30.125V34.5L24.5 36.5L18.3125 35V31.0588H14V38.8088L24.5 43L35.375 38.8088L38 11Z'
        fill='#F7F7F7'
        stroke={strokeColor}
        stroke-width='2'
      />
    </svg>
  );
}
