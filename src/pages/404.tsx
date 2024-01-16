import { Box, Center, Link, Text, VStack } from '@chakra-ui/react';

export default function Page404() {
  return (
    <Center h='100vh' bg='#666BA2'>
      <VStack spacing={6}>
        <Text fontSize='50px' fontWeight='extrabold' color='#F7F7F7'>
          Perdu dans l'espace
        </Text>
        <Box h={2} w={250} bg='#C283A8' alignSelf='baseline' />
        <Text alignSelf='baseline' color='#F7F7F7'>
          Oups... La page que vous cherchez n'existe pas.
        </Text>
        <Text alignSelf='baseline' color='#F7F7F7'>
          Revenez sur{' '}
          <Link
            href='https://morgane-gamory.vercel.app/'
            textDecoration='underline'
          >
            une planète habitée.
          </Link>
        </Text>
      </VStack>
    </Center>
  );
}
