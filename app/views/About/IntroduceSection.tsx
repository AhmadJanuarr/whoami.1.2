"use client"
import { motion } from "framer-motion"

interface ProfileImageProps {
  src: string
  className: string
  zIndex: string
  CustomDelay: number
}

function ProfileImage({ src, className, zIndex, CustomDelay }: ProfileImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, rotate: 0 }}
      whileInView={{ opacity: 1, x: 0, rotate: className.includes("rotate-6") ? 2 : className.includes("-rotate-6") ? 0 : -2 }}
      transition={{
        duration: 0.8,
        delay: CustomDelay,
        ease: [0.25, 0.1, 0.25, 1],
        rotate: {
          duration: 0.8,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true, amount: 0.5 }}
      className={`group absolute cursor-pointer overflow-hidden rounded-lg border border-borderPrimary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${className} ${zIndex}`}
    >
      <img
        src={src}
        alt="Ahmad Januar"
        className="size-28 rounded-lg object-cover transition-transform duration-500 group-hover:scale-110 lg:size-36"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  )
}

function ProfileImages() {
  return (
    <div className="relative h-44 w-full">
      <ProfileImage
        src="/assets/images/profile-1.jpg"
        className="left-10 top-10 -rotate-[12deg] transform lg:left-10 lg:top-4"
        zIndex="z-30"
        CustomDelay={0.5}
      />
      <ProfileImage
        src="/assets/images/profile-2.jpg"
        className="left-36 top-10 rotate-[2deg] transform lg:left-40 lg:top-0"
        zIndex="z-20"
        CustomDelay={0.6}
      />
      <ProfileImage
        src="/assets/images/profile-3.jpg"
        className="right-10 top-10 rotate-[6deg] transform lg:right-10 xl:right-40"
        zIndex="z-10"
        CustomDelay={0.7}
      />
    </div>
  )
}

export function IntroduceSection() {
  return (
    <section className="relative flex w-full flex-col items-center">
      <div className="h-14 w-full border-b" />
      <div className="flex w-full flex-col items-center border-b border-borderPrimary">
        <div className="flex w-full flex-col-reverse items-center justify-between gap-2 px-1 lg:flex-row lg:gap-10 lg:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="sizeTitle border-t py-2 text-center font-semibold lg:max-w-2xl lg:border-none lg:py-0 lg:text-left"
          >
            I'm Ahmad Januar, a creative frontend Developer.
          </motion.h1>
          <ProfileImages />
        </div>
      </div>
    </section>
  )
}
