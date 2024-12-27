import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Quote, Star } from "lucide-react"

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      quote: "Sleek UI has dramatically improved our development workflow. The components are beautiful and easy to customize.",
      author: "Sarah Chen",
      role: "Lead Developer at TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "The attention to detail in animations and interactions is incredible. Our users love the smooth experience.",
      author: "Michael Torres",
      role: "Product Designer at DesignLabs",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "Best UI library we've used. The TypeScript support and documentation are excellent.",
      author: "Emily Watson",
      role: "CTO at StartupX",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5
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
            Testimonials
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            Loved by developers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here's what our users have to say about their experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Grid Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-3xl -m-4" />

          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group p-6 rounded-2xl bg-gradient-to-br from-background/50 via-background/80 to-background/50 border backdrop-blur-sm"
            >
              {/* Card Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative space-y-4">
                {/* Quote Icon with Gradient Background */}
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 group-hover:from-indigo-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500">
                  <Quote className="w-6 h-6 text-primary transition-transform duration-500 group-hover:scale-110" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: i * 0.1 + index * 0.1,
                        type: "spring",
                        stiffness: 300
                      }}
                    >
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-2">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/10">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 ring-2 ring-primary/10 rounded-full" />
                  </div>
                  <div>
                    <div className="font-medium bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
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