/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.ttf' {
  const file: string
  export default file
}

declare module 'simple-syntax-highlighter'
