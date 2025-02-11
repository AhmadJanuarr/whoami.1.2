"use client"
import Link from "next/link"
import NavList from "./NavList"
import SosialMediaIcon from "@/components/Icon"
import { useEffect, useState } from "react"
import useStore from "@/stores/stores"

export default function Header() {
  const [open, setOpen] = useState<boolean>(false)
  const { theme, setTheme } = useStore()
  const toggleMenu = () => setOpen(!open)

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  })

  return (
    <header className="fixed left-0 top-0 z-50 flex w-full items-center px-5 py-4 backdrop-blur-sm  dark:text-black">
      <nav className="mx-auto flex w-full max-w-[800px] flex-col justify-between rounded-lg border border-[#92AEE9] bg-[#EDF3FF] px-5 tracking-wider opacity-80 dark:bg-slate-500">
        <div className="flex w-full items-center justify-between py-5 font-neuMedium md:py-0">
          <Link href="/" onClick={open ? toggleMenu : undefined}>
            <h1 className="cursor-pointer text-secondary dark:text-white">© Code by Ahmad</h1>
          </Link>
          <div className="hidden md:flex">
            <NavList isMobile={false} setTheme={setTheme} theme={theme} />
          </div>
          <button onClick={toggleMenu} className="cursor-pointer md:hidden">
            <img
              src={!open ? "/svg/Menu.svg" : "/svg/Multiply.svg"}
              width={30}
              height={30}
              alt="menu toggle"
              className="h-auto w-auto dark:brightness-0
              "
            />
          </button>
        </div>
        {/* Mobile View */}
        {open && (
          <div className="h-auto w-full py-16 font-neuBold">
            <NavList isMobile={true} toggleMenu={toggleMenu} setTheme={setTheme} theme={theme} />
            <div className="flex items-center justify-center gap-5 pt-24">
              <SosialMediaIcon />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
