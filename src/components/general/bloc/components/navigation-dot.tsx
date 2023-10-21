import React from 'react';

import useMobile from '@/hooks/useMobile';
import { Box, Circle, HStack, Text } from '@chakra-ui/react';

interface NavigationDotProps {
  currentBloc: number;
  isActive: boolean;
  sectionTitle: string;
}

export default function NavigationDot({
  currentBloc,
  isActive,
  sectionTitle,
}: NavigationDotProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const isMobile = useMobile();

  return isActive ? (
    <Box position='relative' alignSelf={{ base: 'flex-start', md: 'flex-end' }}>
      <Circle
        borderWidth={1}
        borderColor={`bloc${currentBloc}.navigation`}
        size={6}
      />
      <Circle
        bg={`bloc${currentBloc}.activeNavigation`}
        size={2}
        position='absolute'
        top='2'
        left='2'
      />
    </Box>
  ) : (
    <HStack
      w='full'
      justifyContent={{ base: 'flex-start', md: 'flex-end' }}
      spacing={{ base: 2, md: 5 }}
    >
      {isMobile ? (
        <>
          <Circle
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            bg={`bloc${currentBloc}.navigation`}
            size={3}
            ml={1}
            transition='all 0.3s ease-in-out'
            _hover={{ transform: 'scale(0.7)', cursor: 'pointer' }}
          />
          <Text
            opacity={isHovered ? 1 : 0}
            transition='all 0.3s ease-in-out'
            _hover={{ cursor: 'default' }}
            fontSize='xs'
            textTransform='uppercase'
            color={`bloc${currentBloc}.text`}
          >
            {sectionTitle}
          </Text>
        </>
      ) : (
        <>
          <Text
            opacity={isHovered ? 1 : 0}
            transition='all 0.3s ease-in-out'
            _hover={{ cursor: 'default' }}
            fontSize='xs'
            textTransform='uppercase'
            color={`bloc${currentBloc}.text`}
          >
            {sectionTitle}
          </Text>
          <Circle
            mr={1}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            bg={`bloc${currentBloc}.navigation`}
            size={4}
            transition='all 0.3s ease-in-out'
            _hover={{ transform: 'scale(0.7)', cursor: 'pointer' }}
          />
        </>
      )}
    </HStack>
  );
}
