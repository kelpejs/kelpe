import { marked } from 'marked'

export function markdownToHTML(markdown: string) {
  return marked.parse(markdown)
}

export function Markdown({
  content,
  ...rest
}: { content?: string | null } & React.HTMLAttributes<HTMLDivElement>) {
  if (!content) return null

  return (
    <div
      className="font-mono text-sm"
      dangerouslySetInnerHTML={{ __html: markdownToHTML(content) }}
      {...rest}
    />
  )
}
