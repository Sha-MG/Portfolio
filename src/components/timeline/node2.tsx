import { useTranslation } from 'react-i18next';

import { Stack, Text } from '@chakra-ui/react';

import Timeline from './components/timeline';

export default function Node2() {
  const { t } = useTranslation();
  return (
    <Timeline
      title="O'clock"
      leftSide
      postName={t('bloc2.oclock.postName')}
      date={t('bloc2.oclock.postDate')}
      margeTop={{ base: -56, xl: -40 }}
      description={
        <Stack lineHeight={1.2} spacing={4}>
          <Text>{t('bloc2.oclock.text1')}</Text>
          <Text>{t('bloc2.oclock.text2')}</Text>
          <Text>{t('bloc2.oclock.text3')}</Text>
          <Text>{t('bloc2.oclock.text4')}</Text>
        </Stack>
      }
    />
  );
}
