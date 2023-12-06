import { Box, Container } from '@chakra-ui/react';

import Navigation from './components/navigation';
import Title from './components/title';
import TopTransition from './components/top-transition';

interface BlocProps {
  topTransitionColor: string;
  currentBloc: number;
  title: string;
  bgColor?: string;
  noContainer?: boolean;
  children: React.ReactNode;
}

export default function Bloc({
  topTransitionColor,
  currentBloc,
  title,
  bgColor,
  noContainer,
  children,
}: BlocProps) {
  return (
    <Box
      w='full'
      position='relative'
      background={bgColor ?? '#F7F7F7'}
      zIndex={10}
    >
      {noContainer ? (
        <>
          <TopTransition color={topTransitionColor} />
          <Title title={title} color={`bloc${currentBloc}.title`} />
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
          <Title title={title} color={`bloc${currentBloc}.title`} />
          {children}
        </Container>
      )}
      <Navigation currentBloc={currentBloc} />
    </Box>
  );
}
