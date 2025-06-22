import { FeatureBlogCard } from "@/components/cards/FeatureBlogCard"
import { getAllPosts } from "@/lib/mdx"

export function FeatureBlogsSection() {
  const posts = getAllPosts()
  const shuffledPosts = [...posts].sort(() => Math.random() - 0.5)
  const featuredPosts = shuffledPosts.slice(0, 3)
  return (
    <section className="relative w-full ">
      <div className="container relative mx-auto overflow-hidden">
        <div className="mb-16 text-center">
          <h2 className="border-y py-2 text-sm font-medium uppercase tracking-wider text-accentColor">Latest Articles</h2>
          <div className="sizeTitle mx-auto flex w-full items-center justify-center border-b px-4 py-5 text-textPrimary dark:text-textDarkPrimary lg:text-[40px]">
            <h1 className="max-w-2xl "> I like to share experiences and experiments in writing.</h1>
          </div>
        </div>
        <div className="grid h-auto w-full grid-cols-1 gap-8 px-5 py-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((blog) => (
            <FeatureBlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  )
}
