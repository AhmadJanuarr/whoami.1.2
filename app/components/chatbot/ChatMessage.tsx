import { useState } from "react"
import { PiCaretUpLight } from "react-icons/pi"
import { motion, AnimatePresence } from "framer-motion"

const template = [
  {
    q: "Who am I?",
    a: "Hello! I am Ahmad Januar Amriyansah, usually called Ahmad, a fullstack developer and a graduate of Informatics from the University of Teknokrat Indonesia.",
  },
  {
    q: "What are your skills?",
    a: "I focus on fullstack development with Next.js, React.js, Tailwind CSS, Framer Motion, expressJs, and nodeJs.",
  },
  {
    q: "want to know me more details?",
    a: "you can scroll down and there is a footer there I have provided a link that will take you to my place",
  },
]

type Message = {
  text: string
  isUser: boolean
}

export const ChatMessage = () => {
  const [isOpenTemplate, setIsOpenTemplate] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [timeSeparator, setTimeSeparator] = useState(false)

  const handleTemplateClick = (question: string) => {
    setMessages((prev) => [...prev, { text: question, isUser: true }])
    setIsOpenTemplate(false)

    const answer = template.find((item) => item.q === question)?.a
    if (answer) {
      setTimeSeparator(true)
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: answer, isUser: false }])
      }, 1000)
    }
  }
  const timeStamp = new Date().toLocaleTimeString().split(":").slice(0, 2).join(":")

  return (
    <div className="flex h-[calc(400px-8rem)] flex-col justify-end bg-gray-50">
      {/* Messages Area */}
      <div className="flex-1 space-y-3 overflow-y-auto p-3">
        <AnimatePresence>
          {messages.map((message, index) => (
            <>
              {index === 0 && timeSeparator && (
                <p className="flex w-full items-center justify-center text-sm">{`Start chat at ${timeStamp} ${timeStamp === "00:00" ? "AM" : "PM"}`}</p>
              )}
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[80%] rounded-lg px-3 py-2 ${message.isUser ? "bg-blue-500 text-white" : "bg-white text-gray-800 shadow-sm"}`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </motion.div>
            </>
          ))}
        </AnimatePresence>
      </div>

      {/* Template Section */}
      <AnimatePresence>
        {isOpenTemplate && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-28 overflow-hidden border-y border-gray-100 bg-white"
          >
            <div className="space-y-1 p-2">
              {template.map((item, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleTemplateClick(item.q)}
                  className="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 transition-colors hover:bg-gray-50"
                >
                  {item.q}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Template Toggle Button */}
      <motion.div
        whileHover={{ backgroundColor: "rgb(243 244 246)" }}
        className="flex w-full cursor-pointer items-center justify-between border-t bg-white px-3 py-2 text-sm text-gray-600"
        onClick={() => setIsOpenTemplate(!isOpenTemplate)}
      >
        <span>Use template</span>
        <motion.div animate={{ rotate: isOpenTemplate ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <PiCaretUpLight className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </div>
  )
}
