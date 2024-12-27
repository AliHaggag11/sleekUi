import { Button } from "./button"
import { Github, Moon, Sun, Search, Menu, X } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { CommandMenu, useModifierKey } from "./command-menu"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { Logo } from "./logo"
import { useDocsSidebar } from "../providers/docs-sidebar-provider"
import { cn } from "@/lib/utils"

interface NavProps {
  isSidebarOpen?: boolean
}

// Add this type for the GitHub API response
type GitHubRepoData = {
  stargazers_count: number
}

// Format number with k/m suffix
function formatStarCount(count: number): string {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}m`
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`
  }
  return count.toString()
}

export function Nav({ isSidebarOpen }: NavProps) {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const modifierKey = useModifierKey()
  const location = useLocation()
  const { setIsSidebarOpen } = useDocsSidebar()
  const isDocsPage = location.pathname.startsWith('/docs')
  const [starCount, setStarCount] = useState<number | null>(null)

  useEffect(() => {
    // Replace with your actual GitHub username and repo name
    const owner = "alihaggag11"
    const repo = "sleekUi"

    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then(response => response.json())
      .then((data: GitHubRepoData) => {
        setStarCount(data.stargazers_count)
      })
      .catch(error => {
        console.error('Error fetching GitHub stars:', error)
        setStarCount(null)
      })
  }, [])

  const resetMenus = () => {
    setMobileMenuOpen(false)
    setIsSidebarOpen(false)
  }

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  const mobileMenuVariants = {
    closed: { 
      height: 0,
      opacity: 0,
      transition: { duration: 0.2 }
    },
    open: { 
      height: "auto",
      opacity: 1,
      transition: { duration: 0.2 }
    }
  }

  const handleMobileMenuClick = () => {
    if (isDocsPage) {
      setIsSidebarOpen(!isSidebarOpen)
    } else {
      setMobileMenuOpen(!mobileMenuOpen)
    }
  }

  // Update the GitHub button JSX in both desktop and mobile versions:
  const githubButton = (
    <a
      href="https://github.com/alihaggag11/sleekui"
      target="_blank"
      rel="noreferrer"
    >
      <Button 
        variant="outline" 
        className="group relative overflow-hidden h-9 pl-3 pr-4"
      >
        <div className="flex items-center gap-2 relative z-10">
          <Github className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
          <span className="font-medium">Star</span>
          <div className="h-4 w-[1px] bg-border/50" />
          <div className="flex items-center text-xs font-medium bg-primary/10 px-2 rounded-full">
            {starCount === null ? (
              <span className="animate-pulse">...</span>
            ) : (
              formatStarCount(starCount)
            )}
          </div>
        </div>
        <div className="absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10" />
      </Button>
    </a>
  )

  // Update the mobile version as well:
  const mobileGithubButton = (
    <a
      href="https://github.com/alihaggag11/sleekui"
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-between p-2 rounded-md hover:bg-accent"
    >
      <span className="text-sm font-medium">Star on GitHub</span>
      <div className="flex items-center gap-2">
        <Github className="h-4 w-4" />
        <span className="text-xs font-medium bg-primary/10 px-2 py-0.5 rounded-full">
          {starCount === null ? (
            <span className="animate-pulse">...</span>
          ) : (
            formatStarCount(starCount)
          )}
        </span>
      </div>
    </a>
  )

  return (
    <>
      {/* Backdrop Blur */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "sticky top-0 z-30 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          isSidebarOpen && "brightness-[0.8] pointer-events-none"
        )}
      >
        <CommandMenu open={open} onOpenChange={setOpen} />
        <div className="container flex h-16 items-center justify-between px-4">
          {/* Left Section: Logo + Desktop Nav */}
          <div className="flex items-center">
            <Logo 
              className="flex items-center pl-2" 
              onNavigate={resetMenus}
            />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center ml-8 space-x-8">
              <NavLink to="/docs">Documentation</NavLink>
              <NavLink to="/docs/marquee">Components</NavLink>
              <NavLink to="/templates">
                Templates
                <span className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 px-2 py-0.5 text-xs font-semibold text-primary shadow-sm">
                  New
                </span>
              </NavLink>
              <NavLink to="/showcase">Showcase</NavLink>
            </nav>
          </div>

          {/* Right Section: Search, Theme, GitHub */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Search - Desktop */}
            <motion.div 
              className="hidden md:block"
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                className="relative h-9 w-9 md:w-64 items-center text-sm text-muted-foreground"
                onClick={() => setOpen(true)}
              >
                <div className="inline-flex items-center gap-2 flex-1">
                  <Search className="h-4 w-4 shrink-0" />
                  <span className="hidden md:inline-flex">Search documentation...</span>
                </div>
                <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 shrink-0">
                  <span className="text-xs">{modifierKey}</span>K
                </kbd>
              </Button>
            </motion.div>

            {/* Search - Mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setOpen(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Theme Toggle */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-200 dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </motion.div>

            {/* GitHub Star - Desktop */}
            <motion.div 
              className="hidden lg:block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {githubButton}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div 
              className="lg:hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                onClick={handleMobileMenuClick}
              >
                <AnimatePresence mode="wait">
                  {((!isDocsPage && mobileMenuOpen) || (isDocsPage && isSidebarOpen)) ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu - Only show when not on docs page */}
        <AnimatePresence>
          {mobileMenuOpen && !isDocsPage && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden border-t bg-background overflow-hidden"
            >
              <nav className="flex flex-col p-4 space-y-3">
                <MobileNavLink to="/docs">Documentation</MobileNavLink>
                <MobileNavLink to="/docs/marquee">Components</MobileNavLink>
                <MobileNavLink to="/templates">
                  <div className="flex items-center justify-between">
                    Templates
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 px-2 py-0.5 text-xs font-semibold text-primary shadow-sm">
                      New
                    </span>
                  </div>
                </MobileNavLink>
                <MobileNavLink to="/showcase">Showcase</MobileNavLink>
                <div className="pt-2 border-t">
                  {mobileGithubButton}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

// Desktop Nav Link
function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation()
  const isActive = location.pathname.startsWith(to)

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        to={to}
        className={`inline-flex items-center text-sm font-medium transition-colors ${
          isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
        }`}
      >
        {children}
      </Link>
    </motion.div>
  )
}

// Mobile Nav Link
function MobileNavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
      <Link
        to={to}
        className="flex items-center p-2 text-sm font-medium rounded-md hover:bg-accent"
      >
        {children}
      </Link>
    </motion.div>
  )
} 