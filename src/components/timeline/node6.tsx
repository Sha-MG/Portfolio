import { Stack, Text } from '@chakra-ui/react';

import Timeline from './components/timeline';

export default function Node6() {
  return (
    <Timeline
      title='Baccalauréat'
      leftSide
      postName='Bac Scientifique'
      date='2014'
      margeTop={-52}
      description={
        <Stack lineHeight={1.2} spacing={4} maxW='container.sm'>
          <Text w='full' pl={10}>
            Baccalauréat Scientifique avec une spécialisation en Biologie.
          </Text>
        </Stack>
      }
    />
  );
}
