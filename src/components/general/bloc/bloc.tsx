import { Box, Container } from '@chakra-ui/react';

import Navigation from './components/navigation';
import Title from './components/title';
import TopTransition from './components/top-transition';

interface BlocProps {
  topTransitionColor: string;
  currentBloc: number;
  children: React.ReactNode;
}

export default function Bloc({
  topTransitionColor,
  currentBloc,
  children,
}: BlocProps) {
  return (
    <Box w='full' position='relative'>
      <Container
        w={{ base: 'full', md: 'container.xl' }}
        flex={1}
        position='relative'
        px={{ base: 4, md: 0 }}
      >
        <TopTransition color={topTransitionColor} />
        <Title title='À propos de moi' />
        {children}
      </Container>
      <Navigation currentBloc={currentBloc} />
    </Box>
  );
}
