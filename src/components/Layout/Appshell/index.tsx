import { useRouter } from "next/router"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

type AppShellProps = {
  className: string
  children: React.ReactNode
}

export default function Appshell({ className, children }: AppShellProps) {
  const { pathname } = useRouter()
  const isDetailPage = pathname.startsWith("/projects/") && pathname.split("/").length === 3

  return (
    <main
      className={`${className} mx-auto h-full text-[#444444] dark:text-white ${!isDetailPage ? "max-w-[800px] px-5 md:px-0" : "w-full"}`}
    >
      {!isDetailPage && <Header />}
      {children}
      {!isDetailPage && <Footer />}
    </main>
  )
}
