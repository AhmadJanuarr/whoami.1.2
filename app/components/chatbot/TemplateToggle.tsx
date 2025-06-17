import { motion } from "framer-motion"
import { PiCaretUpLight } from "react-icons/pi"

interface TemplateToggleProps {
  isOpen: boolean
  onToggle: () => void
}

export const TemplateToggle = ({ isOpen, onToggle }: TemplateToggleProps) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: "rgb(243 244 246)" }}
      className="flex w-full cursor-pointer items-center justify-between border-t bg-white px-3 py-2 text-sm text-gray-600"
      onClick={onToggle}
    >
      <span>Use template</span>
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
        <PiCaretUpLight className="h-4 w-4" />
      </motion.div>
    </motion.div>
  )
}
