import { ExternalLink } from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"

export function Showcase() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Effects (similar to Hero) */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] [mask-image:radial-gradient(white,transparent_85%)]" />
        
        {/* Gradient Blobs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20 mix-blend-overlay">
          <div className="absolute inset-0 bg-repeat bg-noise" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-indigo-50/5 dark:via-indigo-950/5 to-background" />
      </div>

      <motion.div 
        ref={containerRef}
        style={{ opacity, scale }}
        className="container relative mx-auto px-4"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.7,
            ease: [0.21, 0.45, 0.27, 0.9]
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Built by Developers,{' '}
            <span className="relative inline-block">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                For Developers
              </motion.span>
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500/0 via-purple-500/70 to-pink-500/0"
              />
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Join thousands of developers crafting exceptional user experiences with our components
          </motion.p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              title: "DesignFlow Studio",
              description: "A modern design system management platform built with collaboration in mind",
              image: "https://placehold.co/600x400/1a1a1a/666666/png?text=DesignFlow",
              link: "https://designflow.example.com"
            },
            {
              title: "TaskMaster Pro",
              description: "Enterprise project management solution with real-time updates",
              image: "https://placehold.co/600x400/1a1a1a/666666/png?text=TaskMaster",
              link: "https://taskmaster.example.com"
            },
            {
              title: "Analytics Hub",
              description: "Data visualization platform with interactive dashboards",
              image: "https://placehold.co/600x400/1a1a1a/666666/png?text=Analytics",
              link: "https://analytics.example.com"
            }
          ].map((card, i) => (
            <ShowcaseCard key={i} {...card} delay={i * 0.1} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

function ShowcaseCard({
  title,
  description,
  image,
  link,
  delay
}: {
  title: string
  description: string
  image: string
  link: string
  delay: number
}) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true })

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    show: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        delay,
        ease: [0.21, 0.45, 0.27, 0.9]
      }
    }
  }

  return (
    <motion.a
      ref={cardRef}
      variants={cardVariants}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative block rounded-xl overflow-hidden border bg-gradient-to-br from-background/50 to-background shadow-xl backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ delay: delay + 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"
      />
      
      <div className="aspect-[16/10] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
        />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: isInView ? 1 : 1.1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="relative p-6">
        <div className="flex items-center justify-between mb-3">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
            transition={{ delay: delay + 0.4, duration: 0.5 }}
            className="text-xl font-semibold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            {title}
          </motion.h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
          className="text-sm text-muted-foreground leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ delay: delay + 0.6, duration: 0.5 }}
          className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl"
        />
      </div>
    </motion.a>
  )
} 