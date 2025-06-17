import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { Message, Template } from "./types"
import { templates } from "./data"
import { MessageList } from "./MessageList"
import { TemplateList } from "./TemplateList"
import { TemplateToggle } from "./TemplateToggle"

export const ChatMessage = () => {
  const [isOpenTemplate, setIsOpenTemplate] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [timeSeparator, setTimeSeparator] = useState(false)

  const handleTemplateClick = (question: string) => {
    setMessages((prev) => [...prev, { text: question, isUser: true }])
    setIsOpenTemplate(false)

    const template = templates.find((item) => item.q === question)
    if (template) {
      setTimeSeparator(true)

      setTimeout(() => {
        setIsTyping(true)
        setTimeout(() => {
          setMessages((prev) => [...prev, { text: template.a, isUser: false, links: template.links }])
          setIsTyping(false)
        }, 1500)
      }, 500)
    }
  }

  const timeStamp = new Date().toLocaleTimeString().split(":").slice(0, 2).join(":")

  return (
    <div className="flex h-[calc(400px-8rem)] flex-col justify-end bg-gray-50">
      <MessageList messages={messages} isTyping={isTyping} timeSeparator={timeSeparator} timeStamp={timeStamp} />

      <AnimatePresence>{isOpenTemplate && <TemplateList templates={templates} onTemplateClick={handleTemplateClick} />}</AnimatePresence>

      <TemplateToggle isOpen={isOpenTemplate} onToggle={() => setIsOpenTemplate(!isOpenTemplate)} />
    </div>
  )
}
