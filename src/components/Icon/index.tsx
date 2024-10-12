import Image from "next/image";
import { ICON_LIST } from "@/data/iconList";

export default function SosialMediaIcon() {
  return (
    <div className="flex space-x-5">
      {ICON_LIST.map(({ id, link, src, name }) => (
        <a href={link} key={id} target="_blank" rel="noopener noreferrer"  >
          <Image src={src} alt={name} width={30} height={30} className="filter grayscale hover:grayscale-0 transition-all duration-75" />
        </a>
      ))}
    </div>
  );
}
