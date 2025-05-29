import { getAllPosts } from "@/lib/mdx"
import BlogClient from "./BlogClient"

export default function BlogPage() {
  const posts = getAllPosts()

  return <BlogClient initialPosts={posts} />
}
