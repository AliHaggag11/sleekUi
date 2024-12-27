import { Outlet } from "react-router-dom"
import { Nav } from "../ui/nav"
import { Banner } from "../ui/banner"

export function RootLayout() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Banner />
      <Nav />
      <Outlet />
    </div>
  )
} 