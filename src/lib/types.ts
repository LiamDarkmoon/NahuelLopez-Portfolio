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

export type Arquitecture = {
  frontend?: string;
  styling?: string;
  backend?: string;
  structure?: string;
  auth?: string;
  database?: string;
  model?: string;
  framework?: string;
  validation?: string;
};

export type ProjectPageData = {
  hero: {
    title: string;
    tagline: string;
  };
  overview: string;
  problem?: string;
  solution?: string;
  architecture?: Arquitecture;
  technicalFocus?: string[];
  designPhilosophy?: string[];
  features?: string[];
  vision: string;
};

export type Project = {
  id: number;
  name: string;
  slug: string;
  url: string;
  description: string;
  img: string;
  smImg: string;
  stack: Stack;
  page?: ProjectPageData;
};

export type ContactData = {
  name: string;
  email: string;
  message: string;
};

export type DictionarySchema = {
  nav: {
    button: string;
  };
  hero: {
    top: string;
    title: string;
    subtitle: string;
    description: string;
    button: string;
  };
  side: {
    menu: {
      home: string;
      projects: string;
      about: string;
    };
  };
  footer: {
    name: string;
    description: string;
    copy: string;
  };
  about: {
    title: string;
    text: string;
    p: string;
    link: string;
  };
  projects: {
    title: string;
    heroTittle: string;
    text: string;
    link: string;
    linkP1: string;
    linkP2: string;
    data: Project[];
  };
  form: {
    title: string;
    fields: {
      name: string;
      email: string;
      message: string;
      button: string;
    };
    errors: {
      name: string;
      email: string;
      message: string;
    };
    error: string;
    success: string;
  };
};
