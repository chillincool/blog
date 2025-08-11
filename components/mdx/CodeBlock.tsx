'use client'

import React from 'react'
import { Highlight } from 'prism-react-renderer'

type Props = {
  code: string
  language?: string
  showLineNumbers?: boolean
  showCopy?: boolean
  className?: string
}

export default function CodeBlock({
  code,
  language = 'tsx',
  showLineNumbers,
  showCopy = true,
  className = '',
}: Props) {
  const [copied, setCopied] = React.useState(false)
  const toCopy = code.trim()

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(toCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = toCopy
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }

  return (
    <div className={`relative group ${className}`}>
      {showCopy && (
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? 'Copied' : 'Copy code to clipboard'}
          className="
            absolute right-2 top-2 z-10
            rounded-md px-2 py-1 text-xs font-medium
            border border-gray-300 dark:border-gray-700
            bg-white/80 dark:bg-gray-800/80
            backdrop-blur hover:bg-white dark:hover:bg-gray-800
            transition
            opacity-0 group-hover:opacity-100 focus:opacity-100
            focus:outline-none focus:ring-2 focus:ring-indigo-500
          "
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      )}

      <Highlight code={toCopy} language={language}>
        {({ className: preClass, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${preClass} overflow-x-auto rounded-lg p-4 pr-12`}
            style={style} // no theme, so this will mostly be empty
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {showLineNumbers && (
                  <span className="select-none opacity-50 mr-4 inline-block w-6 text-right">
                    {i + 1}
                  </span>
                )}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
