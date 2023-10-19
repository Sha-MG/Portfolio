import { Link } from '@chakra-ui/react';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function CustomLink({ href, children }: CustomLinkProps) {
  return (
    <Link
      href={href}
      isExternal
      color='link'
      fontWeight='bold'
      transition='all 0.2s'
      _hover={{ color: 'general.link' }}
    >
      {children}
    </Link>
  );
}
