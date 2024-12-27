import { ThemeProvider } from "./components/theme-provider"
import { Nav } from "./components/ui/nav"
import { Banner } from "./components/ui/banner"
import { Hero } from "./components/ui/hero"
import { Showcase } from "./components/ui/showcase"
import { Features } from "./components/ui/features"
import { Testimonials } from "./components/ui/testimonials"
import { Pricing } from "./components/ui/pricing"
import { Footer } from "./components/ui/footer"

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Banner />
        <Nav />
        <Hero />
        <Features />
        <Showcase />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
