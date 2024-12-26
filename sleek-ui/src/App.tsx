import { LandingPage } from "./pages/LandingPage"
import { ThemeProvider } from "./components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="sleek-ui-theme">
      <LandingPage />
    </ThemeProvider>
  )
}

export default App
