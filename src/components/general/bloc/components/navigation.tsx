import { Box, VStack } from '@chakra-ui/react';

import NavigationDot from './navigation-dot';

export default function Navigation() {
  return (
    <Box position='absolute' top={10} right={-10}>
      <VStack spacing={5}>
        <NavigationDot isActive={false} sectionTitle='Accueil' />
        <NavigationDot isActive={true} sectionTitle='À propos de moi' />
        <NavigationDot
          isActive={false}
          sectionTitle='Expériences & formations'
        />
        <NavigationDot isActive={false} sectionTitle='Technologies' />
        <NavigationDot isActive={false} sectionTitle='Projets' />
        <NavigationDot isActive={false} sectionTitle='Contact' />
      </VStack>
    </Box>
  );
}
