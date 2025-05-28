"use client"
import { useScroll, motion } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"

export function AboutTrackPattern() {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const verticalPathRef = useRef<SVGPathElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const [pathLength, setPathLength] = useState(0)
  const [position, setPosition] = useState({ x: 123.5, y: 5 }) // Set initial position to match start of path

  useEffect(() => {
    if (!pathRef.current && !verticalPathRef.current) return
    const length = pathRef.current?.getTotalLength() || verticalPathRef.current?.getTotalLength() || 0
    setPathLength(length)
  }, [])

  useEffect(() => {
    if ((!pathRef.current && !verticalPathRef.current) || !pathLength) return
    return scrollYProgress.on("change", (latest) => {
      const clampedProgress = Math.max(0, Math.min(latest, 1))
      const activePath = window.innerWidth >= 1024 ? pathRef.current : verticalPathRef.current
      if (!activePath) return
      const point = activePath.getPointAtLength(pathLength * clampedProgress)
      setPosition({ x: point.x, y: point.y })
    })
  }, [pathLength, scrollYProgress])

  return (
    <motion.div
      ref={containerRef}
      className="relative"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <svg width="381" height="1707" viewBox="0 0 381 1707" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_23_717)">
          <path
            ref={pathRef}
            d="M123.5 5.00049V45.0005C123.5 53.2848 116.784 60.0005 108.5 60.0005L20.5 60.0004C12.2157 60.0004 5.5 66.7161 5.5 75.0004L5.50003 433.5C5.50003 441.784 12.2158 448.5 20.5 448.5H144.674C147.812 448.5 150.871 449.484 153.421 451.314L224.747 502.512C228.672 505.329 231 509.865 231 514.697V887.314C231 892.019 228.793 896.451 225.038 899.285L17.462 1056C13.7072 1058.83 11.5 1063.27 11.5 1067.97V1336.5C11.5 1344.78 18.2157 1351.5 26.5 1351.5H174C182.837 1351.5 190 1358.66 190 1367.5V1687C190 1695.28 196.716 1702 205 1702H376"
            stroke="#E9E9E9"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_23_717"
            x="0.5"
            y="0.000488281"
            width="380.5"
            height="1711"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.370192 0 0 0 0 0.370192 0 0 0 0 0.370192 0 0 0 0.07 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_23_717" />
          </filter>
        </defs>
      </svg>
      <motion.div
        className="absolute left-0 top-0 size-5 rounded-full bg-indigo-600 shadow-lg shadow-indigo-500/50"
        style={{
          x: position.x - 10,
          y: position.y - 10,
        }}
      />
    </motion.div>
  )
}
