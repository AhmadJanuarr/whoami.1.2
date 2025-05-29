"use client"
import { AboutTrackPattern } from "@/components/ui/about-track-patern"
import { motion } from "framer-motion"

interface ImageCardProps {
  src: string
  customRotate?: string
  index: number
}

function ImageCard({ src, customRotate = "", index }: ImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex justify-center"
    >
      <div className="max-w-48 rounded-3xl border-2 border-zinc-200 p-2">
        <div className="rounded-2xl border-4 border-zinc-200 bg-zinc-100">
          <img
            src={src}
            alt="About section image"
            className={`h-full w-full grayscale transition-all duration-300 hover:grayscale-0 ${customRotate} rounded-lg bg-cover object-cover`}
          />
        </div>
      </div>
    </motion.div>
  )
}

interface ContentSectionProps {
  title: string
  description: string
  index: number
}

function ContentSection({ title, description, index }: ContentSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col gap-8"
    >
      <h1 className="sizeTitle text-textPrimary lg:text-[30px]">{title}</h1>
      <p className="sizeSubtitle leading-loose text-textSecondary">{description}</p>
    </motion.div>
  )
}

export function AboutSection() {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center border-b py-5 text-center">
        <div className="w-full border-y">
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full py-2 text-sm font-medium uppercase tracking-wider text-accentColor"
          >
            About
          </motion.h2>
        </div>
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="sizeTitle max-w-xl px-2 text-textPrimary lg:text-[40px]"
        >
          The Beginning of My Interest in the World of Code
        </motion.h1>
      </div>

      <div className="relative w-full overflow-hidden px-5 py-20">
        <div className="absolute left-0 top-0 hidden w-full md:left-4 lg:left-[355px] lg:block xl:left-[540px]">
          <AboutTrackPattern />
        </div>
        {/* Section 1 */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <ImageCard src="/assets/images/about-1.jpg" customRotate="rotate-6" index={0} />
          <ContentSection
            title="My programing journey"
            description="It all started with a curiosity about how a website could appear so interactive and interesting. While studying at Universitas Teknokrat Indonesia, I started learning the basics of programming, but it was from personal projects and small freelance projects that I truly understood the essence of building a website. I spent time exploring HTML, CSS, and JavaScript, then fell in love with React.js and Next.js, especially with App Router which gives full control in building elegant and efficient UI/UX."
            index={0}
          />
        </div>
        {/* Section 2 */}
        <div className="flex flex-col-reverse gap-5 pt-32 lg:grid lg:grid-cols-2 lg:pt-40">
          <ContentSection
            title="Finding Passion in Frontend"
            description="Frontend for me is a creative space, where logic and design work together. I love building clean, consistent, and responsive interfaces—both for mobile and desktop. Some of my favorite tools & technologies: React.js, Next.js (App Router), Tailwind CSS, React Query, Axios, Firebase Supabase, TypeScript, Vercel for super fast deployment"
            index={1}
          />
          <ImageCard src="/assets/images/about-2.jpg" customRotate="-rotate-6" index={1} />
        </div>
        {/* Section 3 */}
        <div className="grid grid-cols-1 gap-5 pt-32 lg:grid-cols-2 lg:pt-40">
          <ImageCard src="/assets/images/about-3.jpg" customRotate="rotate-6" index={2} />
          <ContentSection
            title="Learning Through Real Projects"
            description="During college and after, I worked on many projects such as: Personal portfolio and landing pages Local product or brand websites Custom login/register systems Simple admin dashboards Personal blogs with Markdown and dynamic routes I believe the best way to learn is by building something real."
            index={2}
          />
        </div>

        {/* Section 4 */}
        <div className="flex flex-col-reverse gap-5 pt-32 lg:grid lg:grid-cols-2 lg:pt-40">
          <ContentSection
            title="Beyond the Code"
            description="I enjoy trying out UI UX design, writing technical blogs, and sometimes helping friends who need 'task jockeys' 😄. When I'm not coding, I enjoy relaxing while listening to music or exploring the latest technology trends."
            index={3}
          />
          <ImageCard src="/assets/images/about-4.jpg" customRotate="-rotate-6" index={3} />
        </div>
      </div>
    </section>
  )
}
