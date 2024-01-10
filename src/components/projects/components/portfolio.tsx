import ForestIcon from '@/components/general/icons/forest/forest';
import LeafIcon from '@/components/general/icons/forest/leaf';
import Leaf2Icon from '@/components/general/icons/forest/leaf2';
import MushroomIcon from '@/components/general/icons/forest/mushroom';
import SunflowerIcon from '@/components/general/icons/forest/sunflower';
import TreeIcon from '@/components/general/icons/forest/tree';
import AnchorIcon from '@/components/general/icons/sea/anchor';
import NarwhalIcon from '@/components/general/icons/sea/narwhale';
import RayIcon from '@/components/general/icons/sea/ray';
import SeahorseIcon from '@/components/general/icons/sea/seahorse';
import ShellfishIcon from '@/components/general/icons/sea/shellfish';
import MeteoriteIcon from '@/components/general/icons/space/meteorite';
import MoonIcon from '@/components/general/icons/space/moon';
import PlanetIcon from '@/components/general/icons/space/planet';
import RocketIcon from '@/components/general/icons/space/rocket';
import SatelliteIcon from '@/components/general/icons/space/satelit';
import { Box, HStack, Stack, Text } from '@chakra-ui/react';

import Project from './project';

export default function Portfolio() {
  return (
    <Project
      title='Portfolio'
      mainColor='#C283A8'
      content={
        <Stack textAlign='justify' spacing={4}>
          <Text>
            Mon stage de fin d'étude chez Nockee a été une plongée passionnante
            au cœur d'une startup innovante, redéfinissant la gestion locative
            immobilière de manière dynamique et originale à travers son logiciel
            en tant que service (SaaS). Ce dernier intègre une gamme complète de
            fonctionnalités, de la multi-diffusion d'annonces au suivi des
            candidatures, en passant par la gestion des visites et une
            application dédiée à la gestion des états des lieux.
          </Text>
          <Text>
            Au cours de cette expérience, j'ai eu l'opportunité de contribuer au
            développement de fonctionnalités captivantes, notamment la création
            d'un espace dédié aux locataires. Ce dernier offre une expérience
            immersive avec une timeline en temps réel, permettant aux locataires
            de suivre l'avancement de leur demande de location de manière
            transparente. Next.js, Chakra UI et React forment ensemble une stack
            de base très solide. J'ai aussi pu maîtriser des librairies moins
            connues mais tout autant utiles et efficaces telles que SWR et React
            Hook Form.
          </Text>
          <Text>
            La seconde facette importante de ce stage fu l'approfondissement de
            mon intérêt pour l'UX/UI design. La découverte du logiciel Figma m'a
            permis d'apprendre à concevoir des interfaces élégantes et
            intuitive.
          </Text>
          <Text>
            Pour finir, j'ai eu la chance d'avoir comme cadre Station F, plus
            grand incubateur de startups au monde. Cette expérience a été un
            tourbillon d'énergie créative. J'ai été immergé dans une atmosphère
            ultra-dynamique et stimulante. Cette expérience m'a réellement donné
            envie de travailler dans ce type d'environnement.
          </Text>
        </Stack>
      }
      technologies={[
        'React',
        'TypeScript',
        'Next.js',
        'Chakra UI',
        'Git',
        'Figma',
      ]}
      smallImage='https://i.ibb.co/H2RdGWf/Capture-d-e-cran-2023-12-11-a-17-51-15.png'
      bgColor='#666BA2'
      bottomBorder={
        <HStack justifyContent='space-between' opacity={0.4}>
          <MoonIcon />
          <Box pb={4}>
            <AnchorIcon color='#E3A591' />
          </Box>
          <LeafIcon color='#F0C273' />
          <Box pb={4}>
            <MeteoriteIcon />
          </Box>
          <RayIcon color='#E3A591' />
          <Box pb={4}>
            <SunflowerIcon color='#F0C273' />
          </Box>
          <RocketIcon />
          <Box pb={4}>
            <ShellfishIcon color='#E3A591' />
          </Box>
          <ForestIcon color='#F0C273' />
          <Box pb={4}>
            <SatelliteIcon />
          </Box>
          <NarwhalIcon color='#E3A591' />
          <Box pb={4}>
            <Leaf2Icon color='#F0C273' />
          </Box>
          <PlanetIcon />
          <Box pb={4}>
            <SeahorseIcon color='#E3A591' />
          </Box>
          <MushroomIcon color='#F0C273' />
          <Box pb={4}>
            <MeteoriteIcon />
          </Box>
          <AnchorIcon color='#E3A591' />
          <Box pb={4}>
            <TreeIcon color='#F0C273' />
          </Box>
        </HStack>
      }
    />
  );
}
