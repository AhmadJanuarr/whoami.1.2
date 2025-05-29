"use client"

import { motion } from "framer-motion"
import { Post } from "@/lib/mdx"
import { useRouter } from "next/navigation"

type BlogCardListProps = {
  post: Post
  index: number
}

export default function BlogCardList({ post, index }: BlogCardListProps) {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/blog/${post.slug}`)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md md:grid md:grid-cols-[auto_150px_200px] md:items-start md:gap-8"
    >
      <div className="sizeSubtitle flex flex-col gap-3">
        <h3 className="cursor-pointer font-medium text-gray-900 group-hover:text-accentColor" onClick={handleClick}>
          {post.title}
        </h3>
        <p className="text-sm text-gray-600">{post.summary}</p>
        <div className="flex items-center justify-between">
          <p className="cursor-pointer text-sm text-accentColor" onClick={handleClick}>
            Read article →
          </p>
          <p className="text-gray-500 md:hidden">{post.date}</p>
        </div>
      </div>
      <span className="hidden md:inline" />
      <div className="sizeSubtitle hidden p-4 text-gray-500 md:block">
        <h3 className="text-sm">{post.date}</h3>
      </div>
    </motion.div>
  )
}
