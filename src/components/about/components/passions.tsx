import Animals from '@/components/general/icons/passions/animals';
import Drawing from '@/components/general/icons/passions/drawing';
import Dés from '@/components/general/icons/passions/dés';
import Manette from '@/components/general/icons/passions/manette';
import Movie from '@/components/general/icons/passions/movie';
import Painting from '@/components/general/icons/passions/painting';
import Sushi from '@/components/general/icons/passions/sushi';
import Twitch from '@/components/general/icons/passions/twitch';
import SmallTitle from '@/components/general/small-title';
import { Box, HStack } from '@chakra-ui/react';

export default function Passions() {
  return (
    <Box w={{ base: 'full', lg: 'container.md' }}>
      <SmallTitle title='Mes passions' />
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
