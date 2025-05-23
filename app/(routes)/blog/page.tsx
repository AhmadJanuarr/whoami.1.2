"use client"
import { ARTICLE_LIST } from "@/datas/blogs"
import { useState } from "react"
import { motion } from "framer-motion"

type Article = {
  id: number
  title: string
  description: string
  date: string
  category: string
}
type Category = "All" | "Programming" | "Web Development" | "Mobile Development" | "UI/UX Design" | "Machine Learning" | "Artificial Intelligence"
type BlogCardListProps = {
  article: Article
  index: number
  selectedCategory: Category
  setSelectedCategory: (category: Category) => void
}
type CategoryListProps = {
  categories: Category[]
  selectedCategory: Category
  setSelectedCategory: (category: Category) => void
}

const BlogCardList = ({ article, index, selectedCategory, setSelectedCategory }: BlogCardListProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md md:grid md:grid-cols-[auto_150px_200px] md:items-start md:gap-8"
    >
      <div className="sizeSubtitle flex flex-col gap-3">
        <span className="text-xs font-medium text-accentColor">{article.category}</span>
        <h3 className="font-medium text-gray-900 group-hover:text-accentColor">{article.title}</h3>
        <p className="text-sm text-gray-600">{article.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm text-accentColor">Read article →</p>
          <p className="text-gray-500 md:hidden">{article.date}</p>
        </div>
      </div>
      <span className="hidden md:inline" />
      <div className="sizeSubtitle hidden p-4 text-gray-500 md:block">
        <h3 className="text-sm">{article.date}</h3>
      </div>
    </motion.div>
  )
}

const CategoryList = ({ categories, selectedCategory, setSelectedCategory }: CategoryListProps) => {
  return (
    <div className="no-scrollbar overflow-x-auto">
      <ul className="flex gap-3 whitespace-nowrap px-1 text-sm text-gray-600">
        {categories.map((category) => (
          <li
            onClick={() => setSelectedCategory(category)}
            key={category}
            className={`cursor-pointer rounded-full px-4 py-2 transition-all ${
              selectedCategory === category ? "bg-accentColor text-white" : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All")
  const heading = selectedCategory === "All" ? "Exploring the World of Code: Programming Insights" : `Articles in ${selectedCategory}`
  const filteredArticles = ARTICLE_LIST.filter((article) => article.category === selectedCategory || selectedCategory === "All")

  return (
    <section className="w-full overflow-hidden bg-gray-50">
      <div className="mb-8 bg-white px-4 py-8 text-center shadow-sm md:mb-16">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-semibold text-gray-900 md:text-4xl">
          {heading}
        </motion.h1>
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6">
          <h2 className="mb-3 text-lg font-medium text-gray-900">Categories</h2>
          <CategoryList
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={[
              "All",
              "Programming",
              "Web Development",
              "Mobile Development",
              "UI/UX Design",
              "Machine Learning",
              "Artificial Intelligence",
            ]}
          />
        </div>
        <div className="flex flex-col gap-4 pb-8">
          {filteredArticles.map((article, index) => (
            <BlogCardList
              key={article.id}
              article={article}
              index={index}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
