import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from './initialContent'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import js from 'highlight.js/lib/languages/javascript'
import { createLowlight } from 'lowlight'
const lowlight = createLowlight()
// # TODO refector to code bellow working
// import { lowlight } from 'lowlight/lib/core'

// CodeBlockLowlight.configure({
//   lowlight,
// })

import 'highlight.js/styles/tokyo-night-dark.css'

lowlight.register({ js })

const extensions = [
  StarterKit,
  CodeBlockLowlight.configure({
    lowlight,
  })
]

const content = initialContent

export default function Editor() {
  const editor = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class: 'outline-none'
      }
    }
  })

  return (
    <EditorContent
      className="max-w-[700px] mx-auto pt-16 prose prose-violet outline-none"
      editor={editor}
    />
  )
}
