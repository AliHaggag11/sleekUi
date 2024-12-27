import { DocContent } from "../ui/doc-content"
import { Code } from "../ui/code"
import { Marquee } from "../ui/marquee"
import { cn } from "@/lib/utils"

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
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-900/40 to-gray-900/0">
      <Marquee className="py-12" speed={40} pauseOnHover>
        <div className="flex gap-8 px-2">
          {items.map((item) => (
            <div 
              key={item.label}
              className="flex items-center gap-4 rounded-xl bg-gray-900/50 px-6 py-4 backdrop-blur-sm border border-white/[0.08]"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium text-white/90">{item.label}</span>
            </div>
          ))}
        </div>
      </Marquee>
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background" />
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
        
        <div className="my-4 w-full overflow-y-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">Prop</th>
                <th className="py-2 px-4 text-left">Type</th>
                <th className="py-2 px-4 text-left">Default</th>
                <th className="py-2 px-4 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono text-sm">children</td>
                <td className="py-2 px-4 font-mono text-sm">React.ReactNode</td>
                <td className="py-2 px-4">Required</td>
                <td className="py-2 px-4">The content to be displayed in the marquee</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono text-sm">speed</td>
                <td className="py-2 px-4 font-mono text-sm">number</td>
                <td className="py-2 px-4">20</td>
                <td className="py-2 px-4">Controls the scrolling speed (lower = slower)</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono text-sm">direction</td>
                <td className="py-2 px-4 font-mono text-sm">"left" | "right"</td>
                <td className="py-2 px-4">"left"</td>
                <td className="py-2 px-4">The direction of the marquee scroll</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono text-sm">pauseOnHover</td>
                <td className="py-2 px-4 font-mono text-sm">boolean</td>
                <td className="py-2 px-4">false</td>
                <td className="py-2 px-4">Whether to pause the animation on hover</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 font-mono text-sm">className</td>
                <td className="py-2 px-4 font-mono text-sm">string</td>
                <td className="py-2 px-4">undefined</td>
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
        >{`function Demo() {
  const brands = [
    { name: "Vercel", icon: "▲", color: "#fff" },
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "Next.js", icon: "𝗡", color: "#fff" },
    { name: "TypeScript", icon: "TS", color: "#3178C6" },
    { name: "Tailwind", icon: "🌊", color: "#38BDF8" },
    { name: "Framer", icon: "🔲", color: "#BB8EFF" },
  ]

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-900/40 to-gray-900/0">
      <Marquee 
        speed={20} 
        className="py-12"
        pauseOnHover
      >
        <div className="flex items-center gap-12 px-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group relative flex items-center gap-3 rounded-xl border border-white/[0.08] bg-black/30 px-6 py-4 backdrop-blur-[2px] transition-all duration-300 hover:border-white/[0.12] hover:bg-black/40"
            >
              <div className="relative z-10 flex items-center gap-3">
                <span 
                  className="text-xl transition-transform duration-500 group-hover:scale-110 group-hover:transform" 
                  style={{ color: brand.color }}
                >
                  {brand.icon}
                </span>
                <span className="font-medium text-white/70 transition-colors duration-300 group-hover:text-white/90">
                  {brand.name}
                </span>
              </div>
              <div className="absolute inset-0 z-0 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </Marquee>
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900" />
    </div>
  )
}

render(<Demo />)`}</Code>

        <div className="mt-4 rounded-lg border-l-4 border-blue-500 bg-blue-500/10 p-4">
          <h4 className="font-medium text-blue-600">Pro Tips for Logo Clouds</h4>
          <ul className="mt-2 list-disc pl-4 text-sm">
            <li>Add subtle hover animations to make the experience more interactive</li>
            <li>Use backdrop blur and gradients for a modern glassmorphism effect</li>
            <li>Include brand-specific colors to maintain brand identity</li>
            <li>Layer multiple effects (scale, opacity, color) for rich interactions</li>
            <li>Add wider gradient masks to create smoother edge transitions</li>
          </ul>
        </div>

        <h3 id="testimonials">Testimonials</h3>
        <p>
          Create elegant testimonial carousels with smooth animations:
        </p>
        <Code 
          language="tsx"
          scope={{ Marquee }}
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
    <div className="relative overflow-hidden rounded-xl bg-[#0A0A0A]">
      <Marquee 
        speed={25} 
        pauseOnHover 
        className="py-12"
      >
        <div className="flex gap-8 px-4">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="relative w-[400px] rounded-xl bg-[#141414] p-8"
            >
              {/* Quote Icon */}
              <div className="absolute right-8 top-8">
                <span className="text-4xl text-white/10 font-serif">
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
              <p className="text-[15px] leading-relaxed text-white/70 mb-8 line-clamp-3">
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
                  <div className="font-medium text-white truncate">
                    {item.author}
                  </div>
                  <div className="text-sm text-white/50 truncate">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>

      {/* Edge Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0A]" />
    </div>
  )
}

render(<Demo />)`}</Code>

        <div className="mt-4 rounded-lg border-l-4 border-blue-500 bg-blue-500/10 p-4">
          <h4 className="font-medium text-blue-600">Pro Tips for Testimonials</h4>
          <ul className="mt-2 list-disc pl-4 text-sm">
            <li>Use dark backgrounds for a premium feel</li>
            <li>Add star ratings to increase credibility</li>
            <li>Position quote marks subtly in the background</li>
            <li>Keep testimonials concise and impactful</li>
            <li>Include clear author attribution with roles</li>
            <li>Maintain consistent spacing and typography</li>
          </ul>
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