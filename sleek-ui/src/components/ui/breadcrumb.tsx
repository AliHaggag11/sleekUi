import { ChevronRight } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export function Breadcrumb() {
  const location = useLocation()
  const paths = location.pathname.split('/').filter(Boolean)
  
  // Create breadcrumb items with proper capitalization and mapping
  const breadcrumbs = paths.map((path, index) => {
    const url = `/${paths.slice(0, index + 1).join('/')}`
    const label = path.charAt(0).toUpperCase() + path.slice(1)
    const isLast = index === paths.length - 1
    
    return {
      label,
      url,
      isLast
    }
  })

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
      <Link 
        to="/docs"
        className={`hover:text-foreground transition-colors ${
          location.pathname === '/docs' ? 'text-foreground font-medium' : ''
        }`}
      >
        Docs
      </Link>
      
      {breadcrumbs.map((breadcrumb) => {
        // Skip "docs" in the breadcrumb since we already show it
        if (breadcrumb.label.toLowerCase() === 'docs') return null

        return (
          <div key={breadcrumb.url} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            {breadcrumb.isLast ? (
              <span className="text-foreground font-medium">
                {breadcrumb.label}
              </span>
            ) : (
              <Link 
                to={breadcrumb.url}
                className="hover:text-foreground transition-colors"
              >
                {breadcrumb.label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
} 