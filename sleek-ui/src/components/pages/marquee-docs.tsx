import { DocContent } from "../ui/doc-content"

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

      <section>
        <h2 id="philosophy">Philosophy</h2>
        <p>
          <strong>I personally believe that subtle motion and animation can significantly enhance user engagement. It's one of the key methods of creating a polished, premium feel in your application.</strong> Motion helps guide users' attention and creates a more dynamic, interactive experience.
        </p>

        <h3 id="trust-factors">Design Considerations</h3>
        <p>
          When implementing scrolling content, we need to consider:
        </p>

        <ul>
          <li>"Is the motion smooth and natural?"</li>
          <li>"Does it respect user preferences for reduced motion?"</li>
          <li>"Is it accessible to all users?"</li>
        </ul>

        <h3 id="impact">Impact of Motion</h3>
        <p>
          <strong>Poor implementation of motion can be jarring and distracting.</strong> It can create a sense of motion sickness and make your application feel unprofessional.
        </p>

        <p>
          <strong>Well-implemented motion enhances the user experience without drawing attention to itself.</strong> It should feel natural and purposeful, adding value to the interface without overwhelming it.
        </p>
      </section>

      {/* Installation */}
      <section>
        <h2 id="installation">Installation</h2>
        <p>
          You must install <code className="text-sm font-mono bg-muted px-1.5 py-0.5 rounded-md">framer-motion</code>. As most of our components use <code className="text-sm font-mono bg-muted px-1.5 py-0.5 rounded-md">framer-motion</code> install it too.
        </p>
        <pre><code className="language-bash">npm install framer-motion</code></pre>
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
        <pre><code className="language-tsx">{`import { Marquee } from "@/components/ui/marquee"

export function LogoCloud() {
  return (
    <Marquee className="py-6">
      <div className="flex items-center gap-8">
        <img src="/logo1.svg" alt="Logo 1" />
        <img src="/logo2.svg" alt="Logo 2" />
        <img src="/logo3.svg" alt="Logo 3" />
      </div>
    </Marquee>
  )
}`}</code></pre>
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
        <pre><code className="language-tsx">{`interface MarqueeProps {
  speed?: number       // Scrolling speed (default: 20)
  direction?: "left" | "right"  // Scroll direction
  pauseOnHover?: boolean  // Whether to pause on hover
  className?: string    // Additional CSS classes
}`}</code></pre>
      </section>

      <section>
        <h2 id="examples">Examples</h2>
        
        <h3 id="logo-cloud">Logo Cloud</h3>
        <p>
          A common use case is creating an infinite scrolling logo cloud:
        </p>
        <pre><code className="language-tsx">{`<Marquee 
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
</Marquee>`}</code></pre>

        <h3 id="testimonials">Testimonials</h3>
        <p>
          You can also use it for scrolling testimonials or reviews:
        </p>
        <pre><code className="language-tsx">{`<Marquee 
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
</Marquee>`}</code></pre>
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
    </DocContent>
  )
} 