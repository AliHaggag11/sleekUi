import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft, Home, Book, Github, ExternalLink } from "lucide-react"
import { Button } from "../ui/button"

// Quick links to help users find what they're looking for
const helpfulLinks = [
  {
    title: "Documentation",
    description: "Browse our comprehensive guides and API references",
    icon: Book,
    href: "/docs",
  },
  {
    title: "Components",
    description: "Explore our collection of UI components",
    icon: ExternalLink,
    href: "/components",
  },
  {
    title: "Homepage",
    description: "Return to the main landing page",
    icon: Home,
    href: "/",
  },
]

export function NotFound() {
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 300], [0, 50])
  const scale = useTransform(scrollY, [0, 300], [1, 0.98])

  return (
    <div className="relative overflow-hidden bg-background min-h-screen flex flex-col items-center justify-center">
      {/* Background Effects */}
      <motion.div className="pointer-events-none absolute inset-0">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.02] bg-[size:60px_60px] [mask-image:radial-gradient(white,transparent_85%)]" />
        
        {/* Gradient Blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] 
            bg-gradient-to-r from-purple-500/20 to-transparent dark:from-purple-500/30 
            rounded-full blur-3xl animate-blob" 
          />
          <div className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] 
            bg-gradient-to-l from-indigo-500/20 to-transparent dark:from-indigo-500/30 
            rounded-full blur-3xl animate-blob animation-delay-2000"
          />
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] 
            bg-gradient-to-t from-pink-500/20 to-transparent dark:from-pink-500/30 
            rounded-full blur-3xl animate-blob animation-delay-4000"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-background" />
      </motion.div>

      <motion.div
        className="container relative px-4 flex flex-col items-center justify-center gap-12"
        style={{ scale, translateY: parallaxY }}
      >
        {/* 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative text-center"
        >
          <h1 className="text-8xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            404
          </h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="px-2 py-1 rounded-md bg-primary/10 font-medium">Error</span>
            <span>•</span>
            <span>Page Not Found</span>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center max-w-2xl space-y-4"
        >
          <h2 className="text-2xl font-semibold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Oops! This page seems to be missing
          </h2>
          <p className="text-muted-foreground">
            The page you're looking for might have been moved, deleted, or might never have existed. 
            Don't worry though, we've got some helpful links to get you back on track.
          </p>
        </motion.div>

        {/* Helpful Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl"
        >
          {helpfulLinks.map((link, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              whileHover={{ y: -4 }}
              className="group relative p-4 rounded-xl border bg-gradient-to-br from-background/50 to-background shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Link to={link.href} className="block">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-2">
                  <div className="flex items-center gap-2">
                    <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <h3 className="font-medium">{link.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button 
            asChild
            size="lg"
            className="h-12 px-8 font-medium relative group overflow-hidden"
          >
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to home
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="h-12 px-8 font-medium relative group"
          >
            <a 
              href="https://github.com/your-repo/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Github className="h-4 w-4" />
              Report an issue
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
} 