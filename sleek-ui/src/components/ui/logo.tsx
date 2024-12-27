import { Link } from "react-router-dom"
import { motion } from "framer-motion"

interface LogoProps {
  showBetaBadge?: boolean
  className?: string
  onNavigate?: () => void
}

export function Logo({ showBetaBadge = true, className, onNavigate }: LogoProps) {
  return (
    <motion.div 
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link 
        to="/" 
        className="flex items-center gap-2"
        onClick={() => onNavigate?.()}
      >
        <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
          <div className="h-3 w-3 rounded-sm bg-primary-foreground" />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tight">SleekUI</span>
          {showBetaBadge && (
            <span className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-3 py-0.5 text-xs font-semibold text-white shadow-sm">
              Beta
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  )
} 