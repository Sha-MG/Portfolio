import useMobile from '@/hooks/useMobile';
import { useTheme } from '@/pages';
import forest from '@/theme/ColorTheme/forest';
import sea from '@/theme/ColorTheme/sea';
import space from '@/theme/ColorTheme/space';
import { Box, Center, HStack } from '@chakra-ui/react';

import ForestIcon from '../general/icons/forest-icon';
import SeaIcon from '../general/icons/sea-icon';
import SpaceIcon from '../general/icons/space-icon';
import Forest from './forest/forest';
import Logo from './logo';
import Sea from './sea/sea';
import Space from './space/space';
import TransitionIllustrationBloc from './transition';
import TransitionIllustrationBlocMobile from './transition-mobile';

export default function Illustration() {
  const { activeColorTheme, changeTheme } = useTheme();
  const isMobile = useMobile();
  return (
    <Box position='relative' w='full' h={{ 'base': '500', '2xl': '700' }}>
      {activeColorTheme.id === 'space' ? (
        <Space />
      ) : activeColorTheme.id === 'sea' ? (
        <Sea />
      ) : (
        <Forest />
      )}
      <Center>
        <Logo />
      </Center>
      <Center w='full' position='absolute' bottom='0' zIndex={10}>
        {isMobile ? (
          <TransitionIllustrationBlocMobile
            color={activeColorTheme.id === 'forest' ? '#F0DC73' : '#F7F7F7'}
          />
        ) : (
          <TransitionIllustrationBloc
            color={activeColorTheme.id === 'forest' ? '#F0DC73' : '#F7F7F7'}
          />
        )}
      </Center>
      <Center
        position='absolute'
        bottom={{ base: 1, md: 3 }}
        right={{ base: 20, md: 44 }}
        w='full'
      >
        <HStack
          bg='#F7F7F7'
          borderRadius='full'
          w='-webkit-fit-content'
          spacing={{ base: 0, md: 1 }}
          zIndex={150}
        >
          <SpaceIcon
            disabled={activeColorTheme.id !== 'space'}
            onClick={() => {
              changeTheme(space);
            }}
          />
          <SeaIcon
            disabled={activeColorTheme.id !== 'sea'}
            onClick={() => {
              changeTheme(sea);
            }}
          />
          <ForestIcon
            disabled={activeColorTheme.id !== 'forest'}
            onClick={() => {
              changeTheme(forest);
            }}
          />
        </HStack>
      </Center>
    </Box>
  );
}
