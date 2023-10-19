import { useTheme } from '@/pages';
import { Box } from '@chakra-ui/react';

import Navigation from '../general/bloc/components/navigation';
import Space from './space/space';

export default function Illustration() {
  const { activeColorTheme } = useTheme();

  return (
    <Box position='relative' w='full' h='500'>
      {activeColorTheme.id === 'space' && <Space />}
      <Navigation currentBloc={0} top={5} right={10} />
    </Box>
  );
}
