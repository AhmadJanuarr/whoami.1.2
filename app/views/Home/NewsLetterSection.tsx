"use client"

import { FollowerPointerCard } from "@/components/ui/follower-pointer-card"
import { motion, AnimatePresence } from "framer-motion"

export function NewsLetterSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="my-20 flex w-full flex-col items-center justify-start overflow-hidden bg-[#3C3C3F] px-10 py-28 lg:rounded-3xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex max-w-2xl flex-col items-center gap-6 px-5 text-left "
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
            <div className="flex w-full gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border border-borderPrimary bg-backgroundSecondary px-4 py-2 text-white placeholder:text-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <button className="rounded-md bg-backgroundPrimary px-6 py-2 text-textPrimary transition-colors hover:bg-backgroundSecondary">
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
          className="text-md text-gray-500 "
        >
          By subscribing, you agree to receive updates and marketing communications from me.
        </motion.p>
      </motion.div>
    </motion.section>
  )
}
