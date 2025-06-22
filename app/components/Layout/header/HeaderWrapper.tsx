"use client"

import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"
import { PiGithubLogo, PiInstagramLogo, PiLinkedinLogo, PiList, PiMoon, PiSun, PiX } from "react-icons/pi"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/context/themes/useTheme"

export const HeaderWrapper = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const { toggleTheme, theme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  const NAV_ITEMS = [
    { label: "Home", onClick: () => router.push("/"), isActive: pathname === "/" },
    { label: "About", onClick: () => router.push("/about"), isActive: pathname === "/about" },
    { label: "Blog", onClick: () => router.push("/blog"), isActive: pathname === "/blog" },
    { label: "Projects", onClick: () => router.push("/projects"), isActive: pathname === "/projects" },
    { label: "Toolbox", onClick: () => router.push("/toolbox"), isActive: pathname === "/toolbox" },
  ]

  const NAV_ICONS = [
    {
      icon: <PiInstagramLogo className="cursor-pointer text-2xl" onClick={() => window.open("https://www.instagram.com/madds.dev/", "_blank")} />,
    },
    {
      icon: (
        <PiLinkedinLogo
          className="cursor-pointer text-2xl"
          onClick={() => window.open("https://www.linkedin.com/in/ahmad-januar-a96515221/", "_blank")}
        />
      ),
    },
    {
      icon: <PiGithubLogo className="cursor-pointer text-2xl" onClick={() => window.open("https://github.com/AhmadJanuarr", "_blank")} />,
    },
  ]

  return (
    <header className="fixed  top-0 z-50 w-full bg-white/80 backdrop-blur-sm dark:bg-bgDarkPrimary lg:static">
      <div className="grid grid-cols-2 items-center border-b border-borderPrimary px-5 py-3 text-[14px] text-textPrimary dark:text-textDarkPrimary lg:grid-cols-[200px_1fr_200px] lg:px-3">
        <div className="flex justify-start">
          <div className="flex items-center gap-2">
            <img src="/icons/favicon.png" alt="logo" className="size-8 dark:invert" />
          </div>
        </div>

        <div className="hidden justify-center md:flex ">
          <ul className="flex gap-5 rounded-full border border-borderPrimary px-6 py-2">
            {NAV_ITEMS.map((item, index) => (
              <li
                key={index}
                id={item.label.toLowerCase()}
                className={`${item.isActive ? "border-textPrimary font-bold" : "font-medium text-textSecondary dark:text-textDarkSecondary"} cursor-pointer`}
                onClick={() => {
                  item.onClick()
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden justify-end gap-2 md:flex">
          <button className="rounded-full border p-2 text-2xl" onClick={() => toggleTheme()}>
            {theme === "light" ? <PiSun /> : <PiMoon />}
          </button>
          <div className="flex gap-5 rounded-full border px-4 py-2">
            {NAV_ICONS.map((item, index) => (
              <div key={index}>{item.icon}</div>
            ))}
          </div>
        </div>

        {/* Mobile button  */}
        <div className="flex justify-end lg:hidden">
          <button className="flex items-center gap-2 rounded-full border p-2 text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <PiX className="text-2xl dark:text-textDarkPrimary" /> : <PiList className="text-2xl dark:text-textDarkPrimary" />}
          </button>
        </div>

        {/* Mobile menu  */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 top-0 -z-10 h-screen w-full border bg-backgroundPrimary backdrop-blur-sm dark:bg-bgDarkPrimary dark:text-textDarkPrimary lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex h-full flex-col items-center justify-center">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                  className="flex w-full flex-col items-center"
                >
                  {NAV_ITEMS.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1, ease: "easeInOut" }}
                      className={`sizeTitle w-full cursor-pointer list-none border-t py-4 text-center uppercase
                        ${item.isActive ? "font-bold text-textPrimary dark:text-textDarkPrimary" : "text-textSecondary dark:text-textDarkSecondary"}
                      `}
                      onClick={() => {
                        item.onClick()
                        setIsMenuOpen(false)
                      }}
                    >
                      {item.label}
                    </motion.li>
                  ))}
                  <div className="flex w-full justify-center gap-2 border-t py-4">
                    <div className="flex items-center gap-2">
                      <button className="rounded-full border p-2" onClick={() => toggleTheme()}>
                        {theme === "light" ? (
                          <PiSun className="text-xl dark:text-textDarkPrimary" />
                        ) : (
                          <PiMoon className="text-xl dark:text-textDarkPrimary" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
