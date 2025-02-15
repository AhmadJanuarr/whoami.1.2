import Hero from "@/views/Home/Hero"
import SectionHeader from "@/components/Sections/SectionHeader"
import CardProject from "@/components/Card/Card"
import BlogItem from "@/components/Blog/Item"

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="pt-28 md:pt-32">{children}</div>
}

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionHeader heading="Featured Projects" href="/projects" showButton={true}>
        <CardProject />
      </SectionHeader>
      <SectionHeader heading="From the blog" href="/blog" showButton={true}>
        <BlogItem />
      </SectionHeader>
    </Container>
  )
}
