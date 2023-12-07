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