import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import useWideScreen from '@/hooks/useWideScreen';
import { Center, HStack } from '@chakra-ui/react';

import Arbre1 from './arbre-1';
import Arbre2 from './arbre-2';
import Arbre3 from './arbre-3';
import Arbre4 from './arbre-4';
import Arbre5 from './arbre-5';

export default function ArbresBack() {
  const isWideScreen = useWideScreen();
  const rightParallax = useParallax({ translateX: [0, 100] });
  const leftParallax = useParallax({ translateX: [0, -100] });

  return (
    <Center overflow='hidden' w='full'>
      <HStack w='full' h='500' justifyContent='space-between' overflow='hidden'>
        <HStack
          w='35vw'
          justifyContent='flex-end'
          overflow='hidden'
          spacing={{ 'base': 14, '2xl': 30 }}
          ref={leftParallax.ref as LegacyRef<HTMLDivElement>}
          position='absolute'
          left={{ 'base': 58, 'md': 100, 'lg': 200, 'xl': 300, '2xl': 700 }}
        >
          <Arbre4 />
          <Arbre3 />
          <Arbre2 />
          <Arbre1 />
          {isWideScreen && (
            <>
              <Arbre1 />
              <Arbre2 />
              <Arbre5 />
            </>
          )}
        </HStack>
        <HStack
          w='35vw'
          justifyContent='flex-start'
          overflow='hidden'
          spacing={{ 'base': 28, '2xl': 60 }}
          ref={rightParallax.ref as LegacyRef<HTMLDivElement>}
          position='absolute'
          right={{ 'base': 5, 'md': 100, 'lg': 180, 'xl': 250, '2xl': 600 }}
        >
          <Arbre5 />
          <Arbre1 />
          {isWideScreen && (
            <>
              <Arbre5 />
              <Arbre1 />
              <Arbre2 />
            </>
          )}
        </HStack>
      </HStack>
    </Center>
  );
}
