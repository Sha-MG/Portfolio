interface Props {
  color: string;
}

export default function CercleBasDroite({ color }: Props) {
  return (
    <circle
      cx='5'
      cy='5'
      r='5'
      transform='matrix(-1 0 0 1 222 185)'
      fill={color}
    />
  );
}
