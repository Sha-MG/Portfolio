import { Center, Heading } from '@chakra-ui/react';

interface TitleProps {
  title: string;
  color: string;
}

export default function Title({ title, color }: TitleProps) {
  return (
    <Center>
      <Heading as='h2' color={color} textAlign='center'>
        {title}
      </Heading>
    </Center>
  );
}
