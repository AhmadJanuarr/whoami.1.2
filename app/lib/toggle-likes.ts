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
  const clientId = useMemo(() => getUserId(), [])

  useEffect(() => {
    if (!postId) {
      console.warn("No postId provided to useLikeCounter")
      return
    }
    const postRef = ref(database, `likes/${postId}`)

    const unsubscribe = onValue(
      postRef,
      (snapshot) => {
        try {
          // Ambil data dari snapshot
          const data = snapshot.val()
          if (data) {
            // Konversi object menjadi array of user IDs yang like
            const likedClientIds = Object.entries(data)
              .filter(([_, value]) => value === true)
              .map(([key]) => key)

            console.log("Processed liked users:", likedClientIds)
            setLikes(likedClientIds)
          } else {
            setLikes([]) // Jika tidak ada data, set empty array
          }
        } catch (error) {
          console.error("Error processing realtime data:", error)
          setLikes([])
        }
      },
      (error) => {
        // Handle error dari realtime listener
        console.error("Realtime listener error:", error)
        setLikes([])
      },
    )

    // Cleanup subscription ketika component unmount
    return () => {
      console.log("Cleaning up realtime listener")
      unsubscribe()
    }
  }, [postId])

  return {
    count: likes.length,
    liked: likes.includes(clientId),
  }
}
