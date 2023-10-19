interface CircleProps {
  color: string;
}

export default function Circle({ color }: CircleProps) {
  return <ellipse cx='122' cy='122' rx='106' ry='107' fill={color} />;
}
