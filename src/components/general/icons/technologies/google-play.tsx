import { useTheme } from '@/pages';

export default function GooglePlayIcon() {
  const { activeColorTheme } = useTheme();
  const strokeColor =
    activeColorTheme?.id === 'sea'
      ? '#4B7A85'
      : activeColorTheme?.id === 'forest'
      ? '#455647'
      : '#666BA2';

  return (
    <svg
      width='38'
      height='38'
      viewBox='0 0 38 38'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M21.2087 18.7319L2.46509 35.9948L27.8471 23.5068L21.2087 18.7319Z'
        fill='#DE7373'
      />
      <path
        d='M27.4566 23.5068L21.2087 19.0993L27.4566 13.5898L36.0475 17.6301L36.4379 19.0993L27.4566 23.5068Z'
        fill='#F9E3AE'
      />
      <path
        d='M27.4567 13.2227L2.07471 1.46924L21.2088 19.0994L27.4567 13.2227Z'
        fill='#AED1A1'
      />
      <path
        d='M20.8185 18.7318L1.68433 0.734375V35.9947L20.8185 18.7318Z'
        fill='#85CBF8'
      />
      <path
        d='M16.9135 15.0591L19.2565 17.2629M22.7709 19.8339L27.8473 23.7582M27.8473 23.7582L3.04553 36.0363C2.05925 36.5245 0.90332 35.807 0.90332 34.7064V2.4116C0.90332 1.30595 2.06908 0.588653 3.05604 1.08702L35.3509 17.3943C36.4424 17.9455 36.4362 19.5062 35.3404 20.0487L27.8473 23.7582Z'
        stroke={strokeColor}
        stroke-width='1.48387'
      />
      <path
        d='M27.0662 13.5898L2.07471 35.6275'
        stroke={strokeColor}
        stroke-width='1.48387'
      />
      <path
        d='M2.46509 7.3457H5.19853M2.46509 11.0187H5.58903M2.46509 15.0589H5.19853M2.46509 18.7318H5.19853M2.46509 22.4048H5.19853M2.46509 25.7104H5.19853M2.46509 29.7507H5.58903'
        stroke={strokeColor}
        stroke-width='1.48387'
      />
      <path
        d='M1.68433 1.46924L15.3516 13.59'
        stroke={strokeColor}
        stroke-width='1.48387'
      />
    </svg>
  );
}
