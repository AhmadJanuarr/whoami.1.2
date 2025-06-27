export interface ProjectProps {
  id: number
  title: string
  description: string
  image: string
  author: string
  authorAvatar: string
  date: string
  technologies: string[]
  href: string
}

export const PROJECTS: ProjectProps[] = [
  {
    id: 1,
    title: "Dapur Tradisional",
    description:
      "A website for a traditional Indonesian restaurant that offers a wide range of traditional Indonesian dishes. The website is built with Reactjs for the frontend, Tailwind CSS for the styling expressjs for the backend, and PostgreSQL for the database.",
    image: "/assets/projects/project-dapur-tradisional.webp",
    author: "Ahmad Januar",
    authorAvatar: "/assets/images/profile-2.jpg",
    date: "March 15, 2024",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Express.js", "PostgreSQL"],
    href: "https://dapur-tradisional.vercel.app/",
  },
  {
    id: 2,
    title: "Bentodesu",
    description:
      "A landing page for a food delivery service that offers a wide range of traditional Indonesian dishes. The website is built with Reactjs for the frontend",
    image: "/assets/projects/project-bento.jpg",
    author: "Ahmad Januar",
    authorAvatar: "/assets/images/profile-2.jpg",
    date: "March 10, 2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://bentodesu.vercel.app/",
  },
  {
    id: 3,
    title: "Magic Image",
    description:
      "Magic image is a website convert image to webp format and download it. The website is built with Next.js for the frontend and integrated with the OpenAI API for the image generation.",
    image: "/assets/projects/project-convert.webp",
    author: "Ahmad Januar",
    authorAvatar: "/assets/images/profile-2.jpg",
    date: "March 8, 2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://magic-image-sigma.vercel.app/",
  },
  {
    id: 4,
    title: "Sistem Pakar Diagnosa Penyakit",
    description:
      "A system for diagnosing and treating diseases using a knowledge base of medical information. Built with PHP, MySQL, and Bootstrap for the frontend, and PHP, MySQL, and Bootstrap for the backend.",
    image: "/assets/projects/project-diagnosa.jpg",
    author: "Ahmad Januar",
    authorAvatar: "/assets/images/profile-2.jpg",
    date: "March 5, 2024",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    href: "https://github.com/AhmadJanuarr/ayam-sehat",
  },
]
