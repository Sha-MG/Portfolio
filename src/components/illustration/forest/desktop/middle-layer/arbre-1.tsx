import useWideScreen from '@/hooks/useWideScreen';
import { Center } from '@chakra-ui/react';

export default function Arbre1() {
  const isWideScreen = useWideScreen();

  return (
    <Center h='full' mr={140}>
      <svg
        width={isWideScreen ? 'auto' : '49'}
        height={isWideScreen ? '695' : '495'}
        viewBox='0 0 49 495'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M2 0H31.5V119.12L49 93.094V106.107L31.5 153.155V495H0L2 0Z'
          fill='#9CB380'
        />
      </svg>
    </Center>
  );
}
