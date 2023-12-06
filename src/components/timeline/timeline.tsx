import { useEffect, useRef, useState } from 'react';

import useTablet from '@/hooks/useTablet';
import { useTheme } from '@/pages';
import { Box, Center } from '@chakra-ui/react';

import Bloc from '../general/bloc/bloc';
import Node1 from './node1';
import Node2 from './node2';
import Node3 from './node3';
import Node4 from './node4';
import Node5 from './node5';
import Node6 from './node6';

export default function Timeline() {
  const { activeColorTheme } = useTheme();
  const strokeColor =
    activeColorTheme.id === 'space'
      ? '#C283A8'
      : activeColorTheme.id === 'sea'
      ? '#4B7A85'
      : '#F0C273';

  const [timelineHeight, setTimelineHeight] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ref.current?.offsetHeight && setTimelineHeight(ref.current?.offsetHeight);
  }, [ref.current]);

  const isTablet = useTablet();
  return (
    <Bloc
      topTransitionColor='#F7F7F7'
      currentBloc={2}
      title='Expériences & Formations'
      bgColor={activeColorTheme.id === 'space' ? '#F1C9C1' : 'bloc2.bgColor'}
      noContainer
    >
      <Box>
        <Box w='full' pt={20} position='relative' ref={ref}>
          {!isTablet && (
            <Center w='full' position='absolute' top={28} h={timelineHeight}>
              <Box w={1} height={timelineHeight} bg={strokeColor} />
            </Center>
          )}
          <Node1 />
          <Node2 />
          <Node3 />
          <Node4 />
          <Node5 />
          <Node6 />
        </Box>
        <Center mt={{ base: '10', lg: 0 }}>
          <Box w={{ base: '1.5', lg: '1' }} h={24} bg={strokeColor} />
        </Center>
      </Box>
    </Bloc>
  );
}
