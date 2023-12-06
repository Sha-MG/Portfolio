import { Box, Stack, Text } from '@chakra-ui/react';

import Timeline from './components/timeline';

export default function Node5() {
  return (
    <Timeline
      title='HeH | Belgique'
      postName='L2 Techniques Graphiques'
      date='2015 - 2017'
      margeTop={20}
      description={
        <Stack lineHeight={1.2} spacing={4}>
          <Text>
            Bachelier en Conceptions Graphiques assistées par ordinateur. La
            formation était basée sur 4 grands axes :
          </Text>
          <Text>
            Graphisme : Dessin, Photoshop, Illustrator & After Effects.
          </Text>
          <Text>
            Développement Web : HTML, CSS & Jquery. Conception 3D : Maya &
            AutoCad.
          </Text>
          <Text>Programmation : Algorithmique & C++.</Text>
          <Box h={35} />
        </Stack>
      }
    />
  );
}
