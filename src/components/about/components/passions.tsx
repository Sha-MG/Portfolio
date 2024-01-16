import { useTranslation } from 'react-i18next';

import Animals from '@/components/general/icons/passions/animals';
import Drawing from '@/components/general/icons/passions/drawing';
import Dés from '@/components/general/icons/passions/dés';
import Manette from '@/components/general/icons/passions/manette';
import Movie from '@/components/general/icons/passions/movie';
import Painting from '@/components/general/icons/passions/painting';
import Sushi from '@/components/general/icons/passions/sushi';
import Twitch from '@/components/general/icons/passions/twitch';
import SmallTitle from '@/components/general/small-title';
import useMobile from '@/hooks/useMobile';
import { Box, HStack, VStack } from '@chakra-ui/react';

export default function Passions() {
  const { t } = useTranslation();
  const isMobile = useMobile();

  return isMobile ? (
    <VStack w='full'>
      <SmallTitle title={t('bloc1.passions')} />
      <HStack
        w='full'
        justifyContent={{ base: 'center', md: 'space-between' }}
        flexWrap='wrap'
      >
        <Painting />
        <Drawing />
        <Animals />
        <Manette />
        <Sushi />
        <Movie />
        <Dés />
        <Twitch />
      </HStack>
    </VStack>
  ) : (
    <Box w='container.md'>
      <SmallTitle title={t('bloc1.passions')} />
      <HStack
        w='full'
        justifyContent={{ base: 'center', md: 'space-between' }}
        flexWrap='wrap'
      >
        <Painting />
        <Drawing />
        <Animals />
        <Manette />
        <Sushi />
        <Movie />
        <Dés />
        <Twitch />
      </HStack>
    </Box>
  );
}
