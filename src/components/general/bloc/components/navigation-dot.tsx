import React from 'react';

import useMobile from '@/hooks/useMobile';
import { Box, Circle, HStack, Text } from '@chakra-ui/react';

interface NavigationDotProps {
  currentBloc: number;
  isActive: boolean;
  sectionTitle: string;
  section: number;
  color?: string;
}

export default function NavigationDot({
  currentBloc,
  isActive,
  sectionTitle,
  section,
  color,
}: NavigationDotProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const isMobile = useMobile();

  const handleClick = () => {
    section === 0
      ? window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      : window.scrollTo({
          top: document.getElementById(`section-${section}`)?.offsetTop,
          behavior: 'smooth',
        });
  };

  return isActive ? (
    <Box
      position='relative'
      alignSelf={{ base: 'flex-start', md: 'flex-end' }}
      pb={{ base: 3, md: 0 }}
    >
      <Circle
        borderWidth={1}
        borderColor={color ?? `bloc${currentBloc}.navigation`}
        size={6}
      />
      <Circle
        bg={color ?? `bloc${currentBloc}.activeNavigation`}
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
        <Box>
          <Circle
            onClick={handleClick}
            bg={color ?? `bloc${currentBloc}.navigation`}
            size={3}
            ml={1}
            transition='all 0.3s ease-in-out'
            _hover={{ transform: 'scale(0.9)', cursor: 'pointer' }}
          />
          <Text
            opacity={isHovered ? 1 : 0}
            transition='all 0.3s ease-in-out'
            _hover={{ cursor: 'default' }}
            fontSize='xs'
            textTransform='uppercase'
            color={color ?? `bloc${currentBloc}.text`}
          >
            {sectionTitle}
          </Text>
        </Box>
      ) : (
        <>
          <Text
            opacity={isHovered ? 1 : 0}
            transition='all 0.3s ease-in-out'
            _hover={{ cursor: 'default' }}
            fontSize='xs'
            textTransform='uppercase'
            color={color ?? `bloc${currentBloc}.text`}
          >
            {sectionTitle}
          </Text>
          <Circle
            mr={1}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            bg={color ?? `bloc${currentBloc}.navigation`}
            size={4}
            transition='all 0.3s ease-in-out'
            _hover={{ transform: 'scale(0.9)', cursor: 'pointer' }}
          />
        </>
      )}
    </HStack>
  );
}
