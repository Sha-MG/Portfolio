import { useTranslation } from 'react-i18next';

import { useTheme } from '@/pages';
import { Box, Tooltip } from '@chakra-ui/react';

export default function Dés() {
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
      label={t('bloc1.jeuxSoc')}
      bg='general.tooltip'
      aria-label={t('bloc1.jeuxSoc')}
      boxShadow={`3px 3px ${strokeColor}`}
      color={strokeColor}
      borderWidth={1}
      borderColor={strokeColor}
    >
      <Box _hover={{ transform: 'scale(1.2) ' }} transition='all 0.2s'>
        <svg
          width='49'
          height='52'
          viewBox='0 0 49 52'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.2071 1.29289L3.65597 7.84403C3.03339 8.46661 3.46109 9.53176 4.34134 9.5509L45.6043 10.4479C46.4924 10.4672 46.9629 9.40532 46.352 8.76041L39.2958 1.31226C39.107 1.11291 38.8445 1 38.5699 1H10.9142C10.649 1 10.3946 1.10536 10.2071 1.29289Z'
            fill='#FFF7F0'
            stroke={strokeColor}
            stroke-width='2'
          />
          <rect
            x='1'
            y='8'
            width='47'
            height='43'
            rx='4'
            fill='#FAEFDE'
            stroke={strokeColor}
            stroke-width='2'
          />
          <circle
            cx='10.5'
            cy='36.5'
            r='3.5'
            fill='#E3A591'
            stroke={strokeColor}
            stroke-width='2'
          />
          <circle
            cx='25.5'
            cy='27.5'
            r='3.5'
            fill='#E3A591'
            stroke={strokeColor}
            stroke-width='2'
          />
          <circle
            cx='39.5'
            cy='17.5'
            r='3.5'
            fill='#E3A591'
            stroke={strokeColor}
            stroke-width='2'
          />
          <path
            d='M2 45H47V47C47 48.6569 45.6569 50 44 50H5C3.34315 50 2 48.6569 2 47V45Z'
            fill='#EFD8BE'
          />
          <line
            x1='43'
            y1='43'
            x2='43'
            y2='47'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='37'
            y1='43'
            x2='37'
            y2='47'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='31'
            y1='43'
            x2='31'
            y2='47'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='25'
            y1='43'
            x2='25'
            y2='47'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='19'
            y1='43'
            x2='19'
            y2='47'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='13'
            y1='43'
            x2='13'
            y2='47'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='7'
            y1='43'
            x2='7'
            y2='47'
            stroke={strokeColor}
            stroke-width='2'
          />
        </svg>
      </Box>
    </Tooltip>
  );
}
