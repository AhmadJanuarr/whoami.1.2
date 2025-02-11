type HeadingProps = {
  heading: string
  children: React.ReactNode
}
export default function Heading({ heading, children }: HeadingProps) {
  return (
    <div className="w-full py-8">
      <h1 className="pb-2 font-neuBold text-3xl">{heading}</h1>
      <div className="w-full">{children}</div>
    </div>
  )
}
