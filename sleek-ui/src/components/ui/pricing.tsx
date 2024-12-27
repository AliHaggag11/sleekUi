import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Sparkles } from "lucide-react"
import { Button } from "./button"

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const plans = [
    {
      name: "Hobby",
      price: "Free",
      description: "Perfect for side projects and learning",
      features: [
        "50+ Components",
        "Basic Animations",
        "Dark Mode Support",
        "TypeScript Support",
        "Community Support"
      ]
    },
    {
      name: "Pro",
      price: "$49",
      description: "Everything you need for a professional project",
      features: [
        "Everything in Hobby",
        "Premium Components",
        "Advanced Animations",
        "Priority Support",
        "Private Discord",
        "Commercial License"
      ],
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale applications",
      features: [
        "Everything in Pro",
        "Custom Components",
        "Dedicated Support",
        "Custom Branding",
        "SLA",
        "Volume Licensing"
      ]
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
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-500/10 dark:bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-4000" />

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
            Pricing
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Grid Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-3xl -m-4" />

          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`
                relative group p-8 rounded-2xl backdrop-blur-sm
                ${plan.featured 
                  ? 'border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background/95 to-background/95 dark:from-primary/10 dark:via-background dark:to-background' 
                  : 'border border-border/50 bg-gradient-to-br from-background/95 via-background/98 to-background/95 dark:from-background/50 dark:via-background/80 dark:to-background/50'}
                hover:border-primary/20 transition-colors duration-300
              `}
            >
              {plan.featured && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2"
                >
                  <div className="px-4 py-1.5 rounded-full 
                    bg-background/95 dark:bg-background/80 backdrop-blur-sm 
                    border border-primary/20 shadow-lg shadow-primary/5"
                  >
                    <span className="relative flex items-center gap-1.5 text-sm font-medium text-primary">
                      <Sparkles className="w-3.5 h-3.5" />
                      Most Popular
                    </span>
                  </div>
                </motion.div>
              )}

              <div className="relative space-y-6 pt-6">
                {/* Plan Header */}
                <div className="space-y-2">
                  <h3 className="text-xl font-medium bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-medium bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground">/month</span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                {/* Action Button */}
                <Button 
                  className={`
                    w-full relative group/btn overflow-hidden h-11
                    ${plan.featured ? 'bg-primary hover:bg-primary/90' : ''}
                  `}
                  variant={plan.featured ? "default" : "outline"}
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </Button>

                {/* Features List */}
                <ul className="space-y-4 pt-8 border-t border-border/50">
                  {plan.features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.2, delay: i * 0.1 + index * 0.1 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div className="relative mt-1">
                        <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full blur-sm" />
                        <Check className="w-4 h-4 text-primary relative" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Decorative Corner Gradient */}
              <div className="absolute top-0 right-0 w-24 h-24 
                bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 
                dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 
                blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 