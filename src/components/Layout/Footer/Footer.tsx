import FooterColumn from "./FooterColumn"
import SosialMediaIcon from "@/components/Icon"
import ButtonCustom from "@/components/Button"

const NAV_ITEMS = [
  {
    title: "NAVIGATE",
    links: ["Home", "About", "Contact", "Project", "Uses"],
    url: ["/", "/about", "/contact", "/projects", "/uses"],
  },
  {
    title: "BUILD",
    links: ["Next.Js", "TailwindCSS", "API", "Community"],
    url: [
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://nextjs.org/docs/api-routes/introduction",
      "https://nextjs.org/community",
    ],
  },
  {
    title: "MISC",
    links: ["Paypal", "Github", "Linkedin"],
    url: [
      "https://paypal.me/ahmadjanuar?country.x=ID&locale.x=id_ID",
      "https://github.com/AhmadJanuarr",
      "https://www.linkedin.com/in/ahmad-januar-a96515221/",
    ],
  },
]

export default function Footer() {
  return (
    <footer className="flex w-full flex-col py-10 text-[14px] md:flex-row">
      <div className="flex flex-col pb-10 pr-5 md:w-2/5">
        <div className="mb-4 flex items-center">
          <img src="/img/picture.jpg" alt="logo" width={50} height={50} className="rounded-full" />
          <p className="ml-3 font-neuBold text-lg tracking-wider text-secondary">Ahmad Januar A</p>
        </div>
        <p className="mb-2 font-neuBook text-[13px] tracking-wider">
          Hi, I am a Front End Developer who loves building beautiful, responsive, and functional websites.
        </p>
        <p className="mb-4 font-neuBook text-[13px] tracking-wider">
          Ready to collaborate? Let&apos;s
          <span className="font-neuBold text-secondary">get in touch</span>!
        </p>
        <SosialMediaIcon />
        <div className="w-1/2 pt-10 md:w-full">
          <ButtonCustom src="/svg/Touch.svg" href="/contact">
            Get in touch
          </ButtonCustom>
        </div>
      </div>
      <div className="flex justify-between md:w-3/5">
        {NAV_ITEMS.map((item, index) => (
          <FooterColumn key={index} title={item.title} links={item.links} url={item.url} />
        ))}
      </div>
    </footer>
  )
}
