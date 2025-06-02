// lib/toggle-likes.ts
import { ref, set, remove, get, onValue } from "firebase/database"
import { getUserId } from "./client-id"
import { database } from "./db/init"
import { useEffect, useState, useMemo } from "react"

export const ToggleLike = async (postId: string) => {
  try {
    const clientId = getUserId()
    const likeRef = ref(database, `likes/${postId}/${clientId}`)
    const snapshot = await get(likeRef)

    if (snapshot.exists()) {
      await remove(likeRef)
      return false
    } else {
      await set(likeRef, true)
      return true
    }
  } catch (err) {
    console.error("ToggleLike error:", err)
    return null
  }
}

export const useLikeCounter = (postId: string) => {
  const [likes, setLikes] = useState<string[]>([])
  const clientId = useMemo(() => getUserId(), []) // hanya dipanggil sekali

  useEffect(() => {
    const postRef = ref(database, `likes/${postId}`)
    const unsubscribe = onValue(postRef, (snapshot) => {
      const data = snapshot.val() || {}
      const likedClientIds = Object.keys(data).filter((id) => data[id] === true)
      setLikes(likedClientIds)
    })

    return () => unsubscribe()
  }, [postId])

  return {
    count: likes.length,
    liked: likes.includes(clientId),
  }
}
