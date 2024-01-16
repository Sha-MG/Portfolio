import { useTranslation } from 'react-i18next';

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
import useTablet from '@/hooks/useTablet';
import { Box, HStack, Stack, Text } from '@chakra-ui/react';

import Project from './project';

export default function Portfolio() {
  const isTablet = useTablet();
  const { t } = useTranslation();
  return (
    <Project
      title='Portfolio'
      mainColor='#C283A8'
      content={
        <Stack textAlign='justify' spacing={4}>
          <Text>{t('bloc4.portfolio.text1')}</Text>
          <Text>{t('bloc4.portfolio.text2')}</Text>
          <Text>{t('bloc4.portfolio.text3')}</Text>
          <Text>{t('bloc4.portfolio.text4')}</Text>
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
        isTablet ? (
          <HStack justifyContent='space-between' opacity={0.4}>
            <MoonIcon />
            <LeafIcon color='#F0C273' />
            <Box pb={4}>
              <MeteoriteIcon />
            </Box>
            <RayIcon color='#E3A591' />
            <Box pb={4}>
              <SunflowerIcon color='#F0C273' />
            </Box>
          </HStack>
        ) : (
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
        )
      }
    />
  );
}
