import { Center, Heading } from '@chakra-ui/react';

interface TitleProps {
  title: string;
  color: string;
}

export default function Title({ title, color }: TitleProps) {
  return (
    <Center pt={4}>
      <Heading as='h2' color={color} px={10} pb={10} textAlign='center'>
        {title}
      </Heading>
    </Center>
  );
}
