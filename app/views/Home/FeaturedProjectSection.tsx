"use client"
import { PROJECTS } from "@/datas/project-list"
import { motion } from "framer-motion"
import FollowerPointerCard from "@/components/ui/follower-pointer-card"
import Image from "next/image"

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
                <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-300">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full transform bg-cover object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="flex flex-col justify-between p-6">
                    <div className="">
                      <h2 className="group-hover:text-primary mb-3 text-xl font-bold text-textPrimary transition-colors duration-300">
                        {project.title}
                      </h2>
                      <p className="sizeSubtitle mb-4 line-clamp-2 text-textSecondary">{project.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-500">{project.date}</span>
                      <button className="sizeSubtitle rounded-xl bg-zinc-100 px-4 py-2 text-sm text-textSecondary transition-transform duration-300 hover:scale-105 hover:text-textPrimary">
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
