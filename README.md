# [Install tailwind react](https://tailwindcss.com/docs/guides/vite)
```sh
npm i -D tailwindcss postcss auto prefixer
npm i @tailwindcss/typography -D
npx tailwindcss init -p
```
- tailwind.config
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./scr/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [

  ],
}
```

- index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# [Tiptap](https://tiptap.dev/installation)
- construido em cima do proseMirror
```jsx
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from './initialContent'

// define your extension array
const extensions = [
  StarterKit,
]

const content = initialContent

export default function Editor() {
  const editor = useEditor({
    extensions,
    content,
  })

  return (
    <EditorContent
      className="className=max-w-[700px] mx-auto pt-16 prose prose-violet"
      editor={editor}
    />
  )
}
```
- usado [lowlight](https://tiptap.dev/api/nodes/code-block-lowlight#lowlight)
  - cor no codigo
```sh
npm install lowlight @tiptap/extension-code-block-lowlight highlight.js
```
- usado [bubble menu](https://tiptap.dev/api/extensions/bubble-menu)
  - pop para editar texto selecionado
- usado [floating menu](https://tiptap.dev/api/extensions/floating-menu)
# Dicas gerais
- [site pegar gradiente tailwind](https://hypercolor.dev/)
- descobrir libs - twitter
- trabalhar com editores de texto
  - draftjs (ruim)
  - slatejs
  - proseMirror (completo, porém tem que colocar tudo que quer)
  - editorjs (editor pronto)
  - blockSuite
  - quilljs
  - remirror (proseMirror adaptado pro react)
  - tiptap (usado no projeto)