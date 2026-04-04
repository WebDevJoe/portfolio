import type { CalloutBlock as CalloutBlockType } from "@/data/projects";

export default function CalloutBlock({ text }: CalloutBlockType) {
  return (
    <blockquote className="relative rounded-[20px] border-[1.5px] border-[#f2f2f2] bg-white p-[32px] md:p-[40px]">
      <div className="absolute top-[24px] left-[32px] text-[rgba(49,141,217,0.2)] text-[48px] leading-none font-semibold select-none">&ldquo;</div>
      <p className="relative text-[#252525] text-[18px] md:text-[20px] leading-[1.5] tracking-[-0.4px] italic pt-[24px]">
        {text}
      </p>
    </blockquote>
  );
}
