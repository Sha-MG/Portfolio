interface Props {
  color: string;
}
export default function TShirt({ color }: Props) {
  return (
    <path
      d='M121.288 227.263L89.2662 186.603L39 203.5L60.5323 221.075L117.79 239.065L170.993 232.626L198.471 208.015L150.132 185.549L121.288 227.263Z'
      fill={color}
    />
  );
}
