"use client"
import gsap from "gsap"
import ReactLenis, { LenisRef } from "lenis/react"
import { useEffect, useRef } from "react"

export const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
    gsap.ticker.add(update)
    return () => {
      gsap.ticker.remove(update)
    }
  }, [])

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        duration: 2,
        smoothWheel: true,
        wheelMultiplier: 1,
        lerp: 1.5,
        autoRaf: false,
        orientation: "vertical",
        gestureOrientation: "vertical",
      }}
    >
      {children}
    </ReactLenis>
  )
}
