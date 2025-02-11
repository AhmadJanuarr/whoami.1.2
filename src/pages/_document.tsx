import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Mad.</title>
      <body className="antialiased transition-all duration-200 dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
