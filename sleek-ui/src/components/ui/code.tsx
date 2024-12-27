import { cn } from "@/lib/utils"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Eye, Code as CodeIcon, Copy } from "lucide-react"
import { LiveProvider, LiveError, LivePreview } from 'react-live'
import * as React from 'react'

interface CodeProps {
  children: string
  className?: string
  language?: string
  path?: string
  scope?: Record<string, any>
}

export function Code({ children = "", className, language = "typescript", path, scope }: CodeProps) {
  const [isPreview, setIsPreview] = useState(false)
  const [copied, setCopied] = useState(false)
  
  const codeContent = typeof children === 'string' ? children.trim() : String(children).trim()
  
  // Determine if the code is previewable (UI code vs terminal commands)
  const isPreviewable = !['bash', 'shell', 'sh'].includes(language.toLowerCase())

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(codeContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Improved live code preparation
  const liveCode = `
    ${codeContent.includes('import') ? `
      function Preview() {
        return (
          <Marquee className="py-6">
            <div className="flex items-center gap-8">
              <div className="text-white px-4 py-2 rounded bg-gray-800">Item 1</div>
              <div className="text-white px-4 py-2 rounded bg-gray-800">Item 2</div>
              <div className="text-white px-4 py-2 rounded bg-gray-800">Item 3</div>
            </div>
          </Marquee>
        )
      }
      
      render(<Preview />)
    ` : codeContent.includes('render') ? codeContent : `
      function Preview() {
        return (
          ${codeContent}
        )
      }
      
      render(<Preview />)
    `}
  `.trim()

  return (
    <LiveProvider 
      code={liveCode} 
      scope={{ 
        ...scope, 
        React,
        render: (element: React.ReactElement) => element 
      }}
      noInline={true}
      language={language}
    >
      <div className="relative rounded-lg overflow-hidden bg-[#1e1e1e] border border-white/[0.1] shadow-xl my-4 w-full max-w-[calc(100vw-2rem)]">
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-[#2d2d2d] border-b border-white/[0.1]">
          <div className="flex items-center gap-3">
            {isPreviewable && (
              <>
                <button 
                  onClick={() => setIsPreview(true)}
                  className={cn(
                    "flex items-center gap-1.5 text-xs font-medium",
                    isPreview ? "text-white" : "text-gray-400 hover:text-white"
                  )}
                >
                  <Eye className="h-3.5 w-3.5" />
                  Preview
                </button>
                <button 
                  onClick={() => setIsPreview(false)}
                  className={cn(
                    "flex items-center gap-1.5 text-xs font-medium",
                    !isPreview ? "text-white" : "text-gray-400 hover:text-white"
                  )}
                >
                  <CodeIcon className="h-3.5 w-3.5" />
                  Code
                </button>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            {path && (
              <span className="text-xs text-gray-400">{path}</span>
            )}
            <button 
              onClick={copyToClipboard}
              className={cn(
                "p-1 rounded transition-colors hover:bg-white/10",
                copied ? "text-green-400" : "text-gray-400 hover:text-white"
              )}
            >
              <Copy className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className={cn("relative group", className)}>
          {isPreview && isPreviewable ? (
            <div className="p-4 bg-gray-950">
              <LivePreview />
              <div className="text-red-500 text-sm mt-2">
                <LiveError />
              </div>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <SyntaxHighlighter
                  language={language}
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: "0.75rem 1rem 0.75rem 2.5rem",
                    background: "transparent",
                    fontSize: "13px",
                    lineHeight: 1.5,
                  }}
                  codeTagProps={{
                    style: {
                      fontSize: "inherit",
                      lineHeight: "inherit",
                    }
                  }}
                >
                  {codeContent}
                </SyntaxHighlighter>
              </div>

              {/* Line Numbers */}
              <div className="absolute left-3 top-3 select-none">
                {codeContent.split('\n').map((_, i) => (
                  <div key={i} className="text-gray-600 text-xs leading-[1.5]">
                    {i + 1}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </LiveProvider>
  )
} 