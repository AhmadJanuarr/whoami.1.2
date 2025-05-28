import { ArticleReactionWrapper } from "@/components/ArticleReactionWrapper"
import { CrossLine } from "@/components/CrossLine"
import { NewsLetterSection } from "@/components/ui/NewsLetterSection"
import { getAllPosts, getPostBySlug } from "@/lib/mdx"
import { notFound } from "next/navigation"
import { PiCalendarBlank } from "react-icons/pi"
import MDXContent from "@/components/MDXContent"
import Image from "next/image"

function getFormattedDate(date: string) {
  const targetDate = new Date(date.includes("T") ? date : `${date}T00:00:00`)
  return targetDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const allPosts = getAllPosts()
  const relatedPosts = allPosts.filter((p) => p.slug !== params.slug && p.category?.some((c) => post.category?.includes(c))).slice(0, 3)
  const formattedDate = getFormattedDate(post.date)
  return (
    <section className="w-full overflow-hidden">
      <div className="relative mt-16 h-[400px] w-full bg-cover bg-center lg:mt-0 lg:h-[530px]" style={{ backgroundImage: `url(${post.coverImage})` }}>
        <CrossLine />
        <div className="flex h-full items-end px-6 py-8 lg:p-14 lg:px-16">
          <div className="w-full px-4 text-white lg:max-w-3xl">
            <div className="flex flex-wrap gap-2">
              {post.category?.map((item, index) => (
                <span key={index} className="mb-2 inline-block rounded-full border px-3 py-1 text-xs font-medium md:mb-4 md:text-sm">
                  #{item}
                </span>
              ))}
            </div>
            <h1 className="sizeTitle mb-4 max-w-3xl font-bold text-white">{post.title}</h1>
            <p className="sizeSubtitle mb-3 opacity-90 lg:mb-6">{post.summary}</p>
            <time className="sizeSubtitle flex items-center gap-2 text-sm opacity-75">
              <PiCalendarBlank />
              {formattedDate}
            </time>
          </div>
        </div>
      </div>

      <article className="mx-auto w-full p-6 lg:max-w-4xl lg:p-14">{post.content && <MDXContent content={post.content} />}</article>

      <div className="space-y-10 py-14">
        <ArticleReactionWrapper />
      </div>
      {relatedPosts.length > 0 && (
        <>
          <div className="space-y-16">
            <div className="relative flex w-full items-center justify-center gap-4">
              <span className="absolute left-0 z-10 h-[1px] w-1/2 bg-textSecondary/20" />
              <h2 className="sizeSubtitle z-20 rounded-full border bg-[#F1F5F9] px-6 py-2 uppercase text-textSecondary">Related Posts</h2>
              <span className="absolute right-0 z-10 h-[1px] w-1/2 bg-textSecondary/20" />
            </div>
          </div>
          <div className="space-y-16">
            <div className="grid grid-cols-3 gap-4">
              {relatedPosts.map((post) => (
                <div key={post.slug}>
                  <Image src={post.coverImage} alt={post.title} width={300} height={200} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <NewsLetterSection />
    </section>
  )
}
