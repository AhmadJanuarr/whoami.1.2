import Image from "next/image"
import { Container } from ".."
import ButtonCustom from "@/components/Button"

export default function NotFoundPage() {
  return (
    <Container>
      <div className="flex w-full flex-col items-center  gap-3 pb-32 pt-10 tracking-wider">
        <Image src="/img/notFound.png" width={386} height={280} alt="not found" />
        <h4 className="font-neuBold text-[24px]">😕 Oops! Page Not Found</h4>
        <p className="pb-5 font-neuMedium text-[16px]">
          Looks like the page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
        </p>
        <ButtonCustom href="/" src="/svg/Arrow.svg">
          Back to Home
        </ButtonCustom>
      </div>
    </Container>
  )
}
