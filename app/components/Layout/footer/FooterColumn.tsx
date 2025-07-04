import Link from "next/link"

type FooterProps = {
  title: string
  links: string[]
  url: string[]
}

export default function FooterColumn({ title, links, url }: FooterProps) {
  return (
    <div>
      <h6 className="mb-4 font-aspekta uppercase text-textPrimary dark:text-textDarkPrimary">{title}</h6>
      <ul>
        {links.map((item, index) =>
          url[index] ? (
            <Link key={index} href={url[index]} passHref>
              <li className="mb-5 cursor-pointer text-textSecondary hover:underline dark:text-textDarkSecondary">{item}</li>
            </Link>
          ) : (
            <li key={index} className="mb-5 text-[14px] text-textSecondary dark:text-textDarkSecondary">
              {item}
            </li>
          ),
        )}
      </ul>
    </div>
  )
}
