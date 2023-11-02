import useWideScreen from '@/hooks/useWideScreen';
import { Center } from '@chakra-ui/react';

export default function Arbre1() {
  const isWideScreen = useWideScreen();

  return (
    <Center h='full'>
      <svg
        width={isWideScreen ? 'auto' : '94'}
        height={isWideScreen ? '690' : '498'}
        viewBox='0 0 94 498'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect x='38' width='30' height='498' fill='#D4E09B' />
        <rect width='15' height='498' fill='#D4E09B' />
      </svg>
    </Center>
  );
}
