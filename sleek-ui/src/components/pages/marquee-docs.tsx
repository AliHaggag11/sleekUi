import { DocContent } from "../ui/doc-content"
import { Code } from "../ui/code"
import { Marquee } from "../ui/marquee"

export function MarqueeDocs() {
  return (
    <DocContent>
      {/* Header */}
      <div className="mb-12">
        <h1>Marquee</h1>
        <p className="text-xl !mt-4">
          Create magical scrolling experiences with a component that you can copy and paste into your apps.
        </p>
      </div>

      {/* Main Content */}
      <section>
        <h2 id="overview">Overview</h2>
        <p>
          The Marquee component is a versatile scrolling element that you can copy and paste into your web apps.
        </p>
        <p>
          It primarily features smooth animations and customizable options, perfect for creating engaging user experiences in landing pages, testimonials, and logo showcases.
        </p>
      </section>


      {/* Installation */}
      <section>
        <h2 id="installation">Installation</h2>
        <p>Copy the following component into your project:</p>
        <Code language="tsx">{`import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

interface MarqueeProps {
  children: React.ReactNode
  direction?: "left" | "right"
  pauseOnHover?: boolean
  className?: string
  speed?: number
}

export function Marquee({
  children,
  direction = "left",
  pauseOnHover = false,
  className,
  speed = 20,
}: MarqueeProps) {
  const [contentWidth, setContentWidth] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth)
    }
  }, [children])

  return (
    <div
      className={cn(
        "flex w-full overflow-hidden [--duration:40s]",
        className
      )}
      style={
        {
          "--duration": \`\${40 / (speed / 20)}s\`,
        } as React.CSSProperties
      }
    >
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-6"
        initial={{ x: direction === "right" ? -contentWidth : 0 }}
        animate={{ x: direction === "right" ? 0 : -contentWidth }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        {...(pauseOnHover && {
          whileHover: { animationPlayState: "paused" },
        })}
        ref={contentRef}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-6"
        initial={{ x: direction === "right" ? -contentWidth : 0 }}
        animate={{ x: direction === "right" ? 0 : -contentWidth }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        {...(pauseOnHover && {
          whileHover: { animationPlayState: "paused" },
        })}
      >
        {children}
      </motion.div>
    </div>
  )
}`}</Code>

        <p className="mt-4">Install the required dependency:</p>
        <Code language="bash">npm install framer-motion</Code>
      </section>

      {/* Main Content */}
      <section>
        <h2 id="usage">Usage</h2>
        <p>
          The Marquee component is perfect for creating engaging, auto-scrolling content sections. 
          It's commonly used for logo clouds, testimonial carousels, or any repeating content that benefits from continuous motion.
        </p>

        <h3 id="basic-example">Basic Example</h3>
        <p>
          Here's a simple example of how to use the Marquee component:
        </p>
        <Code 
          language="tsx"
          scope={{ Marquee }}
          className="text-[13px] sm:text-sm"
        >{`function Demo() {
  const items = [
    { icon: "⚡️", label: "Fast" },
    { icon: "🎨", label: "Beautiful" },
    { icon: "🛠", label: "Customizable" },
    { icon: "📱", label: "Responsive" },
    { icon: "🔒", label: "Secure" },
    { icon: "🚀", label: "Modern" }
  ]

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-900/40 dark:via-gray-900/20 dark:to-gray-900/40">
      <Marquee className="py-8 sm:py-12" speed={40} pauseOnHover>
        <div className="flex gap-4 sm:gap-8 px-2">
          {items.map((item) => (
            <div 
              key={item.label}
              className="flex items-center gap-2 sm:gap-4 rounded-xl bg-white dark:bg-gray-900/50 px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-sm border border-gray-200 dark:border-white/[0.08] shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none transition-all duration-300"
            >
              <span className="text-lg sm:text-xl">{item.icon}</span>
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-white/90">{item.label}</span>
            </div>
          ))}
        </div>
      </Marquee>
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-gray-50 dark:from-gray-900" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-gray-50 dark:from-gray-900" />
    </div>
  )
}

render(<Demo />)`}</Code>

    
      </section>

      <section>
        <h2 id="features">Features</h2>
        <ul>
          <li>Smooth infinite scrolling with no visible seams</li>
          <li>Configurable speed and direction</li>
          <li>Pause on hover (optional)</li>
          <li>Responsive and accessible</li>
          <li>Zero dependencies except for Framer Motion</li>
        </ul>

        <h3 id="customization">Customization</h3>
        <p>The component accepts the following props:</p>
        
        <div className="w-full max-w-[calc(100vw-2rem)] overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left font-medium">Property</th>
                <th className="py-2 px-4 text-left font-medium">Type</th>
                <th className="py-2 px-4 text-left font-medium">Default</th>
                <th className="py-2 px-4 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono text-xs sm:text-sm whitespace-nowrap">children</td>
                <td className="py-2 px-4 font-mono text-xs sm:text-sm whitespace-nowrap">React.ReactNode</td>
                <td className="py-2 px-4 whitespace-nowrap">Required</td>
                <td className="py-2 px-4">The content to be displayed in the marquee</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono text-xs sm:text-sm whitespace-nowrap">speed</td>
                <td className="py-2 px-4 font-mono text-xs sm:text-sm whitespace-nowrap">number</td>
                <td className="py-2 px-4 whitespace-nowrap">20</td>
                <td className="py-2 px-4">Controls the scrolling speed (lower = slower)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono text-xs sm:text-sm whitespace-nowrap">direction</td>
                <td className="py-2 px-4 font-mono text-xs sm:text-sm whitespace-nowrap">"left" | "right"</td>
                <td className="py-2 px-4 whitespace-nowrap">"left"</td>
                <td className="py-2 px-4">The direction of the marquee scroll</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono text-xs sm:text-sm whitespace-nowrap">pauseOnHover</td>
                <td className="py-2 px-4 font-mono text-xs sm:text-sm whitespace-nowrap">boolean</td>
                <td className="py-2 px-4 whitespace-nowrap">false</td>
                <td className="py-2 px-4">Whether to pause the animation on hover</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono text-xs sm:text-sm whitespace-nowrap">className</td>
                <td className="py-2 px-4 font-mono text-xs sm:text-sm whitespace-nowrap">string</td>
                <td className="py-2 px-4 whitespace-nowrap">undefined</td>
                <td className="py-2 px-4">Additional CSS classes to apply</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 id="examples">Examples</h2>
        
        <h3 id="logo-cloud">Logo Cloud</h3>
        <p>
          A common use case is creating an infinite scrolling logo cloud with fade effects:
        </p>

        <Code 
          language="tsx"
          scope={{ Marquee }}
          className="text-xs sm:text-sm md:text-base w-full max-w-[calc(100vw-2rem)] overflow-x-auto"
        >{`function Demo() {
  const brands = [
    { name: "Vercel", icon: "▲", color: { light: "#171717", dark: "#fff" } },
    { name: "React", icon: "⚛️", color: { light: "#61DAFB", dark: "#61DAFB" } },
    { name: "Next.js", icon: "𝗡", color: { light: "#171717", dark: "#fff" } },
    { name: "TypeScript", icon: "TS", color: { light: "#3178C6", dark: "#3178C6" } },
    { name: "Tailwind", icon: "🌊", color: { light: "#38BDF8", dark: "#38BDF8" } },
    { name: "Framer", icon: "🔲", color: { light: "#BB8EFF", dark: "#BB8EFF" } },
  ]

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-900/40 dark:via-gray-900/20 dark:to-gray-900/40">
      <Marquee 
        speed={20} 
        className="py-8 sm:py-12"
        pauseOnHover
      >
        <div className="flex items-center gap-6 sm:gap-12 px-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group relative flex items-center gap-2 sm:gap-3 rounded-xl border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-black/30 px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-[2px] transition-all duration-300 hover:border-gray-300 dark:hover:border-white/[0.12] hover:shadow-md dark:hover:shadow-none"
            >
              <div className="relative z-10 flex items-center gap-3">
                <span 
                  className="text-xl transition-transform duration-500 group-hover:scale-110 group-hover:transform" 
                  style={{
                    color: brand.color.light,
                    ['@media (prefers-color-scheme: dark)']: {
                      color: brand.color.dark
                    }
                  }}
                >
                  {brand.icon}
                </span>
                <span className="font-medium text-gray-700 dark:text-white/70 transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-white/90">
                  {brand.name}
                </span>
              </div>
              <div className="absolute inset-0 z-0 rounded-xl bg-gradient-to-br from-gray-100 dark:from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </Marquee>
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-gray-50 dark:from-gray-900" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 dark:from-gray-900" />
    </div>
  )
}

render(<Demo />)`}</Code>

        <div className="-mx-4 sm:-mx-6 px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-xl">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Grid Pattern */}
              <div className="absolute inset-0 bg-grid-white/[0.03] dark:bg-grid-white/[0.05] bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_90%)]" />
              
              {/* Gradient Blobs */}
              <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-blue-500/30 dark:bg-blue-500/40 rounded-full blur-3xl animate-blob" />
              <div className="absolute bottom-0 right-0 w-[150px] h-[150px] bg-indigo-500/20 dark:bg-indigo-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />

              {/* Noise Texture */}
              <div className="absolute inset-0 opacity-30 dark:opacity-40">
                <div className="absolute inset-0 bg-repeat bg-noise mix-blend-overlay" />
              </div>

              {/* Backdrop Blur */}
              <div className="absolute inset-0 backdrop-blur-md bg-white/70 dark:bg-gray-900/70" />
            </div>

            {/* Content */}
            <div className="relative p-4 sm:p-6">
              <h4 className="font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2 text-sm sm:text-base">
                <span className="text-[10px]">💡</span>
                Pro Tips for Logo Clouds
              </h4>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base">
                <li className="break-words">Add subtle hover animations to make the experience more interactive</li>
                <li className="break-words">Use backdrop blur and gradients for a modern glassmorphism effect</li>
                <li className="break-words">Include brand-specific colors to maintain brand identity</li>
                <li className="break-words">Layer multiple effects (scale, opacity, color) for rich interactions</li>
                <li className="break-words">Add wider gradient masks to create smoother edge transitions</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 id="testimonials">Testimonials</h3>
        <p>
          Create elegant testimonial carousels with smooth animations:
        </p>
        <Code 
          language="tsx"
          scope={{ Marquee }}
          className="text-xs sm:text-sm md:text-base w-full max-w-[calc(100vw-2rem)] overflow-x-auto"
        >{`function Demo() {
  const testimonials = [
    {
      quote: "Best UI library we've used. The TypeScript support and documentation are excellent.",
      author: "Emily Watson",
      role: "CTO at StartupX",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "The attention to detail in animations and interactions is incredible. Our users love it.",
      author: "Michael Torres",
      role: "Product Designer at DesignLabs",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "Sleek UI has improved our workflow. The components are beautiful and customizable.",
      author: "Sarah Chen",
      role: "Lead Developer at TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
      rating: 5
    }
  ]

  return (
    <div className="relative overflow-hidden rounded-xl bg-gray-50 dark:bg-[#0A0A0A]">
      <Marquee 
        speed={25} 
        pauseOnHover 
        className="py-8 sm:py-12"
      >
        <div className="flex gap-4 sm:gap-8 px-4">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="relative w-[400px] rounded-xl bg-white dark:bg-[#141414] p-8 shadow-sm dark:shadow-none"
            >
              {/* Quote Icon */}
              <div className="absolute right-8 top-8">
                <span className="text-4xl text-gray-200 dark:text-white/10 font-serif">
                  "
                </span>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-sm">★</span>
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-white/70 mb-8 line-clamp-3">
                {item.quote}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-gray-900 dark:text-white truncate">
                    {item.author}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-white/50 truncate">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>

      {/* Edge Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-gray-50 dark:from-[#0A0A0A]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 dark:from-[#0A0A0A]" />
    </div>
  )
}

render(<Demo />)`}</Code>

        <div className="-mx-4 sm:-mx-6 px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-xl">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Grid Pattern */}
              <div className="absolute inset-0 bg-grid-white/[0.03] dark:bg-grid-white/[0.05] bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_90%)]" />
              
              {/* Gradient Blobs */}
              <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-blue-500/30 dark:bg-blue-500/40 rounded-full blur-3xl animate-blob animation-delay-4000" />
              <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-indigo-500/20 dark:bg-indigo-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />

              {/* Noise Texture */}
              <div className="absolute inset-0 opacity-30 dark:opacity-40">
                <div className="absolute inset-0 bg-repeat bg-noise mix-blend-overlay" />
              </div>

              {/* Backdrop Blur */}
              <div className="absolute inset-0 backdrop-blur-md bg-white/70 dark:bg-gray-900/70" />
            </div>

            {/* Content */}
            <div className="relative p-4 sm:p-6">
              <h4 className="font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2 text-sm sm:text-base">
                <span className="text-[10px]">💡</span>
                Pro Tips for Testimonials
              </h4>
              <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base">
                <li className="break-words">Use dark backgrounds for a premium feel</li>
                <li className="break-words">Add star ratings to increase credibility</li>
                <li className="break-words">Position quote marks subtly in the background</li>
                <li className="break-words">Keep testimonials concise and impactful</li>
                <li className="break-words">Include clear author attribution with roles</li>
                <li className="break-words">Maintain consistent spacing and typography</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 id="accessibility">Accessibility</h2>
        <p>
          The Marquee component follows accessibility best practices:
        </p>
        <ul>
          <li>Content can be paused via hover or focus</li>
          <li>Proper ARIA attributes for screen readers</li>
          <li>Respects reduced motion preferences</li>
          <li>Keyboard navigable when paused</li>
        </ul>
      </section>

      {/* Example usage: */}

      <section>
        <h2 id="tips">Tips & Tricks</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the <code>speed</code> prop to adjust the scrolling speed - lower numbers mean slower scrolling</li>
          <li>Add gradient masks on the sides to create a fade effect</li>
          <li>Enable <code>pauseOnHover</code> for interactive content</li>
          <li>Use the <code>direction</code> prop to change scroll direction</li>
          <li>Wrap complex content in a flex container to maintain proper spacing</li>
        </ul>
      </section>
    </DocContent>
  )
} 