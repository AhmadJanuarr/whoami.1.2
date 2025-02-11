import ButtonCustom from "@/components/Button"

type SectionHeaderProps = {
  heading: string
  title?: string
  href?: string
  showButton: boolean
  children: React.ReactNode
  onClick?: () => void
}

export default function SectionHeader({
  heading,
  title = "View All",
  href = " ",
  children,
  showButton,
  onClick,
}: SectionHeaderProps) {
  return (
    <div className="w-full lg:mt-14">
      <div className="flex items-center justify-between">
        <span className="relative inline-block before:absolute before:-inset-1 before:block before:h-5 before:translate-x-5 before:translate-y-3 before:bg-pink-300 dark:before:bg-blue-700 md:before:translate-y-4">
          <h1 className="relative font-neuBold text-[18px] lg:text-[22px]">{heading}</h1>
        </span>
        {showButton && (
          <ButtonCustom src="/svg/Arrow.svg" href={href} onClick={onClick}>
            {title}
          </ButtonCustom>
        )}
      </div>
      <div className="w-full py-10">{children}</div>
    </div>
  )
}
