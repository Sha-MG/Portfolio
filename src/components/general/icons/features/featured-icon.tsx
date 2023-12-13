import { Box, Center, Stack } from '@chakra-ui/react';

import BubbleFeature from './bubble-feature';
import DotFeature from './dot-feature';
import LinesFeature from './lines-feature';
import SparklesFeature from './sparkles-feature';
import SpecialFeature from './special-feature';

interface FeaturedIconProps {
  icon: JSX.Element;
  name: string;
  feature: 'Dot' | 'Bubble' | 'Sparkles' | 'Lines' | 'Special';
  textColor?: string;
  small?: boolean;
}

export default function FeaturedIcon({
  icon,
  name,
  feature,
  textColor,
  small,
}: FeaturedIconProps) {
  return (
    <Stack role='group' spacing={4} {...(small && { transform: 'scale(0.8)' })}>
      <Center position='relative'>
        <Box
          position='absolute'
          top={
            feature === 'Bubble'
              ? '-3'
              : feature === 'Sparkles' || feature === 'Lines'
              ? '-2'
              : feature === 'Special'
              ? '-1'
              : '-4'
          }
          opacity={0}
          _hover={{
            opacity: 1,
            transform:
              feature === 'Bubble' || feature === 'Special'
                ? 'rotate(180deg)'
                : feature === 'Sparkles'
                ? 'scale(1.1)'
                : feature === 'Lines'
                ? 'scale(1.3)'
                : 'rotate(90deg)',
          }}
          transition='all 0.2s'
        >
          {feature === 'Bubble' ? (
            <BubbleFeature />
          ) : feature === 'Dot' ? (
            <DotFeature />
          ) : feature === 'Sparkles' ? (
            <SparklesFeature />
          ) : feature === 'Special' ? (
            <SpecialFeature />
          ) : (
            <LinesFeature />
          )}
        </Box>
        {icon}
      </Center>
      <Center
        color={textColor ?? 'bloc3.smallTitle'}
        opacity={0}
        transition='all 0.5s'
        _groupHover={{ opacity: 1 }}
        fontSize='sm'
        {...(small && { pt: 3 })}
      >
        {name}
      </Center>
    </Stack>
  );
}
