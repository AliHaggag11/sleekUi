import { ArrowRight, Sparkles, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Banner() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden"
        >
          <div className="px-4">
            <motion.a
              href="#pro"
              className="group relative flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-white transition-colors hover:text-white/90"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2">
                <div className="flex items-center gap-2 shrink-0">
                  <Sparkles className="h-4 w-4 animate-pulse" />
                  <span className="hidden sm:inline">Introducing</span>
                  <span className="font-semibold">SleekUI Pro</span>
                </div>
                <span className="text-center sm:text-left text-xs sm:text-sm text-white/90">
                  50+ premium components and templates
                </span>
                <motion.span 
                  className="hidden sm:flex items-center gap-1 shrink-0 font-semibold underline-offset-4 group-hover:underline"
                  whileHover={{ x: 4 }}
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </div>
            </motion.a>

            <motion.button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-white/80 hover:text-white"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close banner</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 