import { CardIcon } from "@/components/cards/CardIcon"
import { HardwareCard } from "@/components/cards/HardwareCard"
import { NewsLetterSection } from "@/components/ui/NewsLetterSection"
import { HARDWARE_ITEMS, HARDWARE_LIST } from "@/datas/icon-list"

export default function Toolbox() {
  return (
    <section className="w-full overflow-hidden">
      <div className="mb-16 text-center">
        <div className="h-28 w-full border-b lg:h-14" />
        <div className="mx-auto flex w-full items-center justify-center border-y py-5">
          <h1 className="sizeTitle max-w-xl font-semibold text-textPrimary dark:text-textDarkPrimary lg:text-[40px]">
            Hardware && software I keep in my toolbox.
          </h1>
        </div>
      </div>
      <div className="w-full">
        <h2 className="border-y py-2 text-center text-sm font-medium uppercase tracking-wider text-accentColor">Application</h2>
        <div className="grid grid-cols-3 gap-y-8 py-5 lg:grid-cols-8">
          {HARDWARE_LIST.map((item) => (
            <CardIcon key={item.name} icon={item.icon} name={item.name} href={item.href} />
          ))}
        </div>
      </div>

      <div className="mt-10 w-full">
        <h2 className="z-10 border-y py-2 text-center text-sm font-medium uppercase tracking-wider text-accentColor">Hardware</h2>
        <div className="grid grid-cols-1 gap-2 px-5 py-8 lg:grid-cols-3">
          {HARDWARE_ITEMS.map((item) => (
            <HardwareCard key={item.title} {...item} />
          ))}
        </div>
      </div>
      <div>
        <NewsLetterSection />
      </div>
    </section>
  )
}
