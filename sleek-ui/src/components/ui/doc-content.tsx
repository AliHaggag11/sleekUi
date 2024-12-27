import { cn } from "@/lib/utils"
import { Code } from "./code"
import React from "react"

interface DocContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function DocContent({ children, className, ...props }: DocContentProps) {
  // Process children to wrap code blocks with our Code component
  const processChildren = (children: React.ReactNode): React.ReactNode => {
    return React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        if (child.type === 'pre') {
          const codeElement = React.Children.toArray(child.props.children).find(
            (el): el is React.ReactElement => 
              React.isValidElement(el) && el.type === 'code'
          )
          
          if (codeElement) {
            const className = codeElement.props.className || ''
            const language = className.replace('language-', '')
            return (
              <Code 
                code={codeElement.props.children as string}
                language={language}
                className="my-4 sm:my-6"
              />
            )
          }
        }
        
        if (child.props.children) {
          return React.cloneElement(child, {
            ...child.props,
            children: processChildren(child.props.children)
          })
        }
      }
      return child
    })
  }

  return (
    <article 
      className={cn(
        "prose prose-gray dark:prose-invert max-w-none",
        // Headers
        "prose-h1:text-3xl sm:prose-h1:text-4xl prose-h1:font-bold prose-h1:tracking-tight",
        "prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:font-semibold prose-h2:tracking-tight prose-h2:border-b prose-h2:border-border prose-h2:pb-3 sm:prose-h2:pb-4 prose-h2:mt-8 sm:prose-h2:mt-12",
        "prose-h3:text-lg sm:prose-h3:text-xl prose-h3:font-semibold prose-h3:tracking-tight prose-h3:mt-6 sm:prose-h3:mt-8",
        // Paragraphs and lists
        "prose-p:leading-7 prose-p:text-muted-foreground prose-p:text-sm sm:prose-p:text-base",
        "prose-ul:my-4 sm:prose-ul:my-6 prose-ul:ml-4 sm:prose-ul:ml-6 prose-ul:list-disc prose-ul:text-muted-foreground",
        "prose-li:my-1 sm:prose-li:my-2 prose-li:text-sm sm:prose-li:text-base",
        // Code
        "prose-code:rounded-md prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-[13px] sm:prose-code:text-sm",
        "prose-pre:p-0 prose-pre:bg-transparent",
        // Strong
        "prose-strong:font-semibold prose-strong:text-foreground",
        // Custom spacing
        "[&>*:first-child]:mt-0",
        // Custom className
        className
      )} 
      {...props}
    >
      {processChildren(children)}
    </article>
  )
} 