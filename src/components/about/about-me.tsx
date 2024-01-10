import { useTheme } from '@/pages';
import { Box, VStack } from '@chakra-ui/react';

import Bloc from '../general/bloc/bloc';
import ForestIcon from '../general/icons/forest/forest';
import RayIcon from '../general/icons/sea/ray';
import PlanetIcon from '../general/icons/space/planet';
import RocketIcon from '../general/icons/space/rocket';
import DownloadButton from './components/download-button';
import Passions from './components/passions';
import Presentation from './components/presentation';
import Resume from './components/resume';

export default function AboutMe() {
  const { activeColorTheme } = useTheme();
  const strokeColor =
    activeColorTheme?.id === 'sea'
      ? '#9BCDD6'
      : activeColorTheme?.id === 'forest'
      ? '#9CB380'
      : '#C283A8';

  return (
    <Bloc
      topTransitionColor={strokeColor}
      currentBloc={1}
      title='À propos de moi'
      leftIcon={
        activeColorTheme.id === 'space' ? (
          <Box pb={6}>
            <RocketIcon color={strokeColor} />
          </Box>
        ) : activeColorTheme.id === 'forest' ? (
          <ForestIcon color={strokeColor} />
        ) : (
          <Box transform='scaleX(-1)'>
            <RayIcon color={strokeColor} />
          </Box>
        )
      }
      rightIcon={
        activeColorTheme.id === 'space' ? (
          <Box transform='scaleX(-1)'>
            <PlanetIcon color={strokeColor} />
          </Box>
        ) : activeColorTheme.id === 'forest' ? (
          <ForestIcon color={strokeColor} />
        ) : (
          <RayIcon color={strokeColor} />
        )
      }
    >
      <VStack spacing={{ base: 8, md: 10, lg: 5 }}>
        <Resume />
        <Presentation />
        <Passions />
        <DownloadButton color={strokeColor} />
      </VStack>
    </Bloc>
  );
}
