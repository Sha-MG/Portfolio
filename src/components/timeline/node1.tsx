import { useTranslation } from 'react-i18next';

import { Stack, Text } from '@chakra-ui/react';

import Timeline from './components/timeline';

export default function Node1() {
  const { t } = useTranslation();
  return (
    <Timeline
      first
      title='nockee'
      isWork
      postName={t('bloc2.nockee.postName')}
      date={t('bloc2.nockee.postDate')}
      margeTop={0}
      description={
        <Stack lineHeight={1.2} spacing={4}>
          <Text>{t('bloc2.nockee.text1')}</Text>
          <Text>{t('bloc2.nockee.text2')}</Text>
          <Text>{t('bloc2.nockee.text3')}</Text>
          <Text>{t('bloc2.nockee.text4')}</Text>
        </Stack>
      }
    />
  );
}
