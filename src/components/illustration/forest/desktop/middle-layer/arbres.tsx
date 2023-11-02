import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import useWideScreen from '@/hooks/useWideScreen';
import { Center, HStack } from '@chakra-ui/react';

import Arbre1 from './arbre-1';
import Arbre2 from './arbre-2';
import Arbre3 from './arbre-3';
import Arbre4 from './arbre-4';
import Arbre5 from './arbre-5';
import Arbre6 from './arbre-6';

export default function ArbresMiddle() {
  const isWideScreen = useWideScreen();
  const parallax = useParallax({ speed: 10 });
  return (
    <Center
      overflow='hidden'
      w='full'
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <HStack w='full' justifyContent='space-between' overflow='hidden'>
        <HStack w='45vw' justifyContent='flex-end' overflow='hidden'>
          <Arbre1 />
          <Arbre2 />
          <Arbre3 />
          {isWideScreen && (
            <>
              <Arbre4 />
            </>
          )}
        </HStack>
        <HStack w='45vw' justifyContent='flex-start' overflow='hidden'>
          <Arbre4 />
          <Arbre5 />
          <Arbre6 />
          {isWideScreen && (
            <>
              <Arbre3 />
              <Arbre5 />
            </>
          )}
        </HStack>
      </HStack>
    </Center>
  );
}
