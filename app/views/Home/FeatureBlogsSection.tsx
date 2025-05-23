"use client"

import { motion } from "framer-motion"
import { FEATURED_BLOGS } from "@/datas/blogs"
import SpotlightCard from "@/components/ui/spotlight-card"
import Image from "next/image"

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
      <div className="container relative mx-auto overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="border-y py-2 text-sm font-medium uppercase tracking-wider text-accentColor">Latest Articles</h2>
          <div className="sizeTitle mx-auto flex w-full items-center justify-center border-b px-4 py-5 text-textPrimary lg:text-[40px]">
            <h1 className="max-w-2xl"> I like to share experiences and experiments in writing.</h1>
          </div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid h-auto w-full grid-cols-1 gap-8 px-5 py-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURED_BLOGS.map((blog) => (
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
