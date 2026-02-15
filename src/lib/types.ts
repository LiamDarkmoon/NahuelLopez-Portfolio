export type Stack = {
  react?: boolean;
  astro?: boolean;
  tailwind?: boolean;
  typescript?: boolean;
  python?: boolean;
  fastapi?: boolean;
  next?: boolean;
  db?: boolean;
};

export type Project = {
  id: number;
  name: string;
  slug: string;
  url: string;
  description: string;
  img: string;
  stack: Stack;
};

export type ContactData = {
  name: string;
  email: string;
  message: string;
};
