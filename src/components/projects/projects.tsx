import { useTheme } from '@/pages';
import { Box, Center, HStack, VStack } from '@chakra-ui/react';

import Bloc from '../general/bloc/bloc';
import SunflowerIcon from '../general/icons/forest/sunflower';
import SeahorseIcon from '../general/icons/sea/seahorse';
import MoonIcon from '../general/icons/space/moon';
import Nockee from './components/nockee';
import Portfolio from './components/portfolio';

export default function Projects() {
  const { activeColorTheme } = useTheme();

  return (
    <Bloc
      title='Projets'
      currentBloc={4}
      topTransitionColor='#F7F7F7'
      noContainer
      bgColor={activeColorTheme.id === 'forest' ? '#C3B3A3' : 'bloc4.bgColor'}
      leftIcon={
        activeColorTheme.id === 'space' ? (
          <MoonIcon color='#F7F7F7' />
        ) : activeColorTheme.id === 'sea' ? (
          <Box transform='scaleX(-1)'>
            <SeahorseIcon color='#F7F7F7' />
          </Box>
        ) : (
          <SunflowerIcon color='#F7F7F7' />
        )
      }
      rightIcon={
        activeColorTheme.id === 'space' ? (
          <Box transform='scaleX(-1)'>
            <MoonIcon color='#F7F7F7' />
          </Box>
        ) : activeColorTheme.id === 'sea' ? (
          <SeahorseIcon color='#F7F7F7' />
        ) : (
          <SunflowerIcon color='#F7F7F7' />
        )
      }
    >
      <HStack px={40} py={10} justifyContent='center' wrap='wrap' spacing={10}>
        <Nockee />
        <Portfolio />
      </HStack>
      <Center alignItems='flex-end' pt={10}>
        <VStack spacing={0}>
          <HStack justifyContent='space-between' alignItems='baseline' w={32}>
            <Box h={4} w={0.5} bg='bloc4.title' />
            <Box h={8} w={0.5} bg='bloc4.title' />
            <Box h={12} w={0.5} bg='bloc4.title' />
            <Box h={4} w={0.5} bg='bloc4.title' />
            <Box h={10} w={0.5} bg='bloc4.title' />
            <Box h={8} w={0.5} bg='bloc4.title' />
            <Box h={6} w={0.5} bg='bloc4.title' />
            <Box h={4} w={0.5} bg='bloc4.title' />
            <Box h={8} w={0.5} bg='bloc4.title' />
            <Box h={12} w={0.5} bg='bloc4.title' />
          </HStack>
          <Box h={0.5} w={32} bg='bloc4.title' />
          <Box h={36} w={1} bg='bloc4.title' />
        </VStack>
      </Center>
    </Bloc>
  );
}
