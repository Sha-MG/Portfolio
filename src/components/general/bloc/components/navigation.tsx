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
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import ForestIcon from '../../icons/forest-icon';
import SeaIcon from '../../icons/sea-icon';
import SpaceIcon from '../../icons/space-icon';
import NavigationDot from './navigation-dot';

interface NavigationProps extends BoxProps {
  currentBloc: number;
}

export default function Navigation({
  currentBloc,
  ...restProps
}: NavigationProps) {
  const isMobile = useMobile();
  const { changeTheme } = useTheme();
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Box
      position='absolute'
      zIndex={10}
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
            <HStack spacing={2} justifyContent='space-between'>
              <Box
                onClick={() => {
                  changeTheme(space);
                  onClose();
                }}
              >
                <SpaceIcon />
              </Box>
              <Box
                onClick={() => {
                  changeTheme(sea);
                  onClose();
                }}
              >
                <SeaIcon />
              </Box>
              <Box
                onClick={() => {
                  changeTheme(forest);
                  onClose();
                }}
              >
                <ForestIcon />
              </Box>
            </HStack>
          </MenuList>
        </Menu>
      </HStack>
      <VStack spacing={5} {...(isMobile ? { ml: 2 } : { mr: 2 })}>
        <NavigationDot
          currentBloc={currentBloc}
          isActive={currentBloc === 0 ? true : false}
          sectionTitle='Accueil'
        />
        <NavigationDot
          currentBloc={currentBloc}
          isActive={currentBloc === 1 ? true : false}
          sectionTitle='À propos de moi'
        />
        <NavigationDot
          currentBloc={currentBloc}
          isActive={currentBloc === 2 ? true : false}
          sectionTitle='Expériences & formations'
        />
        <NavigationDot
          currentBloc={currentBloc}
          isActive={currentBloc === 3 ? true : false}
          sectionTitle='Technologies'
        />
        <NavigationDot
          currentBloc={currentBloc}
          isActive={currentBloc === 4 ? true : false}
          sectionTitle='Projets'
        />
        <NavigationDot
          currentBloc={currentBloc}
          isActive={currentBloc === 5 ? true : false}
          sectionTitle='Contact'
        />
      </VStack>
    </Box>
  );
}
