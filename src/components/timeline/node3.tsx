import { Stack, Text } from '@chakra-ui/react';

import Timeline from './components/timeline';

export default function Node3() {
  return (
    <Timeline
      title='Duoloriages'
      postName='Artiste Auteur'
      date='2020 - 2022'
      margeTop={20}
      isWork
      description={
        <Stack lineHeight={1.2} spacing={4}>
          <Text>
            Création de livres de coloriage à réaliser en duo. Enfant et adulte
            s’allient autour de la réalisation d’une oeuvre commune dont ils ont
            chacun une moitié.
          </Text>
          <Text>
            Concept, dessin, mise en page, impression, distribution & mise en
            vente sous le statut d'Artiste.
          </Text>
        </Stack>
      }
    />
  );
}
