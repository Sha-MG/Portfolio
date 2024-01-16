import { t } from 'i18next';

import { Box, Stack, Text } from '@chakra-ui/react';

import Timeline from './components/timeline';

export default function Node5() {
  return (
    <Timeline
      title={t('bloc2.arts.title')}
      postName='L2 Techniques Graphiques'
      date='2015 - 2017'
      margeTop={20}
      description={
        <Stack lineHeight={1.2} spacing={4}>
          <Text>{t('bloc2.arts.text1')}</Text>
          <Text>{t('bloc2.arts.text2')}</Text>
          <Text>{t('bloc2.arts.text3')}</Text>
          <Text>{t('bloc2.arts.text4')}</Text>
          <Text>{t('bloc2.arts.text5')}</Text>
          <Box h={35} />
        </Stack>
      }
    />
  );
}
