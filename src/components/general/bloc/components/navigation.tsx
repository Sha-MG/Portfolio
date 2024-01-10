import { CgMenu } from 'react-icons/cg';

import useMobile from '@/hooks/useMobile';
import { useTheme } from '@/pages';
import forest from '@/theme/ColorTheme/forest';
import sea from '@/theme/ColorTheme/sea';
import space from '@/theme/ColorTheme/space';
import {
  Box,
  BoxProps,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import ForestIcon from '../../icons/forest-icon';
import SeaIcon from '../../icons/sea-icon';
import SpaceIcon from '../../icons/space-icon';
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
  const { changeTheme } = useTheme();
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Box
      position='absolute'
      zIndex={50}
      top={20}
      {...(isMobile ? { left: 2 } : { right: 6 })}
      h='fit-content'
      w='fit-content'
      {...restProps}
    >
      <HStack justifyContent={isMobile ? 'flex-start' : 'flex-end'} mb={5}>
        <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<Icon as={CgMenu} boxSize={6} />}
            variant='ghost'
            color={`bloc${currentBloc}.menu`}
          />
          <MenuList p={4} bgColor='primary.50'>
            <VStack spacing={4} justifyContent='space-between'>
              <Text pb={4} fontWeight='bold'>
                Changer de thème
              </Text>
              <HStack justifyContent='space-between' w='full' px={12}>
                <Box
                  onClick={() => {
                    changeTheme(space);
                    onClose();
                  }}
                >
                  <SpaceIcon />
                </Box>
                <Text>L'espace</Text>
              </HStack>
              <HStack justifyContent='space-between' w='full' px={12}>
                <Box
                  onClick={() => {
                    changeTheme(sea);
                    onClose();
                  }}
                >
                  <SeaIcon />
                </Box>
                <Text>L'océan</Text>
              </HStack>
              <HStack justifyContent='space-between' w='full' px={12}>
                <Box
                  onClick={() => {
                    changeTheme(forest);
                    onClose();
                  }}
                >
                  <ForestIcon />
                </Box>
                <Text>La forêt</Text>
              </HStack>
            </VStack>
          </MenuList>
        </Menu>
      </HStack>
      <VStack
        spacing={{ base: 1, md: 5 }}
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
    </Box>
  );
}
