import { LegacyRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

import { Box } from '@chakra-ui/react';

export default function Danse() {
  const parallax = useParallax({ translateX: [0, 300] });

  return (
    <Box
      position='absolute'
      top={12}
      right={120}
      ref={parallax.ref as LegacyRef<HTMLDivElement>}
    >
      <svg
        width='50'
        height='28'
        viewBox='0 0 74 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M19.0625 24.207C18.8542 24.6367 18.5938 25.0273 18.2812 25.3789C17.9688 25.7174 17.6172 26.0104 17.2266 26.2578C16.8359 26.4922 16.4193 26.6745 15.9766 26.8047C15.5339 26.9349 15.0716 27 14.5898 27C13.5742 27 12.7083 26.7526 11.9922 26.2578C11.2891 25.763 10.6966 25.1185 10.2148 24.3242C9.86328 24.7148 9.47266 25.1055 9.04297 25.4961C8.6263 25.8737 8.17708 26.2122 7.69531 26.5117C7.22656 26.7982 6.73828 27.0326 6.23047 27.2148C5.72266 27.3971 5.21484 27.4883 4.70703 27.4883C4.09505 27.4883 3.54818 27.3646 3.06641 27.1172C2.58464 26.8698 2.17448 26.5443 1.83594 26.1406C1.4974 25.724 1.23698 25.2552 1.05469 24.7344C0.872396 24.2005 0.78125 23.6471 0.78125 23.0742C0.78125 22.2148 0.970052 21.349 1.34766 20.4766C1.73828 19.6042 2.24609 18.8164 2.87109 18.1133C3.50911 17.3971 4.23828 16.8177 5.05859 16.375C5.87891 15.9323 6.73177 15.7109 7.61719 15.7109C7.8776 15.7109 8.10547 15.737 8.30078 15.7891V14.9688C8.30078 14.5911 8.3138 14.0898 8.33984 13.4648C8.36589 12.8398 8.41797 12.1497 8.49609 11.3945C8.57422 10.6263 8.67188 9.82552 8.78906 8.99219C8.91927 8.14583 9.08203 7.3125 9.27734 6.49219C9.48568 5.65885 9.72656 4.87109 10 4.12891C10.2734 3.3737 10.5924 2.71615 10.957 2.15625C11.3216 1.58333 11.7383 1.1276 12.207 0.789062C12.6758 0.450521 13.2031 0.28125 13.7891 0.28125C14.4792 0.28125 15.0391 0.483073 15.4688 0.886719C15.8984 1.29036 16.237 1.79167 16.4844 2.39062C16.7318 2.97656 16.8945 3.60156 16.9727 4.26562C17.0638 4.92969 17.1094 5.52214 17.1094 6.04297C17.1094 6.72005 17.0443 7.50781 16.9141 8.40625C16.7839 9.29167 16.6016 10.2357 16.3672 11.2383C16.1328 12.2279 15.8529 13.2435 15.5273 14.2852C15.2018 15.3268 14.8503 16.3294 14.4727 17.293C14.0951 18.2565 13.6849 19.1549 13.2422 19.9883C12.8125 20.8086 12.3763 21.5052 11.9336 22.0781C12.1029 22.5859 12.3047 23.0547 12.5391 23.4844C12.7865 23.9141 13.0729 24.2852 13.3984 24.5977C13.724 24.9102 14.0951 25.1576 14.5117 25.3398C14.9284 25.5091 15.4036 25.5938 15.9375 25.5938C17.1615 25.5938 18.1641 25.1055 18.9453 24.1289L19.0625 24.207ZM11.0547 13.3281C11.0547 13.7969 11.0547 14.3438 11.0547 14.9688C11.0547 15.5807 11.0677 16.2318 11.0938 16.9219C11.1328 17.612 11.1914 18.3216 11.2695 19.0508C11.3607 19.7669 11.4909 20.4635 11.6602 21.1406C12.207 20.0859 12.7083 18.9336 13.1641 17.6836C13.6198 16.4206 14.0104 15.1315 14.3359 13.8164C14.6745 12.4883 14.9349 11.1667 15.1172 9.85156C15.2995 8.53646 15.3906 7.29297 15.3906 6.12109C15.3906 5.8737 15.3776 5.51562 15.3516 5.04688C15.3255 4.57812 15.2539 4.11589 15.1367 3.66016C15.0195 3.19141 14.8438 2.78776 14.6094 2.44922C14.375 2.09766 14.056 1.92188 13.6523 1.92188C13.3398 1.92188 13.0599 2.07161 12.8125 2.37109C12.5651 2.65755 12.3503 3.04818 12.168 3.54297C11.9857 4.02474 11.8294 4.57812 11.6992 5.20312C11.582 5.82812 11.4779 6.47917 11.3867 7.15625C11.3086 7.83333 11.2435 8.50391 11.1914 9.16797C11.1523 9.83203 11.1198 10.4505 11.0938 11.0234C11.0807 11.5833 11.0677 12.0716 11.0547 12.4883C11.0547 12.8919 11.0547 13.1719 11.0547 13.3281ZM6.13281 25.3594C6.875 25.3594 7.55859 25.2161 8.18359 24.9297C8.82161 24.6432 9.40104 24.2656 9.92188 23.7969C9.67448 23.3151 9.45964 22.8008 9.27734 22.2539C9.10807 21.694 8.95833 21.1341 8.82812 20.5742C8.71094 20.0013 8.61328 19.4284 8.53516 18.8555C8.47005 18.2826 8.41797 17.7292 8.37891 17.1953C8.22266 17.026 8.02734 16.8893 7.79297 16.7852C7.55859 16.668 7.27214 16.6094 6.93359 16.6094C6.32161 16.6094 5.77474 16.7786 5.29297 17.1172C4.82422 17.4427 4.42708 17.8594 4.10156 18.3672C3.77604 18.862 3.52865 19.4089 3.35938 20.0078C3.1901 20.5938 3.10547 21.1536 3.10547 21.6875C3.10547 22.1823 3.15755 22.6576 3.26172 23.1133C3.37891 23.556 3.5612 23.9466 3.80859 24.2852C4.05599 24.6107 4.36849 24.8711 4.74609 25.0664C5.13672 25.2617 5.59896 25.3594 6.13281 25.3594ZM26.9141 16.7656C26.9141 16.9089 26.862 17.0391 26.7578 17.1562C26.6536 17.2604 26.5299 17.3125 26.3867 17.3125C26.2695 17.3125 26.1458 17.2799 26.0156 17.2148C25.8854 17.1367 25.7357 17.0521 25.5664 16.9609C25.4102 16.8698 25.2214 16.7917 25 16.7266C24.7917 16.6484 24.5508 16.6094 24.2773 16.6094C23.6393 16.6094 23.0664 16.8112 22.5586 17.2148C22.0638 17.6055 21.6406 18.0938 21.2891 18.6797C20.9505 19.2656 20.6901 19.8906 20.5078 20.5547C20.3255 21.2188 20.2344 21.8177 20.2344 22.3516C20.2344 22.7292 20.2669 23.1003 20.332 23.4648C20.3971 23.8164 20.5078 24.1419 20.6641 24.4414C20.8333 24.7279 21.0612 24.9622 21.3477 25.1445C21.6341 25.3138 21.9987 25.3984 22.4414 25.3984C22.9102 25.3984 23.3594 25.3138 23.7891 25.1445C24.2188 24.9622 24.6224 24.7279 25 24.4414C25.013 24.0247 25.0781 23.5885 25.1953 23.1328C25.3255 22.6641 25.4883 22.2083 25.6836 21.7656C25.8789 21.3099 26.1003 20.8802 26.3477 20.4766C26.6081 20.0729 26.875 19.7148 27.1484 19.4023L27.4023 19.5586C27.2591 20.0013 27.1549 20.457 27.0898 20.9258C27.0247 21.3945 26.9922 21.8568 26.9922 22.3125C26.9922 22.7812 27.0312 23.224 27.1094 23.6406C27.1875 24.0573 27.3242 24.4219 27.5195 24.7344C27.7148 25.0339 27.9818 25.2747 28.3203 25.457C28.6589 25.6263 29.0951 25.7109 29.6289 25.7109C30.2799 25.7109 30.8789 25.5612 31.4258 25.2617C31.9727 24.9622 32.4544 24.5846 32.8711 24.1289L33.0273 24.207C32.793 24.6628 32.487 25.099 32.1094 25.5156C31.7318 25.9323 31.3086 26.3099 30.8398 26.6484C30.3841 26.974 29.8958 27.2344 29.375 27.4297C28.8542 27.625 28.3398 27.7227 27.832 27.7227C27.1159 27.7227 26.5299 27.5143 26.0742 27.0977C25.6185 26.694 25.306 26.1797 25.1367 25.5547C24.5898 26.1016 23.9779 26.5638 23.3008 26.9414C22.6367 27.306 21.9336 27.4883 21.1914 27.4883C20.6445 27.4883 20.1562 27.3841 19.7266 27.1758C19.3099 26.9805 18.9583 26.7135 18.6719 26.375C18.3854 26.0365 18.1641 25.6393 18.0078 25.1836C17.8646 24.7148 17.793 24.2266 17.793 23.7188C17.793 23.1328 17.8841 22.5339 18.0664 21.9219C18.2617 21.2969 18.5221 20.6849 18.8477 20.0859C19.1862 19.487 19.5833 18.9206 20.0391 18.3867C20.4948 17.8529 20.9896 17.3841 21.5234 16.9805C22.0703 16.5768 22.6432 16.2578 23.2422 16.0234C23.8411 15.7891 24.4531 15.6719 25.0781 15.6719C25.2214 15.6719 25.3971 15.6914 25.6055 15.7305C25.8138 15.7565 26.0156 15.8086 26.2109 15.8867C26.4062 15.9648 26.569 16.0755 26.6992 16.2188C26.8424 16.362 26.9141 16.5443 26.9141 16.7656ZM48.9648 24.207C48.7174 24.6758 48.4505 25.125 48.1641 25.5547C47.8906 25.9844 47.5781 26.362 47.2266 26.6875C46.875 27.013 46.4779 27.2734 46.0352 27.4688C45.5924 27.6641 45.0846 27.7617 44.5117 27.7617C43.8607 27.7617 43.3008 27.599 42.832 27.2734C42.3633 26.9609 41.9596 26.5443 41.6211 26.0234C41.2956 25.4896 41.0286 24.8841 40.8203 24.207C40.625 23.5299 40.4622 22.8398 40.332 22.1367C40.2018 21.4336 40.1042 20.7435 40.0391 20.0664C39.974 19.3763 39.9154 18.7578 39.8633 18.2109C39.6159 18.4062 39.3164 18.7839 38.9648 19.3438C38.6133 19.8906 38.2552 20.5352 37.8906 21.2773C37.526 22.0195 37.1745 22.8268 36.8359 23.6992C36.5104 24.5716 36.2435 25.431 36.0352 26.2773C35.9961 26.4596 35.931 26.6484 35.8398 26.8438C35.7617 27.0391 35.6576 27.2148 35.5273 27.3711C35.4102 27.5404 35.2669 27.6771 35.0977 27.7812C34.9284 27.8984 34.7396 27.957 34.5312 27.957C34.1927 27.957 33.9453 27.8398 33.7891 27.6055C33.6458 27.3711 33.5417 27.1042 33.4766 26.8047C33.099 25.151 32.832 23.569 32.6758 22.0586C32.5326 20.5482 32.4609 19.0378 32.4609 17.5273C32.4609 17.1628 32.5195 16.8503 32.6367 16.5898C32.7669 16.3164 32.9362 16.0951 33.1445 15.9258C33.3529 15.7435 33.6003 15.6133 33.8867 15.5352C34.1732 15.444 34.4727 15.3984 34.7852 15.3984C34.8242 15.3984 34.8828 15.3984 34.9609 15.3984C35.0521 15.3984 35.1367 15.4115 35.2148 15.4375C35.293 15.4505 35.3581 15.4766 35.4102 15.5156C35.4622 15.5547 35.4818 15.6068 35.4688 15.6719C35.1302 17.3776 34.9674 19.1159 34.9805 20.8867C34.9935 22.6445 35.0846 24.3372 35.2539 25.9648C35.3971 25.3138 35.6055 24.5781 35.8789 23.7578C36.1654 22.9245 36.4909 22.0911 36.8555 21.2578C37.2331 20.4115 37.6367 19.6107 38.0664 18.8555C38.5091 18.0872 38.9583 17.4427 39.4141 16.9219C39.6354 16.6745 39.8568 16.4661 40.0781 16.2969C40.3125 16.1146 40.599 16.0234 40.9375 16.0234C41.1328 16.0234 41.2956 16.0625 41.4258 16.1406C41.556 16.2188 41.6602 16.3164 41.7383 16.4336C41.8294 16.5508 41.8945 16.6875 41.9336 16.8438C41.9857 16.987 42.0247 17.1302 42.0508 17.2734C42.1159 17.651 42.181 18.1393 42.2461 18.7383C42.3112 19.3372 42.3893 19.9753 42.4805 20.6523C42.5846 21.3294 42.7083 22.013 42.8516 22.7031C42.9948 23.3802 43.1771 23.9987 43.3984 24.5586C43.6198 25.1055 43.8867 25.5547 44.1992 25.9062C44.5117 26.2578 44.8828 26.4336 45.3125 26.4336C45.6641 26.4336 46.0026 26.3685 46.3281 26.2383C46.6667 26.0951 46.9857 25.9193 47.2852 25.7109C47.5846 25.4896 47.8646 25.2422 48.125 24.9688C48.3854 24.6823 48.6198 24.4023 48.8281 24.1289L48.9648 24.207ZM58.9453 22.8008C58.9453 23.4779 58.8216 24.1159 58.5742 24.7148C58.3268 25.3138 57.9818 25.8346 57.5391 26.2773C57.0964 26.7201 56.5755 27.0716 55.9766 27.332C55.3906 27.5924 54.7526 27.7227 54.0625 27.7227C53.6068 27.7227 53.1576 27.651 52.7148 27.5078C52.2721 27.3646 51.862 27.1628 51.4844 26.9023C51.1198 26.6289 50.8008 26.3034 50.5273 25.9258C50.2539 25.5482 50.0586 25.1315 49.9414 24.6758L50.3906 24.5586C50.7292 24.9753 51.1198 25.3203 51.5625 25.5938C52.0182 25.8672 52.5326 26.0039 53.1055 26.0039C53.5872 26.0039 54.0299 25.8997 54.4336 25.6914C54.8503 25.4831 55.2018 25.2096 55.4883 24.8711C55.7878 24.5326 56.0156 24.1419 56.1719 23.6992C56.3411 23.2435 56.4258 22.7812 56.4258 22.3125C56.4258 21.7526 56.3477 21.2904 56.1914 20.9258C56.0352 20.5482 55.8268 20.2357 55.5664 19.9883C55.319 19.7279 55.0391 19.5065 54.7266 19.3242C54.4141 19.1289 54.0951 18.9336 53.7695 18.7383C53.457 18.543 53.151 18.3216 52.8516 18.0742C52.5651 17.8268 52.3177 17.5078 52.1094 17.1172C52.0964 17.8854 51.9661 18.6927 51.7188 19.5391C51.4714 20.3854 51.1328 21.2057 50.7031 22C50.2865 22.7943 49.8047 23.5365 49.2578 24.2266C48.7109 24.9167 48.1315 25.4961 47.5195 25.9648L47.3633 25.6914C47.7799 25.2487 48.1445 24.6953 48.457 24.0312C48.7695 23.3672 49.0234 22.6706 49.2188 21.9414C49.4271 21.1992 49.5768 20.457 49.668 19.7148C49.7721 18.9727 49.8242 18.2956 49.8242 17.6836C49.8242 17.3581 49.7917 17.0391 49.7266 16.7266C49.6615 16.4141 49.6289 16.1081 49.6289 15.8086C49.6289 15.444 49.7331 15.1641 49.9414 14.9688C50.1628 14.7734 50.4427 14.6758 50.7812 14.6758C51.0417 14.6758 51.25 14.7344 51.4062 14.8516C51.5625 14.9688 51.7057 15.125 51.8359 15.3203C51.9661 15.5026 52.0964 15.7174 52.2266 15.9648C52.3568 16.1992 52.5195 16.4466 52.7148 16.707C52.9232 16.9544 53.1771 17.2018 53.4766 17.4492C53.7891 17.6836 54.1862 17.8919 54.668 18.0742C55.2279 18.2826 55.7617 18.5234 56.2695 18.7969C56.7904 19.0573 57.2461 19.3698 57.6367 19.7344C58.0404 20.099 58.3594 20.5352 58.5938 21.043C58.8281 21.5378 58.9453 22.1237 58.9453 22.8008ZM73.3594 24.207C73.0208 24.7018 72.6107 25.1641 72.1289 25.5938C71.6602 26.0234 71.1393 26.3945 70.5664 26.707C70.0065 27.0195 69.4141 27.2669 68.7891 27.4492C68.1771 27.6315 67.5586 27.7227 66.9336 27.7227C66.0482 27.7227 65.2214 27.6055 64.4531 27.3711C63.6849 27.1497 63.0143 26.8047 62.4414 26.3359C61.8685 25.8672 61.4193 25.2812 61.0938 24.5781C60.7682 23.862 60.6055 23.0286 60.6055 22.0781C60.6055 21.1406 60.7747 20.2682 61.1133 19.4609C61.4648 18.6406 61.9401 17.931 62.5391 17.332C63.151 16.7201 63.8672 16.2383 64.6875 15.8867C65.5078 15.5352 66.3867 15.3594 67.3242 15.3594C67.7669 15.3594 68.1771 15.4245 68.5547 15.5547C68.9453 15.6719 69.2839 15.8542 69.5703 16.1016C69.8568 16.3359 70.0781 16.6289 70.2344 16.9805C70.4036 17.332 70.4883 17.7357 70.4883 18.1914C70.4883 18.7383 70.3776 19.2201 70.1562 19.6367C69.9349 20.0534 69.6419 20.418 69.2773 20.7305C68.9128 21.043 68.4961 21.3034 68.0273 21.5117C67.5716 21.7201 67.0898 21.8893 66.582 22.0195C66.0872 22.1497 65.5924 22.2474 65.0977 22.3125C64.6159 22.3646 64.1732 22.3906 63.7695 22.3906H63.3008C63.4701 23.5755 63.9388 24.4805 64.707 25.1055C65.4753 25.7305 66.5365 26.043 67.8906 26.043C68.8542 26.043 69.7917 25.8737 70.7031 25.5352C71.6276 25.1966 72.4609 24.7279 73.2031 24.1289L73.3594 24.207ZM63.2422 21.8047H63.7305C64.1992 21.8047 64.681 21.7331 65.1758 21.5898C65.6706 21.4336 66.1133 21.2122 66.5039 20.9258C66.9076 20.6263 67.2396 20.2617 67.5 19.832C67.7604 19.4023 67.8906 18.9141 67.8906 18.3672C67.8906 17.8333 67.7734 17.3906 67.5391 17.0391C67.3177 16.6875 66.9271 16.5117 66.3672 16.5117C65.7943 16.5117 65.306 16.6875 64.9023 17.0391C64.5117 17.3776 64.1927 17.8008 63.9453 18.3086C63.6979 18.8034 63.5156 19.3307 63.3984 19.8906C63.2943 20.4375 63.2422 20.9258 63.2422 21.3555V21.8047Z'
          fill='#525C60'
        />
      </svg>
    </Box>
  );
}