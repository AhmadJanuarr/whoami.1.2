import { GridCard } from "@/components/cards/GridCard"
import { Suspense } from "react"
import Image from "next/image"

// Grid Card Components
const FavoriteSongItem = () => (
  <GridCard className="flex min-h-[200px] flex-col p-4 md:min-h-[250px] lg:row-span-2 lg:min-h-[300px]">
    <div className="sizeSubtitle flex flex-col gap-2">
      <h1 className="font-regular text-lg">Favorite song list</h1>
      <p className="text-base leading-relaxed text-textSecondary">
        Currently I am liking the song <span className="font-semibold">Novo Amor</span> to accompany me during my productivity.
      </p>
    </div>
    <div className="absolute -bottom-10 right-0 flex w-full items-center justify-center transition-all delay-100 duration-500 group-hover:-translate-y-5">
      <Image
        src="/assets/elements/element-novo-amor.png"
        alt="Novo Amor"
        width={300}
        height={300}
        className="w-[180px] object-cover lg:w-full"
        priority
        sizes="(max-width: 768px) 180px, 300px"
      />
    </div>
  </GridCard>
)

const PhotographyItem = () => (
  <GridCard className="flex min-h-[150px] flex-col md:min-h-[180px] lg:col-span-3 lg:min-h-[150px]">
    <div className="sizeSubtitle flex flex-col gap-2 p-4">
      <h1 className="font-regular text-lg">Capture the Quiet Moments</h1>
      <p className="text-base leading-relaxed text-textSecondary">
        Whether it's morning light in my room or walking home in the rain, I love capturing moments through my lens.
      </p>
      <div className="mt-2 flex gap-2">
        {[
          { src: "https://images.unsplash.com/photo-1514907283155-ea5f4094c70c", alt: "morning light" },
          { src: "https://images.unsplash.com/photo-1519692933481-e162a57d6721", alt: "rainy day" },
          { src: "https://images.unsplash.com/photo-1483982258113-b72862e6cff6", alt: "quiet moment" },
        ].map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt={img.alt}
            width={64}
            height={64}
            className="h-16 w-16 rounded-lg object-cover opacity-90"
            sizes="64px"
          />
        ))}
      </div>
    </div>
  </GridCard>
)

const BooksItem = () => (
  <GridCard className="flex min-h-[200px] flex-col bg-[url('/assets/elements/element-dots.png')] bg-cover md:min-h-[250px] lg:col-span-3 lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:min-h-[300px]">
    <div className="relative flex w-full flex-col p-6">
      <div className="sizeSubtitle mb-4 flex items-center justify-between">
        <h1 className="font-regular text-lg">A Page a Day Keeps the Noise Away</h1>
        <span className="text-textSecondary">5 Books</span>
      </div>

      <div className="relative h-[200px] md:h-[300px]">
        <Suspense fallback={<div>Loading books...</div>}>
          {[
            {
              src: "/assets/images/cb-SangAlkemis.webp",
              alt: "Sang Alkemis",
              position: { left: "left-[10%]", top: "top-[10%]", rotate: "-rotate-12" },
            },
            {
              src: "/assets/images/cb-Financial.webp",
              alt: "Financial",
              position: { left: "left-[35%]", top: "top-[20%]", rotate: "rotate-6" },
            },
            { src: "/assets/images/cb-Silent.webp", alt: "Silent", position: { left: "right-[20%]", top: "top-[5%]", rotate: "-rotate-3" } },
            {
              src: "/assets/images/cb-ThePsychologyOfMoney.webp",
              alt: "Psychology of Money",
              position: { left: "left-[25%]", top: "bottom-[10%]", rotate: "rotate-[-8deg]" },
            },
            {
              src: "/assets/images/cb-FilosofiTeras.webp",
              alt: "Filosofi Teras",
              position: { left: "right-[15%]", top: "bottom-[20%]", rotate: "rotate-12" },
            },
          ].map((book, index) => (
            <div
              key={index}
              className={`absolute ${book.position.left} ${book.position.top} ${book.position.rotate} transition-transform duration-300 hover:scale-110`}
            >
              <div className="h-32 w-24 overflow-hidden rounded-lg shadow-lg md:h-40 md:w-32">
                <Image
                  src={book.src}
                  alt={book.alt}
                  width={128}
                  height={160}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 96px, 128px"
                />
              </div>
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  </GridCard>
)

const ReadingProgressItem = () => (
  <GridCard className="flex min-h-[150px] flex-col p-6 md:min-h-[180px] lg:col-start-5 lg:row-span-3 lg:row-start-1 lg:min-h-[450px]">
    <div className="relative flex h-full flex-col">
      <div className="sizeSubtitle mb-8">
        <h3 className="font-regular text-lg tracking-tight text-textPrimary">Read One Doc a Day</h3>
        <p className="mt-2 text-base leading-relaxed text-textSecondary">Simple steps toward continuous learning</p>
      </div>

      <div className="mt-6 flex flex-col gap-5">
        {[
          { number: "01", title: "Design Systems", status: "Currently reading" },
          { number: "02", title: "Web Architecture", status: "Up next" },
          { number: "03", title: "API Design", status: "Coming soon" },
        ].map((item, index) => (
          <div key={index} className="group relative flex items-center gap-4 rounded-xl bg-gray-50/50 p-4 transition-all hover:bg-gray-50">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-700 transition-transform group-hover:scale-105">
              <span className="text-sm font-medium">{item.number}</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">{item.title}</p>
              <p className="mt-1 text-xs text-gray-400">{item.status}</p>
            </div>
            <div className="absolute right-4 text-gray-300 transition-colors group-hover:text-gray-400">
              <span className="text-xs">→</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <div className="mt-8 space-y-3">
          <div className="flex items-center justify-between text-xs text-gray-600">
            <span>Weekly Progress</span>
            <span>3/5 docs</span>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-3/5 rounded-full bg-gray-300 transition-all"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-gradient-to-br from-gray-50 to-gray-100/50 blur-3xl" />
    </div>
  </GridCard>
)

const DailyRoutineItem = () => (
  <GridCard className="flex min-h-[150px] flex-col gap-4 p-6 md:min-h-[180px] lg:row-start-3 lg:min-h-[150px]">
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-medium text-gray-700">Daily Routine</h3>
      <div>
        {[
          { emoji: "☀️", text: "Wake up at 5:30 AM" },
          { emoji: "💻", text: "Code & Learn until 4 PM" },
          { emoji: "🏃", text: "Exercise at 5 PM" },
        ].map((routine, index) => (
          <div key={index} className="group flex items-center gap-4 rounded-lg p-2 transition-all hover:bg-gray-50">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100/80">
              <span className="text-base">{routine.emoji}</span>
            </div>
            <p className="text-sm text-gray-600">{routine.text}</p>
          </div>
        ))}
      </div>
    </div>
  </GridCard>
)

// Main component
export function MoreSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="my-8 text-center md:my-12 lg:my-16">
        <h2 className="border-y py-2 text-sm font-medium uppercase tracking-wider text-accentColor">More</h2>
        <div className="sizeTitle mx-auto flex w-full items-center justify-center border-b py-4 text-textPrimary md:py-5 lg:text-[40px]">
          <h1 className="max-w-sm text-xl md:text-2xl lg:text-3xl">It's part of my daily life.</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 px-4 md:gap-6 md:px-6 lg:grid-cols-5 lg:grid-rows-2 lg:gap-2 lg:px-5">
        <FavoriteSongItem />
        <PhotographyItem />
        <BooksItem />
        <ReadingProgressItem />
        <DailyRoutineItem />
      </div>
    </section>
  )
}
