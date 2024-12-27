import { useEffect, useState } from "react"
import { Bug, Plus, Pencil } from "lucide-react"
import { useLocation } from "react-router-dom"

type Section = {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("")
  const [sections, setSections] = useState<Section[]>([])
  const location = useLocation()

  useEffect(() => {
    // Reset sections and activeId when route changes
    setSections([])
    setActiveId("")

    // Find all h2 and h3 elements in the main content
    const headings = Array.from(document.querySelectorAll('h2, h3'))
      .map(heading => ({
        id: heading.id,
        text: heading.textContent || '',
        level: Number(heading.tagName.charAt(1))
      }))
      .filter(heading => heading.text) // Filter out empty headings

    setSections(headings)

    // Create Intersection Observer to highlight active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '0% 0% -80% 0%' }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [location.pathname]) // Re-run effect when route changes

  if (sections.length === 0) {
    return (
      <div className="space-y-4">
        {/* Show only contribute section when no headings are found */}
        <div className="pt-4 border-t border-border">
          <h4 className="text-sm font-medium mb-2">Contribute</h4>
          <div className="flex flex-col gap-2">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Bug className="h-4 w-4" />
              Report an issue
            </a>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Plus className="h-4 w-4" />
              Request a feature
            </a>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Pencil className="h-4 w-4" />
              Edit this page
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`block text-sm transition-colors ${
              section.level === 2 
                ? 'mt-2'
                : 'ml-4'
            } ${
              activeId === section.id
                ? 'text-foreground font-medium'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {section.text}
          </a>
        ))}
      </div>

      {/* Contribute Section */}
      <div className="pt-4 border-t border-border">
        <h4 className="text-sm font-medium mb-2">Contribute</h4>
        <div className="flex flex-col gap-2">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Bug className="h-4 w-4" />
            Report an issue
          </a>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Plus className="h-4 w-4" />
            Request a feature
          </a>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Pencil className="h-4 w-4" />
            Edit this page
          </a>
        </div>
      </div>
    </div>
  )
} 