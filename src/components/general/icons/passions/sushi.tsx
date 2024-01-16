import { useTranslation } from 'react-i18next';

import { useTheme } from '@/pages';
import { Box, Tooltip } from '@chakra-ui/react';

export default function Sushi() {
  const { activeColorTheme } = useTheme();
  const strokeColor =
    activeColorTheme?.id === 'sea'
      ? '#4B7A85'
      : activeColorTheme?.id === 'forest'
      ? '#455647'
      : '#666BA2';

  const { t } = useTranslation();
  return (
    <Tooltip
      label={t('bloc1.cuisine')}
      bg='general.tooltip'
      aria-label={t('bloc1.cuisine')}
      boxShadow={`3px 3px ${strokeColor}`}
      color={strokeColor}
      borderWidth={1}
      borderColor={strokeColor}
    >
      <Box _hover={{ transform: 'rotate(20deg) ' }} transition='all 0.2s'>
        <svg
          width='67'
          height='30'
          viewBox='0 0 67 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M12 11L64 12V6L12 6.66667V11Z' fill='#EFC88E' />
          <path
            d='M66 13L13.3796 11.5901C12.0552 11.5546 11 10.4707 11 9.14582V9.14582C11 7.80961 12.0726 6.72086 13.4087 6.70095L60.4495 6M63.4771 6H66'
            stroke={strokeColor}
            stroke-width='2'
          />
          <path
            d='M1 22.8615V7C1 5.34315 2.34315 4 4 4H15.5H26C27.6569 4 29 5.34314 29 7V22.756C29 23.9679 28.2716 25.0603 27.1381 25.4892C24.2594 26.5785 18.7245 28.5 15.5 28.5C10.7825 28.5 5.42813 26.6009 2.73809 25.5084C1.6651 25.0726 1 24.0196 1 22.8615Z'
            fill='#8A8E99'
            stroke={strokeColor}
            stroke-width='2'
          />
          <path
            d='M29 6.5C29 7.06323 28.7408 7.68083 28.1056 8.3316C27.4659 8.98696 26.4914 9.62292 25.209 10.1786C22.6474 11.2887 19.0387 12 15 12C10.9613 12 7.35263 11.2887 4.79101 10.1786C3.50857 9.62292 2.53407 8.98696 1.89439 8.3316C1.25919 7.68083 1 7.06323 1 6.5C1 5.93677 1.25919 5.31917 1.89439 4.6684C2.53407 4.01304 3.50857 3.37708 4.79101 2.82136C7.35263 1.71133 10.9613 1 15 1C19.0387 1 22.6474 1.71133 25.209 2.82136C26.4914 3.37708 27.4659 4.01304 28.1056 4.6684C28.7408 5.31917 29 5.93677 29 6.5Z'
            fill='#F7F7F7'
            stroke={strokeColor}
            stroke-width='2'
          />
          <path d='M12 17.3333L64 16V24L12 23.1111V17.3333Z' fill='#EFC88E' />
          <path
            d='M66 16L13.717 17.601C12.2032 17.6474 11 18.8879 11 20.4025V20.4025C11 21.9318 12.2259 23.1788 13.755 23.2048L60.4495 24M63.4771 24H66'
            stroke={strokeColor}
            stroke-width='2'
          />
          <path
            d='M19.25 6.5C19.25 6.7154 19.0237 7.15547 18.0787 7.58499C17.2015 7.98374 15.9369 8.25 14.5 8.25C13.0631 8.25 11.7985 7.98374 10.9213 7.58499C9.97632 7.15547 9.75 6.7154 9.75 6.5C9.75 6.2846 9.97632 5.84453 10.9213 5.41501C11.7985 5.01626 13.0631 4.75 14.5 4.75C15.9369 4.75 17.2015 5.01626 18.0787 5.41501C19.0237 5.84453 19.25 6.2846 19.25 6.5Z'
            fill='#E3A591'
            stroke={strokeColor}
            stroke-width='1.5'
          />
        </svg>
      </Box>
    </Tooltip>
  );
}
