import { useTranslation } from 'react-i18next';

import { useTheme } from '@/pages';
import { Box, Tooltip } from '@chakra-ui/react';

export default function Movie() {
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
      label={t('bloc1.cinema')}
      bg='general.tooltip'
      aria-label={t('bloc1.cinema')}
      boxShadow={`3px 3px ${strokeColor}`}
      color={strokeColor}
      borderWidth={1}
      borderColor={strokeColor}
    >
      <Box _hover={{ transform: 'rotate(180deg) ' }} transition='all 0.5s'>
        <svg
          width='60'
          height='44'
          viewBox='0 0 60 44'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='1'
            y='1'
            width='58'
            height='42'
            rx='4'
            fill='#85CBF8'
            stroke={strokeColor}
            stroke-width='2'
          />
          <rect x='2' y='12' width='56' height='20' fill='#BBDEF9' />
          <line
            x1='8'
            y1='35'
            x2='8'
            y2='40'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='8'
            y1='4'
            x2='8'
            y2='9'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='13'
            y1='35'
            x2='13'
            y2='40'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='13'
            y1='4'
            x2='13'
            y2='9'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='18'
            y1='35'
            x2='18'
            y2='40'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='18'
            y1='4'
            x2='18'
            y2='9'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='23'
            y1='35'
            x2='23'
            y2='40'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='23'
            y1='4'
            x2='23'
            y2='9'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='28'
            y1='35'
            x2='28'
            y2='40'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='28'
            y1='4'
            x2='28'
            y2='9'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='33'
            y1='35'
            x2='33'
            y2='40'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='33'
            y1='4'
            x2='33'
            y2='9'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='38'
            y1='35'
            x2='38'
            y2='40'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='38'
            y1='4'
            x2='38'
            y2='9'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='43'
            y1='35'
            x2='43'
            y2='40'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='43'
            y1='4'
            x2='43'
            y2='9'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='48'
            y1='35'
            x2='48'
            y2='40'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='48'
            y1='4'
            x2='48'
            y2='9'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='53'
            y1='35'
            x2='53'
            y2='40'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='53'
            y1='4'
            x2='53'
            y2='9'
            stroke={strokeColor}
            stroke-width='2'
          />
          <path d='M13 12L2 23V12H13Z' fill='#DEF0FF' />
          <path d='M27.5 12L11 32H18.5L34.5 12H27.5Z' fill='#DEF0FF' />
          <path d='M37.5 12L22.5 32H25L40 12H37.5Z' fill='#DEF0FF' />
          <path d='M43 12L28.5 32H29.5L44 12H43Z' fill='#DEF0FF' />
          <path d='M58 12L44 32H58V12Z' fill='#DEF0FF' />
          <line
            x1='5'
            y1='12'
            x2='56'
            y2='12'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='4'
            y1='32'
            x2='56'
            y2='32'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='13'
            y1='13'
            x2='13'
            y2='32'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='49'
            y1='13'
            x2='49'
            y2='32'
            stroke={strokeColor}
            stroke-width='2'
          />
        </svg>
      </Box>
    </Tooltip>
  );
}
