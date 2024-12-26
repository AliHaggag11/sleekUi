import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Sparkles, Github, ExternalLink } from "lucide-react"
import { Button } from "./button"

export function Hero() {
  const { scrollY } = useScroll()
  
  // Create different fade ranges for each section
  const badgeOpacity = useTransform(scrollY, [0, 100], [1, 0])
  const titleOpacity = useTransform(scrollY, [50, 150], [1, 0])
  const descriptionOpacity = useTransform(scrollY, [100, 200], [1, 0])
  const ctaOpacity = useTransform(scrollY, [150, 250], [1, 0])
  const socialOpacity = useTransform(scrollY, [200, 300], [1, 0])
  const gridOpacity = useTransform(scrollY, [250, 350], [1, 0])
  
  // Subtle scale effect for each section
  const badgeScale = useTransform(scrollY, [0, 100], [1, 0.95])
  const titleScale = useTransform(scrollY, [50, 150], [1, 0.95])
  const descriptionScale = useTransform(scrollY, [100, 200], [1, 0.95])
  const ctaScale = useTransform(scrollY, [150, 250], [1, 0.95])
  const socialScale = useTransform(scrollY, [200, 300], [1, 0.95])
  const gridScale = useTransform(scrollY, [250, 350], [1, 0.95])

  return (
    <div className="relative overflow-hidden bg-background min-h-screen flex flex-col items-center justify-center">
      {/* Animated Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.02] bg-black/[0.02] bg-[size:60px_60px] [mask-image:radial-gradient(white,transparent_85%)]" />
        
        {/* Gradient Blob */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-96 h-96 bg-pink-500/10 dark:bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-4000" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20 mix-blend-overlay">
          <div className="absolute inset-0 bg-repeat bg-noise" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-indigo-50/5 dark:via-indigo-950/5 to-background" />
      </div>

      <div className="container relative px-4 flex flex-col items-center justify-center gap-16 pt-24 pb-16">
        {/* Update Badge */}
        <motion.div
          style={{ opacity: badgeOpacity, scale: badgeScale }}
          className="flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border bg-background/30 px-7 py-2 shadow-md backdrop-blur transition-all hover:bg-background/50"
        >
          <span className="text-sm font-semibold">Update</span>
          <div className="mx-2 h-4 w-[1px] bg-gradient-to-b from-border/0 via-border to-border/0" />
          <div className="flex items-center gap-1.5">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-sm opacity-50 group-hover:opacity-75 animate-pulse" />
              <Sparkles className="relative h-4 w-4 text-primary" />
            </div>
            <span className="text-sm">Introducing BG Mesh Gradient</span>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl text-center relative z-10">
          <motion.h1 
            style={{ opacity: titleOpacity, scale: titleScale }}
            className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            The Components Your{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Website
              </span>
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500/0 via-purple-500/70 to-pink-500/0"
              />
            </span>
            {' '}Deserve!
          </motion.h1>

          <motion.p 
            style={{ opacity: descriptionOpacity, scale: descriptionScale }}
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground"
          >
            50+ Free beautifull interactive react/nextjs components based on tailwindcss, 
            framer-motion, gsap, threejs etc
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            style={{ opacity: ctaOpacity, scale: ctaScale }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Button 
              size="lg"
              className="h-12 px-8 font-medium relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              Browse Components
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="h-12 px-8 font-medium relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Star on GitHub
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            style={{ opacity: socialOpacity, scale: socialScale }}
            className="mt-12 flex items-center justify-center gap-8"
          >
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="relative inline-block h-8 w-8 rounded-full border-2 border-background"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} className="h-4 w-4 text-yellow-500 animate-pulse" />
                ))}
              </div>
              <span className="text-sm font-medium">
                Trusted by 1000+ users
              </span>
            </div>
          </motion.div>
        </div>

        {/* Preview Grid */}
        <motion.div 
          style={{ opacity: gridOpacity, scale: gridScale }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {['Accordion', 'Globe', 'Mouse Trail'].map((title, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative aspect-video overflow-hidden rounded-xl border bg-gradient-to-br from-background/50 to-background shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full w-full p-6 flex flex-col justify-between">
                <h3 className="font-semibold text-lg">{title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  <span>View Component</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 