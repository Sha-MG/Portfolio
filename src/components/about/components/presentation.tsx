import CustomLink from '@/components/general/link';
import { Text, VStack } from '@chakra-ui/react';

export default function Presentation() {
  return (
    <VStack w={{ base: 'full', lg: 'container.md' }}>
      <Text>Salut, moi c’est Morgane, </Text>
      <Text textAlign='justify'>
        Une développeuse web & mobile avec un parcours riche et une soif
        insatiable de connaissances. Je jongle avec le design et le
        développement web, en cherchant à susciter des émotions, créer du beau,
        et interagir avec le monde. Je suis une amoureuse de l'apprentissage,
        une vraie curieuse, et chaque défi est une occasion de me surpasser. La
        créativité coule dans mes veines, et l'art fait partie intégrante de ma
        vie. Récemment, j'ai fait un stage chez{' '}
        <CustomLink href='https://www.nockee.fr/'>nockee</CustomLink>, une
        startup innovante à{' '}
        <CustomLink href='https://stationf.co/'>Station F</CustomLink>, qui a
        confirmé ma passion pour le développement web et mon intérêt pour
        l'univers très stimulant des startups.
      </Text>
    </VStack>
  );
}
