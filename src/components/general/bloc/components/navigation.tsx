import useMobile from '@/hooks/useMobile';
import { BoxProps, VStack } from '@chakra-ui/react';

import NavigationDot from './navigation-dot';

interface NavigationProps extends BoxProps {
  currentBloc: number;
  color?: string;
}

export default function Navigation({
  currentBloc,
  color,
  ...restProps
}: NavigationProps) {
  const isMobile = useMobile();

  return (
    <VStack
      position='absolute'
      zIndex={50}
      top={20}
      {...(isMobile ? { left: 2 } : { right: 6 })}
      h='fit-content'
      w='fit-content'
      alignItems='flex-end'
      spacing={10}
      {...restProps}
    >
      <VStack
        spacing={{ base: 1, md: 5 }}
        pr={2}
        {...(isMobile ? { ml: 2 } : { mr: 2 })}
      >
        <NavigationDot
          currentBloc={currentBloc}
          isActive={currentBloc === 0 ? true : false}
          sectionTitle='Accueil'
          section={0}
        />
        <NavigationDot
          currentBloc={currentBloc}
          isActive={currentBloc === 1 ? true : false}
          sectionTitle='À propos de moi'
          section={1}
        />
        <NavigationDot
          currentBloc={currentBloc}
          isActive={currentBloc === 2 ? true : false}
          sectionTitle='Expériences & formations'
          section={2}
        />
        <NavigationDot
          currentBloc={currentBloc}
          isActive={currentBloc === 3 ? true : false}
          sectionTitle='Technologies'
          section={3}
        />
        <NavigationDot
          currentBloc={currentBloc}
          isActive={currentBloc === 4 ? true : false}
          sectionTitle='Projets'
          section={4}
        />
        <NavigationDot
          currentBloc={currentBloc}
          isActive={currentBloc === 5 ? true : false}
          sectionTitle='Contact'
          section={5}
        />
      </VStack>
    </VStack>
  );
}
