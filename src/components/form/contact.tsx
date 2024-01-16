import React, { useState } from 'react';

import { useTheme } from '@/pages';
import {
  Box,
  Button,
  Center,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';

import Bloc from '../general/bloc/bloc';
import FeaturedIcon from '../general/icons/features/featured-icon';
import MushroomIcon from '../general/icons/forest/mushroom';
import BeachIcon from '../general/icons/sea/beach';
import PlanetIcon from '../general/icons/space/planet';
import RocketIcon from '../general/icons/space/rocket';
import LinkIcon from '../general/icons/technologies/link';
import Logo from '../illustration/logo';

export const Contact = () => {
  const { activeColorTheme } = useTheme();
  const strokeColor =
    activeColorTheme.id === 'space'
      ? '#E39EAC'
      : activeColorTheme.id === 'sea'
      ? '#E3A591'
      : '#F0DC73';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState('');

  const sendEmail = (e: any) => {
    e.preventDefault();

    const serviceId = 'service_4todyd8';
    const templateId = 'template_n8s9z3h';
    const publicKey = 'bDToH1gbhkS8mi6Lr';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Morgane',
      message: message,
    };
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (result) => {
        console.log(result.text);
        setName(' ');
        setEmail(' ');
        setMessage(' ');
        setNotification('Votre message a bien été envoyé !');
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <Bloc
      title='Contact'
      currentBloc={5}
      topTransitionColor={strokeColor}
      noContainer
      bgColor='bloc5.bgColor'
      leftIcon={
        activeColorTheme.id === 'space' ? (
          <Box transform='rotate(-45deg)'>
            <PlanetIcon color={strokeColor} />
          </Box>
        ) : activeColorTheme.id === 'sea' ? (
          <Box transform='scaleX(-1)'>
            <BeachIcon color={strokeColor} />
          </Box>
        ) : (
          <MushroomIcon color={strokeColor} />
        )
      }
      rightIcon={
        activeColorTheme.id === 'space' ? (
          <Box transform='rotate(-45deg)'>
            <RocketIcon color={strokeColor} />
          </Box>
        ) : activeColorTheme.id === 'sea' ? (
          <BeachIcon color={strokeColor} />
        ) : (
          <MushroomIcon color={strokeColor} />
        )
      }
    >
      <Center>
        <Stack spacing={8} w='full' color='#F7F7F7'>
          <Center>
            <Link
              href='https://www.linkedin.com/in/morgane-gamory/'
              target='_blank'
            >
              <Stack>
                <Center>
                  <LinkIcon />
                </Center>
                <Text fontSize='xs'>Linkedin</Text>
              </Stack>
            </Link>
          </Center>
          {notification && (
            <Text color='green.100' fontSize='large' fontWeight='extrabold'>
              {notification}
            </Text>
          )}
          <VStack w='container.xs' alignSelf='center' spacing={0}>
            <FormLabel
              color={
                activeColorTheme.id === 'forest' ? 'primary.400' : 'primary.600'
              }
            >
              Nom
            </FormLabel>
            <Input
              focusBorderColor='primary.400'
              bg='rgba(255, 255, 255, 0.2)'
              border='none'
              type='text'
              name='name'
              onChange={(e) => setName(e.target.value)}
            />
          </VStack>
          <VStack w='container.xs' alignSelf='center' spacing={0}>
            <FormLabel
              color={
                activeColorTheme.id === 'forest' ? 'primary.400' : 'primary.600'
              }
            >
              Email
            </FormLabel>
            <Input
              focusBorderColor='primary.400'
              bg='rgba(255, 255, 255, 0.2)'
              border='none'
              type='email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </VStack>
          <VStack w='container.sm' alignSelf='center' spacing={0}>
            <FormLabel
              color={
                activeColorTheme.id === 'forest' ? 'primary.400' : 'primary.600'
              }
            >
              Message
            </FormLabel>
            <Textarea
              w={{ base: 'container.xs', md: 'container.sm' }}
              focusBorderColor='primary.400'
              bg='rgba(255, 255, 255, 0.2)'
              border='none'
              name='message'
              onChange={(e) => setMessage(e.target.value)}
            />
          </VStack>
          <VStack>
            <Button
              type='submit'
              onClick={sendEmail}
              bg={
                activeColorTheme.id === 'forest' ? 'primary.400' : 'primary.600'
              }
            >
              Envoyer
            </Button>
          </VStack>
          <Text fontSize='sm' w='full' textAlign='center' py={8}>
            J'ai créé le design, les illustrations et le développement de ce
            portfolio avec ❤️
          </Text>
        </Stack>
      </Center>
    </Bloc>
  );
};
