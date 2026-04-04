import Link from "next/link";
import type { ProjectMeta } from "@/data/projects";

export default function ProjectNav({ prev, next }: { prev: ProjectMeta | null; next: ProjectMeta | null }) {
  return (
    <section className="w-full border-t border-black/8">
      <div className="max-w-[1440px] mx-auto px-4 min-[1060px]:px-12 xl:px-[64px] py-[48px] xl:py-[64px]">
        <div className="flex justify-between items-center gap-[16px]">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group flex flex-col gap-[8px] max-w-[45%]"
            >
              <span className="text-[#acacac] text-[12px] font-medium tracking-[-0.36px] uppercase group-hover:text-[#0072d0] transition-colors">
                Previous project
              </span>
              <span className="text-[#252525] text-[18px] md:text-[22px] font-semibold leading-[1.1] tracking-[-0.54px] group-hover:text-[#0072d0] transition-colors">
                {prev.title}
              </span>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group flex flex-col gap-[8px] items-end text-right max-w-[45%]"
            >
              <span className="text-[#acacac] text-[12px] font-medium tracking-[-0.36px] uppercase group-hover:text-[#0072d0] transition-colors">
                Next project
              </span>
              <span className="text-[#252525] text-[18px] md:text-[22px] font-semibold leading-[1.1] tracking-[-0.54px] group-hover:text-[#0072d0] transition-colors">
                {next.title}
              </span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </section>
  );
}
