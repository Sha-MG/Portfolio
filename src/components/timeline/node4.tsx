import { Stack, Text } from '@chakra-ui/react';

import Timeline from './components/timeline';

export default function Node4() {
  return (
    <Timeline
      title='Umons | Belgique'
      leftSide
      postName='L2 Psychologie'
      date='2018 - 2020'
      margeTop={-24}
      description={
        <Stack lineHeight={1.2} spacing={4}>
          <Text>
            Faculté de psychologie, orientation générale en sciences
            psychologiques et de l’éducation.
          </Text>
        </Stack>
      }
    />
  );
}
