import useMobile from '@/hooks/useMobile';
import { useTheme } from '@/pages';
import { Box } from '@chakra-ui/react';

import Navigation from '../general/bloc/components/navigation';
import Space from './space/space';

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
    <Box position='relative' w='full' h='500'>
      {activeColorTheme.id === 'space' && <Space />}
      <Navigation currentBloc={0} top={{ base: 150, md: 30 }} />
    </Box>
  );
}
