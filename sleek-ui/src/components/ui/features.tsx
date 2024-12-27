import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Zap, Palette, Layers, Wand2, Lock } from "lucide-react"

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Sparkles,
      title: "Beautiful Animations",
      description: "Smooth, performant animations powered by Framer Motion"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for performance and instant interactions"
    },
    {
      icon: Palette,
      title: "Customizable",
      description: "Easily customize colors, styles, and behaviors"
    },
    {
      icon: Layers,
      title: "Component Library",
      description: "50+ ready-to-use components for rapid development"
    },
    {
      icon: Wand2,
      title: "Auto Dark Mode",
      description: "Automatic dark mode support with smooth transitions"
    },
    {
      icon: Lock,
      title: "Type Safe",
      description: "Built with TypeScript for better development experience"
    }
  ]

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.02] bg-black/[0.02] bg-[size:60px_60px] [mask-image:radial-gradient(white,transparent_85%)]" />
        
        {/* Gradient Blobs */}
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

      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm 
              font-medium rounded-full border border-primary/20 bg-primary/10 text-primary"
          >
            Features
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            Everything you need
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful features to help you build modern, responsive web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Grid Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-3xl -m-4" />

          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group p-6 rounded-2xl bg-gradient-to-br from-background/50 via-background/80 to-background/50 border backdrop-blur-sm"
            >
              {/* Card Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative space-y-4">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 group-hover:from-indigo-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500">
                  <feature.icon className="w-6 h-6 text-primary transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Decorative Corner Gradient */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 