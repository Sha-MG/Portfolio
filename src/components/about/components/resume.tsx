import { useTranslation } from 'react-i18next';
import { HiCake, HiEnvelopeOpen, HiMapPin } from 'react-icons/hi2';
import { IoMdCode } from 'react-icons/io';

import { Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react';

import Portait from './portrait';

export default function Resume() {
  const { t } = useTranslation();

  return (
    <Stack
      spacing={{ base: 5, lg: 20 }}
      alignItems='center'
      w='full'
      direction={{ base: 'column', lg: 'row' }}
    >
      <Portait />
      <Stack>
        <Heading as='h1' textAlign={{ base: 'center', lg: 'left' }}>
          Morgane Gamory
        </Heading>
        <HStack>
          <Icon as={IoMdCode} boxSize={6} color='bloc1.icons' />
          <Text>{t('bloc1.dev')}</Text>
        </HStack>
        <HStack>
          <Icon as={HiEnvelopeOpen} boxSize={6} color='bloc1.icons' />
          <Text>morgane.gamory@gmail.com</Text>
        </HStack>
        <HStack>
          <Icon as={HiCake} boxSize={6} color='bloc1.icons' />
          <Text>{t('bloc1.years')}</Text>
        </HStack>
        <HStack>
          <Icon as={HiMapPin} boxSize={6} color='bloc1.icons' />
          <Text>Paris</Text>
        </HStack>
      </Stack>
    </Stack>
  );
}
