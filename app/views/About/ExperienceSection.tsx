"use client"

import { EXPERIENCE_LIST, ExperienceItem } from "@/datas/experience"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const ExperienceCard = ({ company, period, role, description }: ExperienceItem) => (
  <div className="grid w-full grid-cols-1 items-start gap-4 md:grid-cols-[2fr,80px,4fr]">
    <div className="text-left">
      <h3 className="text-lg font-semibold text-textPrimary">{company}</h3>
      <p className="mt-1 text-sm text-textSecondary">{period}</p>
    </div>
    <div className="relative hidden justify-center md:flex">
      <div className="h-4 w-5 opacity-0" />
    </div>
    <div className="sizeSubtitle">
      <h4 className="mb-4 text-lg font-medium text-textPrimary">{role}</h4>
      <div className="space-y-3 text-textSecondary">
        {description.map((desc, index) => (
          <p key={index} className="sizeSubtitle">
            {desc}
          </p>
        ))}
      </div>
    </div>
  </div>
)

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeline = containerRef.current
    const circle = circleRef.current

    if (!timeline || !circle) return

    const timelineHeight = timeline.offsetHeight - circle.offsetHeight

    gsap.to(circle, {
      y: timelineHeight,
      ease: "none",
      scrollTrigger: {
        trigger: timeline,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
    })
  }, [])

  return (
    <section className="relative w-full overflow-hidden">
      <div className="mb-12 text-center md:mb-16">
        <h2 className="border-y py-2 text-sm font-medium uppercase tracking-wider text-accentColor">Experience</h2>
        <div className="sizeTitle mx-auto flex w-full items-center justify-center border-b py-4 text-textPrimary md:py-5 lg:text-[40px]">
          <h1 className="max-w-sm text-2xl md:text-3xl lg:text-[40px]">Chronology of my work history</h1>
        </div>
      </div>

      <div className="relative w-full px-4 md:px-5">
        <div className="absolute left-1/2 hidden h-full w-4 -translate-x-1/2 rounded-xl bg-[#E8ECEF] md:left-1/3 md:block" ref={containerRef}>
          <div ref={circleRef} className="absolute left-1/2 -translate-x-1/2">
            <div className="h-5 w-5 rounded-full border-2 bg-accentColor" />
          </div>
        </div>

        <div className="space-y-8 md:space-y-0">
          {EXPERIENCE_LIST.map((experience, index) => (
            <div key={index} className={index < EXPERIENCE_LIST.length - 1 ? "pb-12 md:pb-20" : ""}>
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
