import Image from "next/image";
import type { FullWidthImageBlock } from "@/data/projects";

export default function FullWidthImage({ src, alt, caption }: FullWidthImageBlock) {
  return (
    <figure className="flex flex-col gap-[12px] -mx-4 min-[1060px]:-mx-12 xl:-mx-[64px]">
      <div className="relative w-full h-[280px] md:h-[420px] xl:h-[540px] overflow-hidden">
        <Image src={src} alt={alt} fill className="object-cover" unoptimized />
      </div>
      {caption && (
        <figcaption className="text-[#acacac] text-[14px] tracking-[-0.42px] text-center px-4">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
