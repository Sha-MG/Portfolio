interface NuageDroiteProps {
  color?: string;
}

export default function IconNuageDroite({ color }: NuageDroiteProps) {
  return (
    <svg
      width='98'
      height='30'
      viewBox='0 0 98 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect y='13' width='65' height='4' rx='2' fill={color ?? '#F7F7F7'} />
      <rect
        x='18'
        y='22'
        width='80'
        height='8'
        rx='4'
        fill={color ?? '#F7F7F7'}
      />
      <circle
        cx='5'
        cy='5'
        r='5'
        transform='matrix(-1 0 0 1 90 5)'
        fill={color ?? '#F7F7F7'}
      />
      <circle
        cx='2.5'
        cy='2.5'
        r='2'
        transform='matrix(-1 0 0 1 76 0)'
        stroke={color ?? '#F7F7F7'}
      />
    </svg>
  );
}
