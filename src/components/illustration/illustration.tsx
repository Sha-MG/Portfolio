import useMobile from '@/hooks/useMobile';
import { useTheme } from '@/pages';
import { Box, Center } from '@chakra-ui/react';

import Forest from './forest/forest';
import Sea from './sea/sea';
import Space from './space/space';
import TransitionIllustrationBloc from './transition';
import TransitionIllustrationBlocMobile from './transition-mobile';

export default function Illustration() {
  const { activeColorTheme } = useTheme();
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
    </Box>
  );
}
