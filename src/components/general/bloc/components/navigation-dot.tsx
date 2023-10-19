import React from 'react';

import { Box, Circle, HStack, Text } from '@chakra-ui/react';

interface NavigationDotProps {
  isActive: boolean;
  sectionTitle: string;
}

export default function NavigationDot({
  isActive,
  sectionTitle,
}: NavigationDotProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return isActive ? (
    <Box position='relative' alignSelf='flex-end'>
      <Circle borderWidth={1} borderColor='bloc1.navigation' size={6} />
      <Circle
        bg='bloc1.activeNavigation'
        size={2}
        position='absolute'
        top='2'
        left='2'
      />
    </Box>
  ) : (
    <HStack w='full' justifyContent='flex-end' spacing={5} pr={1}>
      <Text
        color='primary.900'
        opacity={isHovered ? 1 : 0}
        transition='all 0.3s ease-in-out'
        _hover={{ cursor: 'default' }}
      >
        {sectionTitle}
      </Text>
      <Circle
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        bg='bloc1.navigation'
        size={4}
        transition='all 0.3s ease-in-out'
        _hover={{ transform: 'scale(0.6)', cursor: 'pointer' }}
      />
    </HStack>
  );
}
