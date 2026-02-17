import type { Project } from "./types";

export const MENU = [
  { key: "home", path: "" },
  { key: "projects", path: "projects" },
  { key: "about", path: "about" },
] as const;

export const projects: Project[] = [
  {
    id: 1,
    name: "Cloudboard",
    slug: "cloudboard",
    url: "https://cloudboard-api.vercel.app",
    description:
      "Plataforma web fullstack para gestión de eventos y contenido en tiempo real. Arquitectura API-first con autenticación, roles y sistema de eventos. Stack: Astro, React, Tailwind.",
    img: "/images/cloudboard.jpg",
    stack: {
      react: true,
      astro: true,
      tailwind: true,
      typescript: true,
    },
  },
  {
    id: 2,
    name: "Cloudboard-API",
    slug: "cloudboard-api",
    url: "https://api-cloudboard.vercel.app",
    description:
      "API modular orientada a servicios con autenticación JWT, refresh tokens, arquitectura por capas y diseño escalable. Pensada como backend base reutilizable para múltiples productos. Stack: FastAPI, Pydantic, Supabase, JWT.",
    img: "/images/cloud-api.jpg",
    stack: {
      python: true,
      fastapi: true,
      db: true,
    },
  },
  {
    id: 3,
    name: "El Templo del lobo",
    slug: "el-templo-del-lobo",
    url: "https://eltemplodellobo.vercel.app",
    description:
      "Plataforma web para la gestión de personajes y combates de dungeons and dragons. Stack: Next.js, React, Tailwind, y vercel postgres.",
    img: "/images/el-templo-del-lobo.jpg",
    stack: {
      next: true,
      react: true,
      tailwind: true,
      db: true,
    },
  },
  {
    id: 4,
    name: "N&V",
    slug: "n-and-v",
    url: "https://nahuelyviqui.vercel.app",
    description:
      "Invitacion de boda interactiva con diseño personalizado, animaciones y cuenta regresiva. Stack: Astro, React, Tailwind.",
    img: "/images/n-and-v.jpg",
    stack: {
      astro: true,
      react: true,
      tailwind: true,
    },
  },
];
