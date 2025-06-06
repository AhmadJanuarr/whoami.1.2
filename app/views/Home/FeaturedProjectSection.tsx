"use client"
import { PROJECTS } from "@/datas/project-list"
import { motion } from "framer-motion"
import FollowerPointerCard from "@/components/ui/follower-pointer-card"
import Image from "next/image"
import Link from "next/link"

const TitleComponent = ({ title, avatar }: { title: string; avatar: string }) => (
  <div className="flex items-center space-x-2">
    <Image src={avatar} height="20" width="20" alt="thumbnail" className="rounded-full border-2 border-white" />
    <p>{title}</p>
  </div>
)

export function FeaturedProjectSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="container relative mx-auto">
        <motion.div className="mb-16 text-center">
          <h2 className="border-y py-2 text-sm font-medium uppercase tracking-wider text-accentColor">Our Work</h2>
          <div className="sizeTitle mx-auto flex w-full items-center justify-center border-b px-4 py-5 text-textPrimary lg:text-[40px]">
            <h1 className="max-w-2xl ">Featured projects development studio</h1>
          </div>
        </motion.div>
        <div className="relative px-5">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 3).map((project) => (
              <FollowerPointerCard key={project.id} title={<TitleComponent title={project.author} avatar={project.authorAvatar} />}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-4 transition duration-300">
                  <div className="relative h-64 w-full overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={500}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="sizeSubtitle mt-6 flex flex-col gap-4 p-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-normal text-textSecondary">{project.date}</span>
                    </div>
                    <h2 className="group-hover:text-primary text-xl font-semibold text-textPrimary transition-colors duration-300 xl:text-2xl">
                      {project.title}
                    </h2>
                    <p className="line-clamp-3 font-normal text-textSecondary">{project.description}</p>
                    <Link
                      href={`/project/${project.id}`}
                      className="sizeSubtitle rounded-xl bg-zinc-100 px-4 py-2 text-center text-sm text-textSecondary transition-all duration-200 hover:font-semibold hover:text-textPrimary"
                    >
                      View Project
                    </Link>
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
