import { Link, Outlet, useLocation } from "react-router-dom"
import * as ScrollArea from "@radix-ui/react-scroll-area"
import { TableOfContents } from "../ui/table-of-contents"
import { Breadcrumb } from "../ui/breadcrumb"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../ui/button"

type NavLink = {
  href: string
  label: string
  badge?: "Pro" | "New"
}

type NavSection = {
  title: string
  links: NavLink[]
}

const sidebarLinks: NavSection[] = [
  {
    title: "Getting Started",
    links: [
      { href: "/docs/introduction", label: "Introduction" },
      { href: "/docs/installation", label: "Installation" },
      { href: "/docs/cli", label: "CLI" },
    ],
  },
  {
    title: "Templates",
    links: [
      { 
        href: "/docs/dev-tool", 
        label: "Dev Tool",
        badge: "New",
      },
      { 
        href: "/docs/mobile", 
        label: "Mobile",
        badge: "Pro",
      },
      { 
        href: "/docs/saas", 
        label: "SaaS",
        badge: "Pro",
      },
    ],
  },
  {
    title: "Components",
    links: [
      { href: "/docs/marquee", label: "Marquee" },
      { href: "/docs/hero-video-dialog", label: "Hero Video Dialog" },
      { href: "/docs/bento-grid", label: "Bento Grid" },
      { href: "/docs/animated-list", label: "Animated List" },
    ],
  },
]

export function DocsLayout() {
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-[calc(100vh-4rem)] relative">
      {/* Mobile Sidebar Backdrop */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Button */}
      <div className="absolute left-4 top-4 z-50 lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>

      {/* Left Sidebar */}
      <div className="hidden lg:block w-64 border-r border-gray-200 dark:border-gray-800">
        <ScrollArea.Root className="h-full">
          <ScrollArea.Viewport className="h-full">
            <div className="p-6">
              <nav className="space-y-6">
                {sidebarLinks.map((section) => (
                  <div key={section.title}>
                    <h4 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      {section.title}
                    </h4>
                    <ul className="space-y-1">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            to={link.href}
                            onClick={() => setIsSidebarOpen(false)}
                            className={`flex items-center justify-between rounded-md px-3 py-1.5 text-sm transition-colors ${
                              location.pathname === link.href
                                ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                                : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800/50"
                            }`}
                          >
                            {link.label}
                            {link.badge && (
                              <span className={`rounded px-1.5 py-0.5 text-xs font-medium ${
                                link.badge === "Pro" 
                                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                                  : "bg-amber-100 text-amber-800 dark:bg-amber-800/20 dark:text-amber-500"
                              }`}>
                                {link.badge}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="vertical" className="w-2">
            <ScrollArea.Thumb className="bg-gray-200 dark:bg-gray-800 rounded-full w-1.5" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        initial={false}
        animate={{ 
          x: isSidebarOpen ? 0 : -320,
        }}
        className="fixed top-0 left-0 z-50 w-64 h-screen lg:hidden
          bg-background border-r border-gray-200 dark:border-gray-800"
      >
        <div className="flex h-full flex-col pt-16">
          {/* Close button for mobile */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="font-semibold">Navigation</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close sidebar</span>
            </Button>
          </div>

          {/* Sidebar Content */}
          <ScrollArea.Root className="flex-1">
            <ScrollArea.Viewport className="h-full">
              <div className="p-6">
                <nav className="space-y-6">
                  {sidebarLinks.map((section) => (
                    <div key={section.title}>
                      <h4 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        {section.title}
                      </h4>
                      <ul className="space-y-1">
                        {section.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              to={link.href}
                              onClick={() => setIsSidebarOpen(false)}
                              className={`flex items-center justify-between rounded-md px-3 py-1.5 text-sm transition-colors ${
                                location.pathname === link.href
                                  ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800/50"
                              }`}
                            >
                              {link.label}
                              {link.badge && (
                                <span className={`rounded px-1.5 py-0.5 text-xs font-medium ${
                                  link.badge === "Pro" 
                                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                                    : "bg-amber-100 text-amber-800 dark:bg-amber-800/20 dark:text-amber-500"
                                }`}>
                                  {link.badge}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </nav>
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="vertical" className="w-2">
              <ScrollArea.Thumb className="bg-gray-200 dark:bg-gray-800 rounded-full w-1.5" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </div>
      </motion.div>

      {/* Main Content */}
      <ScrollArea.Root className="flex-1">
        <ScrollArea.Viewport className="h-full">
          <main className="relative mx-auto max-w-4xl px-6 py-8 lg:px-8">
            <div className="mb-6 pl-12 lg:pl-0">
              <Breadcrumb />
            </div>
            <div className="pl-12 lg:pl-0 [&>article]:mt-6">
              <Outlet />
            </div>
          </main>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical" className="w-2">
          <ScrollArea.Thumb className="bg-gray-200 dark:bg-gray-800 rounded-full w-1.5" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>

      {/* Right Sidebar - Table of Contents */}
      <ScrollArea.Root className="hidden lg:block w-64 border-l border-gray-200 dark:border-gray-800 shrink-0">
        <ScrollArea.Viewport className="h-full">
          <div className="p-6">
            <h4 className="mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
              On This Page
            </h4>
            <TableOfContents />
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical" className="w-2">
          <ScrollArea.Thumb className="bg-gray-200 dark:bg-gray-800 rounded-full w-1.5" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  )
} 