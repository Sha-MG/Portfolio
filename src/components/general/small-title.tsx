import { Text } from '@chakra-ui/react';

interface SmallTitleProps {
  title: string;
}

export default function SmallTitle({ title }: SmallTitleProps) {
  return (
    <Text
      as='h3'
      color='bloc1.smallTitle'
      py={5}
      textTransform='uppercase'
      fontWeight='bold'
      fontSize='lg'
    >
      {title}
    </Text>
  );
}
