import { BentoGrid } from "@/components/ui/bento-grid"

export function AboutPreviewSection() {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className=" flex w-full items-center justify-center border-b py-5 text-center">
        <h1 className="sizeTitle max-w-xl pb-4 text-textPrimary lg:text-[40px]">These are the things that set me apart from the rest</h1>
      </div>
      <div className="w-full px-5 py-5">
        <BentoGrid />
      </div>
    </section>
  )
}
