import { HiOutlineAcademicCap, HiOutlineBriefcase } from 'react-icons/hi2';

import useTablet from '@/hooks/useTablet';
import { useTheme } from '@/pages';
import {
  Avatar,
  Box,
  Circle,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

interface TimelineProps {
  title: string;
  postName: string;
  date: string;
  description: JSX.Element | string;
  margeTop: number | ResponsiveValue<number>;
  isWork?: boolean;
  leftSide?: boolean;
  first?: boolean;
}

type ResponsiveValue<T> = T | { [key: string]: T };

export default function Timeline({
  title,
  postName,
  date,
  description,
  isWork,
  leftSide,
  margeTop,
  first,
}: TimelineProps) {
  const { activeColorTheme } = useTheme();

  const strokeColor =
    activeColorTheme.id === 'space'
      ? '#C283A8'
      : activeColorTheme.id === 'sea'
      ? '#4B7A85'
      : '#F0C273';

  const iconColor =
    activeColorTheme.id === 'space' ? '#F1C9C1' : 'bloc2.bgColor';

  const isTablet = useTablet();

  return isTablet ? (
    <VStack bg={iconColor} py={2} spacing={4}>
      <VStack spacing={1}>
        {!first && <Box w='1.5' h={6} bg={strokeColor} my={2} />}
        <Avatar
          size='lg'
          icon={
            <Icon
              as={isWork ? HiOutlineBriefcase : HiOutlineAcademicCap}
              boxSize={10}
              color={strokeColor}
            />
          }
          borderWidth={5}
          borderColor={strokeColor}
          bg={iconColor}
        />
        <Box w='1.5' h={6} bg={strokeColor} my={2} />
      </VStack>
      <Box
        p={3}
        borderRadius='full'
        bg={strokeColor}
        w='fit-content'
        color='#F7F7F7'
        fontWeight='bold'
      >
        <Text>{title}</Text>
      </Box>
      <Text fontWeight='bold'>{postName}</Text>
      <Text
        textTransform='capitalize'
        color={strokeColor}
        fontWeight='bold'
        fontSize='sm'
      >
        {date}
      </Text>
      <Box textAlign='center' whiteSpace='pre-line' px={5} fontSize='sm'>
        {description}
      </Box>
    </VStack>
  ) : leftSide ? (
    <Stack w='full' alignItems='flex-start' position='relative'>
      <HStack
        w='50vw'
        ml={8}
        alignItems='flex-start'
        spacing={4}
        position='absolute'
        top={margeTop}
        justifyContent='flex-end'
      >
        <Stack spacing={4} alignItems='flex-end' pt={4}>
          <Box
            p={3}
            borderRadius='full'
            bg={strokeColor}
            w='fit-content'
            color='#F7F7F7'
            fontWeight='bold'
          >
            <Text>{title}</Text>
          </Box>
          <Text fontWeight='bold'>{postName}</Text>
          <Text
            textTransform='capitalize'
            color={strokeColor}
            fontWeight='bold'
            fontSize='sm'
          >
            {date}
          </Text>
          <Box
            pl={20}
            textAlign={{ 'base': 'justify', '2xl': 'right' }}
            whiteSpace='pre-line'
            flex={1}
          >
            {description}
          </Box>
        </Stack>
        <Box pt={8}>
          <Circle bg={strokeColor} size='3' />
        </Box>
        <VStack bg={iconColor} justifyItems='flex-end' py={2}>
          <Avatar
            size='lg'
            icon={
              <Icon
                as={isWork ? HiOutlineBriefcase : HiOutlineAcademicCap}
                boxSize={10}
                color={strokeColor}
              />
            }
            borderWidth={5}
            borderColor={strokeColor}
            bg={iconColor}
          />
        </VStack>
      </HStack>
    </Stack>
  ) : (
    <Stack w='full' alignItems='flex-end' mt={margeTop}>
      <HStack w='50vw' mr={8} alignItems='flex-start' spacing={4}>
        <VStack bg={iconColor} py={2} zIndex={2}>
          <Avatar
            size='lg'
            icon={
              <Icon
                as={isWork ? HiOutlineBriefcase : HiOutlineAcademicCap}
                boxSize={10}
                color={strokeColor}
              />
            }
            borderWidth={5}
            borderColor={strokeColor}
            bg={iconColor}
          />
        </VStack>
        <Box pt={12}>
          <Circle bg={strokeColor} size='3' />
        </Box>
        <Stack spacing={4} pt={8}>
          <Box
            p={3}
            borderRadius='full'
            bg={strokeColor}
            w='fit-content'
            color='#F7F7F7'
            fontWeight='bold'
          >
            <Text>{title}</Text>
          </Box>
          <Text fontWeight='bold'>{postName}</Text>
          <Text
            textTransform='capitalize'
            color={strokeColor}
            fontWeight='bold'
            fontSize='sm'
          >
            {date}
          </Text>
          <Box pr={20} textAlign='justify' whiteSpace='pre-line'>
            {description}
          </Box>
        </Stack>
      </HStack>
    </Stack>
  );
}
