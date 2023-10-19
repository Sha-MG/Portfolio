import '@fontsource/berkshire-swash';
import '@fontsource/montserrat';

import { createContext, useContext, useEffect, useState } from 'react';

import AboutMe from '@/components/about/about-me';
import theme from '@/theme';
import forest from '@/theme/ColorTheme/forest';
import sea from '@/theme/ColorTheme/sea';
import space, { AppTheme } from '@/theme/ColorTheme/space';
import {
  Box,
  Button,
  ChakraProvider,
  extendTheme,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  VStack,
} from '@chakra-ui/react';

export default function App() {
  const colorThemes = [space, sea, forest];

  const [activeColorTheme, activateColorTheme] = useState<AppTheme>(space);
  const mergedTheme = extendTheme(theme, { colors: activeColorTheme.colors });

  const changeTheme = (theme: any) => {
    activateColorTheme(theme);
    localStorage.setItem('appColorTheme', theme.id);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = colorThemes.find(
        (item) => localStorage.getItem('appColorTheme') === item.id
      );

      storedTheme && activateColorTheme(storedTheme);
    }
  }, []);

  return (
    <ChakraProvider theme={mergedTheme}>
      <ThemeContext.Provider value={{ activeColorTheme, changeTheme }}>
        <Box bg='general.white' color='general.black' flex={1}>
          <Box h='50vh' position='fixed' left={5} top={5}>
            <Popover>
              <PopoverTrigger>
                <Button size='sm' color='headerBg.title'>
                  Change Theme
                </Button>
              </PopoverTrigger>
              <PopoverContent w='150px'>
                <PopoverArrow />
                <PopoverBody>
                  <VStack>
                    {colorThemes.map((colorTheme) => (
                      <Button
                        variant='link'
                        key={colorTheme.id}
                        onClick={() => changeTheme(colorTheme)}
                      >
                        {colorTheme.name}
                      </Button>
                    ))}
                  </VStack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
          <AboutMe />
          <Box h='300vh'></Box>
        </Box>
      </ThemeContext.Provider>
    </ChakraProvider>
  );
}

const ThemeContext = createContext<any>(space);

export const useTheme = (): any => {
  return useContext(ThemeContext);
};
