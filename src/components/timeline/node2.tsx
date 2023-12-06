import { Stack, Text } from '@chakra-ui/react';

import Timeline from './components/timeline';

export default function Node2() {
  return (
    <Timeline
      title="O'clock"
      leftSide
      postName='Formation dévellopeuse web fullstack'
      date='Sept 2022 - Mars 2023'
      margeTop={{ base: -56, xl: -40 }}
      description={
        <Stack lineHeight={1.2} spacing={4}>
          <Text>Formation de développeur web full stack JavaScript.</Text>
          <Text>
            Socle commun avec moitié backend (Node.js, express, POstgreSQL ... )
            et moitié frontend (HTML, CSS, javascript). Orientation Front-End
            avec une spécialisation React.
          </Text>
          <Text>
            Projet de fin d’études d’un mois avec mise en place d’une gestion de
            projet de type agile en tant que Scrum master.
          </Text>
          <Text>
            Passage du Titre professionnel “Développeur web et web mobile”
            niveau 5 (équivalent Bac +2).
          </Text>
        </Stack>
      }
    />
  );
}
