import type { DictionarySchema } from "../lib/types";

export const es = {
  nav: {
    button: "Tema",
  },
  hero: {
    top: "Hey",
    title: "Soy Nahuel Lopez",
    subtitle: "Desarrollador Frontend y Diseñador UX/UI",
    description:
      "Este portfolio está construido con Astro usando React y TailwindCSS. Pasá a ver algunos de mis proyectos e ideas más recientes. Ojalá te guste y te sirva como referencia.",
    button: "Hablemos",
  },
  side: {
    menu: {
      home: "Inicio",
      projects: "Proyectos",
      about: "Sobre mí",
    },
  },
  footer: {
    name: "Nahuel Lopez",
    description: "Construido con Astro, React y TailwindCSS",
    copy: "© 2026 NL — Diseño digital y sistemas",
  },
  about: {
    title: "Sobre mí",
    text: "Soy diseñador web y UX con mentalidad de ingeniero. No construyo páginas: diseño sistemas. Me especializo en crear productos digitales claros, escalables, pensados para personas reales. Trabajo justo entre el diseño y el desarrollo, donde la experiencia de usuario, la arquitectura y el rendimiento se convierten en uno. Me obsesiona la claridad, la estructura y la simplicidad. Diseñar bien es resolver problemas. Construir bien es hacer que no vuelvan.",
    p: "Podés ver mi cv acá →",
    link: "Descargar CV",
  },
  projects: {
    title: "Proyectos",
    heroTittle: "Últimos proyectos",
    text: "Estos son algunos de mis proyectos más recientes, construidos con distintas tecnologías y enfoques. Cada uno es una exploración real de diseño y desarrollo, donde se cruzan arquitectura, experiencia de usuario y ejecución técnica. Explorá y mirá en qué estuve trabajando.",
    link: "Click aqui para visitar",
    linkP1: "Visita",
    linkP2: "para ver todos los proyectos.",
    data: [
      {
        id: 1,
        name: "Cloudboard",
        slug: "cloudboard",
        url: "https://cloudboard-api.vercel.app",
        description:
          "Plataforma web fullstack para gestión de eventos y contenido en tiempo real. Arquitectura API-first con autenticación, roles y sistema de eventos. Stack: Astro, React, Tailwind.",
        img: "/images/cloudboard.jpg",
        smImg: "/images/cloudboard-sm.jpg",
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
          "API modular orientada a servicios con autenticación JWT, refresh tokens, arquitectura por capas y diseño escalable. Pensada como backend base reutilizable para múltiples productos. Stack: FastAPI, Pydantic, Supabase.",
        img: "/images/cloud-api.jpg",
        smImg: "/images/cloud-api-sm.jpg",
        stack: {
          python: true,
          fastapi: true,
          db: true,
        },
      },
      {
        id: 3,
        name: "El Templo del Lobo",
        slug: "el-templo-del-lobo",
        url: "https://eltemplodellobo.vercel.app",
        description:
          "Plataforma web para la gestión de personajes y combates de Dungeons & Dragons. Sistema de usuarios, lógica de juego y persistencia de datos. Stack: Next.js, React, Tailwind y Vercel Postgres.",
        img: "/images/el-templo-del-lobo.jpg",
        smImg: "/images/el-templo-del-lobo-sm.jpg",
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
          "Invitación de boda interactiva con diseño personalizado, animaciones y cuenta regresiva. Experiencia enfocada en narrativa visual y performance. Stack: Astro, React, Tailwind.",
        img: "/images/n-and-v.jpg",
        smImg: "/images/n-and-v-sm.jpg",
        stack: {
          astro: true,
          react: true,
          tailwind: true,
        },
      },
    ],
  },
  form: {
    title: "Dejá un mensaje",
    fields: {
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      button: "Enviar mensaje",
    },
    errors: {
      name: "Por favor, ingresá tu nombre",
      email: "Por favor, ingresá un correo válido",
      message: "Por favor, escribí un mensaje",
    },
    error: "Error de envio 💥",
    success: "Mensaje enviado 🚀",
  },
} satisfies DictionarySchema;

export type Es = typeof es;
