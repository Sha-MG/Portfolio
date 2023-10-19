import { Center, Heading } from '@chakra-ui/react';

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <Center>
      <Heading as='h2' color='bloc1.title' px={10} pb={10}>
        {title}
      </Heading>
    </Center>
  );
}
