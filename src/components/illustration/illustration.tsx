import useMobile from '@/hooks/useMobile';
import { useTheme } from '@/pages';
import { Box, Center } from '@chakra-ui/react';

import Navigation from '../general/bloc/components/navigation';
import Forest from './forest/forest';
import Sea from './sea/sea';
import Space from './space/space';
import TransitionIllustrationBloc from './transition';
import TransitionIllustrationBlocMobile from './transition-mobile';

export default function Illustration() {
  const { activeColorTheme } = useTheme();
  const isMobile = useMobile();

  // const [scrolling, setScrolling] = useState(false);
  // const [scrollTop, setScrollTop] = useState(0);

  // const parallaxController = useParallaxController();

  // useEffect(() => {
  //   const onScroll = (e: any) => {
  //     setScrollTop(e.target.documentElement.scrollTop);
  //     setScrolling(e.target.documentElement.scrollTop > scrollTop);
  //   };
  //   window.addEventListener('scroll', onScroll);

  //   parallaxController?.update();
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, [scrollTop]);

  return (
    <Box position='relative' w='full' h={{ 'base': '500', '2xl': '700' }}>
      {activeColorTheme.id === 'space' ? (
        <Space />
      ) : activeColorTheme.id === 'sea' ? (
        <Sea />
      ) : (
        <Forest />
      )}
      <Navigation
        currentBloc={0}
        top={{ base: 150, md: 30 }}
        {...(activeColorTheme.id === 'forest' && { color: '#F0DC73' })}
      />
      <Center w='full' position='absolute' bottom='0' zIndex={10}>
        {isMobile ? (
          <TransitionIllustrationBlocMobile
            color={activeColorTheme.id === 'forest' ? '#F0DC73' : '#F7F7F7'}
          />
        ) : (
          <TransitionIllustrationBloc
            color={activeColorTheme.id === 'forest' ? '#F0DC73' : '#F7F7F7'}
          />
        )}
      </Center>
    </Box>
  );
}
