import Link from "next/link"

interface ButtonProps {
  src: string
  className?: string
  href: string
  children: React.ReactNode
  onClick?: () => void
}
export default function ButtonCustom({
  children,
  src,
  className = "bg-secondary border-[#132C92] text-white font-neuBold",
  href,
  onClick,
}: ButtonProps) {
  return (
    <Link href={href}>
      <button
        onClick={onClick}
        className={`flex justify-center gap-2 rounded-[10px] border px-2 py-1 md:px-3 md:py-2  md:text-[16px] ${className} items-center tracking-wider transition-transform duration-300 hover:scale-105`}
      >
        <div className="relative">
          <img
            src={src}
            alt="user"
            width={24}
            height={24}
            sizes="(max-width: 768px) 24px, (max-width: 1390px) 24px, 30px"
          />
        </div>
        <span>{children}</span>
      </button>
    </Link>
  )
}
