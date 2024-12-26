import { Button } from "@/components/ui/button"
import { Banner } from "@/components/ui/banner"
import { ArrowRight, Code2, Layers, Sparkles, Zap } from "lucide-react"
import { Nav } from "@/components/ui/nav"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Banner />
      <Nav />
      {/* Hero Section */}
      <section className="px-4 py-24 md:py-32 space-y-8 container mx-auto text-center">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Modern UI Components for
            <br /> Ambitious Developers
          </h1>
          <p className="text-xl text-muted-foreground">
            Build beautiful, accessible, and performant web applications with our
            professionally crafted components.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            View on GitHub <Code2 className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to build modern apps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sparkles className="w-10 h-10" />}
              title="Beautiful by default"
              description="Professionally designed components that you can copy and paste into your apps."
            />
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title="Fast and Reliable"
              description="Built with performance in mind. Optimized for fast load times and smooth interactions."
            />
            <FeatureCard
              icon={<Layers className="w-10 h-10" />}
              title="Highly Customizable"
              description="Every component is fully customizable and can be adapted to your brand."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="p-6 rounded-lg bg-background border">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
} 