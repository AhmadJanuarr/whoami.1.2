import { NewsLetterSection } from "@/components/ui/NewsLetterSection"
import { AboutSection } from "@/views/About/AboutSection"
import { ExperienceSection } from "@/views/About/ExperienceSection"
import { IntroduceSection } from "@/views/About/IntroduceSection"
import { MoreSection } from "@/views/About/MoreSection"
import { SkillSection } from "@/views/About/SkillSection"

export default function About() {
  return (
    <>
      <IntroduceSection />
      <AboutSection />
      <ExperienceSection />
      <SkillSection />
      <MoreSection />
      <NewsLetterSection />
    </>
  )
}
