import { ICON_LIST } from "@/datas/icon-list"

export default function SosialMediaIcon() {
  return (
    <div className="flex space-x-5">
      {ICON_LIST.map(({ id, link, src: Icon, name }) => (
        <a href={link} key={id} target="_blank" rel="noopener noreferrer">
          <Icon className="h-[25px] w-[25px] text-textSecondary transition-all duration-75 hover:grayscale-0 dark:text-textDarkSecondary md:grayscale md:filter" />
        </a>
      ))}
    </div>
  )
}
