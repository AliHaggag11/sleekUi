import { motion, useInView } from "framer-motion"
import { Github, Twitter, MessageCircle, ArrowUpRight, Check, Loader2 } from "lucide-react"
import { Button } from "./button"
import { useRef, useState } from "react"
import { Logo } from "./logo"

export function Footer() {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success">("idle")

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || submitState === "loading") return

    setSubmitState("loading")
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitState("success")
    setTimeout(() => {
      setSubmitState("idle")
      setEmail("")
    }, 2000)
  }

  return (
    <footer 
      ref={footerRef}
      className="relative overflow-hidden border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 font-light"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.02] bg-[size:60px_60px] [mask-image:radial-gradient(white,transparent_85%)]" />
        
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
            className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-background/50 via-background/80 to-background/50 border backdrop-blur-sm relative overflow-hidden group"
          >
            {/* Newsletter Background Effects */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] [mask-image:radial-gradient(white,transparent_85%)]" />
            <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
            </div>

            <div className="max-w-2xl mx-auto text-center space-y-4 relative">
              <motion.h2 
                variants={itemVariants}
                className="text-2xl md:text-3xl font-medium bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent tracking-tight"
              >
                Stay up to date
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-muted-foreground font-light"
              >
                Get notified about updates, new components, and resources.
              </motion.p>
              <motion.form 
                variants={itemVariants}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-6"
              >
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    disabled={submitState === "success"}
                    className={`
                      w-full h-12 px-4 rounded-lg
                      bg-background/50 backdrop-blur-sm border
                      focus:outline-none focus:ring-2 focus:ring-primary/20
                      disabled:opacity-50 disabled:cursor-not-allowed
                      transition-all duration-200
                      ${submitState === "success" ? "border-primary/50 bg-primary/5 pr-12" : ""}
                    `}
                  />
                  {submitState === "success" && (
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute right-4 top-0 h-full flex items-center justify-center"
                    >
                      <Check className="w-5 h-5 text-primary" />
                    </motion.div>
                  )}
                </div>

                <Button 
                  type="submit"
                  disabled={!email || submitState !== "idle"}
                  className="relative h-12 px-6 group"
                >
                  <div className="relative z-10 flex items-center justify-center min-w-[100px]">
                    {submitState === "loading" ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center"
                      >
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </motion.div>
                    ) : submitState === "success" ? (
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-primary-foreground flex items-center gap-2"
                      >
                        Subscribed
                        <Check className="w-4 h-4" />
                      </motion.div>
                    ) : (
                      <>
                        Subscribe
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </>
                    )}
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity rounded-lg"
                  />
                </Button>
              </motion.form>

              {submitState === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-primary mt-3 text-center"
                >
                  Thank you for subscribing! Check your email for confirmation.
                </motion.p>
              )}
            </div>
          </motion.div>

          {/* Links Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <Logo showBetaBadge={false} />
              <p className="text-muted-foreground font-light">
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
                <h3 className="text-sm font-medium tracking-wide">{section}</h3>
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
            className="mt-16 pt-8 border-t font-light"
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
                Built
              
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