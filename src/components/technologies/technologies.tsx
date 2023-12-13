import { useTheme } from '@/pages';
import { Box, Center, Stack, VStack } from '@chakra-ui/react';

import Bloc from '../general/bloc/bloc';
import Mushroom from '../general/icons/forest/mushroom';
import TreeIcon from '../general/icons/forest/tree';
import Anchor from '../general/icons/sea/anchor';
import NarwhalIcon from '../general/icons/sea/narwhale';
import MeteoriteIcon from '../general/icons/space/meteorite';
import PlanetIcon from '../general/icons/space/planet';
import RocketIcon from '../general/icons/space/rocket';
import SatelliteIcon from '../general/icons/space/satelit';
import Design from './design';
import FrontEnd from './frontend';
import Workflow from './workflow';

export default function Technologies() {
  const { activeColorTheme } = useTheme();
  const strokeColor =
    activeColorTheme.id === 'space'
      ? '#666BA2'
      : activeColorTheme.id === 'sea'
      ? '#4B7A85'
      : '#455647';

  return (
    <>
      <Bloc
        title='Technologies'
        currentBloc={3}
        topTransitionColor={strokeColor}
        noContainer
        leftIcon={
          activeColorTheme.id === 'space' ? (
            <Box transform='rotate(-45deg)'>
              <SatelliteIcon color={strokeColor} />
            </Box>
          ) : activeColorTheme.id === 'sea' ? (
            <Box transform='scaleX(-1)'>
              <NarwhalIcon color={strokeColor} />
            </Box>
          ) : (
            <TreeIcon color={strokeColor} />
          )
        }
        rightIcon={
          activeColorTheme.id === 'space' ? (
            <MeteoriteIcon color={strokeColor} />
          ) : activeColorTheme.id === 'sea' ? (
            <NarwhalIcon color={strokeColor} />
          ) : (
            <TreeIcon color={strokeColor} />
          )
        }
      >
        <Center mt={30}>
          <Stack w='container.lg' px={20} spacing={10}>
            <FrontEnd />
            <Stack
              justifyContent='center'
              spacing={20}
              direction={{ base: 'column', lg: 'row' }}
            >
              <Workflow />
              <Design />
            </Stack>
          </Stack>
        </Center>
      </Bloc>
      <Center h={56} alignItems='flex-end'>
        <VStack position='relative'>
          <Box
            position='absolute'
            top={activeColorTheme.id === 'space' ? -6 : -10}
          >
            {activeColorTheme.id === 'space' ? (
              <PlanetIcon color={strokeColor} />
            ) : activeColorTheme.id === 'sea' ? (
              <Anchor color={strokeColor} />
            ) : (
              <Mushroom color={strokeColor} />
            )}
          </Box>
          <Box h={36} w={1} bg='bloc3.title' />
        </VStack>
      </Center>
    </>
  );
}
