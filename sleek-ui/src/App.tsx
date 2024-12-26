import { ThemeProvider } from "./components/theme-provider"
import { Nav } from "./components/ui/nav"
import { Banner } from "./components/ui/banner"
import { Hero } from "./components/ui/hero"

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Banner />
        <Nav />
        <Hero />
        {/* Other components */}
      </div>
    </ThemeProvider>
  )
}

export default App
