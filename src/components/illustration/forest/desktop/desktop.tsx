import { Box } from '@chakra-ui/react';

import BackForest from './back-layer/back';
import FrontForest from './front-layer/front';
import Lucioles from './lucioles/lucioles';
import MiddleForest from './middle-layer/middle';
import Texte from './text/text';

export default function DesktopForest() {
  return (
    <Box w='full' h={{ 'base': '500', '2xl': '700' }} bg='#FEFFD6'>
      <BackForest />
      <MiddleForest />
      <FrontForest />
      <Lucioles />
      <Texte />
    </Box>
  );
}
