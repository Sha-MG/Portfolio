import FeaturedIcon from '@/components/general/icons/features/featured-icon';
import AppartementIcon from '@/components/general/icons/nockee/appartement';
import BridgeIcon from '@/components/general/icons/nockee/bridge';
import BuildingIcon from '@/components/general/icons/nockee/building';
import Building2Icon from '@/components/general/icons/nockee/building-2';
import BusIcon from '@/components/general/icons/nockee/bus';
import HouseIcon from '@/components/general/icons/nockee/house';
import House2Icon from '@/components/general/icons/nockee/house-2';
import KeyIcon from '@/components/general/icons/nockee/key';
import MapIcon from '@/components/general/icons/nockee/map';
import useTablet from '@/hooks/useTablet';
import { Box, HStack, Stack, Text } from '@chakra-ui/react';

import Project from './project';

export default function Nockee() {
  const isTablet = useTablet();
  return (
    <Project
      title='nockee'
      mainColor='#2F855A'
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
      link='https://www.nockee.fr/'
      googlePlayLink='https://play.google.com/store/apps/details?id=com.nockee.app&hl=fr&gl=US'
      technologies={[
        'React',
        'TypeScript',
        'Next.js',
        'Chakra UI',
        'Git',
        'GitLab',
        'React Native',
        'Figma',
        'Notion',
        'Slack',
      ]}
      smallImage='https://www.nockee.fr/apple-icon.png?fb0eea2435669f07'
      bigImage={{
        base: 'https://media.licdn.com/dms/image/D4E3DAQEpcRApK1RuEw/image-scale_191_1128/0/1697202173843/nockee_cover?e=2147483647&v=beta&t=aEuLcHUWJvKSLKUYwNF9xZJ_HeUp9x1CE6WD3PxoJGU',
        md: 'https://images.prismic.io/nockee-v2/65267252fbd9a45bcec8130e_Suividesdemandes-Main-2x.png?auto=format%2Ccompress&w=2048&q=100',
      }}
      bgColor='#FFFFFF'
      bottomBorder={
        isTablet ? (
          <HStack justifyContent='space-between' opacity={0.4}>
            <BridgeIcon />
            <Box pb={4}>
              <BuildingIcon />
            </Box>
            <AppartementIcon />
            <Box pb={4}>
              <BusIcon />
            </Box>
            <HouseIcon />
            <Box pb={4}>
              <MapIcon />
            </Box>
            <Building2Icon />
            <Box pb={4}>
              <KeyIcon />
            </Box>
            <House2Icon />
          </HStack>
        ) : (
          <HStack justifyContent='space-between' opacity={0.4}>
            <BridgeIcon />
            <Box pb={4}>
              <BuildingIcon />
            </Box>
            <AppartementIcon />
            <Box pb={4}>
              <BusIcon />
            </Box>
            <HouseIcon />
            <Box pb={4}>
              <MapIcon />
            </Box>
            <Building2Icon />
            <Box pb={4}>
              <KeyIcon />
            </Box>
            <House2Icon />
            <Box pb={4}>
              <BridgeIcon />
            </Box>
            <BuildingIcon />
            <Box pb={4}>
              <AppartementIcon />
            </Box>
            <BusIcon />
            <Box pb={4}>
              <HouseIcon />
            </Box>
            <MapIcon />
            <Box pb={4}>
              <Building2Icon />
            </Box>
            <KeyIcon />
            <Box pb={4}>
              <House2Icon />
            </Box>
          </HStack>
        )
      }
    />
  );
}
