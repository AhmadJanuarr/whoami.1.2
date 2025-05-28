import { MDXRemote } from "next-mdx-remote/rsc"
import { Suspense } from "react"
import { components } from "./MDXComponents"

type MDXContentProps = {
  content: string
}

export default async function MDXContent({ content }: MDXContentProps) {
  return (
    <Suspense fallback={<div className="text-gray-500">Loading content...</div>}>
      <div className="prose prose-lg max-w-none" suppressHydrationWarning>
        <MDXRemote source={content} components={components} />
      </div>
    </Suspense>
  )
}
