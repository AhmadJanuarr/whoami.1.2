"use client"

import SpotlightCard from "@/components/ui/spotlight-card"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const blogData = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    description:
      "Dive deep into the world of Next.js 14 and discover its powerful features like Server Components, App Router, and enhanced performance optimizations. Learn how to build modern, scalable web applications with the latest React framework.",
    image: "/assets/images/blog-nextjs.png",
    date: "March 15, 2024",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Mastering TypeScript",
    description:
      "Explore advanced TypeScript concepts including generics, utility types, and type inference. Understand how to write type-safe code and leverage TypeScript's powerful features to build robust applications with better maintainability.",
    image: "/assets/images/blog-typescript.png",
    date: "March 10, 2024",
    category: "Programming",
  },
  {
    id: 3,
    title: "Building Beautiful UIs with Tailwind CSS",
    description:
      "Master the art of creating stunning user interfaces using Tailwind CSS. Learn advanced techniques for responsive design, custom animations, and component composition. Discover how to build consistent and accessible designs efficiently.",
    image: "/assets/images/blog-tailwindcss.png",
    date: "March 5, 2024",
    category: "Design",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function FeatureBlogsSection() {
  return (
    <section className="relative w-full ">
      <div className="container relative mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16 text-center">
          <h2 className="border-y py-2 text-sm font-medium uppercase tracking-wider text-accentColor">Latest Articles</h2>
          <div className="sizeTitle mx-auto flex w-full items-center justify-center border-b py-5 text-textPrimary lg:text-[40px]">
            <h1 className="max-w-2xl "> I like to share experiences and experiments in writing.</h1>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid h-auto w-full grid-cols-1 gap-8 px-5 py-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {blogData.map((blog) => (
            <motion.div key={blog.id} variants={cardVariants}>
              <SpotlightCard className="group flex h-full flex-col overflow-hidden" spotlightColor="rgba(61, 144, 215, 0.2)">
                <div className="relative h-64 w-full overflow-hidden rounded-xl">
                  <Image src={blog.image} alt={blog.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="sizeSubtitle mt-6 flex flex-col gap-4 p-2">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full py-1 text-xs font-medium">{blog.category}</span>
                    <span className="text-xs font-normal text-textSecondary">{blog.date}</span>
                  </div>
                  <h2 className="group-hover:text-primary text-xl font-semibold text-textPrimary transition-colors duration-300 xl:text-2xl">
                    {blog.title}
                  </h2>
                  <p className=" line-clamp-3 font-normal text-textSecondary">{blog.description}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
