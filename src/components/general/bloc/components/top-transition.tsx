import { Center } from '@chakra-ui/react';

interface TopTransitionProps {
  color: string;
}

export default function TopTransition({ color }: TopTransitionProps) {
  return (
    <Center>
      <svg
        width='35'
        height='70'
        viewBox='0 0 30 70'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='5.8' cy='50' r='6' fill={color} />
        <path
          d='M7 1.57922V0.0792236L4 0.0792236V1.57922L7 1.57922ZM4 1.57922L4 49.5896H7L7 1.57922L4 1.57922Z'
          fill={color}
        />
      </svg>
    </Center>
  );
}
