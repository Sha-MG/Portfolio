interface MushroomProps {
  color?: string;
}

export default function MushroomIcon({ color }: MushroomProps) {
  return (
    <svg
      width='42'
      height='44'
      viewBox='0 0 42 44'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.9572 19.1656H13.749C13.749 19.1656 5.03795 18.8923 1.97186 15.1172C-1.17383 11.244 3.89138 9.22054 8.96379 6.65241C13.2162 4.49945 16.9269 1.46138 21.1097 1.49987C25.1481 1.53703 29.4695 4.56714 33.6222 6.65241C38.7812 9.24306 43.1286 11.294 39.8795 15.1172C37.166 18.3102 34.1128 18.756 29.9426 19.1656C28.5122 19.3061 26.2622 19.1656 26.2622 19.1656M15.9572 19.1656C15.9572 19.1656 14.5607 23.412 13.749 26.1582C12.82 29.3013 10.9948 31.0233 11.5408 34.255C11.9803 36.8566 12.8516 38.4245 14.8531 40.1436C18.6692 43.4212 23.7932 43.2697 27.7343 40.1436C29.859 38.4583 30.9512 36.927 31.4147 34.255C31.9818 30.9857 29.9199 29.2952 28.8384 26.1582C27.8899 23.4069 26.2622 19.1656 26.2622 19.1656M15.9572 19.1656H26.2622M15.9572 34.255V37.1993M19.6376 34.255V37.1993M23.3179 34.255V37.1993M26.9983 34.255V37.1993M4.17934 13.277C4.17934 13.277 8.15085 10.9419 10.0679 9.22866C12.2033 7.3203 15.9572 5.91631 15.9572 5.91631M17.7971 5.54827L20.7414 5.18023'
        stroke={color ?? '#455647'}
        stroke-width='2'
      />
    </svg>
  );
}
