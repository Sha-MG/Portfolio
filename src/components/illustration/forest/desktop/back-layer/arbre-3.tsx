import useWideScreen from '@/hooks/useWideScreen';
import { Center } from '@chakra-ui/react';

export default function Arbre3() {
  const isWideScreen = useWideScreen();

  return (
    <Center h='full' mr={20}>
      <svg
        width={isWideScreen ? 'auto' : '22'}
        height={isWideScreen ? '690' : '498'}
        viewBox='0 0 22 498'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='22' height='498' fill='#D4E09B' />
      </svg>
    </Center>
  );
}
