import Image from "next/image"
import Link from "next/link"

export type Post = {
  slug: string
  title: string
  date: string
  summary: string
  coverImage: string
  imageName: string
  category: string[]
  content: string
}

export function LatestBlog({ latestPosts }: { latestPosts: Post[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
      {latestPosts.map((post) => (
        <div
          key={post.slug}
          className="sizeSubtitle group cursor-pointer rounded-xl border border-borderPrimary bg-white dark:border-borderPrimary dark:bg-bgDarkSecondary"
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            width={300}
            height={200}
            className="w-full rounded-t-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          <Link href={`/blog/${post.slug}`} className="flex flex-col p-4" scroll={true}>
            <p className="text-sm text-textSecondary dark:text-textDarkSecondary">{post.date}</p>
            <h2 className="h-20 py-4 text-xl font-medium text-gray-900 hover:text-accentColor group-hover:text-accentColor dark:text-textDarkPrimary">
              {post.title}
            </h2>
            <p className="text-gray-500 dark:text-textDarkSecondary">{post.summary}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}
