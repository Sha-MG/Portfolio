interface Props {
  color: string;
}

export default function TraitHaut({ color }: Props) {
  return (
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21.3246 53C38.0496 28.5532 63.4042 10.4769 93.0001 3.15979V6.25325C65.1243 13.3311 41.1576 30.2071 24.9814 53H21.3246Z'
      fill={color}
    />
  );
}
