import { useTranslation } from 'react-i18next';

import { Stack, Text } from '@chakra-ui/react';

import Timeline from './components/timeline';

export default function Node3() {
  const { t } = useTranslation();
  return (
    <Timeline
      title='Duoloriages'
      postName={t('bloc2.duoloriages.postName')}
      date={t('bloc2.duoloriages.postDate')}
      margeTop={20}
      isWork
      description={
        <Stack lineHeight={1.2} spacing={4}>
          <Text>{t('bloc2.duoloriages.text1')}</Text>
          <Text>{t('bloc2.duoloriages.text2')}</Text>
        </Stack>
      }
    />
  );
}
