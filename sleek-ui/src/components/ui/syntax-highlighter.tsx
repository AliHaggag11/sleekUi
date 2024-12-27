import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
// Import additional languages
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markdown'

interface SyntaxHighlighterProps {
  code: string
  language: string
  className?: string
}

export function SyntaxHighlighter({ code, language, className }: SyntaxHighlighterProps) {
  useEffect(() => {
    Prism.highlightAll()
  }, [code])

  // Map common language identifiers to Prism language names
  const languageMap: { [key: string]: string } = {
    'ts': 'typescript',
    'tsx': 'tsx',
    'js': 'javascript',
    'jsx': 'jsx',
    'bash': 'bash',
    'json': 'json',
    'md': 'markdown',
  }

  const prismLanguage = languageMap[language] || language

  return (
    <pre className={className}>
      <code className={`language-${prismLanguage}`}>
        {code.trim()}
      </code>
    </pre>
  )
} 