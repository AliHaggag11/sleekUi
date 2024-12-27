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
        <p>
          You must install <code className="text-sm font-mono bg-muted px-1.5 py-0.5 rounded-md">framer-motion</code>. As most of our components use <code className="text-sm font-mono bg-muted px-1.5 py-0.5 rounded-md">framer-motion</code> install it too.
        </p>
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
        <p>
          The component accepts several props for customization:
        </p>
        <Code language="tsx">{`interface MarqueeProps {
  speed?: number       // Scrolling speed (default: 20)
  direction?: "left" | "right"  // Scroll direction
  pauseOnHover?: boolean  // Whether to pause on hover
  className?: string    // Additional CSS classes
}`}</Code>
      </section>

      <section>
        <h2 id="examples">Examples</h2>
        
        <h3 id="logo-cloud">Logo Cloud</h3>
        <p>
          A common use case is creating an infinite scrolling logo cloud:
        </p>
        <Code 
          language="tsx"
          scope={{ Marquee }}
        >{`<Marquee 
  speed={15} 
  className="py-6 bg-muted"
>
  <div className="flex items-center gap-8">
    {logos.map((logo) => (
      <img 
        key={logo.alt}
        src={logo.src} 
        alt={logo.alt}
        className="h-8 w-auto"
      />
    ))}
  </div>
</Marquee>`}</Code>

        <h3 id="testimonials">Testimonials</h3>
        <p>
          You can also use it for scrolling testimonials or reviews:
        </p>
        <Code 
          language="tsx"
          scope={{ Marquee }}
        >{`<Marquee 
  speed={10} 
  pauseOnHover 
  direction="right"
>
  <div className="flex gap-8">
    {testimonials.map((testimonial) => (
      <div key={testimonial.id} className="w-80">
        <blockquote>{testimonial.content}</blockquote>
        <cite>{testimonial.author}</cite>
      </div>
    ))}
  </div>
</Marquee>`}</Code>
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
      <Code 
        language="typescript" 
        path="@/components/core/marquee"
        scope={{ Marquee, cn }}
      >
{`<Marquee className="py-6">
  <div className="flex items-center gap-8">
    <div className="text-white px-4 py-2 rounded bg-gray-800">Item 1</div>
    <div className="text-white px-4 py-2 rounded bg-gray-800">Item 2</div>
    <div className="text-white px-4 py-2 rounded bg-gray-800">Item 3</div>
  </div>
</Marquee>`}
      </Code>
    </DocContent>
  )
} 