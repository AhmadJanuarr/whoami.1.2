// Core component that receives mouse positions and renders pointer and content
"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"

const colors = [
  { from: "#0ea5e9", to: "#3b82f6" }, // Blue
  { from: "#10b981", to: "#059669" }, // Green
  { from: "#f59e0b", to: "#d97706" }, // Amber
  { from: "#ef4444", to: "#dc2626" }, // Red
  { from: "#8b5cf6", to: "#7c3aed" }, // Purple
  { from: "#ec4899", to: "#db2777" }, // Pink
]

interface FollowerPointerCardProps {
  children: React.ReactNode
  className?: string
  title?: string | React.ReactNode
}

const FollowerPointerCard = ({ children, className, title }: FollowerPointerCardProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [currentColor, setCurrentColor] = useState(colors[0])
  const ref = React.useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleMouseEnter = () => {
    setIsVisible(true)
    // Set random color when mouse enters
    setCurrentColor(colors[Math.floor(Math.random() * colors.length)])
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsVisible(false)}
      className={cn("relative cursor-none", className)}
    >
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Custom cursor */}
            <motion.div
              className="pointer-events-none absolute z-50"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              style={{
                left: position.x,
                top: position.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="relative">
                <div className="absolute -left-1 -top-1 h-3 w-3 animate-ping rounded-full" style={{ backgroundColor: currentColor.from }} />
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: currentColor.from }} />
              </div>
            </motion.div>

            {/* Tooltip */}
            <motion.div
              className="pointer-events-none absolute z-50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              style={{
                left: position.x,
                top: position.y + 20,
                transform: "translateX(-50%)",
              }}
            >
              <div
                className="flex items-center gap-2 rounded-full  px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm"
                style={{
                  background: `linear-gradient(to right, ${currentColor.from}, ${currentColor.to})`,
                }}
              >
                {title}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {children}
    </div>
  )
}

export default FollowerPointerCard
