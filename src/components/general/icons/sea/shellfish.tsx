interface ShellfishIconProps {
  color?: string;
}

export default function ShellfishIcon({ color }: ShellfishIconProps) {
  return (
    <svg
      width='42'
      height='31'
      viewBox='0 0 42 31'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.7784 22.0165H4.55496C4.32023 22.0165 4.08826 21.9765 3.87269 21.8836C3.05711 21.532 1.00002 20.5126 1 19.172C0.999948 16.3274 2.66625 12.5523 5.26681 9.21611C9.96512 3.18873 15.4127 0.652107 23.0452 1.03807C29.9305 1.38624 34.7061 3.58972 38.6901 9.21611C41.2277 12.7997 41.1791 14.9051 40.8235 19.5275C40.4388 24.529 37.4726 27.0524 32.6455 28.4168C28.3363 29.6347 24.3571 30.2357 21.2673 26.9945C19.3273 24.9594 18.4957 23.0361 18.7784 20.2387C19.0803 17.25 20.3855 14.8792 23.0452 13.4829C25.627 12.1274 28.052 11.9173 30.5121 13.4829C32.5614 14.787 33.9997 16.7439 34.0678 19.172C34.1392 21.7201 32.9421 24.091 30.5121 24.8611C28.4191 25.5243 26.2233 25.0143 25.1786 23.0832C24.4518 21.7398 24.3821 20.4753 25.1786 19.172C25.9881 17.8473 28.7342 17.3942 28.7342 17.3942M5.26681 17.0386V19.172M8.82248 17.0386V19.172M12.3782 17.0386V19.172M15.9338 17.0386V19.172'
        stroke={color ?? '#666BA2'}
        stroke-width='2'
      />
    </svg>
  );
}
