import { Check, Copy } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { SyntaxHighlighter } from "./syntax-highlighter"

interface CodeProps {
  code: string
  language?: string
  className?: string
}

export function Code({ code, language, className }: CodeProps) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("relative group w-full max-w-[calc(100vw-2rem)]", className)}>
      <div className="absolute right-1.5 sm:right-3 top-1.5 sm:top-2.5 z-20">
        <button
          onClick={onCopy}
          className="hidden group-hover:flex h-5 sm:h-6 w-5 sm:w-6 items-center justify-center rounded-md border bg-background transition-all hover:bg-accent"
        >
          {copied ? (
            <Check className="h-3 w-3 text-green-500" />
          ) : (
            <Copy className="h-3 w-3 text-muted-foreground" />
          )}
          <span className="sr-only">Copy code</span>
        </button>
      </div>
      <div className="relative">
        <div className="absolute top-0 right-0 h-6 sm:h-7 w-full code-block border-b rounded-t-lg">
          {language && (
            <div className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2">
              <span className="text-[10px] text-muted-foreground font-mono">
                {language}
              </span>
            </div>
          )}
        </div>
        <div className={cn(
          "mt-6 sm:mt-7 rounded-lg code-block w-full max-w-full",
          language && "pt-6 sm:pt-7"
        )}>
          <div className="overflow-x-auto">
            <SyntaxHighlighter 
              code={code}
              language={language || 'text'}
              className="!m-0 !bg-transparent w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 