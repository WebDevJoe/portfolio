import Image from "next/image";
import type { BeforeAfterBlock } from "@/data/projects";

export default function BeforeAfter({ before, after }: BeforeAfterBlock) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
      <figure className="flex flex-col gap-[8px]">
        <div className="relative w-full h-[240px] md:h-[300px] rounded-[16px] overflow-hidden border-[1.5px] border-[#f2f2f2]">
          <Image src={before.src} alt={before.alt} fill className="object-cover" unoptimized />
        </div>
        {before.label && (
          <figcaption className="flex items-center gap-[8px]">
            <span className="inline-block px-[12px] py-[4px] rounded-[32px] bg-[#f2f2f2] text-[#666] text-[13px] font-medium tracking-[-0.39px]">
              {before.label}
            </span>
          </figcaption>
        )}
      </figure>
      <figure className="flex flex-col gap-[8px]">
        <div className="relative w-full h-[240px] md:h-[300px] rounded-[16px] overflow-hidden border-[1.5px] border-[rgba(49,141,217,0.3)]">
          <Image src={after.src} alt={after.alt} fill className="object-cover" unoptimized />
        </div>
        {after.label && (
          <figcaption className="flex items-center gap-[8px]">
            <span className="inline-block px-[12px] py-[4px] rounded-[32px] bg-[rgba(49,141,217,0.2)] text-[#0072d0] text-[13px] font-medium tracking-[-0.39px]">
              {after.label}
            </span>
          </figcaption>
        )}
      </figure>
    </div>
  );
}
