"use client"
import { FollowerPointerCard } from "@/components/ui/follower-pointer-card"
import { PROJECT_LIST, ProjectCardProps } from "@/datas/project-list"
import { motion } from "framer-motion"
import { PiArrowArcRight } from "react-icons/pi"
import Link from "next/link"

const ProjectCard = ({ imageSrc, imageAlt, title, description, link, linkText }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="relative mb-10 rounded-3xl"
    >
      <FollowerPointerCard title="View Project">
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <div className="relative flex h-[250px] items-center justify-center overflow-hidden rounded-xl border border-borderPrimary bg-[#FCFCFC] p-4 md:h-[500px] md:p-8 lg:h-[700px] lg:p-16">
            <img src={imageSrc} alt={imageAlt} className="h-auto w-full rounded-xl border border-borderPrimary object-cover object-center" />
          </div>
        </Link>
      </FollowerPointerCard>
      <div className="mt-4 flex flex-col gap-3 md:mt-6 md:gap-4 lg:mt-8 lg:gap-6">
        <div className="max-w-2xl space-y-2 md:space-y-3">
          <h2 className="text-xl font-bold tracking-tight text-textPrimary md:text-2xl lg:text-3xl">{title}</h2>
          <p className="lg:sizeSubtitle text-sm leading-relaxed text-gray-400/90 md:text-base">{description}</p>
        </div>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex w-fit items-center gap-1 text-xs font-medium text-accentColor transition-all hover:text-accentColor/90 md:gap-2 md:text-sm"
        >
          <span className="border-b border-transparent transition-colors group-hover/link:border-accentColor/90">{linkText}</span>
          <PiArrowArcRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1 md:h-4 md:w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section className="w-full overflow-hidden">
      <div className="mb-16 text-center">
        <div className="h-28 w-full border-b lg:h-14" />
        <div className=" mx-auto flex w-full items-center justify-center border-y py-5">
          <h1 className="sizeTitle max-w-xl font-semibold text-textPrimary lg:text-[40px]">A collection of my favorite works.</h1>
        </div>
      </div>
      <div className="mx-auto w-full max-w-6xl px-4">
        {PROJECT_LIST.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
