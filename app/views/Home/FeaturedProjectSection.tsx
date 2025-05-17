import { FollowerPointerCard } from "@/components/ui/follower-pointer-card"
import Image from "next/image"

const TitleComponent = ({ title, avatar }: { title: string; avatar: string }) => (
  <div className="flex items-center space-x-2">
    <Image src={avatar} height="20" width="20" alt="thumbnail" className="rounded-full border-2 border-white" />
    <p>{title}</p>
  </div>
)

const projects = [
  {
    id: 1,
    title: "Modern E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070",
    author: "John Doe",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
    date: "March 15, 2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "An advanced AI tool that helps creators generate high-quality content using machine learning models.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
    author: "Jane Smith",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070",
    date: "March 10, 2024",
    technologies: ["Python", "TensorFlow", "React"],
  },
  {
    id: 3,
    title: "Smart Home Dashboard",
    description: "A comprehensive IoT dashboard for monitoring and controlling smart home devices in real-time.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070",
    author: "Mike Johnson",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070",
    date: "March 5, 2024",
    technologies: ["React", "Node.js", "MongoDB"],
  },
]

export function FeaturedProjectSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="container relative mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-accentColor border-y py-2 text-sm font-medium uppercase tracking-wider">Our Work</h2>
          <div className="sizeTitle mx-auto flex w-full items-center justify-center border-b py-5 text-textPrimary lg:text-[40px]">
            <h1 className="max-w-2xl">Featured projects development studio</h1>
          </div>
        </div>
        <div className="relative px-5">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <FollowerPointerCard key={project.id} title={<TitleComponent title={project.author} avatar={project.authorAvatar} />}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-300">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full transform object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="p-6">
                    <h2 className="group-hover:text-primary mb-3 text-xl font-bold text-textPrimary transition-colors duration-300">
                      {project.title}
                    </h2>
                    <p className="sizeSubtitle mb-4 line-clamp-2 text-sm text-textSecondary">{project.description}</p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-textSecondary">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-500">{project.date}</span>
                      <button className="rounded-xl bg-zinc-100 px-4 py-2 text-xs text-textSecondary transition-transform duration-300 hover:scale-105 hover:text-textPrimary">
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </FollowerPointerCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
