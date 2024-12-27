import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Sparkles, Github, ExternalLink } from "lucide-react"
import { Button } from "./button"

export function Hero() {
  const { scrollY } = useScroll()
  
  // Optimize transforms by using translateY instead of y
  // and reducing the number of transform calculations
  const parallaxY = useTransform(scrollY, [0, 300], [0, 100])
  const scale = useTransform(scrollY, [0, 300], [1, 0.98])
  
  // Combine background effects into a single transform
  const bgParallax = useTransform(scrollY, [0, 300], [0, 50])
  const blobOpacity = useTransform(scrollY, [0, 300], [1, 0.7])

  // Array of avatar URLs using UI Faces API
  const avatars = [
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  ]

  return (
    <div className="relative overflow-hidden bg-background min-h-screen flex flex-col items-center justify-center will-change-transform">
      {/* Optimized Background Effects */}
      <motion.div 
        className="pointer-events-none absolute inset-0 will-change-transform"
        style={{ 
          translateY: bgParallax,
          opacity: blobOpacity 
        }}
      >
        {/* Grid with reduced complexity */}
        <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.02] bg-[size:60px_60px] [mask-image:radial-gradient(white,transparent_85%)]" />
        
        {/* Simplified Gradient Blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] 
            bg-gradient-to-r from-purple-500/20 to-transparent dark:from-purple-500/30 
            rounded-full blur-3xl animate-blob will-change-transform" 
          />
          <div className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] 
            bg-gradient-to-l from-indigo-500/20 to-transparent dark:from-indigo-500/30 
            rounded-full blur-3xl animate-blob animation-delay-2000 will-change-transform"
          />
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] 
            bg-gradient-to-t from-pink-500/20 to-transparent dark:from-pink-500/30 
            rounded-full blur-3xl animate-blob animation-delay-4000 will-change-transform"
          />
        </div>

        {/* Simplified overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-background" />
      </motion.div>

      <motion.div 
        className="container relative px-4 flex flex-col items-center justify-center gap-16 pt-24 pb-16 will-change-transform"
        style={{ scale }}
      >
        {/* Content sections with optimized transforms */}
        <motion.div
          style={{ translateY: parallaxY }}
          className="flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border bg-background/30 px-4 sm:px-7 py-2 shadow-md backdrop-blur transition-all hover:bg-background/50 will-change-transform"
        >
          <span className="hidden xs:inline text-sm font-semibold">Update</span>
          <div className="hidden xs:block mx-2 h-4 w-[1px] bg-gradient-to-b from-border/0 via-border to-border/0" />
          <div className="flex items-center gap-1.5">
            <div className="relative shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-sm opacity-50 group-hover:opacity-75 animate-pulse" />
              <Sparkles className="relative h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
            </div>
            <span className="text-xs sm:text-sm whitespace-nowrap">
              <span className="hidden sm:inline">Introducing </span>
              BG Mesh Gradient
            </span>
          </div>
          <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground shrink-0" />
        </motion.div>

        <div className="max-w-4xl text-center relative z-10">
          <motion.h1 
            style={{ translateY: useTransform(parallaxY, y => y * 0.5) }}
            className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight will-change-transform"
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
            style={{ translateY: useTransform(parallaxY, y => y * 0.25) }}
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground will-change-transform"
          >
            50+ Free beautifull interactive react/nextjs components based on tailwindcss, 
            framer-motion, gsap, threejs etc
          </motion.p>

          <motion.div 
            style={{ translateY: useTransform(parallaxY, y => y * 0.15) }}
            className="mt-8 flex flex-wrap justify-center gap-4 will-change-transform"
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

          <motion.div 
            style={{ translateY: useTransform(parallaxY, y => y * 0.05) }}
            className="mt-12 flex items-center justify-center gap-8 will-change-transform"
          >
            <div className="flex -space-x-4">
              {avatars.map((avatar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className="relative inline-block h-10 w-10 rounded-full border-2 border-background ring-1 ring-background/50 overflow-hidden"
                  style={{ zIndex: avatars.length - i }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5" />
                  <img
                    src={avatar}
                    alt={`User ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="eager"
                  />
                </motion.div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Sparkles 
                    key={i} 
                    className="h-4 w-4 text-yellow-500 animate-pulse" 
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">
                Trusted by 1000+ users
              </span>
            </div>
          </motion.div>
        </div>

        {/* Preview Grid with optimized animations */}
        <motion.div 
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 will-change-transform"
          style={{ translateY: useTransform(parallaxY, y => y * -0.5) }}
        >
          {['Accordion', 'Globe', 'Mouse Trail'].map((title, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative aspect-video overflow-hidden rounded-xl border bg-gradient-to-br from-background/50 to-background shadow-xl backdrop-blur-sm"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
              
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative h-full w-full p-6 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-sm text-muted-foreground">
                    Interactive {title.toLowerCase()} component with smooth animations
                  </p>
                </div>
                
                {/* Bottom Section */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    <span>View Component</span>
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                  
                  {/* Tags */}
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded-md bg-primary/10 text-xs font-medium">
                      New
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
} 