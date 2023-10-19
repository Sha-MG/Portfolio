interface Props {
  color: string;
}

export default function CercleHautDroite({ color }: Props) {
  return (
    <circle
      cx='2.5'
      cy='2.5'
      r='2.5'
      transform='matrix(-1 0 0 1 105 0)'
      fill={color}
    />
  );
}
