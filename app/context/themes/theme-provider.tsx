"use client"
import { ThemeContext } from "./theme-context"
import { ReactNode, useEffect, useState } from "react"

type ThemeProps = "light" | "dark"

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeProps>("light")

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark"
      localStorage.setItem("theme", newTheme)
      return newTheme
    })
  }

  useEffect(() => {
    const stored = localStorage.getItem("theme") as ThemeProps | null
    if (stored === "dark") {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    } else {
      setTheme("light")
      document.documentElement.classList.remove("dark")
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
