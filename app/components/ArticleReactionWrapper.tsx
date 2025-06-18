"use client"

import { ToggleLike, useLikeCounter } from "@/lib/toggle-likes"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { PiBookmarkSimple, PiHeartStraight, PiShareFat } from "react-icons/pi"

const ReactionButton = ({
  icon,
  text,
  onClick,
  isActive,
  isLoading,
}: {
  icon: React.ReactNode
  text: string
  onClick: () => void
  isActive: boolean
  isLoading?: boolean
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative flex items-center gap-2 rounded-full border bg-[#F1F5F9] px-4 py-2 transition-all hover:bg-backgroundPrimary ${
        isActive ? "border-primary" : ""
      }`}
    >
      <motion.div animate={{ scale: isActive ? [1, 1.2, 1] : 1 }} transition={{ duration: 0.3 }}>
        {icon}
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.span
          key={text}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="text-sm tracking-wider text-textSecondary"
        >
          {text}
        </motion.span>
      </AnimatePresence>
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="border-primary absolute inset-0 rounded-full border-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.button>
  )
}

const Notification = ({ show }: { show: boolean }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="flex items-center gap-2 rounded-lg bg-green-500 px-4 py-3 text-white shadow-lg"
          >
            <motion.svg
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 0.5 }}
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </motion.svg>
            <motion.span initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
              Link copied to clipboard!
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const ArticleReactionWrapper = ({ postId }: { postId: string }) => {
  const { count: likeCount, liked } = useLikeCounter(postId)
  const [isCopied, setIsCopied] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLike = async () => {
    try {
      setIsLoading(true)
      await ToggleLike(postId)
    } catch (error) {
      console.error("Error toggling like:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch (error) {
      console.error("Error copying to clipboard:", error)
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex w-full items-center justify-center py-4"
      >
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="flex max-w-sm gap-5 rounded-full">
          <ReactionButton
            icon={
              <motion.div
                animate={{
                  scale: liked ? [1, 1.2, 1] : 1,
                  color: liked ? "#ef4444" : "inherit",
                  rotate: liked ? [0, 15, -15, 0] : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <PiHeartStraight size={15} />
              </motion.div>
            }
            text={likeCount > 0 ? `${likeCount}` : "Like"}
            onClick={handleLike}
            isActive={liked}
            isLoading={isLoading}
          />
          <ReactionButton
            icon={
              <motion.div
                animate={{
                  scale: bookmarked ? [1, 1.2, 1] : 1,
                  color: bookmarked ? "#3b82f6" : "inherit",
                  y: bookmarked ? [0, -2, 0] : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <PiBookmarkSimple size={15} />
              </motion.div>
            }
            text={bookmarked ? "Saved" : "Save"}
            onClick={() => setBookmarked(!bookmarked)}
            isActive={bookmarked}
          />
          <ReactionButton
            icon={
              <motion.div whileHover={{ rotate: 15 }} transition={{ duration: 0.2 }}>
                <PiShareFat size={15} />
              </motion.div>
            }
            text="Share"
            onClick={handleShare}
            isActive={false}
          />
        </motion.div>
      </motion.div>
      <Notification show={isCopied} />
    </>
  )
}
