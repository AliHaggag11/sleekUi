import { Check, Copy } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

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
    <div className={cn("relative group", className)}>
      <div className="absolute right-4 top-3 z-20">
        <button
          onClick={onCopy}
          className="hidden group-hover:flex h-7 w-7 items-center justify-center rounded-md border bg-background transition-all hover:bg-accent"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-green-500" />
          ) : (
            <Copy className="h-3.5 w-3.5 text-muted-foreground" />
          )}
          <span className="sr-only">Copy code</span>
        </button>
      </div>
      <div className="relative">
        <div className="absolute top-0 right-0 h-8 w-full bg-muted border-b rounded-t-lg">
          {language && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <span className="text-xs text-muted-foreground font-mono">
                {language}
              </span>
            </div>
          )}
        </div>
        <pre className={cn(
          "mt-8 rounded-lg bg-muted py-4 overflow-x-auto",
          language && "pt-8"
        )}>
          <code className="relative rounded px-[1em] py-[0.2em] font-mono text-sm">
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
} 