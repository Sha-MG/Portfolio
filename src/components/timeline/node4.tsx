import { useTranslation } from 'react-i18next';

import { Stack, Text } from '@chakra-ui/react';

import Timeline from './components/timeline';

export default function Node4() {
  const { t } = useTranslation();
  return (
    <Timeline
      title={t('bloc2.psycho.title')}
      leftSide
      postName={t('bloc2.psycho.postName')}
      date='2018 - 2020'
      margeTop={-24}
      description={
        <Stack lineHeight={1.2} spacing={4}>
          <Text>{t('bloc2.psycho.text1')}</Text>
        </Stack>
      }
    />
  );
}
