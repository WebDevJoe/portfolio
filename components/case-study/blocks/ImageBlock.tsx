import Image from "next/image";
import type { ImageBlock as ImageBlockType } from "@/data/projects";

export default function ImageBlock({ src, alt, caption }: ImageBlockType) {
  return (
    <figure className="flex flex-col gap-[12px]">
      <div className="relative w-full h-[300px] md:h-[400px] rounded-[16px] overflow-hidden"
        style={{ boxShadow: "0px 5px 5px rgba(0,0,0,0.06), 0px 1px 3px rgba(0,0,0,0.08)" }}>
        <Image src={src} alt={alt} fill className="object-cover" unoptimized />
      </div>
      {caption && (
        <figcaption className="text-[#acacac] text-[14px] tracking-[-0.42px] text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
