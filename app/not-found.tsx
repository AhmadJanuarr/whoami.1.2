"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function NotFoundPage() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex min-h-screen w-full flex-col items-center justify-center gap-3 bg-white pb-32 pt-20 tracking-wider dark:bg-bgDarkPrimary lg:pt-10"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="h-[200px] w-[300px] overflow-hidden rounded-xl lg:h-[350px] lg:w-[600px]"
        >
          <img src="/assets/gif/not-found.gif" alt="not found" className="g-cover justify-end" />
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-5 text-center font-aspekta"
        >
          <h4 className="sizeTitle text-textPrimary dark:text-textDarkPrimary">😕 Oops! Page Not Found</h4>
          <p className="sizeSubtitle pb-5 text-textSecondary dark:text-textDarkSecondary">
            Looks like the page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="sizeSubtitle dark:border-borderDarkPrimary dark:hover:bg-backgroundDarkSecondary rounded-full border border-borderPrimary px-4 py-2 text-textSecondary hover:bg-backgroundSecondary hover:text-textPrimary dark:text-textDarkSecondary dark:hover:text-textDarkPrimary"
            >
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
