import { createContext, useContext, useState, useMemo } from "react"

interface DocsSidebarContextType {
  isSidebarOpen: boolean
  setIsSidebarOpen: (open: boolean) => void
}

const DocsSidebarContext = createContext<DocsSidebarContextType | undefined>(undefined)

interface DocsSidebarProviderProps {
  children: React.ReactNode | ((context: { isSidebarOpen: boolean }) => React.ReactNode)
}

export function DocsSidebarProvider({ children }: DocsSidebarProviderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const value = useMemo(() => ({
    isSidebarOpen,
    setIsSidebarOpen,
  }), [isSidebarOpen])

  return (
    <DocsSidebarContext.Provider value={value}>
      {typeof children === 'function' ? children({ isSidebarOpen }) : children}
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