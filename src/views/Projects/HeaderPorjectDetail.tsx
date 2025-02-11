import ButtonCustom from "@/components/Button"

export function HeaderProjectsDetail({ demo, github }: { demo: string; github: string }) {
  return (
    <div className="sticky left-0 top-0 z-30 flex w-full justify-between bg-white py-2 dark:bg-slate-900">
      <div className="flex items-center gap-3 pl-4">
        <img
          src="/img/picture.jpg"
          alt="my image"
          className="h-[40px] w-[40px] rounded-full md:h-[60px] md:w-[60px] "
        />
        <div className="flex flex-col">
          <p className="font-neuMedium text-[12px] md:text-[16px]">Ahmad Januar A</p>
          <p className="font-neuBook text-[11px] text-secondary md:text-[15px]">Available for work</p>
        </div>
      </div>
      <div className="flex items-center gap-2 py-5 pr-4 md:justify-start  md:gap-5 md:py-0">
        <ButtonCustom href={demo} src="/svg/Touch.svg" className="bg-secondary font-neuMedium text-[11px] text-white">
          Demo
        </ButtonCustom>
        <ButtonCustom
          href={github}
          src="/svg/GitHub.svg"
          className="border-[#D9D9D9] bg-[#FAFAFA] font-neuMedium text-[11px] dark:text-black"
        >
          Github
        </ButtonCustom>
      </div>
    </div>
  )
}
