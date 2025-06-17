import { AnimatePresence } from "framer-motion"
import { Message } from "./types"
import { MessageItem } from "./MessageItem"
import { useEffect, useRef } from "react"

interface MessageListProps {
  messages: Message[]
  isTyping: boolean
  timeSeparator: boolean
  timeStamp: string
}

export const MessageList = ({ messages, isTyping, timeSeparator, timeStamp }: MessageListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  return (
    <div className="flex-1 space-y-3 overflow-y-auto p-3">
      <AnimatePresence>
        {messages.map((message, index) => (
          <>
            {index === 0 && timeSeparator && (
              <p className="flex w-full items-center justify-center text-sm">{`Start chat at ${timeStamp} ${timeStamp === "00:00" ? "AM" : "PM"}`}</p>
            )}
            <MessageItem key={index} message={message} />
          </>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg bg-white px-3 py-2 text-sm text-gray-500 shadow-sm">typing...</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </AnimatePresence>
    </div>
  )
}
