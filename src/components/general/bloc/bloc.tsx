import { Container } from '@chakra-ui/react';

import Navigation from './components/navigation';
import Title from './components/title';
import TopTransition from './components/top-transition';

interface BlocProps {
  topTransitionColor: string;
  children: React.ReactNode;
}

export default function Bloc({ topTransitionColor, children }: BlocProps) {
  return (
    <Container minW='container.xl' flex={1} position='relative'>
      <Navigation />
      <TopTransition color={topTransitionColor} />
      <Title title='À propos de moi' />
      {children}
    </Container>
  );
}
