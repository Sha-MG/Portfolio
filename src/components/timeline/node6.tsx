import { useTranslation } from 'react-i18next';

import { Stack, Text } from '@chakra-ui/react';

import Timeline from './components/timeline';

export default function Node6() {
  const { t } = useTranslation();
  return (
    <Timeline
      title='Baccalauréat'
      leftSide
      postName={t('bloc2.bac.postName')}
      date='2014'
      margeTop={-52}
      description={
        <Stack lineHeight={1.2} spacing={4} maxW='container.sm'>
          <Text w='full' pl={10}>
            {t('bloc2.bac.text1')}
          </Text>
        </Stack>
      }
    />
  );
}
