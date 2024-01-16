import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <Project
      title='nockee'
      mainColor='#2F855A'
      content={
        <Stack textAlign='justify' spacing={4}>
          <Text>{t('bloc4.nockee.text1')}</Text>
          <Text>{t('bloc4.nockee.text2')}</Text>
          <Text>{t('bloc4.nockee.text3')}</Text>
          <Text>{t('bloc4.nockee.text4')}</Text>
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
