interface TreeIconProps {
  color?: string;
}

export default function TreeIcon({ color }: TreeIconProps) {
  return (
    <svg
      width='48'
      height='42'
      viewBox='0 0 48 42'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.15298 41H12.4698M40.5005 41H32.9993M12.4698 41L16.2914 38.9155C16.6127 38.7402 16.8125 38.4035 16.8125 38.0376V28.7612M12.4698 41H32.9993M16.8125 28.7612C16.8125 28.7612 20.3723 31.9922 23.1293 31.9196C25.7495 31.8507 29.0513 28.7612 29.0513 28.7612M16.8125 28.7612C16.8125 28.7612 13.469 30.8612 11.2854 30.3404C9.40368 29.8917 7.7323 27.3418 7.15603 26.372C7.01512 26.1349 6.79259 25.957 6.53083 25.87C5.58437 25.5554 3.28284 24.6626 2.5998 23.2341C1.81575 21.5943 3.11082 19.1367 3.94842 17.8226C4.26591 17.3245 4.1436 16.6391 3.67771 16.276C2.55113 15.398 0.78977 13.7508 1.0206 12.1797C1.32916 10.0796 5.02191 9.30958 6.41511 9.09267C6.74436 9.04141 7.0352 8.84768 7.20427 8.56055C8.05825 7.11027 10.8912 2.71129 14.049 2.30973C16.3792 2.01342 19.2823 3.84344 20.8378 4.98859C21.3933 5.3975 22.2285 5.19674 22.5762 4.60106C23.1368 3.64083 24.0319 2.45917 25.1033 2.30973C26.2338 2.15206 27.5199 3.14913 28.3086 3.89842C28.7305 4.29929 29.4117 4.33875 29.8595 3.967C31.3325 2.74416 34.5252 0.438206 36.9473 1.12534C39.8166 1.93934 41.1853 6.83481 41.5688 8.4814C41.6472 8.81805 41.8802 9.09766 42.1937 9.24331C43.3221 9.76762 45.9422 11.1746 46.0277 12.9693C46.1044 14.5812 44.112 15.9899 42.8 16.7392C42.242 17.0579 42.042 17.8112 42.3634 18.3677C43.0582 19.5704 43.9467 21.5374 43.2641 22.8393C42.5115 24.2745 39.9717 24.6677 38.7709 24.7743C38.3816 24.8088 38.0318 25.0404 37.8554 25.3892C37.1288 26.8259 35.0508 30.4456 32.6045 30.3404C31.0874 30.2752 29.0513 28.7612 29.0513 28.7612M29.0513 28.7612V38.065C29.0513 38.4163 29.2356 38.7418 29.5368 38.9225L32.9993 41M11.2854 9.02131C11.2854 9.02131 15.5366 9.41858 16.8125 11.3901C17.9048 13.0778 17.2073 16.5225 17.2073 16.5225M24.3137 21.6549C24.3137 21.6549 24.6543 18.6245 25.8929 17.3121C27.5357 15.5714 31.8149 15.7329 31.8149 15.7329M7.33738 21.2601L10.4958 20.4705M10.101 25.2081L12.075 22.8393M14.049 27.182V24.0237M17.2073 24.0237L18.3917 26.3925'
        stroke={color ?? '#455647'}
        stroke-width='2'
      />
    </svg>
  );
}