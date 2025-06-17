import { ReactNode } from "react"
import { ChatLauncher } from "./components/chatbot/ChatLauncher"
import { DarkModeProvider } from "./context/themes/theme-provider"
import localFont from "next/font/local"
import Appshell from "@/components/Layout/appshell"
import ScrollToTop from "./components/ScrollToTop"
import "./globals.css"

export const metadata = {
  title: "Maddlab.dev",
  description: "Migrated to App Router",
  icons: {
    icon: "/icons/favicon.ico",
  },
}

const aspekta = localFont({
  src: [
    { path: "/assets/fonts/Aspekta-200.otf", weight: "200" },
    { path: "/assets/fonts/Aspekta-400.otf", weight: "400" },
    { path: "/assets/fonts/Aspekta-500.otf", weight: "500" },
    { path: "/assets/fonts/Aspekta-600.otf", weight: "600" },
    { path: "/assets/fonts/Aspekta-700.otf", weight: "700" },
    { path: "/assets/fonts/Aspekta-800.otf", weight: "800" },
    { path: "/assets/fonts/Aspekta-900.otf", weight: "900" },
  ],
  variable: "--font-aspekta",
  display: "swap",
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <DarkModeProvider>
          <Appshell className={`${aspekta.variable} `}>
            <ScrollToTop />
            {children}
          </Appshell>
        </DarkModeProvider>
      </body>
    </html>
  )
}
