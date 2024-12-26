import { motion, useInView } from "framer-motion"
import { Github, Twitter, MessageCircle, ArrowUpRight } from "lucide-react"
import { Button } from "./button"
import { useRef } from "react"

export function Footer() {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px" })

  const footerLinks = {
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Components", href: "#" },
      { name: "Examples", href: "#" },
      { name: "Themes", href: "#" },
    ],
    community: [
      { name: "GitHub", href: "#", icon: Github },
      { name: "Discord", href: "#", icon: MessageCircle },
      { name: "Twitter", href: "#", icon: Twitter },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        duration: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.24, 0.25, 0.05, 1]
      }
    }
  }

  return (
    <footer 
      ref={footerRef}
      className="relative overflow-hidden border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] [mask-image:radial-gradient(white,transparent_85%)]" />
        
        {/* Animated Gradient Blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-1/4 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-1/4 translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <div className="absolute inset-0 bg-repeat bg-noise" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Newsletter Section */}
          <motion.div
            variants={itemVariants}
            className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-background/50 via-background/80 to-background/50 border backdrop-blur-sm"
          >
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <motion.h2 
                variants={itemVariants}
                className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent"
              >
                Stay up to date
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-muted-foreground"
              >
                Get notified about updates, new components, and resources.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto mt-4"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-background border focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button className="relative group">
                  Subscribe
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Links Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                Sleek UI
              </h2>
              <p className="text-muted-foreground">
                Beautiful, modern components built with Radix UI and Tailwind CSS.
              </p>
              <div className="flex gap-3">
                {footerLinks.community.map(({ name, href, icon: Icon }) => (
                  <Button
                    key={name}
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 relative group overflow-hidden"
                    asChild
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      />
                      <Icon className="h-4 w-4 relative z-10 transition-transform group-hover:scale-110" />
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            {["Resources", "Community", "Legal"].map((section) => (
              <motion.div 
                key={section}
                variants={itemVariants}
                className="space-y-4"
              >
                <h3 className="text-sm font-semibold">{section}</h3>
                <ul className="space-y-3">
                  {footerLinks[section.toLowerCase() as keyof typeof footerLinks]?.map(({ name, href }) => (
                    <li key={name}>
                      <a
                        href={href}
                        className="group relative inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span className="relative">
                          {name}
                          <motion.span
                            className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-primary/60 to-primary group-hover:w-full transition-[width] duration-300"
                            aria-hidden="true"
                          />
                        </span>
                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p 
                variants={itemVariants}
                className="text-sm text-muted-foreground"
              >
                © {new Date().getFullYear()} Sleek UI. All rights reserved.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="text-sm text-muted-foreground"
              >
                Built with{" "}
                <span className="inline-block animate-pulse">💗</span>
                {" "}by{" "}
                <a
                  href="#"
                  className="relative inline-flex group text-foreground"
                >
                  Ali Haggag
                  <motion.span
                    className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-primary/60 to-primary group-hover:w-full transition-[width] duration-300"
                    aria-hidden="true"
                  />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
} 