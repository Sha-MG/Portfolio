import Link from 'next/link';

import FeaturedIcon from '@/components/general/icons/features/featured-icon';
import Chakra from '@/components/general/icons/technologies/chakra';
import Figma from '@/components/general/icons/technologies/figma';
import Git from '@/components/general/icons/technologies/git';
import Gitlab from '@/components/general/icons/technologies/gitlab';
import GooglePlayIcon from '@/components/general/icons/technologies/google-play';
import LinkIcon from '@/components/general/icons/technologies/link';
import Next from '@/components/general/icons/technologies/next';
import Notion from '@/components/general/icons/technologies/notion';
import React from '@/components/general/icons/technologies/react';
import Slack from '@/components/general/icons/technologies/slack';
import Typescript from '@/components/general/icons/technologies/typescript';
import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Heading,
  HStack,
  ResponsiveValue,
  Stack,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

interface ProjectProps {
  title: string;
  content: React.ReactNode;
  mainColor: string;
  link?: string;
  googlePlayLink?: string;
  technologies: string[];
  smallImage?: string;
  bigImage?: ResponsiveValue<string | (string & {})> | undefined;
  bgColor?: string;
  bottomBorder?: React.ReactNode;
}

export default function Project({
  title,
  content,
  mainColor,
  link,
  googlePlayLink,
  technologies,
  smallImage,
  bigImage,
  bgColor,
  bottomBorder,
}: ProjectProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack w='200px' onClick={onOpen} _hover={{ cursor: 'pointer' }}>
        <Box
          h='200px'
          w='200px'
          bgColor={bgColor}
          bgImage={`url(${smallImage})`}
          bgPosition='center'
          bgRepeat='no-repeat'
          bgSize='contain'
        />
        <Center fontSize='lg' fontWeight='bold' color='#F7F7F7'>
          {title}
        </Center>
      </Stack>
      <Drawer onClose={onClose} isOpen={isOpen} size='full'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton zIndex={3} color='general.black' />
          <DrawerBody p={0} bg='#F7F7F7' color='general.black'>
            <Stack
              alignItems='flex-start'
              direction={{ base: 'column', md: 'row' }}
            >
              <Box
                minH={{ base: '20vh', md: '100vh' }}
                minW={{ base: '100%', md: '30vw' }}
                position='relative'
              >
                <Box
                  position={{ base: 'initial', md: 'fixed' }}
                  minH={{ base: '20vh', md: '100vh' }}
                  minW={{ base: '100%', md: '30vw' }}
                  bgImage={bigImage}
                  bgSize='cover'
                  borderRight={{ base: 'none', md: '1px solid' }}
                  borderBottom={{ base: '1px solid', md: 'none' }}
                  borderRightColor={mainColor}
                />
              </Box>
              <Stack p={{ base: 8, md: 10 }} spacing={10}>
                <Heading as='h3' size='2xl' color={mainColor}>
                  {title}
                </Heading>
                <Stack
                  spacing={12}
                  overflow='scroll'
                  alignItems='flex-start'
                  direction={{ base: 'column', lg: 'row' }}
                >
                  {content}
                  <Stack>
                    {link ||
                      (googlePlayLink && (
                        <Stack spacing={6}>
                          <Center>
                            <Heading as='h4' fontSize='lg' color={mainColor}>
                              Liens
                            </Heading>
                          </Center>
                          <HStack spacing={8} justifyContent='center'>
                            {link && (
                              <Link href={link} target='_blank'>
                                <FeaturedIcon
                                  icon={<LinkIcon />}
                                  name='Site'
                                  feature='Dot'
                                  textColor={mainColor}
                                  small
                                />
                              </Link>
                            )}
                            {googlePlayLink && (
                              <Link href={googlePlayLink} target='_blank'>
                                <FeaturedIcon
                                  icon={<GooglePlayIcon />}
                                  name='GooglePlay'
                                  feature='Sparkles'
                                  textColor={mainColor}
                                  small
                                ></FeaturedIcon>
                              </Link>
                            )}
                          </HStack>
                        </Stack>
                      ))}
                    <Stack spacing={6}>
                      <Center>
                        <Heading as='h4' fontSize='lg' color={mainColor}>
                          Technologies
                        </Heading>
                      </Center>
                      <Wrap
                        spacing={4}
                        justify={{ base: 'center', lg: 'space-between' }}
                      >
                        {technologies.map((technology) => (
                          <WrapItem transform='scale(0.8)' key={technology}>
                            {getTechnology(technology, mainColor)}
                          </WrapItem>
                        ))}
                      </Wrap>
                    </Stack>
                  </Stack>
                </Stack>
                {bottomBorder}
              </Stack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const getTechnology = (technology: string, mainColor: string) => {
  switch (technology) {
    case 'React':
      return <React />;
    case 'TypeScript':
      return <Typescript />;
    case 'Next.js':
      return <Next />;
    case 'Chakra UI':
      return <Chakra />;
    case 'Git':
      return <Git />;
    case 'GitLab':
      return <Gitlab />;
    case 'React Native':
      return <React />;
    case 'Figma':
      return <Figma />;
    case 'Notion':
      return <Notion />;
    case 'Slack':
      return <Slack />;
    default:
      return <React />;
  }
};
