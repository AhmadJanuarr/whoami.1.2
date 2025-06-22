import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import MDXImage from "./MDXImage"

import React from "react"

// === Utility ===
function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
}

// === Component Factories ===
const createHeading = (tag: keyof JSX.IntrinsicElements, className: string) => {
  return ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const slug = slugify(children?.toString() || "")
    return React.createElement(
      tag,
      {
        id: slug,
        className,
        ...props,
      },
      <>
        <a href={`#${slug}`} className="anchor" />
        {children}
      </>,
    )
  }
}

const createList = (Tag: "ul" | "ol", className: string) => {
  return ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  )
}

const createListItem = () => {
  return ({ children, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="sizeSubtitle mb-4 text-textSecondary dark:text-textDarkSecondary" {...props}>
      {children}
    </li>
  )
}

const createParagraph = () => {
  return ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    const hasBlock = React.Children.toArray(children).some(
      (child) =>
        React.isValidElement(child) &&
        ((typeof child.type === "string" && /^(div|p|ul|ol|h[1-6]|figure|img)$/i.test(child.type)) ||
          child.type === MDXImage ||
          child.type === Image),
    )
    return hasBlock ? (
      <div className="my-4">{children}</div>
    ) : (
      <p className="sizeSubtitle mb-6 text-textSecondary dark:text-textDarkSecondary" {...props}>
        {children}
      </p>
    )
  }
}

const createAnchor = () => {
  return ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-accentColor hover:underline" href={`#${slugify(children?.toString() || "")}`} {...props}>
      {children}
    </a>
  )
}

const createBlockquote = () => {
  return ({ children, ...props }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="sizeSubtitle my-4 border-l-4 border-accentColor pl-4 italic text-textSecondary" {...props}>
      {children}
    </blockquote>
  )
}

const createCode = () => {
  return ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code className="relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-accentColor" {...props}>
      {children}
    </code>
  )
}

const createPre = () => {
  return ({ children, className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    const lang = className?.replace("language-", "") || "text"
    return (
      <pre className="relative mb-4 mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4" {...props}>
        <div className={`language-${lang} relative`}>
          <div className="token-line text-sm text-gray-200">{children}</div>
        </div>
      </pre>
    )
  }
}

// === Exported MDX Components ===
export const components: MDXComponents = {
  h1: createHeading("h1", "mb-6 mt-3 text-balance text-4xl font-medium leading-8 text-textPrimary dark:text-textDarkPrimary"),
  h2: createHeading("h2", "mb-6 mt-8 text-balance text-2xl font-medium leading-8 text-textPrimary md:text-3xl dark:text-textDarkPrimary"),
  h3: createHeading("h3", "mb-6 mt-3 text-balance text-xl font-medium leading-8 text-textPrimary md:text-2xl dark:text-textDarkPrimary"),
  h4: createHeading("h4", "mb-6 mt-3 text-balance text-lg font-medium leading-8 text-textPrimary md:text-xl dark:text-textDarkPrimary"),

  p: createParagraph(),
  a: createAnchor(),
  ul: createList("ul", "sizeSubtitle mb-8 list-disc pl-8 text-textSecondary"),
  ol: createList("ol", "sizeSubtitle mb-8 list-decimal pl-8 text-textSecondary"),
  li: createListItem(),

  blockquote: createBlockquote(),
  code: createCode(),
  pre: createPre(),
  img: MDXImage,
}
