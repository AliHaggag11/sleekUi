import { DocContent } from "../ui/doc-content"

export function Introduction() {
  return (
    <DocContent>
      {/* Header */}
      <div className="mb-12">
        <h1>Introduction</h1>
        <p className="text-xl !mt-4">
          Elegantly crafted components ready to enhance your applications. Built with accessibility, customization, and open-source values at heart.
        </p>
      </div>

      {/* Main Content */}
      <section>
        <h2 id="overview">Overview</h2>
        <p>
          SleekUI is more than just a component library - it's a curated collection of delightful UI elements designed to make web experiences special. Each component comes with thoughtfully designed variations that adapt to different contexts and needs.
        </p>
        <p>
          The goal is simple: to transform ordinary scrolling into an engaging journey, where every interaction feels intentional and refined.
        </p>
      </section>

      <section>
        <h2 id="key-features">Key Features</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Copy and Paste Ready</h3>
            <p>Every component is self-contained and can be easily copied into your project. No complex setup or configuration required.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Accessibility First</h3>
            <p>Components are built with accessibility in mind, following ARIA best practices and supporting keyboard navigation.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Customization</h3>
            <p>Built on top of Tailwind CSS, allowing for easy styling customization while maintaining a consistent design language.</p>
          </div>

          <div>
            <h3 className="text-lg font-medium">Modern Stack</h3>
            <p>Leverages React, Tailwind CSS, and Framer Motion to create smooth, responsive, and maintainable components.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 id="design-principles">Design Principles</h2>
        <p>
          SleekUI is built on three core principles that guide every component's development:
        </p>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium">1. Delightful Interactions</h3>
            <p>
              Every component is designed to provide subtle, meaningful animations that enhance the user experience without being distracting. We believe that motion should serve a purpose and add value to the interaction.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">2. Developer Experience</h3>
            <p>
              Components are built to be intuitive and easy to implement. Clear documentation, TypeScript support, and sensible defaults make it easy to get started while maintaining flexibility for customization.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">3. Performance First</h3>
            <p>
              Each component is optimized for performance, ensuring smooth animations and minimal impact on page load times. We use techniques like lazy loading and efficient animation libraries to maintain high performance.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 id="browser-support">Browser Support</h2>
        <p>
          SleekUI is built for modern browsers and supports all major browsers including:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Chrome (and Chromium-based browsers)</li>
          <li>Firefox</li>
          <li>Safari</li>
          <li>Edge</li>
        </ul>
      </section>
    </DocContent>
  )
} 