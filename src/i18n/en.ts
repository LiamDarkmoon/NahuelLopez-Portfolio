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
    button: "Let's Contact",
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
          "Fullstack web platform for real-time event and content management. API-first architecture with authentication, roles, and event-driven systems. Stack: Astro, React, Tailwind.",
        img: "/images/cloudboard.jpg",
        smImg: "/images/cloudboard-sm.jpg",
        stack: {
          react: true,
          astro: true,
          tailwind: true,
          typescript: true,
        },
        page: {
          hero: {
            title: "Cloudboard",
            tagline: "Fullstack real-time event management platform",
          },
          overview:
            "Cloudboard is a real-time event and content management platform built on an API-first architecture, focused on scalability, modularity, and separation of concerns.",
          problem:
            "Most event platforms mix UI logic, business logic, and data layers into monolithic systems that are hard to scale and maintain.",
          solution:
            "A decoupled architecture was designed, with an independent backend, authentication system, roles, and an event-oriented model.",
          architecture: {
            frontend: "Astro + React",
            styling: "Tailwind",
            backend: "API-first",
            auth: "Token-based authentication system",
            structure: "Decoupled modular architecture",
          },
          technicalFocus: [
            "Separation of concerns",
            "API-first architecture",
            "Modular systems",
            "Scalability",
            "Service reusability",
          ],
          vision:
            "Cloudboard is not just a product — it’s a platform foundation for building multiple real-time systems.",
        },
      },
      {
        id: 2,
        name: "Cloudboard-API",
        slug: "cloudboard-api",
        url: "https://api-cloudboard.vercel.app",
        description:
          "Service-oriented modular API with JWT authentication, refresh tokens, layered architecture, and scalable design. Built as a reusable backend foundation for multiple products. Stack: FastAPI, Pydantic, Supabase, JWT.",
        img: "/images/cloud-api.jpg",
        smImg: "/images/cloud-api-sm.jpg",
        stack: {
          python: true,
          fastapi: true,
          db: true,
        },
        page: {
          hero: {
            title: "Cloudboard API",
            tagline: "Reusable service-oriented backend core",
          },
          overview:
            "Cloudboard API is a service-oriented backend designed as a reusable core for multiple products.",
          problem:
            "Many backends are tightly coupled to a single frontend, limiting reuse and scalability.",
          solution:
            "A modular API was designed with JWT authentication, refresh tokens, layered architecture, and domain separation.",
          architecture: {
            framework: "FastAPI",
            validation: "Pydantic",
            database: "Supabase",
            auth: "JWT + Refresh Tokens",
            structure: "Layered architecture",
          },
          technicalFocus: [
            "API as a product",
            "Backend as infrastructure",
            "Frontend as a client",
            "Decoupled domain logic",
          ],
          vision:
            "A reusable backend core capable of powering multiple platforms, products, and interfaces.",
        },
      },
      {
        id: 3,
        name: "El Templo del Lobo",
        slug: "el-templo-del-lobo",
        url: "https://eltemplodellobo.vercel.app",
        description:
          "Web platform for managing characters and combat systems for Dungeons & Dragons campaigns. Stack: Next.js, React, Tailwind, Vercel Postgres.",
        img: "/images/el-templo-del-lobo.jpg",
        smImg: "/images/el-templo-del-lobo-sm.jpg",
        stack: {
          next: true,
          react: true,
          tailwind: true,
          db: true,
        },
        page: {
          hero: {
            title: "El Templo del Lobo",
            tagline: "Digital platform for tabletop campaigns",
          },
          overview:
            "Web platform for managing campaigns, characters, and combat systems for Dungeons & Dragons.",
          problem:
            "Campaigns usually rely on scattered tools like PDFs, notes, physical sheets, and disconnected systems.",
          solution:
            "A centralized system for character management, combat tracking, and campaign persistence.",
          architecture: {
            frontend: "Next.js + React",
            styling: "Tailwind",
            database: "Vercel Postgres",
            model: "Relational schema",
          },
          technicalFocus: [
            "UX for Dungeon Masters",
            "Campaign persistence",
            "Structured data management",
            "Digital tabletop experience",
          ],
          vision:
            "A digital companion for tabletop storytelling without killing the magic of imagination.",
        },
      },
      {
        id: 4,
        name: "N&V",
        slug: "n-and-v",
        url: "https://nahuelyviqui.vercel.app",
        description:
          "Interactive wedding invitation with custom design, animations, and countdown experience. Stack: Astro, React, Tailwind.",
        img: "/images/n-and-v.jpg",
        smImg: "/images/n-and-v-sm.jpg",
        stack: {
          astro: true,
          react: true,
          tailwind: true,
        },
        page: {
          hero: {
            title: "N&V",
            tagline: "Interactive digital wedding invitation",
          },
          overview:
            "Digital wedding invitation designed as an interactive experience, not a static page.",
          solution:
            "The invitation as an emotional experience, not just information.",
          technicalFocus: [
            "Animations",
            "Countdown system",
            "Custom design",
            "Dynamic interactions",
            "Responsive experience",
          ],
          vision: "Turning an invitation into a memorable digital experience.",
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
