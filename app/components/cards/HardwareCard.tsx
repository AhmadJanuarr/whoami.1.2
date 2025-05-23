interface HardwareCardProps {
  title: string
  description: string
  link: string
}

export function HardwareCard({ title, description, link }: HardwareCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-borderPrimary bg-white p-6 transition-all duration-300 hover:border-accentColor">
      <div className="flex flex-col">
        <h3 className="mb-3 text-lg font-medium text-textPrimary">{title}</h3>
        <p className="text-sm leading-relaxed text-textSecondary">{description}</p>
      </div>
      <div className="mt-4 flex justify-end">
        <a href={link} className="inline-block text-sm text-accentColor hover:underline">
          Learn more →
        </a>
      </div>
    </div>
  )
}
