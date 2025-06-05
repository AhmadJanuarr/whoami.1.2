"use client"

import { ToggleLike, useLikeCounter } from "@/lib/toggle-likes"
import { useState } from "react"
import { PiBookmarkSimple, PiHeartStraight, PiShareFat } from "react-icons/pi"

const ReactionButton = ({ icon, text, onClick, isActive }: { icon: React.ReactNode; text: string; onClick: () => void; isActive: boolean }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full border bg-[#F1F5F9] px-4 py-2 transition-all hover:bg-backgroundPrimary`}
    >
      {icon}
      <span className="text-sm tracking-wider text-textSecondary">{text}</span>
    </button>
  )
}

export const ArticleReactionWrapper = ({ postId }: { postId: string }) => {
  const { count: likeCount, liked } = useLikeCounter(postId)
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

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex max-w-sm gap-5 rounded-full">
        <ReactionButton
          icon={<PiHeartStraight size={15} className={liked ? "text-red-500" : ""} />}
          text={likeCount > 0 ? `${likeCount}` : "Like"}
          onClick={handleLike}
          isActive={liked}
        />
        <ReactionButton
          icon={<PiBookmarkSimple size={15} />}
          text={bookmarked ? "Saved" : "Save"}
          onClick={() => setBookmarked(!bookmarked)}
          isActive={bookmarked}
        />
        <ReactionButton icon={<PiShareFat size={15} />} text="Share" onClick={() => {}} isActive={false} />
      </div>
    </div>
  )
}
