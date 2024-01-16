import { t } from 'i18next';

import CustomLink from '@/components/general/link';
import { Text, VStack } from '@chakra-ui/react';

export default function Presentation() {
  return (
    <VStack w={{ base: 'full', lg: 'container.md' }}>
      <Text>{t('bloc1.resume1')}</Text>
      <Text textAlign='justify'>
        {t('bloc1.resume2')}
        <CustomLink href='https://www.nockee.fr/'> nockee</CustomLink>
        {t('bloc1.resume3')}
        <CustomLink href='https://stationf.co/'>Station F</CustomLink>
        {t('bloc1.resume4')}
      </Text>
    </VStack>
  );
}
