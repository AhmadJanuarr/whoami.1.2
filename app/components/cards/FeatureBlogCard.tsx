"use client"
import { motion } from "framer-motion"
import { Post } from "@/lib/mdx"
import SpotlightCard from "../ui/spotlight-card"
import Image from "next/image"
import Link from "next/link"

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
export const FeatureBlogCard = ({ blog }: { blog: Post }) => {
  const category = blog.category.length > 0 ? blog.category[0] : ""

  return (
    <motion.div key={blog.slug} variants={cardVariants}>
      <SpotlightCard className="group flex h-full flex-col overflow-hidden dark:bg-bgDarkSecondary" spotlightColor="rgba(61, 144, 215, 0.2)">
        <Link href={`/blogs/${blog.slug}`} className="relative h-64 w-full overflow-hidden rounded-lg">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Link>
        <div className="sizeSubtitle mt-6 flex flex-col gap-4 p-2">
          <div className="flex items-center gap-3">
            <span className="rounded-full py-1 text-xs font-medium">{category}</span>
            <span className="text-xs font-normal text-textSecondary dark:text-textDarkSecondary">{blog.date}</span>
          </div>
          <h2 className="group-hover:text-primary text-xl font-semibold text-textPrimary transition-colors duration-300 dark:text-textDarkPrimary xl:text-2xl">
            {blog.title}
          </h2>
          <p className="line-clamp-3 font-normal text-textSecondary dark:text-textDarkSecondary dark:opacity-80 ">{blog.summary}</p>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}
