import { PiArrowUpRightBold } from "react-icons/pi"
import { Stack } from "./card-stack"
import Link from "next/link"

type BentoCardProps = {
  children: React.ReactNode
  className?: string
  href: string
}

const images = [
  { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
  { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
  { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" },
]

const BentoCard = ({ children, className, href }: BentoCardProps) => {
  return (
    <Link
      href={href}
      className={`group relative flex items-center justify-center overflow-hidden rounded-xl border bg-zinc-50/50 transition-all duration-300 hover:bg-white/80 ${className}`}
    >
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/20 to-gray-500/20 opacity-0 blur-3xl transition-all duration-300 group-hover:opacity-100 group-hover:blur-2xl" />
      <span className="absolute bottom-4 right-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#C7D2FE] opacity-0 transition-all duration-300 group-hover:opacity-100">
        <PiArrowUpRightBold className="size-4 text-blue-800" />
      </span>
      {children}
    </Link>
  )
}

export const BentoGrid = () => {
  return (
    <div className="grid w-full auto-rows-[120px] grid-cols-1 grid-rows-5 gap-3 py-6 md:grid-cols-2 lg:auto-rows-[200px] lg:grid-cols-5 ">
      {/* Card 1: Stack & Text */}
      <BentoCard className="col-span-1 row-span-2 flex flex-col gap-4 px-4 py-4 md:col-span-2 lg:px-5 lg:py-6" href="/about">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold lg:text-xl">Get to know me better</h1>
          <p className="sizeSubtitle text-textSecondary">I'm Ahmad, a front-end developer who loves to share and experiment.</p>
        </div>
        <div className="flex w-full items-center justify-center transition-all delay-100 duration-500 group-hover:scale-105">
          <Stack randomRotation sensitivity={180} sendToBackOnClick={false} cardDimensions={{ width: 120, height: 120 }} cardsData={images} />
        </div>
      </BentoCard>
      {/* Card 2 */}
      <BentoCard className="col-span-1 row-span-3 md:col-span-2 lg:col-span-3" href="/about">
        <div className="flex h-full w-full flex-col justify-center gap-6 overflow-hidden bg-[url('/assets/elements/element-grid.png')] bg-cover bg-center px-4 py-4 lg:gap-8 lg:px-5 lg:py-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold lg:text-xl">What Drives Me</h1>
            <p className="sizeSubtitle text-textSecondary">
              Clean code, attention to detail, and constant learning. I believe great products are built at the intersection of design and engineering
              — and I love being at that crossroad.
            </p>
          </div>
        </div>
      </BentoCard>{" "}
      {/* Card 3 */}
      <BentoCard className="col-span-1 row-span-3 md:col-span-2" href="/toolbox">
        <div className="flex h-full flex-col gap-6 overflow-hidden px-4 py-4 lg:gap-8 lg:px-5 lg:py-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-lg font-semibold lg:text-xl">Crafting the Web</h1>
            <p className="sizeSubtitle text-textSecondary">I build fast, responsive, and scalable web applications.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: "/assets/icons/nextjs.png", size: "size-8 lg:size-10", opacity: "opacity-50" },
              { icon: "/assets/icons/typescript.png", size: "size-8 lg:size-10" },
              { icon: "/assets/icons/reactjs.png", size: "size-10 lg:size-14" },
              { icon: "/assets/icons/js.png", size: "size-8 lg:size-10" },
              { icon: "/assets/icons/visual-studio-code.png", size: "size-8 lg:size-10", opacity: "opacity-50" },
            ].map((item, index) => (
              <div key={index} className="group inline-block text-center">
                <div
                  className={`border-border-primary size-20 rounded-[16px] border p-2 transition-all delay-100 duration-500 group-hover:-translate-y-2 group-hover:border-indigo-400 lg:size-28 lg:rounded-[20px] ${item.opacity || ""}`}
                >
                  <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]">
                    <img src={item.icon} alt="" className={item.size} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BentoCard>
      {/* Card 4 */}
      <BentoCard className="col-span-1 row-span-2 md:col-span-2 lg:col-span-3" href="/about">
        <div className="flex h-full flex-col justify-center gap-6 overflow-hidden px-4 py-4 lg:gap-8 lg:px-5 lg:py-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold lg:text-xl">Thoughts & Experiments</h1>
            <p className="sizeSubtitle text-textSecondary">
              Welcome to my blog — where I share my journey, front-end tips, explain complex concepts simply, and record the things I learn.
            </p>
          </div>
        </div>
      </BentoCard>
    </div>
  )
}
