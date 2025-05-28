import Image, { ImageProps } from "next/image"
import React from "react"
import type { MDXComponents } from "mdx/types"

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
  return ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const slug = slugify(children?.toString() || "")
    let textSize = "text-4xl"
    if (level === 2) textSize = "text-2xl md:text-3xl"
    if (level === 3) textSize = "text-xl md:text-2xl"
    if (level === 4) textSize = "text-lg md:text-xl"
    return React.createElement(
      `h${level}`,
      {
        id: slug,
        className: `${textSize} text-textPrimary font-medium leading-8 mb-6 ${level === 2 ? "mt-8" : "mt-3"} text-balance`,
        ...props,
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

function paragraph({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  const hasBlockElements = React.Children.toArray(children).some(
    (child) =>
      React.isValidElement(child) &&
      ((typeof child.type === "string" && /^(div|p|ul|ol|h[1-6]|figure|img)$/i.test(child.type)) ||
        (typeof child.type === "function" && child.type === MDXImage)),
  )

  if (hasBlockElements) {
    return <>{children}</>
  }

  return (
    <p className="sizeSubtitle mb-6 text-textSecondary" {...props}>
      {children}
    </p>
  )
}

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

function MDXImage({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  if (!src) return null

  return (
    <figure className="my-8">
      <div className="relative mx-auto w-full max-w-3xl">
        <Image
          src={src}
          alt={alt || (typeof src === "string" ? src.split("/").pop() : "Blog image") || "Blog image"}
          width={800}
          height={400}
          className="mx-auto w-full rounded-lg object-cover"
          priority
        />
      </div>
      {alt && <figcaption className="mt-2 text-center text-sm text-gray-500">{alt}</figcaption>}
    </figure>
  )
}

export const components: MDXComponents = {
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
  img: MDXImage,
} as const
