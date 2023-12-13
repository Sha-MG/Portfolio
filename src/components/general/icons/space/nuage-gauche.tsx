interface NuageGaucheProps {
  color?: string;
}

export default function IconNuageGauche({ color }: NuageGaucheProps) {
  return (
    <svg
      width='98'
      height='30'
      viewBox='0 0 98 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        width='65'
        height='4'
        rx='2'
        transform='matrix(-1 0 0 1 98 13)'
        fill={color ?? '#F7F7F7'}
      />
      <rect
        width='80'
        height='8'
        rx='4'
        transform='matrix(-1 0 0 1 80 22)'
        fill={color ?? '#F7F7F7'}
      />
      <circle cx='13' cy='10' r='5' fill={color ?? '#F7F7F7'} />
      <circle cx='24.5' cy='2.5' r='2' stroke={color ?? '#F7F7F7'} />
    </svg>
  );
}
