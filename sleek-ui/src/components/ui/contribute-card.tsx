import { Bug, Plus, Pencil } from "lucide-react"
import { Link } from "react-router-dom"

export function ContributeCard() {
  return (
    <div className="mt-8 rounded-lg relative overflow-hidden border border-white/[0.1] dark:border-white/[0.05] shadow-[0_0_1px_rgba(0,0,0,0.1)]">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/25 to-white/25 dark:from-white/10 dark:via-white/5 dark:to-transparent opacity-50" />
        
        {/* Grid */}
        <div className="absolute inset-0 bg-grid-white/[0.03] dark:bg-grid-white/[0.03] bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <div className="absolute inset-0 bg-repeat bg-noise mix-blend-soft-light" />
        </div>

        {/* Backdrop Blur Layer */}
        <div className="absolute inset-0 backdrop-blur-[8px] bg-white/60 dark:bg-gray-950/30" />
      </div>

      {/* Content */}
      <div className="relative p-4">
        <h4 className="font-medium mb-3 text-sm">Contribute</h4>
        <ul className="space-y-2.5">
          <li>
            <Link 
              to="https://github.com/alihaggag11/sleekui/issues/new"
              className="flex items-center gap-2.5 text-sm text-muted-foreground/80 hover:text-foreground transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Bug className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Report an issue
            </Link>
          </li>
          <li>
            <Link 
              to="https://github.com/alihaggag11/sleekui/issues/new"
              className="flex items-center gap-2.5 text-sm text-muted-foreground/80 hover:text-foreground transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Plus className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Request a feature
            </Link>
          </li>
          <li>
            <Link 
              to="https://github.com/alihaggag11/sleekui/edit/main/content"
              className="flex items-center gap-2.5 text-sm text-muted-foreground/80 hover:text-foreground transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Pencil className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Edit this page
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
} 