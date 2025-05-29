export type BentoCardProps = {
  children: React.ReactNode
  href?: string
  className?: string
  isButton?: boolean
}

export type Category =
  | "All"
  | "Programming"
  | "Web Development"
  | "Database"
  | "JavaScript"
  | "Front End Development"
  | "Back End Development"
  | "Mobile Development"
  | "UI/UX Design"
  | "Machine Learning"
  | "Artificial Intelligence"
  | "Architecture"
  | "Data Science"
  | "Prompt"
  | "AI"
  | "Design"
  | "Digital Art"
  | "Technology"

export type CategoryListProps = {
  selectedCategory: Category
  setSelectedCategory: (category: Category) => void
  categories: Category[]
}
