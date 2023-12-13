interface LeafIconProps {
  color?: string;
}

export default function LeafIcon({ color }: LeafIconProps) {
  return (
    <svg
      width='45'
      height='42'
      viewBox='0 0 45 42'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 41L9.99631 34.5027M28.7712 16.3579L20.6312 24.9631M20.6312 24.9631H26.8155M20.6312 24.9631C20.6312 24.9631 18.2022 27.5309 16.6458 29.1763M16.6458 29.1763C16.0677 29.8519 15.7236 30.2156 15.0812 30.8303C13.3113 32.5236 9.99631 34.5027 9.99631 34.5027M16.6458 29.1763C16.6458 25.8507 16.6458 20.6605 16.6458 20.6605M9.99631 34.5027C9.99631 34.5027 5.27437 29.192 4.5203 24.9631C3.40918 18.7319 5.86179 14.501 9.99631 9.70848C14.9099 4.01292 20.2487 3.48981 27.5978 1.8856C32.5293 0.809102 39.9742 0.976458 42.4277 1.06793C42.9049 1.08573 43.2898 1.43662 43.3454 1.91097C43.7069 4.99382 44.7677 16.1888 42.0701 23.0074C39.7315 28.9187 38.13 33.0292 32.6827 36.3063C28.2672 38.9626 24.8727 39.7962 19.7749 39.0443C15.6094 38.4299 9.99631 34.5027 9.99631 34.5027ZM22.1218 7.36163C22.1218 7.36163 26.5842 6.18818 28.7712 6.18818C32.2915 6.18818 33.8561 6.18818 33.8561 6.18818M35.4207 6.18818H39.3321M16.6458 35.1328L18.6015 32.0037M22.1218 36.3063V33.1771M27.5978 35.1328L26.0332 32.0037M32.6827 33.1771L30.3358 30.8303M35.4207 29.1763L32.6827 27.31'
        stroke={color ?? '#455647'}
        stroke-width='2'
      />
    </svg>
  );
}