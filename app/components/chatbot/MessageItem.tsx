import { motion } from "framer-motion"
import { Message } from "./types"

interface MessageItemProps {
  message: Message
}

export const MessageItem = ({ message }: MessageItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
    >
      <div className={`max-w-[80%] rounded-lg px-3 py-2 ${message.isUser ? "bg-blue-500 text-white" : "bg-white text-gray-800 shadow-sm"}`}>
        <p className="text-sm">{message.text}</p>
        {message.links && (
          <div className="flex flex-col gap-1">
            {message.links.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
