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
      aria-hidden="true"
    >
      <use href={`#icon-${name}`} />
    </svg>
  );
}
