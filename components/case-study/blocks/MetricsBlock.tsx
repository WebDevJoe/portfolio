import type { MetricsBlock as MetricsBlockType } from "@/data/projects";

export default function MetricsBlock({ items }: MetricsBlockType) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px]">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-[8px] rounded-[20px] border-[1.5px] border-[#f2f2f2] bg-white p-[24px] text-center"
        >
          <span className="text-[#0072d0] text-[32px] md:text-[40px] font-semibold leading-[1] tracking-[-1px]">
            {item.value}
          </span>
          <span className="text-[#666] text-[14px] font-medium tracking-[-0.42px] leading-[1.2]">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
