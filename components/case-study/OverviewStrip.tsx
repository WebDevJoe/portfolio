import type { OverviewItem } from "@/data/projects";

export default function OverviewStrip({ items }: { items: OverviewItem[] }) {
  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 min-[1060px]:px-12 xl:px-[64px] py-[48px] xl:py-[64px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[24px]">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-[12px] rounded-[20px] border-[1.5px] border-[#f2f2f2] bg-white p-[24px]"
            >
              <span className="text-[#0072d0] text-[14px] font-semibold tracking-[-0.42px] uppercase">
                {item.label}
              </span>
              <p className="text-[#666] text-[15px] leading-[1.5] tracking-[-0.3px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
