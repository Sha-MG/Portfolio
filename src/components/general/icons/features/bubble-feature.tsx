import { useTheme } from '@/pages';

export default function BubbleFeature() {
  const { activeColorTheme } = useTheme();
  const strokeColor =
    activeColorTheme?.id === 'sea'
      ? '#4B7A85'
      : activeColorTheme?.id === 'forest'
      ? '#455647'
      : '#666BA2';

  return (
    <svg
      width='79'
      height='74'
      viewBox='0 0 79 74'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='5' cy='18' r='5' fill={strokeColor} />
      <circle
        cx='5'
        cy='5'
        r='5'
        transform='matrix(-1 0 0 1 76 54)'
        fill={strokeColor}
      />
      <circle cx='10.5' cy='27.5' r='2' stroke={strokeColor} />
      <circle
        cx='2.5'
        cy='2.5'
        r='2'
        transform='matrix(-1 0 0 1 65 67)'
        stroke={strokeColor}
      />
      <circle
        cx='2.5'
        cy='2.5'
        r='2'
        transform='matrix(-1 0 0 1 11 58)'
        stroke='#666BA2'
      />
      <circle
        cx='2.5'
        cy='2.5'
        r='2'
        transform='matrix(-1 0 0 1 36 4)'
        stroke={strokeColor}
      />
      <circle
        cx='2.5'
        cy='2.5'
        r='2.5'
        transform='matrix(-1 0 0 1 72 12)'
        fill={strokeColor}
      />
      <circle
        cx='2.5'
        cy='2.5'
        r='2.5'
        transform='matrix(-1 0 0 1 42 67)'
        fill={strokeColor}
      />
      <circle
        cx='2.5'
        cy='2.5'
        r='2.5'
        transform='matrix(-1 0 0 1 8 41)'
        fill={strokeColor}
      />
      <circle
        cx='5'
        cy='5'
        r='4.5'
        transform='matrix(-1 0 0 1 79 25)'
        stroke={strokeColor}
      />
      <circle
        cx='5'
        cy='5'
        r='4.5'
        transform='matrix(-1 0 0 1 26 64)'
        stroke={strokeColor}
      />
      <circle
        cx='5'
        cy='5'
        r='4.5'
        transform='matrix(-1 0 0 1 22 0)'
        stroke={strokeColor}
      />
    </svg>
  );
}
