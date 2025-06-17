"use client"

import { useState } from "react"
import { PiRobotThin } from "react-icons/pi"
import { motion, AnimatePresence } from "framer-motion"
import { IoClose } from "react-icons/io5"
import { BsChatDots } from "react-icons/bs"
import { ChatMessage } from "./ChatMessage"

const ChatWindow = ({ setIsOpenChat }: { setIsOpenChat: (isOpen: boolean) => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-24 right-6 z-50 flex h-[400px] w-72 flex-col overflow-hidden rounded-lg bg-white shadow-lg"
    >
      <div className="flex items-center justify-between border-b border-gray-100 p-3">
        <div className="flex items-center gap-2">
          <div className="relative rounded-full bg-gray-50 p-1.5">
            <BsChatDots className="h-4 w-4 text-gray-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-800">madds.bot</h3>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="size-2 animate-pulse rounded-full bg-green-500" />
              Online
            </div>
          </div>
        </div>
        <button onClick={() => setIsOpenChat(false)} className="rounded-full p-1 hover:bg-gray-50">
          <IoClose className="h-4 w-4 text-gray-500" />
        </button>
      </div>

      {/* Chat Messages Area */}
      <ChatMessage />

      {/* Chat Input Area */}
      <div className="border-t border-gray-100 bg-white p-3">
        <div className="flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-3 py-1.5">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full bg-transparent text-sm text-gray-600 outline-none placeholder:text-gray-400"
          />
          <button className="rounded-full p-1 text-gray-500 hover:bg-gray-200">
            <BsChatDots className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export const ChatLauncher = () => {
  const [isOpenChat, setIsOpenChat] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>{isOpenChat && <ChatWindow setIsOpenChat={setIsOpenChat} />}</AnimatePresence>
      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setIsOpenChat(!isOpenChat)} className="group relative">
        <motion.div
          initial={false}
          animate={{
            rotate: isOpenChat ? 180 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition-shadow hover:shadow-lg"
        >
          <PiRobotThin className="h-6 w-6 text-gray-600" />
        </motion.div>
      </motion.button>
    </div>
  )
}
