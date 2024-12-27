import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface DocLink {
  title: string
  href: string
}

interface DocPaginationProps {
  prev?: DocLink
  next?: DocLink
  className?: string
}

export function DocPagination({ prev, next, className }: DocPaginationProps) {
  return (
    <div className={cn("flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-between mt-12 pt-8 border-t border-border", className)}>
      {prev ? (
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1"
        >
          <Link
            to={prev.href}
            className="group flex h-full items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-border/80 hover:bg-accent/50 transition-colors duration-300"
          >
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-muted group-hover:bg-background transition-colors duration-300">
              <ChevronLeft className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-all duration-300 group-hover:-translate-x-0.5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-medium text-muted-foreground mb-1.5 group-hover:text-foreground/70 transition-colors duration-300">
                Previous
              </div>
              <div className="text-sm font-semibold truncate group-hover:text-foreground transition-colors duration-300">
                {prev.title}
              </div>
            </div>
          </Link>
        </motion.div>
      ) : (
        <div className="flex-1" /> // Empty div for spacing when no prev link
      )}
      
      {next ? (
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1"
        >
          <Link
            to={next.href}
            className="group flex h-full items-center justify-end gap-4 p-4 rounded-xl border border-border bg-card hover:border-border/80 hover:bg-accent/50 transition-colors duration-300"
          >
            <div className="min-w-0">
              <div className="text-xs font-medium text-muted-foreground mb-1.5 text-right group-hover:text-foreground/70 transition-colors duration-300">
                Next
              </div>
              <div className="text-sm font-semibold truncate text-right group-hover:text-foreground transition-colors duration-300">
                {next.title}
              </div>
            </div>
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-muted group-hover:bg-background transition-colors duration-300">
              <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-all duration-300 group-hover:translate-x-0.5" />
            </div>
          </Link>
        </motion.div>
      ) : (
        <div className="flex-1" /> // Empty div for spacing when no next link
      )}
    </div>
  )
} 