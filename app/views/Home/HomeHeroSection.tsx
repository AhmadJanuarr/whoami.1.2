"use client"

import { motion } from "framer-motion"
import BounceCards from "@/components/ui/bounce-card"

const images = [
  "https://picsum.photos/400/400?grayscale",
  "https://picsum.photos/500/500?grayscale",
  "https://picsum.photos/600/600?grayscale",
  "https://picsum.photos/700/700?grayscale",
  "https://picsum.photos/300/300?grayscale",
]

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)",
]

export function HomeHeroSection() {
  const lines = ["Hey, I'm Ahmad Januar!", "Welcome to my corner", "of the internet!"]

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center   pt-20 lg:px-0 lg:pt-0">
      <div className="flex w-full items-center justify-center overflow-hidden border-b border-borderPrimary py-10">
        <motion.div
          className=" rounded-full border border-borderPrimary p-5"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <img src="/icons/favicon.ico" alt="mads" className="size-32  rounded-full border border-borderPrimary lg:size-40" />
        </motion.div>
      </div>

      <div className="flex w-full items-center justify-center overflow-hidden border-b border-borderPrimary">
        <div className="flex w-full max-w-3xl flex-col items-center justify-center">
          {lines.map((line, index) => (
            <div key={index} className="">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                className="sizeTitle text-center font-semibold"
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center border-b border-borderPrimary">
        <div className="w-full border-b border-borderPrimary py-5"></div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="sizeSubtitle flex w-full max-w-3xl items-center justify-center px-5 py-5 text-center text-textSecondary lg:px-0"
        >
          Welcome to my digital experimentation place! I am a front-end developer who loves to design and tinker. This website is my playroom to try
          out new ideas and share interesting things!
        </motion.div>
      </div>
      <div className="flex w-full flex-col items-center justify-center border-b border-borderPrimary">
        <div className="w-full items-center justify-center border-b border-borderPrimary py-5">
          <BounceCards
            className="custom-bounceCards "
            images={images}
            containerWidth="100%"
            containerHeight="250px"
            imageWidth="w-32 lg:w-52"
            animationDelay={1}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={true}
          />
        </div>
      </div>
    </section>
  )
}
