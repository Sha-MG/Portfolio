import { useTheme } from '@/pages';
import { Box, Tooltip } from '@chakra-ui/react';

export default function Twitch() {
  const { activeColorTheme } = useTheme();
  const strokeColor =
    activeColorTheme?.id === 'sea'
      ? '#4B7A85'
      : activeColorTheme?.id === 'forest'
      ? '#455647'
      : '#666BA2';

  return (
    <Tooltip
      label='Twitch'
      bg='general.tooltip'
      aria-label='Twitch'
      boxShadow={`3px 3px ${strokeColor}`}
      color={strokeColor}
      borderWidth={1}
      borderColor={strokeColor}
    >
      <Box _hover={{ transform: 'rotate(-20deg) ' }} transition='all 0.2s'>
        <svg
          width='56'
          height='53'
          viewBox='0 0 56 53'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.25095 1.22333L1.37009 7.6151C1.13597 7.80497 1 8.09033 1 8.39176V44.5169C1 45.0692 1.44771 45.5169 2 45.5169H15.6316C16.1839 45.5169 16.6316 45.9647 16.6316 46.5169V51C16.6316 51.5523 17.0793 52 17.6316 52H24.205C24.508 52 24.7946 51.8626 24.9844 51.6265L29.5945 45.8905C29.7843 45.6543 30.071 45.5169 30.374 45.5169H38.9895C39.2337 45.5169 39.4694 45.4277 39.6522 45.2659L54.6626 31.9849C54.8772 31.7951 55 31.5224 55 31.236V2C55 1.44772 54.5523 1 54 1H9.88086C9.65149 1 9.42909 1.07885 9.25095 1.22333Z'
            fill='#A2A2EA'
            stroke={strokeColor}
            stroke-width='2'
          />
          <path
            d='M10 35.5976V9C10 8.44772 10.4477 8 11 8H45C45.5523 8 46 8.44772 46 9V28.0549C46 28.3311 45.8858 28.595 45.6844 28.7841L37.6486 36.3267C37.4632 36.5007 37.2185 36.5976 36.9642 36.5976H27.7208C27.44 36.5976 27.1721 36.7156 26.9826 36.9229L21.3381 43.0984C20.7224 43.7721 19.6 43.3364 19.6 42.4237V37.5976C19.6 37.0453 19.1523 36.5976 18.6 36.5976H11C10.4477 36.5976 10 36.1498 10 35.5976Z'
            fill='#FFF7F0'
            stroke={strokeColor}
            stroke-width='2'
          />
          <path
            d='M19 28V18C19 17.4477 19.4477 17 20 17H24.1579C24.7102 17 25.1579 17.4477 25.1579 18V28C25.1579 28.5523 24.7102 29 24.1579 29H20C19.4477 29 19 28.5523 19 28Z'
            fill='#A2A2EA'
          />
          <path
            d='M30.7694 28.0787L29.9799 18.0787C29.934 17.4972 30.3935 17 30.9768 17H36C36.5523 17 37 17.4477 37 18V28C37 28.5523 36.5523 29 36 29H31.7663C31.2445 29 30.8104 28.5988 30.7694 28.0787Z'
            fill='#A2A2EA'
          />
          <path
            d='M19 28V18C19 17.4477 19.4477 17 20 17H24.1579C24.7102 17 25.1579 17.4477 25.1579 18V28C25.1579 28.5523 24.7102 29 24.1579 29H20C19.4477 29 19 28.5523 19 28Z'
            stroke={strokeColor}
            stroke-width='2'
          />
          <path
            d='M30.7694 28.0787L29.9799 18.0787C29.934 17.4972 30.3935 17 30.9768 17H36C36.5523 17 37 17.4477 37 18V28C37 28.5523 36.5523 29 36 29H31.7663C31.2445 29 30.8104 28.5988 30.7694 28.0787Z'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='3'
            y1='42'
            x2='6'
            y2='42'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='3'
            y1='37'
            x2='6'
            y2='37'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='3'
            y1='32'
            x2='6'
            y2='32'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='3'
            y1='27'
            x2='6'
            y2='27'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='3'
            y1='22'
            x2='6'
            y2='22'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='3'
            y1='17'
            x2='6'
            y2='17'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='3'
            y1='12'
            x2='6'
            y2='12'
            stroke={strokeColor}
            stroke-width='2'
          />
          <line
            x1='3'
            y1='7'
            x2='6'
            y2='7'
            stroke={strokeColor}
            stroke-width='2'
          />
        </svg>
      </Box>
    </Tooltip>
  );
}
