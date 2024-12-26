import { Button } from "./button"
import { Github, Moon, Sun, Search, Menu, X } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { CommandMenu, useModifierKey } from "./command-menu"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Nav() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const modifierKey = useModifierKey()

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

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <CommandMenu open={open} onOpenChange={setOpen} />
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Left Section: Logo + Desktop Nav */}
        <div className="flex items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <a href="/" className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <div className="h-3 w-3 rounded-sm bg-primary-foreground" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl tracking-tight">SleekUI</span>
                <span className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-3 py-0.5 text-xs font-semibold text-white shadow-sm">
                  Beta
                </span>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center ml-8 space-x-6">
            <NavLink href="/docs">Documentation</NavLink>
            <NavLink href="/components">Components</NavLink>
            <NavLink href="/templates">
              Templates
              <span className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 px-2 py-0.5 text-xs font-semibold text-primary shadow-sm">
                New
              </span>
            </NavLink>
            <NavLink href="/showcase">Showcase</NavLink>
          </nav>
        </div>

        {/* Right Section: Search, Theme, GitHub */}
        <div className="flex items-center gap-2 sm:gap-3">
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
            <a
              href="https://github.com/yourusername/sleekui"
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
                    12.6k
                  </div>
                </div>
                <div className="absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10" />
              </Button>
            </a>
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
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden border-t bg-background overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-3">
              <MobileNavLink href="/docs">Documentation</MobileNavLink>
              <MobileNavLink href="/components">Components</MobileNavLink>
              <MobileNavLink href="/templates">
                <div className="flex items-center justify-between">
                  Templates
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 px-2 py-0.5 text-xs font-semibold text-primary shadow-sm">
                    New
                  </span>
                </div>
              </MobileNavLink>
              <MobileNavLink href="/showcase">Showcase</MobileNavLink>
              <div className="pt-2 border-t">
                <a
                  href="https://github.com/yourusername/sleekui"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2 rounded-md hover:bg-accent"
                >
                  <span className="text-sm font-medium">Star on GitHub</span>
                  <div className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    <span className="text-xs font-medium bg-primary/10 px-2 py-0.5 rounded-full">
                      12.6k
                    </span>
                  </div>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

// Desktop Nav Link
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="inline-flex items-center text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  )
}

// Mobile Nav Link
function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="flex items-center p-2 text-sm font-medium rounded-md hover:bg-accent"
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  )
} 