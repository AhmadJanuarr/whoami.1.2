import Link from "next/link"

type FooterProps = {
  title: string
  links: string[]
  url: string[]
}

export default function FooterColumn({ title, links, url }: FooterProps) {
  return (
    <div>
      <h6 className="mb-4 font-neuBold uppercase">{title}</h6>
      <ul>
        {links.map((item, index) =>
          url[index] ? (
            <Link
              key={index}
              href={url[index]}
              passHref
              target={["/", "/about", "/contact", "/projects", "/uses"].includes(url[index]) ? "_self" : "_blank"}
            >
              <li className="mb-5 cursor-pointer font-neuBook text-[13px] tracking-wider text-[#444444] hover:underline dark:text-white">
                {item}
              </li>
            </Link>
          ) : (
            <li key={index} className="mb-5 font-neuBook text-[14px] tracking-wider text-[#444444]">
              {item}
            </li>
          ),
        )}
      </ul>
    </div>
  )
}
