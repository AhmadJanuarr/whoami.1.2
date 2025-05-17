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
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center  pt-20 lg:px-0 lg:pt-0">
      <div className="flex w-full items-center justify-center border-b border-borderPrimary py-10">
        <div className="rounded-full border border-borderPrimary p-5">
          <img src="/icons/favicon.ico" alt="mads" className="size-32  rounded-full border border-borderPrimary lg:size-40" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center border-b border-borderPrimary">
        <h1 className="sizeTitle max-w-2xl text-center">Hey, I'm Ahmad Januar! Welcome to my corner of the internet!</h1>
      </div>
      <div className="flex w-full flex-col items-center justify-center border-b border-borderPrimary">
        <div className="w-full border-b border-borderPrimary py-5"></div>
        <div className="sizeSubtitle flex w-full max-w-3xl items-center justify-center py-5 text-center text-textSecondary">
          Welcome to my digital experimentation place! I am a front-end developer who loves to design and tinker. This website is my playroom to try
          out new ideas and share interesting things!
        </div>
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
