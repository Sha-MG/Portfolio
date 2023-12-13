interface SatelliteIconProps {
  color?: string;
}

export default function SatelliteIcon({ color }: SatelliteIconProps) {
  return (
    <svg
      width='58'
      height='40'
      viewBox='0 0 58 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='25.2104'
        y='27.3157'
        width='7.47368'
        height='11.6842'
        rx='1'
        stroke={color ?? '#C283A8'}
        stroke-width='2'
      />
      <rect
        x='1'
        y='28.3684'
        width='20.1053'
        height='9.57895'
        rx='1'
        stroke={color ?? '#C283A8'}
        stroke-width='2'
      />
      <rect
        x='36.7896'
        y='28.3684'
        width='20.1053'
        height='9.57895'
        rx='1'
        stroke={color ?? '#C283A8'}
        stroke-width='2'
      />
      <line
        x1='20'
        y1='32.6843'
        x2='25.2632'
        y2='32.6843'
        stroke={color ?? '#C283A8'}
        stroke-width='2'
      />
      <line
        x1='33.6843'
        y1='32.6843'
        x2='36.8422'
        y2='32.6843'
        stroke={color ?? '#C283A8'}
        stroke-width='2'
      />
      <rect
        x='25.2104'
        y='19.9473'
        width='8.52632'
        height='4.31579'
        rx='1'
        stroke={color ?? '#C283A8'}
        stroke-width='2'
      />
      <line
        x1='29.5264'
        y1='20'
        x2='29.5264'
        y2='15.7895'
        stroke={color ?? '#C283A8'}
        stroke-width='2'
      />
      <line
        x1='29.5264'
        y1='28.4211'
        x2='29.5264'
        y2='24.2106'
        stroke={color ?? '#C283A8'}
        stroke-width='2'
      />
      <path
        d='M5.26318 31.0527V35.2633M9.47371 31.0527V35.2633M13.6842 31.0527V35.2633M17.8948 31.0527V35.2633M40 31.0527V35.2633M44.2105 31.0527V35.2633M48.4211 31.0527V35.2633M52.6316 31.0527V35.2633'
        stroke={color ?? '#C283A8'}
        stroke-width='2'
      />
      <circle
        cx='47.3684'
        cy='14.7368'
        r='4.76316'
        stroke={color ?? '#C283A8'}
      />
      <circle
        cx='12.1052'
        cy='18.4211'
        r='2.13158'
        stroke={color ?? '#C283A8'}
      />
      <circle
        cx='25.7895'
        cy='2.63158'
        r='2.13158'
        fill={color ?? '#C283A8'}
        stroke={color ?? '#C283A8'}
      />
    </svg>
  );
}
