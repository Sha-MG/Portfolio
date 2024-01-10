import { Box, Container, HStack } from '@chakra-ui/react';

import Navigation from './components/navigation';
import Title from './components/title';
import TopTransition from './components/top-transition';

interface BlocProps {
  topTransitionColor: string;
  currentBloc: number;
  title: string;
  bgColor?: string;
  noContainer?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export default function Bloc({
  topTransitionColor,
  currentBloc,
  title,
  bgColor,
  noContainer,
  leftIcon,
  rightIcon,
  children,
}: BlocProps) {
  const sectionId = `section-${currentBloc}`;

  return (
    <Box
      w='full'
      position='relative'
      background={bgColor ?? '#F7F7F7'}
      zIndex={10}
      id={sectionId}
    >
      {noContainer ? (
        <>
          <TopTransition color={topTransitionColor} />
          {leftIcon && rightIcon ? (
            <HStack w='full' justifyContent='center' spacing={4} mb={10}>
              <Box>{leftIcon}</Box>
              <Title title={title} color={`bloc${currentBloc}.title`} />
              <Box>{rightIcon}</Box>
            </HStack>
          ) : (
            <Title title={title} color={`bloc${currentBloc}.title`} />
          )}
          {children}
        </>
      ) : (
        <Container
          w={{ base: 'full', md: 'container.xl' }}
          flex={1}
          position='relative'
          px={{ base: 4, md: 0 }}
        >
          <TopTransition color={topTransitionColor} />
          {leftIcon && rightIcon ? (
            <HStack w='full' justifyContent='center'>
              <Box>{leftIcon}</Box>
              <Title title={title} color={`bloc${currentBloc}.title`} />
              <Box>{rightIcon}</Box>
            </HStack>
          ) : (
            <Title title={title} color={`bloc${currentBloc}.title`} />
          )}
          {children}
        </Container>
      )}
      <Navigation currentBloc={currentBloc} />
    </Box>
  );
}
