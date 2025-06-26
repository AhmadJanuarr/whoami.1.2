import { CardIcon } from "@/components/cards/CardIcon"
import { SKILL_LIST } from "@/datas/icon-list"

export function SkillSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="my-10 text-center md:my-16">
        <h2 className="border-y py-2 text-sm font-medium uppercase tracking-wider text-accentColor">Abilities</h2>
        <div className="sizeTitle mx-auto flex w-full items-center justify-center border-b py-4 text-textPrimary md:py-5">
          <h1 className="sizeTitle max-w-sm text-2xl dark:text-textDarkPrimary">My abilities and will develop further</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4 md:gap-y-8 md:px-0 lg:grid-cols-8">
        {SKILL_LIST.map((skill) => (
          <CardIcon key={skill.name} icon={skill.icon} name={skill.name} href={skill.href} />
        ))}
      </div>
    </section>
  )
}
