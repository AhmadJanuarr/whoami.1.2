"use client"

import { motion } from "framer-motion"
import { CrossLine } from "../CrossLine"
import FollowerPointerCard from "@/components/ui/follower-pointer-card"

export function NewsLetterSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative my-20 flex w-full flex-col items-center justify-start overflow-hidden bg-[#3C3C3F] px-10  lg:rounded-3xl"
    >
      <CrossLine />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex max-w-2xl flex-col items-center gap-6 px-5 py-28 text-left"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="sizeTitle font-bold tracking-tight text-white lg:text-[40px]"
        >
          Stay Updated with My Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="sizeSubtitle text-gray-300"
        >
          Subscribe to my newsletter for the latest updates, insights, and exclusive content.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-md"
        >
          <FollowerPointerCard title="Join the community">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full border border-borderPrimary bg-transparent px-4 py-3 pr-28 text-white placeholder:text-gray-400 focus:border-backgroundPrimary focus:outline-none focus:ring-1 focus:ring-backgroundPrimary"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-backgroundPrimary px-4 py-2.5 text-sm tracking-wide text-textPrimary transition-colors hover:bg-backgroundSecondary">
                Subscribe
              </button>
            </div>
          </FollowerPointerCard>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="sizeSubtitle text-gray-400"
        >
          By subscribing, you agree to receive updates and marketing communications from me.
        </motion.p>
      </motion.div>
    </motion.section>
  )
}
