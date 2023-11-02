import { Center } from '@chakra-ui/react';

interface TopTransitionProps {
  color: string;
}

export default function TopTransition({ color }: TopTransitionProps) {
  return (
    <Center w='full'>
      <svg
        width='11'
        height='55'
        viewBox='0 0 11 55'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='5.5' cy='49.0844' r='5.5' fill={color} />
        <path
          d='M7 1.57922V0.0792236L4 0.0792236V1.57922L7 1.57922ZM4 1.57922L4 49.5896H7L7 1.57922L4 1.57922Z'
          fill={color}
        />
      </svg>
    </Center>
  );
}
