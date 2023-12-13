import { Box, HStack, VStack } from '@chakra-ui/react';

import FeaturedIcon from '../general/icons/features/featured-icon';
import AfterEffect from '../general/icons/technologies/after-effect';
import Figma from '../general/icons/technologies/figma';
import Git from '../general/icons/technologies/git';
import Gitlab from '../general/icons/technologies/gitlab';
import Illustrator from '../general/icons/technologies/illustrator';
import Notion from '../general/icons/technologies/notion';
import Photoshop from '../general/icons/technologies/photoshop';
import React from '../general/icons/technologies/react';
import Slack from '../general/icons/technologies/slack';

export default function Design() {
  return (
    <VStack flex={1}>
      <Box color='bloc3.smallTitle' fontSize='lg' mb={4}>
        Design
      </Box>
      <HStack justifyContent='space-between' wrap='wrap' w='full'>
        <FeaturedIcon icon={<Figma />} name='Figma' feature='Bubble' />
        <FeaturedIcon icon={<Photoshop />} name='Photoshop' feature='Lines' />
        <FeaturedIcon icon={<Illustrator />} name='Illustrator' feature='Dot' />
        <FeaturedIcon
          icon={<AfterEffect />}
          name='After Effect'
          feature='Sparkles'
        />
      </HStack>
    </VStack>
  );
}
