interface Props {
  color: string;
}

export default function TraitBas({ color }: Props) {
  return (
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.6121 103C10.5521 109.203 10 115.579 10 122.084C10 184.216 60.368 234.584 122.5 234.584C154.885 234.584 184.073 220.901 204.599 199H217.848C195.392 226.803 161.022 244.584 122.5 244.584C54.8451 244.584 0 189.739 0 122.084C0 115.593 0.504974 109.219 1.47777 103H11.6121Z'
      fill={color}
    />
  );
}
