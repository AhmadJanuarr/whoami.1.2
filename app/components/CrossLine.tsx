export const CrossLine = () => {
  return (
    <>
      <span className="absolute top-6 z-10 h-px w-full bg-zinc-500/75 mix-blend-screen md:top-12"></span>
      <span className="absolute bottom-6 z-10 h-px w-full bg-zinc-500/75 mix-blend-screen md:bottom-12"></span>
      <span className="absolute left-6 z-10 h-full w-px bg-zinc-500/75 mix-blend-screen md:left-12"></span>
      <span className="absolute right-6 z-10 h-full w-px bg-zinc-500/75 mix-blend-screen md:right-12"></span>

      {/* top left cross */}
      <span className="absolute left-[44.5px] top-12 z-20 hidden h-px w-2 bg-white md:block"></span>
      <span className="absolute left-[48px] top-[44.5px] z-20 hidden h-2 w-px bg-white md:block"></span>

      {/* top right cross */}
      <span className="absolute right-[44.5px] top-12 z-20 hidden h-px w-2 bg-white md:block"></span>
      <span className="absolute right-[48px] top-[44.5px] z-20 hidden h-2 w-px bg-white md:block"></span>

      {/* bottom left cross */}
      <span className="absolute bottom-12 left-[44.5px] z-20 hidden h-px w-2 bg-white md:block"></span>
      <span className="absolute bottom-[44.5px] left-[48px] z-20 hidden h-2 w-px bg-white md:block"></span>

      {/* bottom right cross */}
      <span className="absolute bottom-12 right-[44.5px] z-20 hidden h-px w-2 bg-white md:block"></span>
      <span className="absolute bottom-[44.5px] right-[48px] z-20 hidden h-2 w-px bg-white md:block"></span>
    </>
  )
}
