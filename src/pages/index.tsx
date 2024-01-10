import '@fontsource/berkshire-swash';
import '@fontsource/montserrat';

import { createContext, useContext, useEffect, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import AboutMe from '@/components/about/about-me';
import { Contact } from '@/components/form/contact';
import Illustration from '@/components/illustration/illustration';
import Projects from '@/components/projects/projects';
import Technologies from '@/components/technologies/technologies';
import Timeline from '@/components/timeline/timeline';
import theme from '@/theme';
import forest from '@/theme/ColorTheme/forest';
import sea from '@/theme/ColorTheme/sea';
import space, { AppTheme } from '@/theme/ColorTheme/space';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';

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
        <ParallaxProvider>
          <Box bg='general.white' color='general.black' flex={1}>
            <Illustration />
            <AboutMe />
            <Timeline />
            <Technologies />
            <Projects />
            <Contact />
          </Box>
        </ParallaxProvider>
      </ThemeContext.Provider>
    </ChakraProvider>
  );
}

const ThemeContext = createContext<any>(space);

export const useTheme = (): any => {
  return useContext(ThemeContext);
};
