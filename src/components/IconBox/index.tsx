import Link from "next/link"

type IconBoxType = {
  url: string
  icon: string
  name: string
  color: string
}

export default function IconBox({ url, icon, name, color }: IconBoxType) {
  return (
    <Link href={url} target="_blank">
      <button
        style={{ "--color": color } as React.CSSProperties}
        className="flex items-center rounded-lg border border-[#D9D9D9] px-3 font-neuBook tracking-wider transition-all duration-75 hover:border-[var(--color)] hover:text-[var(--color)] hover:shadow hover:grayscale-0 md:grayscale md:filter"
      >
        <img src={icon} width={20} height={20} alt={name} />
        <span className="py-2 pl-3 text-[14px] md:text-[16px]">{name}</span>
      </button>
    </Link>
  )
}
