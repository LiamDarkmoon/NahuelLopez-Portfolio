import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    name: "Cloudboard",
    url: "cloudboard-api.vercel.app",
    description:
      "Plataforma web fullstack para gestión de eventos y contenido en tiempo real. Arquitectura API-first con autenticación, roles y sistema de eventos. Stack: Astro, React, Tailwind.",
    img: "/src/assets/cloudboard.jpg",
    stack: {
      react: true,
      astro: true,
      tailwind: true,
      typescript: true,
    },
  },
  {
    id: 2,
    name: "Cloud API",
    url: "api-cloudboard.vercel.app",
    description:
      "API modular orientada a servicios con autenticación JWT, refresh tokens, arquitectura por capas y diseño escalable. Pensada como backend base reutilizable para múltiples productos. Stack: FastAPI, Pydantic, Supabase, JWT.",
    img: "/src/assets/cloud-api.jpg",
    stack: {
      python: true,
      fastapi: true,
      db: true,
    },
  },
];
