import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function CaseStudyHero({ project }: { project: Project }) {
  const { meta, heroImage } = project;

  return (
    <section className="w-full">
      {/* Back link */}
      <div className="max-w-[1440px] mx-auto px-4 min-[1060px]:px-12 xl:px-[64px] pt-[24px]">
        <Link
          href="/#work"
          className="inline-flex items-center gap-[8px] text-[#666] text-[14px] font-medium tracking-[-0.42px] hover:text-[#0072d0] transition-colors"
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="rotate-180">
            <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to projects
        </Link>
      </div>

      {/* Hero image */}
      <div className="max-w-[1440px] mx-auto px-4 min-[1060px]:px-12 xl:px-[64px] pt-[24px]">
        <div className="relative w-full h-[280px] md:h-[420px] xl:h-[540px] rounded-[20px] overflow-hidden"
          style={{ boxShadow: "0px 12px 7px rgba(0,0,0,0.05), 0px 5px 5px rgba(0,0,0,0.09), 0px 1px 3px rgba(0,0,0,0.1)" }}>
          <Image src={heroImage} alt={meta.title} fill className="object-cover" unoptimized />
        </div>
      </div>

      {/* Title + metadata */}
      <div className="max-w-[1440px] mx-auto px-4 min-[1060px]:px-12 xl:px-[64px] pt-[40px] flex flex-col gap-[24px]">
        {/* Category pill */}
        <span className="inline-flex w-fit px-[16px] py-[8px] rounded-[32px] bg-[rgba(49,141,217,0.2)] text-[#0064b6] text-[14px] font-medium tracking-[-0.42px]">
          {meta.category}
        </span>

        <h1 className="text-[#252525] text-[40px] md:text-[56px] xl:text-[72px] font-semibold leading-[0.95] tracking-[-1.2px] md:tracking-[-1.68px] xl:tracking-[-2.16px]">
          {meta.title}
        </h1>

        {/* Outcome hook */}
        <p className="text-[#0072d0] text-[18px] md:text-[22px] font-medium leading-[1.2] tracking-[-0.54px]">
          {meta.outcome}
        </p>

        {/* Metadata strip */}
        <div className="flex flex-wrap gap-[16px] md:gap-[32px]">
          {[
            { label: "Role", value: meta.role },
            { label: "Timeline", value: meta.timeline },
            { label: "Tools", value: meta.tools.join(", ") },
            { label: "Team", value: meta.team },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-[4px]">
              <span className="text-[#acacac] text-[12px] font-medium tracking-[-0.36px] uppercase">
                {item.label}
              </span>
              <span className="text-[#252525] text-[14px] font-medium tracking-[-0.42px]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
