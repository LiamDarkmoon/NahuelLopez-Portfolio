type Project = {
  name: string;
  description: string;
  img: string;
};

export const projects: Project[] = [
  {
    name: "Clouboard",
    description:
      "Plataforma web fullstack para gestión de eventos y contenido en tiempo real. Arquitectura API-first con autenticación, roles y sistema de eventos. Stack: Astro, React, Tailwind.",
    img: "/src/assets/cloudboard.jpg",
  },
  {
    name: "Cloud API",
    description:
      "API modular orientada a servicios con autenticación JWT, refresh tokens, arquitectura por capas y diseño escalable. Pensada como backend base reutilizable para múltiples productos. Stack: FastAPI, Pydantic, Supabase, JWT.",
    img: "/src/assets/cloud-api.jpg",
  },
];
