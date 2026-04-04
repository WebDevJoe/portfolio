import type { TextBlock as TextBlockType } from "@/data/projects";

export default function TextBlock({ heading, body }: TextBlockType) {
  return (
    <div className="flex flex-col gap-[12px]">
      {heading && (
        <h3 className="text-[#252525] text-[22px] font-semibold leading-[1.2] tracking-[-0.66px]">
          {heading}
        </h3>
      )}
      <p className="text-[#666] text-[16px] md:text-[18px] leading-[1.6] tracking-[-0.32px]">
        {body}
      </p>
    </div>
  );
}
