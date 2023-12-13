import { useTheme } from '@/pages';

export default function Slack() {
  const { activeColorTheme } = useTheme();
  const strokeColor =
    activeColorTheme?.id === 'sea'
      ? '#4B7A85'
      : activeColorTheme?.id === 'forest'
      ? '#455647'
      : '#666BA2';

  return (
    <svg
      width='51'
      height='51'
      viewBox='0 0 51 51'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17.1905 27.7144H23.2857V46.9524C23.2857 48.6356 21.9213 50.0001 20.2381 50.0001C18.555 50.0001 17.1905 48.6356 17.1905 46.9524V27.7144Z'
        fill='#CA797E'
        stroke={strokeColor}
        stroke-width='2'
      />
      <path
        d='M23.2857 17.1904V23.2857L4.04761 23.2857C2.36446 23.2857 0.99999 21.9212 0.99999 20.238C0.99999 18.5549 2.36446 17.1904 4.04761 17.1904L23.2857 17.1904Z'
        fill='#BBDEF9'
        stroke={strokeColor}
        stroke-width='2'
      />
      <path
        d='M33.8095 23.2856H27.7143V4.04755C27.7143 2.3644 29.0787 0.999929 30.7619 0.999929C32.445 0.999929 33.8095 2.3644 33.8095 4.04755V23.2856Z'
        fill='#74C795'
        stroke={strokeColor}
        stroke-width='2'
      />
      <path
        d='M27.7143 33.8096V27.7143H46.9524C48.6355 27.7143 50 29.0788 50 30.762C50 32.4451 48.6355 33.8096 46.9524 33.8096H27.7143Z'
        fill='#F6D397'
        stroke={strokeColor}
        stroke-width='2'
      />
      <path
        d='M5.85712 27.7144H11.9524V34.8096C11.9524 36.4927 10.5879 37.8572 8.90474 37.8572C7.22158 37.8572 5.85712 36.4927 5.85712 34.8096V27.7144Z'
        fill='#CA797E'
        stroke={strokeColor}
        stroke-width='2'
      />
      <path
        d='M23.2857 6.66675V12.762H16.1905C14.5073 12.762 13.1428 11.3975 13.1428 9.71437C13.1428 8.03121 14.5073 6.66675 16.1905 6.66675H23.2857Z'
        fill='#BBDEF9'
        stroke={strokeColor}
        stroke-width='2'
      />
      <path
        d='M44.3228 23.3042H38.2275V16.209C38.2275 14.5258 39.592 13.1613 41.2751 13.1613C42.9583 13.1613 44.3228 14.5258 44.3228 16.209V23.3042Z'
        fill='#74C795'
        stroke={strokeColor}
        stroke-width='2'
      />
      <path
        d='M27.7806 44.3716V38.2763H34.8758C36.559 38.2763 37.9234 39.6408 37.9234 41.324C37.9234 43.0071 36.559 44.3716 34.8758 44.3716H27.7806Z'
        fill='#F6D397'
        stroke={strokeColor}
        stroke-width='2'
      />
    </svg>
  );
}
