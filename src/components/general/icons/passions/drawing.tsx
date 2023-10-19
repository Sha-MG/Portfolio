import { useTheme } from '@/pages';
import { Box, Tooltip } from '@chakra-ui/react';

export default function Drawing() {
  const { activeColorTheme } = useTheme();
  const strokeColor =
    activeColorTheme?.id === 'sea'
      ? '#4B7A85'
      : activeColorTheme?.id === 'forest'
      ? '#455647'
      : '#666BA2';

  return (
    <Tooltip
      label='Le dessin'
      bg='general.tooltip'
      aria-label='Le dessin'
      boxShadow={`3px 3px ${strokeColor}`}
      color={strokeColor}
      borderWidth={1}
      borderColor={strokeColor}
    >
      <Box _hover={{ transform: 'rotate(-20deg) ' }} transition='all 0.2s'>
        <svg
          width='63'
          height='59'
          viewBox='0 0 63 59'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2.97297 43.2059L2 56H17.0811L20 41L2.97297 43.2059Z'
            fill='#FAEFDE'
            stroke={strokeColor}
            stroke-width='2'
          />
          <path
            d='M37 9L4 42H11.5V47.5H18V55L50 22L37 9Z'
            fill='#F9E3AE'
            stroke={strokeColor}
            stroke-width='2'
          />
          <rect
            x='32.4139'
            y='8.64013'
            width='10'
            height='25.3513'
            rx='4'
            transform='rotate(-46.2714 32.4139 8.64013)'
            fill='#E3A591'
            stroke={strokeColor}
            stroke-width='2'
          />
          <path d='M2 50.5V56H7.5L2 50.5Z' fill={strokeColor} />
          <path
            d='M11.5 42L19.5 34M18 48L21.5 44.5'
            stroke={strokeColor}
            stroke-width='2'
          />
          <path
            d='M37 9.5L40.5 6.5M39.8571 12.5L43.2857 9.5M42.7143 15.5L46.1429 12.5M46.1429 18.5L49.5714 15.5M49.5714 21.5L52.5 18.5'
            stroke={strokeColor}
            stroke-width='2'
          />
          <path
            d='M42.3301 51.8291C39.2914 49.93 38.1163 43.9732 37.8628 40.8086C37.8384 40.5045 37.963 40.211 38.191 40.0083L46.4696 32.6495C46.6974 32.4471 47.003 32.3579 47.3021 32.4166C51.2888 33.1988 58.7931 35.7182 60.3301 40.3291C61.6828 44.3873 61.2247 51.8289 60.6479 56.5501C60.5419 57.4181 59.4473 57.7087 58.8951 57.0306C57.5363 55.3615 55.7292 53.2283 54.3301 51.8291C51.8301 49.3291 46.3301 54.3291 42.3301 51.8291Z'
            fill='#F9E3AE'
            stroke={strokeColor}
            stroke-width='2'
          />
          <path
            d='M33.3303 37.8291L8.33032 6.8291C6.73032 0.829103 11.3303 1.66244 13.8303 2.8291L44.8303 27.8291L33.3303 37.8291Z'
            fill='#C4939C'
            stroke={strokeColor}
            stroke-width='2'
          />
          <rect
            x='-1.41387'
            y='-0.0313787'
            width='10'
            height='21.4637'
            rx='4'
            transform='matrix(-0.691243 -0.722622 -0.722622 0.691243 48.8361 28.6401)'
            fill='#E3A591'
            stroke={strokeColor}
            stroke-width='2'
          />
          <rect
            x='-1.41387'
            y='-0.0313787'
            width='3.66581'
            height='19.1029'
            rx='1.83291'
            transform='matrix(-0.691243 -0.722622 -0.722622 0.691243 50.6232 32.0875)'
            fill='#E3A591'
            stroke={strokeColor}
            stroke-width='2'
          />
          <path
            d='M43.8154 31.4243L41.3154 28.9243M40.3154 34.4243L37.8154 31.9243M37.3154 38.4243L34.3154 35.4243'
            stroke={strokeColor}
            stroke-width='2'
          />
          <path
            d='M44.5 40L47 46M46 38L49.5 40'
            stroke={strokeColor}
            stroke-width='2'
          />
        </svg>
      </Box>
    </Tooltip>
  );
}
