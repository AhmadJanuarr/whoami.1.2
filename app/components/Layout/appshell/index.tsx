import FooterWrapper from "../footer/FooterWrapper"
import { HeaderWrapper } from "../header/HeaderWrapper"

type AppShellProps = {
  className: string
  children: React.ReactNode
}

const Appshell = ({ className, children }: AppShellProps) => {
  return (
    <main className={`${className} bg-backgroundPrimary`}>
      <div className="relative mx-auto flex min-h-screen w-full flex-col justify-center overflow-hidden border lg:max-w-[1200px] xl:max-w-[1400px]">
        <HeaderWrapper />
        <div className="grid w-full grid-cols-1 lg:grid-cols-[32px_auto_32px] xl:grid-cols-[32px_1fr_32px]">
          <div
            className="hidden w-full border-r border-borderPrimary opacity-30 lg:block"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #2D2D2D 12.50%, transparent 12.50%, transparent 50%, #2D2D2D 50%, #2D2D2D 62.50%, transparent 62.50%, transparent 100%)",
              backgroundSize: "5px 5px",
            }}
          />
          <div className="">{children}</div>
          <div
            className="hidden w-full border-l border-borderPrimary opacity-30 lg:block"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #2D2D2D 12.50%, transparent 12.50%, transparent 50%, #2D2D2D 50%, #2D2D2D 62.50%, transparent 62.50%, transparent 100%)",
              backgroundSize: "5px 5px",
            }}
          />
        </div>
        <FooterWrapper />
      </div>
    </main>
  )
}

export default Appshell
