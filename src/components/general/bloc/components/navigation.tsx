import { useTranslation } from 'react-i18next';

import useMobile from '@/hooks/useMobile';
import i18n from '@/theme/traduction';
import { Box, BoxProps, Center, Text, VStack } from '@chakra-ui/react';

import NavigationDot from './navigation-dot';

interface NavigationProps extends BoxProps {
  currentBloc: number;
  color?: string;
}

interface CircleProps extends BoxProps {
  active: boolean;
}

export default function Navigation({
  currentBloc,
  color,
  ...restProps
}: NavigationProps) {
  const isMobile = useMobile();

  const { t } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  const Circle = ({ active, children }: CircleProps) => {
    return (
      <Center
        w='20px'
        h='20px'
        borderRadius='full'
        color={
          active
            ? `bloc${currentBloc}.switchActiveColor`
            : `bloc${currentBloc}.switchInactiveColor`
        }
        bg={
          active
            ? `bloc${currentBloc}.switchActive`
            : `bloc${currentBloc}.switchInactive`
        }
        transition='all 0.3s ease-in-out'
        _hover={{ cursor: 'pointer' }}
      >
        {children}
      </Center>
    );
  };

  return (
    <VStack
      position='absolute'
      zIndex={50}
      top={20}
      {...(isMobile ? { left: 2 } : { right: 6 })}
      h='fit-content'
      w='fit-content'
      alignItems={{ base: 'flex-start', md: 'flex-end' }}
      spacing={12}
      {...restProps}
    >
      <Box
        onClick={toggleLanguage}
        display='flex'
        flexDirection='column'
        alignItems='center'
        borderRadius='full'
        bg={`bloc${currentBloc}.switchBg`}
        p={1}
        mr={{ base: 0, md: 2 }}
        ml={{ base: 1, md: 0 }}
      >
        <Circle active={i18n.language === 'fr'}>
          <Text fontSize='xs'>fr</Text>
        </Circle>
        <Circle active={i18n.language === 'en'}>
          <Text fontSize='xs'>en</Text>
        </Circle>
      </Box>
      <VStack
        spacing={{ base: 1, md: 5 }}
        alignItems='flex-end'
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
