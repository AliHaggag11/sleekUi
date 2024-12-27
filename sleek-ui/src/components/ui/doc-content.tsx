import { Code } from "./code"
import { useEffect } from "react"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import React from "react"

interface DocContentProps {
  children: React.ReactNode
}

export function DocContent({ children }: DocContentProps) {
  useEffect(() => {
    Prism.highlightAll()
  }, [children])

  // Function to process code blocks in markdown
  const processChildren = (children: React.ReactNode): React.ReactNode => {
    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) return child

      if (child.type === 'pre' && child.props.children?.type === 'code') {
        const { className, children: codeContent } = child.props.children.props
        const language = className?.replace('language-', '')

        return (
          <Code 
            language={language}
            className="my-4"
          >
            {codeContent}
          </Code>
        )
      }

      if (child.props.children) {
        const childElement = child as React.ReactElement<any>
        return React.cloneElement(childElement, {
          ...childElement.props,
          children: processChildren(child.props.children)
        })
      }

      return child
    })
  }

  return (
    <article className="prose prose-gray dark:prose-invert max-w-none">
      {processChildren(children)}
    </article>
  )
} 