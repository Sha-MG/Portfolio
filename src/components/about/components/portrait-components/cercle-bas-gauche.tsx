interface Props {
  color: string;
}

export default function CercleBasGauche({ color }: Props) {
  return (
    <circle
      cx='5'
      cy='5'
      r='5'
      transform='matrix(-1 0 0 1 14.0001 87)'
      fill={color}
    />
  );
}
