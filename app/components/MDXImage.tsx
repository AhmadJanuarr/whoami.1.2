import Image from "next/image"
import React from "react"

export default function MDXImage({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  if (!src) return null

  return (
    <div className="my-8">
      <div className="relative mx-auto w-full max-w-3xl">
        <Image
          src={src}
          alt={alt || (typeof src === "string" ? src.split("/").pop() : "Blog image") || "Blog image"}
          width={800}
          height={400}
          className="mx-auto w-full rounded-lg object-cover"
          loading="lazy"
        />
      </div>
      {alt && <div className="mt-2 text-center text-sm text-gray-500">{alt}</div>}
    </div>
  )
}
