import Link from "next/link"

interface CardIconProps {
  icon: string
  name: string
  href: string
}

export const CardIcon = ({ icon, name, href }: CardIconProps) => {
  return (
    <Link className="flex flex-col items-center gap-2" href={href} target="_blank">
      <div className="size-28 rounded-3xl border border-borderPrimary bg-white p-2 transition-all duration-300 hover:-translate-y-3 hover:border-accentColor dark:bg-bgDarkSecondary">
        <div className="flex h-full items-center justify-center rounded-2xl border-2 border-zinc-200 bg-[#F7F7F8] dark:bg-bgDarkSecondary">
          <img src={icon} alt={name} className="size-10" />
        </div>
      </div>
      <p className="font-regular text-center text-sm tracking-wide text-textSecondary dark:text-textDarkSecondary">{name}</p>
    </Link>
  )
}
