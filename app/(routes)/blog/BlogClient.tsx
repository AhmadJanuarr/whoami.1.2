"use client"

import { Category } from "@/types/components"
import { useState } from "react"
import { Post } from "./[slug]/LatestBlog"
import BlogCardList from "./BlogCardList"
import CategoryList from "./CategoryList"

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

interface BlogClientProps {
  initialPosts: Post[]
}

export default function BlogClient({ initialPosts }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All")

  const filteredPosts = initialPosts.filter((post) => {
    if (selectedCategory === "All") return true
    return post.category.includes(selectedCategory)
  })

  const heading = selectedCategory === "All" ? "Exploring the World of Code: Programming Insights" : `Articles in ${selectedCategory}`

  return (
    <section className="w-full overflow-hidden ">
      <div className="h-14 w-full border-b" />
      <div className="mb-8 px-4 py-8 text-center shadow-sm md:mb-16">
        <h1 className="text-2xl font-semibold text-gray-900 md:text-4xl">{heading}</h1>
      </div>
      <div className="mx-auto  max-w-7xl px-4">
        <div className="mb-6">
          <h2 className="mb-3 text-lg font-medium text-gray-900">Categories</h2>
          <CategoryList categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </div>
        <div className="flex min-h-screen flex-col gap-4 pb-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => <BlogCardList key={post.slug} post={post} index={index} />)
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="mb-4 animate-bounce text-3xl font-light text-textPrimary">✧</div>
              <p className="text-lg font-light tracking-wide text-textPrimary">No articles found in this category</p>
              <p className="mt-2 text-sm text-textSecondary">Try selecting a different category</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
