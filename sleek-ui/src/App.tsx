import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import { DocsLayout } from "./components/layouts/docs-layout"
import { MarqueeDocs } from "./components/pages/marquee-docs"
import { Introduction } from "./components/pages/introduction"
import { Landing } from "./components/pages/landing"
import { NotFound } from "./components/pages/not-found"
import { Banner } from "./components/ui/banner"
import { Nav } from "./components/ui/nav"
import { DocsSidebarProvider } from "./components/providers/docs-sidebar-provider"
import './styles/prism-theme.css'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <DocsSidebarProvider>
          <div className="flex min-h-screen flex-col">
            <Banner />
            <Nav />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/docs" element={<DocsLayout />}>
                  <Route index element={<Introduction />} />
                  <Route path="introduction" element={<Introduction />} />
                  <Route path="marquee" element={<MarqueeDocs />} />
                  {/* Add more documentation routes here */}
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </DocsSidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
