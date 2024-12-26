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
          <div className="px-4 py-3">
            <motion.a
              href="#pro"
              className="group relative flex items-center justify-center gap-2 text-sm font-medium text-white/90 hover:text-white"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-2.5 shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <Sparkles className="h-3.5 w-3.5 animate-pulse text-white" />
                  </div>
                  <span className="hidden sm:inline font-normal">Introducing</span>
                  <span className="font-semibold tracking-tight">SleekUI Pro</span>
                </div>

                <span className="text-center sm:text-left text-xs sm:text-sm text-white/80">
                  50+ premium components and templates
                </span>

                <motion.div 
                  className="hidden sm:flex items-center gap-1.5 shrink-0 text-white group"
                  whileHover={{ x: 4 }}
                >
                  <span className="font-medium underline-offset-4 group-hover:underline">
                    Learn more
                  </span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </motion.div>
              </div>
            </motion.a>

            <motion.button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 text-white/70 hover:text-white rounded-full hover:bg-white/10"
              whileHover={{ scale: 1.1 }}
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