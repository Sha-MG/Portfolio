import useWideScreen from '@/hooks/useWideScreen';
import { Center } from '@chakra-ui/react';

export default function Arbre5() {
  const isWideScreen = useWideScreen();

  return (
    <Center h='full' mx={40} position={'absolute'}>
      <svg
        width={isWideScreen ? 'auto' : '111'}
        height={isWideScreen ? '690' : '498'}
        viewBox='0 0 111 498'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='29' height='498' fill='#D4E09B' />
        <rect x='62' width='49' height='498' fill='#D4E09B' />
      </svg>
    </Center>
  );
}
