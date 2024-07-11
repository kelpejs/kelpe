import Prism from 'prismjs'
import 'prismjs/components/prism-bash.js'
import 'prismjs/components/prism-yaml'

const DEFAULT_LANG = 'json'

export function mapLang(lang: string): string {
  return (
    {
      json: 'js',
      'c++': 'cpp',
      'c#': 'csharp',
      'objective-c': 'objectivec',
      shell: 'bash',
      viml: 'vim',
    }[lang] || DEFAULT_LANG
  )
}

/**
 * @param source source code
 * @param lang highlight language
 * @return HTML string with highlighted code
 */
export function highlight(
  source: string | number | boolean,
  lang: string = DEFAULT_LANG
): string {
  lang = lang.toLowerCase()
  let grammar = Prism.languages[lang]
  if (!grammar) {
    grammar = Prism.languages[mapLang(lang)]
  }
  return Prism.highlight(source.toString(), grammar, lang)
}
