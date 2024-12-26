import { ThemeProvider } from "./components/theme-provider"
import { Nav } from "./components/ui/nav"
import { Banner } from "./components/ui/banner"
import { Hero } from "./components/ui/hero"
import { Showcase } from "./components/ui/showcase"

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Banner />
        <Nav />
        <Hero />
        <Showcase />
        {/* Other components */}
      </div>
    </ThemeProvider>
  )
}

export default App
