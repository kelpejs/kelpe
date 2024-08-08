import { marked } from 'marked'

export function markdownToHTML(markdown: string) {
  return marked.parse(markdown)
}
