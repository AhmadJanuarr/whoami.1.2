import { MDXRemote } from "next-mdx-remote/rsc"
import { components } from "./MDXComponents"

type MDXContentProps = {
  content: string
}

export default async function MDXContent({ content }: MDXContentProps) {
  return (
    <div className="prose prose-lg max-w-none" suppressHydrationWarning>
      <MDXRemote source={content} components={components} />
    </div>
  )
}
