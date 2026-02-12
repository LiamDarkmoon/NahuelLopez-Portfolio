import Icon from "./Icon";

type IconsProps = {
  react?: boolean;
  astro?: boolean;
  tailwind?: boolean;
  typescript?: boolean;
  python?: boolean;
  fastapi?: boolean;
  next?: boolean;
  db?: boolean; // database
};

const ICON_LIST = [
  "react",
  "astro",
  "tailwind",
  "typescript",
  "python",
  "fastapi",
  "next",
  "db", // database
] as const;
type IconName = (typeof ICON_LIST)[number];

export default function BadgeGroup(props: IconsProps) {
  return (
    <div className="ms-auto flex flex-wrap gap-2 border-light-border dark:border-dark-border p-2 rounded-xl">
      {ICON_LIST.map((icon) =>
        props[icon] ? <Icon name={icon} key={icon} /> : null,
      )}
    </div>
  );
}
