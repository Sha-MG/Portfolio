import useMobile from '@/hooks/useMobile';
import { Box, Center } from '@chakra-ui/react';

import ArbresFront from './arbres';
import FeuillageFront from './feuillage';
import FeuillageMobile from './feuillage-mobile';
import SolFront from './sol';
import SolMobile from './sol-mobile';

export default function FrontForest() {
  const isMobile = useMobile();
  return (
    <Box w='full' h={{ 'base': '500', '2xl': '700' }}>
      <Center overflow='hidden' w='full'>
        {isMobile ? <FeuillageMobile /> : <FeuillageFront />}
      </Center>
      <Center overflow='hidden' w='full'>
        {isMobile ? <SolMobile /> : <SolFront />}
      </Center>
      <ArbresFront />
    </Box>
  );
}
