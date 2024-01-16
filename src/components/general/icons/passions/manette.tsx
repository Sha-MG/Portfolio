import { useTranslation } from 'react-i18next';

import { useTheme } from '@/pages';
import { Box, Tooltip } from '@chakra-ui/react';

export default function Manette() {
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
      label={t('bloc1.jeux')}
      bg='general.tooltip'
      aria-label={t('bloc1.jeux')}
      boxShadow={`3px 3px ${strokeColor}`}
      color={strokeColor}
      borderWidth={1}
      borderColor={strokeColor}
    >
      <Box _hover={{ transform: 'rotate(-20deg) ' }} transition='all 0.2s'>
        <svg
          width='64'
          height='71'
          viewBox='0 0 64 71'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='17'
            y='25'
            width='33'
            height='9'
            fill='#8B8E98'
            stroke={strokeColor}
            stroke-width='2'
          />
          <path
            d='M33.6983 32.5826H30.4101C28.4224 32.5826 26.6318 31.3997 25.6299 29.683C23.884 26.6914 20.7771 22.4146 17.1377 22.0826C10.9364 21.5171 8.5206 23.8548 5.13757 29.0826C0.393394 36.4139 0.912277 45.8532 1.13767 54.5826C1.29095 60.5193 2.78221 71.1852 9.63767 69.5826C14.1147 68.5361 17.0091 62.4591 18.4785 58.3684C19.2633 56.1838 21.2787 54.5826 23.6 54.5826H39.2865C41.7811 54.5826 43.8976 56.4299 44.6478 58.8091C45.9294 62.8728 48.6498 68.5478 54 69.5826C62.5 71.2267 64.5 36.5826 60.5 29.0826C57.4999 23.4574 55.0116 21.9541 48.6377 22.0826C44.3887 22.1684 40.35 27.0278 38.2137 30.1051C37.179 31.5956 35.5127 32.5826 33.6983 32.5826Z'
            fill='#C2CDE7'
            stroke={strokeColor}
            stroke-width='2'
          />
          <circle cx='48.5' cy='34.5' r='2.5' fill={strokeColor} />
          <circle cx='48.5' cy='44.5' r='2.5' fill={strokeColor} />
          <circle cx='43.5' cy='39.5' r='2.5' fill={strokeColor} />
          <circle cx='53.5' cy='39.5' r='2.5' fill={strokeColor} />
          <line
            x1='25'
            y1='45'
            x2='39'
            y2='45'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='23'
            y1='48'
            x2='23'
            y2='52'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='29'
            y1='48'
            x2='29'
            y2='52'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='35'
            y1='48'
            x2='35'
            y2='52'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='41'
            y1='48'
            x2='41'
            y2='52'
            stroke={strokeColor}
            stroke-width='2'
          />
          <path
            d='M12.5 34V37.5C12.5 38.0523 12.0523 38.5 11.5 38.5H8C7.44772 38.5 7 38.9477 7 39.5V41C7 41.5523 7.44772 42 8 42H11.5C12.0523 42 12.5 42.4477 12.5 43V46C12.5 46.5523 12.9477 47 13.5 47H15C15.5523 47 16 46.5523 16 46V43C16 42.4477 16.4477 42 17 42H20C20.5523 42 21 41.5523 21 41V39.5C21 38.9477 20.5523 38.5 20 38.5H17C16.4477 38.5 16 38.0523 16 37.5V34C16 33.4477 15.5523 33 15 33H13.5C12.9477 33 12.5 33.4477 12.5 34Z'
            fill='#E3A591'
            stroke={strokeColor}
            stroke-width='2'
          />
          <path
            d='M32.5 24.5C32.5001 16.5 32.5 13 44 13C53.8954 13 54.5 11.5 54.5 0.5'
            stroke={strokeColor}
            stroke-width='2'
          />
        </svg>
      </Box>
    </Tooltip>
  );
}
