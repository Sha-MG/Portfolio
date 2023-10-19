import { HiCake, HiEnvelopeOpen, HiMapPin } from 'react-icons/hi2';
import { IoMdCode } from 'react-icons/io';

import { Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react';

import Portait from './portrait';

export default function Resume() {
  return (
    <HStack spacing={20}>
      <Portait />
      <Stack>
        <Heading as='h1'>Morgane Gamory</Heading>
        <HStack>
          <Icon as={IoMdCode} boxSize={6} color='bloc1.icons' />
          <Text>Développeuse web front-end</Text>
        </HStack>
        <HStack>
          <Icon as={HiEnvelopeOpen} boxSize={6} color='bloc1.icons' />
          <Text>morgane.gamory@gmail.com</Text>
        </HStack>
        <HStack>
          <Icon as={HiCake} boxSize={6} color='bloc1.icons' />
          <Text>28 ans</Text>
        </HStack>
        <HStack>
          <Icon as={HiMapPin} boxSize={6} color='bloc1.icons' />
          <Text>Paris</Text>
        </HStack>
      </Stack>
    </HStack>
  );
}
