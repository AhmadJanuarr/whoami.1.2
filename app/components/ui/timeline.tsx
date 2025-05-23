"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

type TimelineProps = {
  containerRef: React.RefObject<HTMLDivElement>
}

export function Timeline({ containerRef }: TimelineProps) {
  const pathRef = useRef<SVGPathElement>(null)
  const markerRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    const path = pathRef.current
    const marker = markerRef.current
    if (!path || !marker || !containerRef.current) return

    // Reset marker position
    gsap.set(marker, {
      xPercent: -50,
      yPercent: -50,
    })

    // Create timeline animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        markers: true, // Untuk debugging, bisa dihapus nanti
      },
    })

    // Animate marker along the path
    tl.to(marker, {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
      },
      ease: "none",
      duration: 1,
    })

    return () => {
      tl.kill()
    }
  }, [containerRef])

  return (
    <svg width="100" height="1000" viewBox="0 0 100 1000" className="absolute left-1/2 top-0 -translate-x-1/2" preserveAspectRatio="none">
      {/* Path Custom: Turun 20px, kiri 50px, lalu turun 200px */}
      <path ref={pathRef} d="M50 0 V20 H0 V220" stroke="#0f172a" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Circle Marker dengan glow effect */}
      <circle ref={markerRef} r="8" fill="#0f172a" className="shadow-lg" />
      <circle ref={markerRef} r="16" fill="#0f172a" className="opacity-30 blur-sm" />
    </svg>
  )
}
