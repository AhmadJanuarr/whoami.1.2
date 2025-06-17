import { Template } from "./types"

export const templates: Template[] = [
  {
    q: "Who am I?",
    a: "Hello! I am Ahmad Januar Amriyansah, usually called Ahmad, a fullstack developer and a graduate of Informatics from the University of Teknokrat Indonesia.",
  },
  {
    q: "What are your skills?",
    a: "I focus on fullstack development with Next.js, React.js, Tailwind CSS, Framer Motion, expressJs, and nodeJs.",
  },
  {
    q: "want to know me more details?",
    a: "You can scroll down and there is a footer there I have provided a link that will take you to my place",
    links: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/ahmad-januar-amriyansah-0000000000/",
      },
      {
        name: "Github",
        url: "https://github.com/ahmadjanuaramriyansah",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/madds.dev/",
      },
    ],
  },
]
