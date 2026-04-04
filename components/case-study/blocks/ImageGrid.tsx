import Image from "next/image";
import type { ImageGridBlock } from "@/data/projects";

export default function ImageGrid({ images, columns = 2 }: ImageGridBlock) {
  const gridCls = columns === 3
    ? "grid grid-cols-1 md:grid-cols-3 gap-[20px]"
    : "grid grid-cols-1 md:grid-cols-2 gap-[20px]";

  return (
    <div className={gridCls}>
      {images.map((img, i) => (
        <figure key={i} className="flex flex-col gap-[8px]">
          <div className="relative w-full h-[200px] md:h-[240px] rounded-[16px] overflow-hidden"
            style={{ boxShadow: "0px 5px 5px rgba(0,0,0,0.06), 0px 1px 3px rgba(0,0,0,0.08)" }}>
            <Image src={img.src} alt={img.alt} fill className="object-cover" unoptimized />
          </div>
          {img.caption && (
            <figcaption className="text-[#acacac] text-[14px] tracking-[-0.42px] text-center">
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
