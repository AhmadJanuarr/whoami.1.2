export interface ProjectCardProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  link: string
  linkText: string
}
export const PROJECT_LIST: ProjectCardProps[] = [
  {
    imageSrc: "/assets/projects/project-dapur.jpg",
    imageAlt: "Dapur tradisional",
    title: "Dapur Tradisional",
    description:
      "A website for a traditional Indonesian restaurant that offers a wide range of traditional Indonesian dishes. The website is built with Reactjs for the frontend, Tailwind CSS for the styling expressjs for the backend, and PostgreSQL for the database.",
    link: "https://dapur-tradisional.vercel.app/",
    linkText: "Visit Dapur Tradisional",
  },
  {
    imageSrc: "/assets/projects/project-bento.jpg",
    imageAlt: "Landing page",
    title: "Bentodesu",
    description:
      "A landing page for a food delivery service that offers a wide range of traditional Indonesian dishes. The website is built with Reactjs for the frontend",
    link: "https://bentodesu.vercel.app/",
    linkText: "View Bentodesu",
  },
  {
    imageSrc: "/assets/projects/project-ebook.jpg",
    imageAlt: "Ebook",
    title: "Amara Ebook",
    description:
      "An ebook platform that allows users to read, bookmark and take notes on digital books. Features include progress tracking, highlights, and a personalized reading experience. Built with Next.js and integrated with a digital rights management system.",
    link: "#",
    linkText: "View Amara Ebook",
  },
  {
    imageSrc: "/assets/projects/project-diagnosa.jpg",
    imageAlt: "Sistem Pakar",
    title: "Sistem Pakar Diagnosa Penyakit",
    description:
      "A system for diagnosing and treating diseases using a knowledge base of medical information. Built with PHP, MySQL, and Bootstrap for the frontend, and PHP, MySQL, and Bootstrap for the backend.",
    link: "https://github.com/AhmadJanuarr/ayam-sehat",
    linkText: "View Sistem Pakar Diagnosa Penyakit",
  },
]

export const FEATURED_PROJECT_LIST = [
  {
    id: 1,
    title: "Dapur Tradisional",
    description: "A website for a traditional Indonesian restaurant that offers a wide range of traditional Indonesian dishes.",
    image: "/assets/projects/project-dapur.jpg",
    author: "Ahmad Januar",
    authorAvatar: "/assets/images/profile-2.jpg",
    date: "March 15, 2024",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Express.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Bentodesu",
    description: "A landing page for a food delivery service that offers a wide range of traditional Indonesian dishes.",
    image: "/assets/projects/project-bento.jpg",
    author: "Ahmad Januar",
    authorAvatar: "/assets/images/profile-2.jpg",
    date: "March 10, 2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Sistem Pakar",
    description: "A system for diagnosing and treating diseases using a knowledge base of medical information.",
    image: "/assets/projects/project-diagnosa.jpg",
    author: "Ahmad Januar",
    authorAvatar: "/assets/images/profile-2.jpg",
    date: "March 5, 2024",
    technologies: ["PHP", "MySQL", "Bootstrap"],
  },
]
