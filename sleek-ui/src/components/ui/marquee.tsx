import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  speed?: number
  pauseOnHover?: boolean
  direction?: "left" | "right"
}

export function Marquee({
  children,
  className,
  speed = 20,
  pauseOnHover = false,
  direction = "left",
}: MarqueeProps) {
  const [contentWidth, setContentWidth] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth)
    }
  }, [children])

  return (
    <div
      className={cn(
        "relative overflow-hidden whitespace-nowrap",
        className
      )}
    >
      <motion.div
        className="flex min-w-full"
        initial={{ x: direction === "left" ? 0 : -contentWidth }}
        animate={{ x: direction === "left" ? -contentWidth : 0 }}
        transition={{
          duration: contentWidth / speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
      >
        <div ref={contentRef} className="flex shrink-0">
          {children}
        </div>
        <div aria-hidden className="flex shrink-0">
          {children}
        </div>
      </motion.div>
    </div>
  )
} 