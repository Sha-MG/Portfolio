import { Box, HStack, VStack } from '@chakra-ui/react';

import FeaturedIcon from '../general/icons/features/featured-icon';
import Chakra from '../general/icons/technologies/chakra';
import CSS from '../general/icons/technologies/css';
import HTML from '../general/icons/technologies/html';
import JavaScript from '../general/icons/technologies/javascript';
import Next from '../general/icons/technologies/next';
import React from '../general/icons/technologies/react';
import Typescript from '../general/icons/technologies/typescript';

export default function FrontEnd() {
  return (
    <VStack w='full'>
      <Box color='bloc3.smallTitle' fontSize='lg' mb={4}>
        FrontEnd
      </Box>
      <HStack
        spacing={{ base: 1, md: 10 }}
        wrap='wrap'
        w='full'
        justifyContent='space-between'
      >
        <FeaturedIcon
          icon={<JavaScript />}
          name='Javascript'
          feature='Bubble'
        />
        <FeaturedIcon icon={<Typescript />} name='Typescript' feature='Dot' />
        <FeaturedIcon icon={<React />} name='React' feature='Lines' />
        <FeaturedIcon icon={<Next />} name='Next.js' feature='Special' />
        <FeaturedIcon icon={<Chakra />} name='ChakraUi' feature='Sparkles' />
        <FeaturedIcon icon={<HTML />} name='HTML' feature='Dot' />
        <FeaturedIcon icon={<CSS />} name='CSS' feature='Lines' />
      </HStack>
    </VStack>
  );
}
