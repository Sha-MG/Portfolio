import { useTheme } from '@/pages';

export default function Git() {
  const { activeColorTheme } = useTheme();
  const strokeColor =
    activeColorTheme?.id === 'sea'
      ? '#4B7A85'
      : activeColorTheme?.id === 'forest'
      ? '#455647'
      : '#666BA2';

  return (
    <svg
      width='50'
      height='50'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='1.41421'
        y='25.2102'
        width='33.6524'
        height='33.0582'
        rx='1.97104'
        transform='rotate(-45 1.41421 25.2102)'
        fill='#DDAC95'
        stroke={strokeColor}
        stroke-width='2'
      />
      <mask id='path-2-inside-1_39_1395' fill='white'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M17.6358 8.71048L21.1713 5.17495L26.8914 10.8951C27.8615 11.0089 28.8017 11.438 29.546 12.1822C30.2903 12.9265 30.7193 13.8667 30.8332 14.8368L34.8859 18.8895C36.1912 18.7509 37.5455 19.1818 38.546 20.1822C40.3033 21.9396 40.3033 24.7888 38.546 26.5462C36.7886 28.3036 33.9394 28.3036 32.182 26.5462C30.9822 25.3464 30.6015 23.6376 31.0401 22.1148L28.3359 19.4106C28.2255 19.4643 28.1135 19.5133 28 19.5575L28 33.7163C28.1911 33.8547 28.3738 34.0101 28.546 34.1822C30.3033 35.9396 30.3033 38.7888 28.546 40.5462C26.7886 42.3036 23.9394 42.3036 22.182 40.5462C20.4247 38.7888 20.4247 35.9396 22.182 34.1822C22.4343 33.9299 22.7091 33.7138 23 33.534V18.3533C21.7641 16.965 21.5366 14.9949 22.3177 13.3924L17.6358 8.71048Z'
        />
      </mask>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M17.6358 8.71048L21.1713 5.17495L26.8914 10.8951C27.8615 11.0089 28.8017 11.438 29.546 12.1822C30.2903 12.9265 30.7193 13.8667 30.8332 14.8368L34.8859 18.8895C36.1912 18.7509 37.5455 19.1818 38.546 20.1822C40.3033 21.9396 40.3033 24.7888 38.546 26.5462C36.7886 28.3036 33.9394 28.3036 32.182 26.5462C30.9822 25.3464 30.6015 23.6376 31.0401 22.1148L28.3359 19.4106C28.2255 19.4643 28.1135 19.5133 28 19.5575L28 33.7163C28.1911 33.8547 28.3738 34.0101 28.546 34.1822C30.3033 35.9396 30.3033 38.7888 28.546 40.5462C26.7886 42.3036 23.9394 42.3036 22.182 40.5462C20.4247 38.7888 20.4247 35.9396 22.182 34.1822C22.4343 33.9299 22.7091 33.7138 23 33.534V18.3533C21.7641 16.965 21.5366 14.9949 22.3177 13.3924L17.6358 8.71048Z'
        fill='#F7F7F7'
      />
      <path
        d='M21.1713 5.17495L22.0116 4.33461L21.1713 3.49427L20.331 4.33461L21.1713 5.17495ZM17.6358 8.71048L16.7954 7.87014L15.9551 8.71048L16.7954 9.55082L17.6358 8.71048ZM26.8914 10.8951L26.0511 11.7354L26.343 12.0273L26.7529 12.0754L26.8914 10.8951ZM30.8332 14.8368L29.6528 14.9753L29.7009 15.3853L29.9928 15.6771L30.8332 14.8368ZM34.8859 18.8895L34.0456 19.7299L34.447 20.1313L35.0114 20.0713L34.8859 18.8895ZM31.0401 22.1148L32.1821 22.4437L32.376 21.7701L31.8804 21.2744L31.0401 22.1148ZM28.3359 19.4106L29.1762 18.5702L28.577 17.971L27.8152 18.3423L28.3359 19.4106ZM28 19.5575L27.5686 18.4502L26.8116 18.7451V19.5575H28ZM28 33.7163H26.8116L26.8116 34.3228L27.3028 34.6787L28 33.7163ZM23 33.534L23.625 34.5448L24.1884 34.1964L24.1884 33.534L23 33.534ZM23 18.3533H24.1884L24.1884 17.901L23.8877 17.5632L23 18.3533ZM22.3177 13.3924L23.3859 13.913L23.7572 13.1513L23.158 12.552L22.3177 13.3924ZM20.331 4.33461L16.7954 7.87014L18.4761 9.55082L22.0116 6.01528L20.331 4.33461ZM27.7318 10.0547L22.0116 4.33461L20.331 6.01528L26.0511 11.7354L27.7318 10.0547ZM30.3863 11.3419C29.4463 10.4019 28.256 9.85861 27.0299 9.71474L26.7529 12.0754C27.467 12.1592 28.1571 12.474 28.7056 13.0226L30.3863 11.3419ZM32.0135 14.6983C31.8696 13.4722 31.3263 12.2819 30.3863 11.3419L28.7056 13.0226C29.2542 13.5712 29.5691 14.2612 29.6528 14.9753L32.0135 14.6983ZM35.7262 18.0492L31.6735 13.9965L29.9928 15.6771L34.0456 19.7299L35.7262 18.0492ZM39.3863 19.3419C38.1213 18.0769 36.4073 17.5328 34.7604 17.7078L35.0114 20.0713C35.9751 19.9689 36.9698 20.2867 37.7056 21.0226L39.3863 19.3419ZM39.3863 27.3865C41.6078 25.1651 41.6078 21.5634 39.3863 19.3419L37.7056 21.0226C38.9989 22.3158 38.9989 24.4126 37.7056 25.7059L39.3863 27.3865ZM31.3417 27.3865C33.5631 29.608 37.1648 29.608 39.3863 27.3865L37.7056 25.7059C36.4124 26.9991 34.3156 26.9991 33.0223 25.7059L31.3417 27.3865ZM29.8981 21.7859C29.3447 23.7075 29.8239 25.8687 31.3417 27.3865L33.0223 25.7059C32.1405 24.824 31.8584 23.5676 32.1821 22.4437L29.8981 21.7859ZM27.4955 20.2509L30.1997 22.9551L31.8804 21.2744L29.1762 18.5702L27.4955 20.2509ZM28.4314 20.6649C28.575 20.6089 28.7169 20.5469 28.8565 20.4788L27.8152 18.3423C27.7342 18.3817 27.652 18.4177 27.5686 18.4502L28.4314 20.6649ZM29.1884 33.7163L29.1884 19.5575H26.8116L26.8116 33.7163H29.1884ZM27.3028 34.6787C27.4432 34.7804 27.578 34.895 27.7056 35.0226L29.3863 33.3419C29.1695 33.1251 28.939 32.929 28.6972 32.7539L27.3028 34.6787ZM27.7056 35.0226C28.9989 36.3158 28.9989 38.4126 27.7056 39.7059L29.3863 41.3865C31.6078 39.1651 31.6078 35.5634 29.3863 33.3419L27.7056 35.0226ZM27.7056 39.7059C26.4124 40.9991 24.3156 40.9991 23.0223 39.7059L21.3417 41.3865C23.5631 43.608 27.1648 43.608 29.3863 41.3865L27.7056 39.7059ZM23.0223 39.7059C21.7291 38.4126 21.7291 36.3158 23.0223 35.0226L21.3417 33.3419C19.1202 35.5634 19.1202 39.1651 21.3417 41.3865L23.0223 39.7059ZM23.0223 35.0226C23.2092 34.8357 23.4117 34.6767 23.625 34.5448L22.375 32.5232C22.0066 32.751 21.6594 33.0242 21.3417 33.3419L23.0223 35.0226ZM21.8116 18.3533L21.8116 33.534L24.1884 33.534L24.1884 18.3533H21.8116ZM21.2494 12.8717C20.2626 14.8963 20.5479 17.3861 22.1123 19.1435L23.8877 17.5632C22.9802 16.5438 22.8106 15.0934 23.3859 13.913L21.2494 12.8717ZM16.7954 9.55082L21.4773 14.2327L23.158 12.552L18.4761 7.87014L16.7954 9.55082Z'
        fill={strokeColor}
        mask='url(#path-2-inside-1_39_1395)'
      />
      <line
        x1='19'
        y1='19'
        x2='21.971'
        y2='19'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='19'
        y1='23'
        x2='21.971'
        y2='23'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='19'
        y1='27'
        x2='21.971'
        y2='27'
        stroke={strokeColor}
        stroke-width='2'
      />
      <line
        x1='19'
        y1='31'
        x2='21.971'
        y2='31'
        stroke={strokeColor}
        stroke-width='2'
      />
    </svg>
  );
}
