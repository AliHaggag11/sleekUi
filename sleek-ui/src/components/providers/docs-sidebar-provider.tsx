import { createContext, useContext, useState } from "react"

interface DocsSidebarContextType {
  isSidebarOpen: boolean
  setIsSidebarOpen: (open: boolean) => void
}

const DocsSidebarContext = createContext<DocsSidebarContextType | undefined>(undefined)

export function DocsSidebarProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <DocsSidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </DocsSidebarContext.Provider>
  )
}

export function useDocsSidebar() {
  const context = useContext(DocsSidebarContext)
  if (!context) {
    throw new Error("useDocsSidebar must be used within a DocsSidebarProvider")
  }
  return context
} 