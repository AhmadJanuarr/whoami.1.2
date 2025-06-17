import { motion } from "framer-motion"
import { Template } from "./types"

interface TemplateListProps {
  templates: Template[]
  onTemplateClick: (question: string) => void
}

export const TemplateList = ({ templates, onTemplateClick }: TemplateListProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute bottom-28 overflow-hidden border-y border-gray-100 bg-white"
    >
      <div className="space-y-1 p-2">
        {templates.map((item, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onTemplateClick(item.q)}
            className="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 transition-colors hover:bg-gray-50"
          >
            {item.q}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
