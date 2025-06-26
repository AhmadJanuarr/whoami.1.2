"use client"
import { CategoryListProps } from "@/types/components"

export default function CategoryList({ categories, selectedCategory, setSelectedCategory }: CategoryListProps) {
  return (
    <div className="no-scrollbar overflow-x-auto py-1">
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
