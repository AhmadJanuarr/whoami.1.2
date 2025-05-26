"use client"

import { useState } from "react"
import { PiHeartStraight, PiBookmarkSimple, PiShareFat } from "react-icons/pi"

const ReactionButton = ({ icon, text, onClick, isActive }: { icon: React.ReactNode; text: string; onClick: () => void; isActive: boolean }) => {
  return (
    <button onClick={onClick} className={`flex items-center gap-2 rounded-full border bg-[#F1F5F9] px-4 py-2 transition-all`}>
      {icon}
      <span className="text-sm text-textSecondary">{text}</span>
    </button>
  )
}

export const ArticleReactionWrapper = () => {
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex max-w-sm gap-5 rounded-full">
        <ReactionButton icon={<PiHeartStraight size={15} />} text={liked ? "Liked" : "Like"} onClick={() => setLiked(!liked)} isActive={liked} />

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
