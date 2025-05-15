import { Inter } from "next/font/google"
import { ReactNode } from "react"
import { SmoothScrollProvider } from "@/components/provider/ScrollProvider"
import localFont from "next/font/local"
import Appshell from "@/components/Layout/appshell"
import "./globals.css"

export const metadata = {
  title: "Maddlab.dev",
  description: "Migrated to App Router",
  icons: {
    icon: "/icons/favicon.ico",
  },
}
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

const aspekta = localFont({
  src: [
    { path: "/assets/fonts/Aspekta-200.otf", weight: "200" },
    { path: "/assets/fonts/Aspekta-500.otf", weight: "500" },
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
      <body className="antialiased">
        <SmoothScrollProvider>
          <Appshell className={`${aspekta.variable} ${inter.variable} relative min-h-screen overflow-hidden bg-backgroundPrimary`}>
            {children}
          </Appshell>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
