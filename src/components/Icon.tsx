type IconProps = {
  name: string;
  className?: string;
};

export default function Icon({ name, className }: IconProps) {
  return (
    <svg
      className={className}
      width="24px"
      height="24px"
      stroke="currentColor"
      fill="#5b5fe9"
      aria-hidden="true"
    >
      <use href={`#icon-${name}`} />
    </svg>
  );
}
