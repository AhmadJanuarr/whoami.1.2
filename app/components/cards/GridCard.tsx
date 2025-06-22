import { BentoCardProps } from "@/types/components"
import { PiArrowUpRightBold } from "react-icons/pi"
import Link from "next/link"

export const GridCard = ({ children, className, href, isButton = false }: BentoCardProps) => {
  return (
    <Link
      href={href ?? ""}
      className={`dark:bg-bgDarkSecondary group relative flex overflow-hidden rounded-xl border bg-zinc-50/50 transition-all duration-300 hover:bg-white/80 ${className}`}
    >
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/20 to-gray-500/20 opacity-0 blur-3xl transition-all duration-300 group-hover:opacity-100 group-hover:blur-2xl" />
      {isButton && (
        <span className="absolute bottom-4 right-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#C7D2FE] opacity-0 transition-all duration-300 group-hover:opacity-100">
          <PiArrowUpRightBold className="size-4 text-blue-800" />
        </span>
      )}
      {children}
    </Link>
  )
}
