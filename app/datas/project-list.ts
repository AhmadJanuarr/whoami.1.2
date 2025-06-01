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
    image: "/assets/projects/project-dapur.jpg",
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
    title: "Amara Ebook",
    description:
      "An ebook platform that allows users to read, bookmark and take notes on digital books. Features include progress tracking, highlights, and a personalized reading experience. Built with Next.js and integrated with a digital rights management system.",
    image: "/assets/projects/project-ebook.jpg",
    author: "Ahmad Januar",
    authorAvatar: "/assets/images/profile-2.jpg",
    date: "March 8, 2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "#",
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
