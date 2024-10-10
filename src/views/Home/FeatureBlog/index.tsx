import BlogItem from "../../../components/Blog/Item";
import ButtonCustom from "@/components/Button";

export default function FeatureBlog() {
    return (
        <div className="w-full py-10">
            <div className="flex justify-between items-center">
                <h1 className="text-[18px] lg:text-[32px] font-neuBold">Feature Projects</h1>
                <ButtonCustom src="/svg/Arrow.svg">View all</ButtonCustom>
            </div>
            <div className="w-full py-10">
                <BlogItem />
            </div>
        </div>
    )
}