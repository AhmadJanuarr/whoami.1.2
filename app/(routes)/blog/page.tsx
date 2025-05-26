import { getAllPosts } from "@/lib/mdx"
import BlogCardList from "./BlogCardList"
import CategoryList from "./CategoryList"
import { Category } from "@/types/components"

export default function BlogPage() {
  const posts = getAllPosts()
  const categories: Category[] = [
    "All",
    "Programming",
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Machine Learning",
    "Artificial Intelligence",
    "Architecture",
  ]
  return (
    <section className="w-full overflow-hidden">
      <div className="h-14 w-full border-b" />
      <div className="mb-8 px-4 py-8 text-center shadow-sm md:mb-16">
        <h1 className="text-2xl font-semibold text-gray-900 md:text-4xl">Exploring the World of Code: Programming Insights</h1>
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6">
          <h2 className="mb-3 text-lg font-medium text-gray-900">Categories</h2>
          <CategoryList categories={categories} />
        </div>
        <div className="flex flex-col gap-4 pb-8">
          {posts.map((post, index) => (
            <BlogCardList key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
