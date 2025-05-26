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

export type CategoryListProps = {
  categories: Category[]
}
