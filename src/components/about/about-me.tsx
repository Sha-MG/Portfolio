import { useTheme } from '@/pages';
import { VStack } from '@chakra-ui/react';

import Bloc from '../general/bloc/bloc';
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
    <Bloc topTransitionColor={strokeColor} currentBloc={1}>
      <VStack spacing={5}>
        <Resume />
        <Presentation />
        <Passions />
        <DownloadButton color={strokeColor} />
      </VStack>
    </Bloc>
  );
}
