import { MDXRemote } from "next-mdx-remote/rsc"
import { Suspense } from "react"
import { components } from "./MDXComponents"
import { cache } from "react"

// Cache the MDX compilation
const compileMDX = cache(async (content: string) => {
  return content
})

type MDXContentProps = {
  content: string
}

// Add loading component
function MDXLoading() {
  return (
    <div className="mx-auto animate-pulse space-y-4">
      <div className="h-4 w-3/4 rounded bg-gray-200"></div>
      <div className="h-4 rounded bg-gray-200"></div>
      <div className="h-4 w-5/6 rounded bg-gray-200"></div>
    </div>
  )
}

export default async function MDXContent({ content }: MDXContentProps) {
  // Compile MDX content
  const compiledContent = await compileMDX(content)

  return (
    <Suspense fallback={<MDXLoading />}>
      <div className="prose prose-lg max-w-none" suppressHydrationWarning>
        <MDXRemote source={compiledContent} components={components} />
      </div>
    </Suspense>
  )
}
