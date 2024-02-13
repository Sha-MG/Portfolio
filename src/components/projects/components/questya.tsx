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
import { Stack, Text } from '@chakra-ui/react';

import Project from './project';

export default function Questya() {
  const { t } = useTranslation();
  return (
    <Project
      title='Questya'
      size='xl'
      mainColor='#C76A40'
      smallImage='https://i.imgur.com/ct9ugtr.jpeg'
      content={
        <Stack textAlign='justify' spacing={4}>
          <Text>{t('bloc4.questya.text1')}</Text>
          <Text>{t('bloc4.questya.text2')}</Text>
        </Stack>
      }
      link='https://questya.vercel.app/'
      technologies={['React', 'TypeScript', 'Next.js', 'Chakra UI', 'Git']}
      bgColor='#FFFFFF'
    />
  );
}
