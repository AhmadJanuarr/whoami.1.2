export default function StarContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-lg border bg-[#f6f8Fa] px-2">
      <img src="/svg/Star.svg" alt="star" width={15} height={15} />
      <span className="text-[12px] dark:text-black">{children}</span>
    </div>
  )
}
