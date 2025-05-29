import type { MDXComponents } from "mdx/types"
import dynamic from "next/dynamic"
import Image from "next/image"
import React from "react"

// Lazy load non-critical components
const MDXImage = dynamic(() => import("./MDXImage"), {
  loading: () => (
    <div className="my-8 animate-pulse">
      <div className="relative mx-auto h-64 w-full max-w-3xl rounded-lg bg-gray-200"></div>
    </div>
  ),
  ssr: true, // Enable server-side rendering
})

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
}

// Create heading components
const Heading1 = React.memo(({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  const slug = slugify(children?.toString() || "")
  return (
    <h1 id={slug} className="mb-6 mt-3 text-balance text-4xl font-medium leading-8 text-textPrimary" {...props}>
      <a href={`#${slug}`} className="anchor" />
      {children}
    </h1>
  )
})

const Heading2 = React.memo(({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  const slug = slugify(children?.toString() || "")
  return (
    <h2 id={slug} className="mb-6 mt-8 text-balance text-2xl font-medium leading-8 text-textPrimary md:text-3xl" {...props}>
      <a href={`#${slug}`} className="anchor" />
      {children}
    </h2>
  )
})

const Heading3 = React.memo(({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  const slug = slugify(children?.toString() || "")
  return (
    <h3 id={slug} className="mb-6 mt-3 text-balance text-xl font-medium leading-8 text-textPrimary md:text-2xl" {...props}>
      <a href={`#${slug}`} className="anchor" />
      {children}
    </h3>
  )
})

const Heading4 = React.memo(({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  const slug = slugify(children?.toString() || "")
  return (
    <h4 id={slug} className="mb-6 mt-3 text-balance text-lg font-medium leading-8 text-textPrimary md:text-xl" {...props}>
      <a href={`#${slug}`} className="anchor" />
      {children}
    </h4>
  )
})

// Memoize other components
const Paragraph = React.memo(({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  const hasBlockElements = React.Children.toArray(children).some(
    (child) =>
      React.isValidElement(child) &&
      ((typeof child.type === "string" && /^(div|p|ul|ol|h[1-6]|figure|img)$/i.test(child.type)) ||
        (typeof child.type === "function" && (child.type === MDXImage || child.type === Image))),
  )

  if (hasBlockElements) {
    return <div className="my-4">{children}</div>
  }

  return (
    <p className="sizeSubtitle mb-6 text-textSecondary" {...props}>
      {children}
    </p>
  )
})

function OrderedList({ children, ...props }: React.OlHTMLAttributes<HTMLOListElement>) {
  return (
    <ol className="sizeSubtitle mb-8 list-decimal pl-8 text-textSecondary" {...props}>
      {children}
    </ol>
  )
}

function UnorderedList({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className="sizeSubtitle mb-8 list-disc pl-8 text-textSecondary" {...props}>
      {children}
    </ul>
  )
}

function ListItem({ children, ...props }: React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li className="sizeSubtitle mb-4 text-textSecondary" {...props}>
      {children}
    </li>
  )
}

function Anchor({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className="text-accentColor hover:underline" href={`#${slugify(children?.toString() || "")}`} {...props}>
      {children}
    </a>
  )
}

function Blockquote({ children, ...props }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote className="sizeSubtitle my-4 border-l-4 border-accentColor pl-4 italic text-textSecondary" {...props}>
      {children}
    </blockquote>
  )
}

function Code({ children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <code className="relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-accentColor" {...props}>
      {children}
    </code>
  )
}

function Pre({ children, className, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  const language = className?.replace("language-", "") || "javascript"
  return (
    <pre className="relative mb-4 mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4" {...props}>
      <div className={`language-${language} relative`}>
        <div className="token-line text-sm text-gray-200">{children}</div>
      </div>
    </pre>
  )
}

// Export components with memoization
export const components: MDXComponents = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  p: Paragraph,
  a: React.memo(Anchor),
  ul: React.memo(UnorderedList),
  ol: React.memo(OrderedList),
  li: React.memo(ListItem),
  blockquote: React.memo(Blockquote),
  code: React.memo(Code),
  pre: React.memo(Pre),
  img: MDXImage,
} as const
