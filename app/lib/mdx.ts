import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content")

export type Post = {
  slug: string
  title: string
  date: string
  summary: string
  coverImage: string
  imageName: string
  category: string[]
  content: string
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.mdx$/, "")
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    title: data.title || "",
    date: data.publishedAt || "",
    summary: data.summary || "",
    coverImage: data.coverImage || "",
    imageName: data.imageName || "",
    category: data.category || [],
    content,
  }
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory)
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => getPostBySlug(file))
    .sort((a, b) => (a.date < b.date ? 1 : -1))

  return posts
}
