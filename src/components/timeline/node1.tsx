import { Box, Stack, Text } from '@chakra-ui/react';

import Timeline from './components/timeline';

export default function Node1() {
  return (
    <Timeline
      first
      title='nockee'
      isWork
      postName='Dévellopeuse web frontend'
      date='Mars 2023 - Sept 2023'
      margeTop={0}
      description={
        <Stack lineHeight={1.2} spacing={4}>
          <Text>
            Stage de fin d’études chez nockee, entreprise innovante dans la
            gestion locative, présente sur le campus de Station F, plus grand
            incubateur de startups au monde.
          </Text>
          <Box>
            <Text>
              Développement d’un Saas avec Next.js, Typescript & Chakra ui ainsi
              que d’un site vitrine sur Prismic avec la même stack technique.
              Design de l’interface web et réalisation d’illustrations sur
              Figma. Développement d’une application mobile IOS et Android avec
              React native.
            </Text>
            <Text>
              Design de l’interface web et réalisation d’illustrations sur
              Figma.
            </Text>
            <Text>
              Développement d’une application mobile IOS et Android avec React
              native.
            </Text>
          </Box>
        </Stack>
      }
    />
  );
}
