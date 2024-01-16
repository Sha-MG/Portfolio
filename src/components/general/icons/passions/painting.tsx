import { useTranslation } from 'react-i18next';

import { useTheme } from '@/pages';
import { Box, Tooltip } from '@chakra-ui/react';

export default function Painting() {
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
      label={t('bloc1.peinture')}
      bg='general.tooltip'
      aria-label={t('bloc1.peinture')}
      boxShadow={`3px 3px ${strokeColor}`}
      color={strokeColor}
      borderWidth={1}
      borderColor={strokeColor}
    >
      <Box _hover={{ transform: 'rotate(180deg)' }} transition='all 0.5s'>
        <svg
          width='59'
          height='59'
          viewBox='0 0 59 59'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <mask id='path-1-inside-1_96_8786' fill='white'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M58.9528 31.1823C58.5772 37.8645 50.8246 38.3119 44.5536 35.9737C41.9321 34.9962 39.5866 35.1123 37.7149 36.7015C34.9483 39.0506 34.6568 42.0361 35.9149 45.4777C38.1107 51.4844 36.9704 58.7508 30.5791 58.9806C30.221 58.9935 29.8613 59 29.5 59C13.2076 59 0 45.7924 0 29.5C0 13.2076 13.2076 0 29.5 0C45.7924 0 59 13.2076 59 29.5C59 30.0646 58.9841 30.6255 58.9528 31.1823ZM26 53C28.2091 53 30 51.2091 30 49C30 46.7909 28.2091 45 26 45C23.7909 45 22 46.7909 22 49C22 51.2091 23.7909 53 26 53Z'
            />
          </mask>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M58.9528 31.1823C58.5772 37.8645 50.8246 38.3119 44.5536 35.9737C41.9321 34.9962 39.5866 35.1123 37.7149 36.7015C34.9483 39.0506 34.6568 42.0361 35.9149 45.4777C38.1107 51.4844 36.9704 58.7508 30.5791 58.9806C30.221 58.9935 29.8613 59 29.5 59C13.2076 59 0 45.7924 0 29.5C0 13.2076 13.2076 0 29.5 0C45.7924 0 59 13.2076 59 29.5C59 30.0646 58.9841 30.6255 58.9528 31.1823ZM26 53C28.2091 53 30 51.2091 30 49C30 46.7909 28.2091 45 26 45C23.7909 45 22 46.7909 22 49C22 51.2091 23.7909 53 26 53Z'
            fill='#FAEFDE'
          />
          <path
            d='M44.5536 35.9737L43.8549 37.8477V37.8477L44.5536 35.9737ZM58.9528 31.1823L60.9497 31.2946L58.9528 31.1823ZM37.7149 36.7015L36.4204 35.177L37.7149 36.7015ZM35.9149 45.4777L34.0365 46.1644L35.9149 45.4777ZM30.5791 58.9806L30.5073 56.9819H30.5073L30.5791 58.9806ZM43.8549 37.8477C47.2192 39.1021 51.1455 39.6824 54.4243 38.907C56.0892 38.5132 57.6793 37.7455 58.8919 36.4398C60.1242 35.1126 60.8329 33.3723 60.9497 31.2946L56.956 31.0701C56.885 32.3334 56.4836 33.1548 55.9608 33.7179C55.4181 34.3023 54.6078 34.7532 53.5037 35.0143C51.2445 35.5486 48.159 35.1835 45.2524 34.0997L43.8549 37.8477ZM39.0094 38.2261C40.1497 37.2579 41.6585 37.0287 43.8549 37.8477L45.2524 34.0997C42.2058 32.9637 39.0236 32.9666 36.4204 35.177L39.0094 38.2261ZM37.7933 44.791C37.2394 43.2758 37.095 42.041 37.2747 41.0301C37.4464 40.0646 37.9428 39.1318 39.0094 38.2261L36.4204 35.177C34.7204 36.6204 33.6877 38.3548 33.3365 40.3298C32.9934 42.2593 33.3323 44.238 34.0365 46.1644L37.7933 44.791ZM30.651 60.9793C32.6458 60.9076 34.3517 60.2743 35.6964 59.1566C37.0248 58.0524 37.8826 56.5749 38.3765 54.9908C39.3501 51.8685 38.9983 48.0873 37.7933 44.791L34.0365 46.1644C35.0273 48.8747 35.2033 51.7301 34.5579 53.8001C34.2423 54.8123 33.7539 55.5698 33.1395 56.0805C32.5415 56.5776 31.7081 56.9387 30.5073 56.9819L30.651 60.9793ZM29.5 61C29.8852 61 30.2689 60.9931 30.651 60.9793L30.5073 56.9819C30.1731 56.9939 29.8373 57 29.5 57V61ZM-2 29.5C-2 46.897 12.103 61 29.5 61V57C14.3122 57 2 44.6878 2 29.5H-2ZM29.5 -2C12.103 -2 -2 12.103 -2 29.5H2C2 14.3122 14.3122 2 29.5 2V-2ZM61 29.5C61 12.103 46.897 -2 29.5 -2V2C44.6878 2 57 14.3122 57 29.5H61ZM60.9497 31.2946C60.9831 30.7004 61 30.1021 61 29.5H57C57 30.0272 56.9852 30.5506 56.956 31.0701L60.9497 31.2946ZM28 49C28 50.1046 27.1046 51 26 51V55C29.3137 55 32 52.3137 32 49H28ZM26 47C27.1046 47 28 47.8954 28 49H32C32 45.6863 29.3137 43 26 43V47ZM24 49C24 47.8954 24.8954 47 26 47V43C22.6863 43 20 45.6863 20 49H24ZM26 51C24.8954 51 24 50.1046 24 49H20C20 52.3137 22.6863 55 26 55V51Z'
            fill={strokeColor}
            mask='url(#path-1-inside-1_96_8786)'
          />
          <circle
            cx='13'
            cy='34'
            r='5'
            fill='#E3A591'
            stroke={strokeColor}
            stroke-width='2'
          />
          <circle
            cx='18'
            cy='17'
            r='5'
            fill='#E3A591'
            stroke={strokeColor}
            stroke-width='2'
          />
          <circle
            cx='35'
            cy='12'
            r='5'
            fill='#E39EAC'
            stroke={strokeColor}
            stroke-width='2'
          />
          <circle
            cx='47'
            cy='25'
            r='5'
            fill='#F1C9C1'
            stroke={strokeColor}
            stroke-width='2'
          />
          <path
            d='M27 37.4999L29.5 33.9999M23 30.9782L27.5 30.4782M23.5 24.9999L28 26.4999M29.5 22.9999C32.5 21 37 22.4999 38 26.4998M38.5 28.5L39 30.4782'
            stroke={strokeColor}
            stroke-width='2'
          />
        </svg>
      </Box>
    </Tooltip>
  );
}
