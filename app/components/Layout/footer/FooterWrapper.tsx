import SosialMediaIcon from "@/components/icons/SosialMediaIcons"
import FooterColumn from "./FooterColumn"

const NAV_ITEMS = [
  {
    title: "NAVIGATE",
    links: ["Home", "About", "Project", "Uses"],
    url: ["/", "/about", "/projects", "/uses"],
  },
  {
    title: "BUILD",
    links: ["Next.Js", "TailwindCSS", "API", "Community"],
    url: ["https://nextjs.org/", "https://tailwindcss.com/", "https://nextjs.org/docs/api-routes/introduction", "https://nextjs.org/community"],
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

export default function FooterWrapper() {
  return (
    <footer className="w-full border-t bg-backgroundSecondary pt-5 lg:py-16">
      <div className="sizeSubtitle mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-12 md:flex-row md:space-x-12 md:space-y-0">
          <div className="flex flex-col space-y-6 md:w-2/5">
            <div className="flex items-center space-x-4">
              <img src="/icons/favicon.ico" alt="Ahmad Januar A" width={40} height={40} className="rounded-full ring-2 ring-gray-100" />
              <div>
                <h1 className="text-textPrimary">Ahmad Januar A</h1>
                <p className="text-textSecondary">Front End Developer</p>
              </div>
            </div>

            <p className="leading-relaxed text-textSecondary ">
              Hi, I am a Front End Developer who loves building beautiful, responsive, and functional websites.
            </p>

            <div className="flex items-center space-x-2">
              <SosialMediaIcon />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {NAV_ITEMS.map((item, index) => (
              <FooterColumn key={index} title={item.title} links={item.links} url={item.url} />
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 py-3 text-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Ahmad Januar A. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
