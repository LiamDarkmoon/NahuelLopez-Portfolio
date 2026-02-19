import type { DictionarySchema } from "../lib/types";

export const en = {
  nav: {
    button: "Theme",
  },
  hero: {
    top: "Hey there",
    title: "I'm Nahuel Lopez",
    subtitle: "Frontend Developer and Ux/Ui designer",
    description:
      "This Portfolio is built with Astro using React and TailwindCSS, come take a look and see some of my latest projects and ideas. Hope you enjoy and apretiate it",
    button: "Let's get in touch",
  },
  side: {
    menu: {
      home: "Home",
      projects: "Projects",
      about: "About me",
    },
  },
  footer: {
    name: "Nahuel Lopez",
    description: "Built whit Astro & React + TailwindCSS",
    copy: "© 2026 NL — Digital Design & Systems",
  },
  about: {
    title: "About me",
    text: "I’m a web and UX designer with an engineering mindset. I don’t build pages — I design systems. I focus on creating digital products that are clear, scalable, and built for real people, not vanity metrics. I work at the intersection of design and development, where user experience, architecture, and performance become a single discipline. I care deeply about clarity, structure, and intentional simplicity. Good design solves problems. Good engineering makes sure they don’t come back.",
    p: "You can see my full background here →",
    link: "Download Resume",
  },
  projects: {
    title: "Projects",
    heroTittle: "Latest Projects",
    text: "Here are some of my latest projects, built with a variety of technologies and approaches. Each one is a unique exploration of design and development, showcasing my skills and creativity. Feel free to explore and see what I've been working on!",
    link: "Click here to visit",
    linkP1: "Check out the",
    linkP2: "page to see all projects.",
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
          "API modular orientada a servicios con autenticación JWT, refresh tokens, arquitectura por capas y diseño escalable. Pensada como backend base reutilizable para múltiples productos. Stack: FastAPI, Pydantic, Supabase, JWT.",
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
        name: "El Templo del lobo",
        slug: "el-templo-del-lobo",
        url: "https://eltemplodellobo.vercel.app",
        description:
          "Plataforma web para la gestión de personajes y combates de dungeons and dragons. Stack: Next.js, React, Tailwind, y vercel postgres.",
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
          "Invitacion de boda interactiva con diseño personalizado, animaciones y cuenta regresiva. Stack: Astro, React, Tailwind.",
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
    title: "Leave a message",
    fields: {
      name: "Name",
      email: "Email",
      message: "Message",
      button: "Send message",
    },
    errors: {
      name: "Please enter your name",
      email: "Please enter a valid email",
      message: "Please enter a message",
    },
    error: "Sending error 💥",
    success: "Message sent 🚀",
  },
} satisfies DictionarySchema;

export type En = typeof en;
