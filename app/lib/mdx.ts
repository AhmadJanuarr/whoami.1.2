import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content")

// Add cache for posts
let postsCache: Post[] | null = null
let lastFetchTime = 0
const CACHE_DURATION = 3600 * 1000 // 1 hour in milliseconds

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

export function getPostBySlug(slug: string): Post | null {
  try {
    const realSlug = slug.replace(/\.mdx$/, "")
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
    if (!fs.existsSync(fullPath)) {
      console.error(`File not found: ${fullPath}`)
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    // Validate required fields
    if (!data.title || !data.publishedAt || !data.summary || !data.coverImage) {
      console.error(`Missing required fields in ${realSlug}.mdx`)
      return null
    }
    return {
      slug: realSlug,
      title: data.title,
      date: data.publishedAt,
      summary: data.summary,
      coverImage: data.coverImage,
      imageName: data.imageName || "",
      category: Array.isArray(data.category) ? data.category : [],
      content: content || "",
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getAllPosts(): Post[] {
  try {
    // Check cache first
    const now = Date.now()
    if (postsCache && now - lastFetchTime < CACHE_DURATION) {
      return postsCache
    }

    if (!fs.existsSync(postsDirectory)) {
      console.error(`Posts directory not found: ${postsDirectory}`)
      return []
    }

    const files = fs.readdirSync(postsDirectory)
    const posts = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => getPostBySlug(file))
      .filter((post): post is Post => post !== null)
      .sort((a, b) => (a.date < b.date ? 1 : -1))

    // Update cache
    postsCache = posts
    lastFetchTime = now

    return posts
  } catch (error) {
    console.error("Error reading posts:", error)
    return []
  }
}
