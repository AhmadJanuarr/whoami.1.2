"use client"

import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import Image from "next/image"
import React, { useEffect, useState } from "react"

type MDXContentProps = {
  content: string
}

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

function createHeading(level: number) {
  return ({ children }: { children: React.ReactNode }) => {
    const slug = slugify(children!.toString())
    let textSize = "text-4xl"
    if (level === 2) textSize = "text-2xl md:text-3xl"
    if (level === 3) textSize = "text-xl md:text-2xl"
    if (level === 4) textSize = "text-lg md:text-xl"
    return React.createElement(
      `h${level}`,
      {
        id: slug,
        className: `${textSize} text-textPrimary font-medium leading-8 mb-6 ${level === 2 ? "mt-8" : "mt-3"} text-balance`,
      },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    )
  }
}

function paragraph({ children }: { children: React.ReactNode }) {
  const hasBlockElements = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && typeof child.type === "string" && /^(div|p|ul|ol|h[1-6])$/i.test(child.type),
  )
  if (hasBlockElements) {
    return <>{children}</>
  }
  return <p className="sizeSubtitle mb-6 text-textSecondary">{children}</p>
}

function OrderedList({ children }: { children: React.ReactNode }) {
  return <ol className="sizeSubtitle mb-8 list-decimal pl-8 text-textSecondary">{children}</ol>
}

function UnorderedList({ children }: { children: React.ReactNode }) {
  return <ul className="sizeSubtitle mb-8 list-disc pl-8 text-textSecondary">{children}</ul>
}

function ListItem({ children }: { children: React.ReactNode }) {
  return <li className="sizeSubtitle mb-4 text-textSecondary">{children}</li>
}

function Anchor({ children }: { children: React.ReactNode }) {
  return (
    <a className="text-accentColor hover:underline" href={`#${slugify(children!.toString())}`}>
      {children}
    </a>
  )
}

function Blockquote({ children }: { children: React.ReactNode }) {
  return <blockquote className="sizeSubtitle my-4 border-l-4 border-accentColor pl-4 italic text-textSecondary">{children}</blockquote>
}

function Code({ children, ...props }: { children: string; [key: string]: any }) {
  return (
    <code className="relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-accentColor" {...props}>
      {children}
    </code>
  )
}

function Pre({ children, className }: { children: React.ReactNode; className?: string }) {
  // Extract language from className if provided
  const language = className?.replace("language-", "") || "javascript"

  return (
    <pre className="relative mb-4 mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4">
      <div className={`language-${language} relative`}>
        <div className="token-line text-sm text-gray-200">{children}</div>
      </div>
    </pre>
  )
}

function MDXImage({ children }: { children: string }) {
  return (
    <div className="my-8 flex w-full items-center justify-center">
      <div className="relative mx-auto w-full max-w-3xl">
        <Image src={children} alt={children} width={800} height={400} className="mx-auto w-full rounded-lg object-cover" />
      </div>
    </div>
  )
}

function Img({ src, alt, title }: { src: string; alt?: string; title?: string }) {
  return (
    <div className="my-8 flex w-full items-center justify-center">
      <div className="relative mx-auto w-full max-w-2xl">
        <Image src={src} alt={alt || ""} width={800} height={400} className="mx-auto w-full rounded-lg object-cover" title={title} />
      </div>
    </div>
  )
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  p: paragraph,
  a: Anchor,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  blockquote: Blockquote,
  code: Code,
  pre: Pre,
  Image: MDXImage,
  img: Img,
}

export default function MDXContent({ content }: MDXContentProps) {
  const [mdxSource, setMdxSource] = useState<any>(null)

  useEffect(() => {
    const processContent = async () => {
      const mdxSource = await serialize(content)
      setMdxSource(mdxSource)
    }
    processContent()
  }, [content])

  if (!mdxSource) {
    return <div>Loading...</div>
  }

  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote {...mdxSource} components={components} />
    </div>
  )
}
