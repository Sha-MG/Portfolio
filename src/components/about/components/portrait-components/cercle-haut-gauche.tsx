interface Props {
  color: string;
}
export default function CercleHautGauche({ color }: Props) {
  return (
    <circle
      cx='2.5'
      cy='2.5'
      r='2.5'
      transform='matrix(-1 0 0 1 23.0001 57)'
      fill={color}
    />
  );
}
