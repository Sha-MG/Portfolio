import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/pages';
import { Box, Center, Divider, Text } from '@chakra-ui/react';

interface DownloadButtonProps {
  color: string;
}

export default function DownloadButton({ color }: DownloadButtonProps) {
  const { activeColorTheme } = useTheme();

  const { t } = useTranslation();
  return (
    <Box position='relative' pt={20}>
      <Link
        href={
          activeColorTheme.id === 'forest'
            ? '/forest.pdf'
            : activeColorTheme.id === 'sea'
            ? '/sea.pdf'
            : '/space.pdf'
        }
        download='Morgane-Gamory-CV'
        target='_blank'
      >
        <Box
          py={2}
          px={4}
          borderWidth={3}
          borderColor={color}
          borderRadius='lg'
          transition={'all 0.2s ease-in-out'}
          _hover={{ transform: 'scale(1.1)', cursor: 'pointer' }}
        >
          <Text fontSize='xl'>{t('bloc1.download')}</Text>
        </Box>
      </Link>
      <Center>
        <Divider
          orientation='vertical'
          h='90px'
          w='3px'
          bg={color}
          opacity={1}
          border='none'
        />
      </Center>
    </Box>
  );
}
