import useWideScreen from '@/hooks/useWideScreen';
import { Center } from '@chakra-ui/react';

export default function Arbre4() {
  const isWideScreen = useWideScreen();

  return (
    <Center h='full' mr={140} position={'absolute'}>
      <svg
        width={isWideScreen ? 'auto' : '40'}
        height={isWideScreen ? '690' : '498'}
        viewBox='0 0 40 498'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='40' height='498' fill='#D4E09B' />
      </svg>
    </Center>
  );
}
