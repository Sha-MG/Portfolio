import useMobile from '@/hooks/useMobile';
import useWideScreen from '@/hooks/useWideScreen';
import { Center, HStack } from '@chakra-ui/react';

import Arbre1 from './arbre-1';
import Arbre1Mobile from './arbre-1-mobile';
import Arbre2 from './arbre-2';
import Arbre3 from './arbre-3';
import Arbre3Mobile from './arbre-3-mobile';
import Arbre4 from './arbre-4';

export default function ArbresFront() {
  const isWideScreen = useWideScreen();
  const isMobile = useMobile();
  return (
    <Center overflow='hidden' w='full'>
      <HStack w='full' justifyContent='space-between' overflow='hidden'>
        <HStack w='45vw' justifyContent='flex-end' overflow='hidden'>
          {isMobile ? (
            <Arbre1Mobile />
          ) : (
            <>
              <Arbre2 />
              <Arbre1 />
            </>
          )}
          {isWideScreen && <Arbre4 />}
        </HStack>
        <HStack w='45vw' justifyContent='flex-start' overflow='hidden'>
          {isMobile ? (
            <Arbre3Mobile />
          ) : (
            <>
              <Arbre3 />
              <Arbre4 />
            </>
          )}
          {isWideScreen && <Arbre2 />}
        </HStack>
      </HStack>
    </Center>
  );
}
