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
