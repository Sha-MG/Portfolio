import { Box, HStack, VStack } from '@chakra-ui/react';

import FeaturedIcon from '../general/icons/features/featured-icon';
import Git from '../general/icons/technologies/git';
import Gitlab from '../general/icons/technologies/gitlab';
import Notion from '../general/icons/technologies/notion';
import React from '../general/icons/technologies/react';
import Slack from '../general/icons/technologies/slack';

export default function Workflow() {
  return (
    <VStack flex={1}>
      <Box color='bloc3.smallTitle' fontSize='lg' mb={4}>
        Workflow
      </Box>
      <HStack justifyContent='space-between' wrap='wrap' w='full'>
        <FeaturedIcon icon={<Git />} name='Git' feature='Bubble' />
        <FeaturedIcon icon={<Slack />} name='Slack' feature='Lines' />
        <FeaturedIcon icon={<Notion />} name='Notion' feature='Dot' />
        <FeaturedIcon icon={<Gitlab />} name='Gitlab' feature='Sparkles' />
      </HStack>
    </VStack>
  );
}
