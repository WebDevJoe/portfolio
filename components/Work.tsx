"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";

const ellipseDot = "https://www.figma.com/api/mcp/asset/92ad979c-e24e-406b-80c2-bb6873fb7dc3";

const TABS = ["Game UI/UX", "Product Design"] as const;
type Tab = (typeof TABS)[number];

function CornerDot({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const cls = { tl: "top-[12.5px] left-[12.5px]", tr: "top-[12.5px] right-[12.5px]", bl: "bottom-[12.5px] left-[12.5px]", br: "bottom-[12.5px] right-[12.5px]" }[pos];
  return (
    <div className={`absolute size-[6px] ${cls}`}>
      <img src={ellipseDot} alt="" className="absolute inset-0 size-full" />
    </div>
  );
}

function ProjectCard({ slug, role, title, description, image }: { slug: string; role: string; title: string; description: string; image: string }) {
  return (
    <Link href={`/work/${slug}`}>
      <article className="group relative rounded-[20px] border-[1.5px] border-[#f2f2f2] overflow-hidden p-[24px] flex flex-col gap-[33px] cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.03]">
        <div aria-hidden className="absolute inset-0 rounded-[20px] bg-white pointer-events-none" />
        <div className="absolute inset-0 rounded-[inherit] pointer-events-none shadow-[inset_0px_3px_0px_0px_white]" />
        <CornerDot pos="tl" /><CornerDot pos="tr" />
        <CornerDot pos="bl" /><CornerDot pos="br" />

        <div className="relative h-[240px] w-full rounded-[10px] overflow-hidden" style={{ boxShadow: "0px 33px 9px rgba(0,0,0,0), 0px 21px 8px rgba(0,0,0,0.01), 0px 12px 7px rgba(0,0,0,0.05), 0px 5px 5px rgba(0,0,0,0.09), 0px 1px 3px rgba(0,0,0,0.1)" }}>
          <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110">
            <Image src={image} alt={title} fill className="object-cover" unoptimized />
          </div>
        </div>

        <div className="relative flex flex-col gap-[8px]">
          <p className="text-[#0064b6] text-[14px] font-medium leading-[21px] tracking-[-0.42px] whitespace-nowrap">{role}</p>
          <h3 className="text-[#252525] text-[22px] font-semibold leading-[1.2] tracking-[-0.66px]">{title}</h3>
          <p className="text-[#666] text-[16px] leading-[22.5px] tracking-[-0.3px] line-clamp-3">{description}</p>
        </div>

        <div className="relative flex items-center gap-[8px]">
          <span className="text-[#252525] text-[16px] font-medium tracking-[-0.48px] leading-[0.95] transition-colors duration-300 group-hover:text-[#0072d0]">
            View case study
          </span>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
            <path
              d="M1 5h12M8 1l5 4-5 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#252525] group-hover:text-[#0072d0] transition-colors duration-300"
            />
          </svg>
        </div>
      </article>
    </Link>
  );
}

export default function Work() {
  const [activeTab, setActiveTab] = useState<Tab>("Game UI/UX");
  const cardsRef = useRef<HTMLDivElement>(null);

  const filtered = projects.filter((p) => p.meta.category === activeTab);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const container = cardsRef.current;
    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];

    gsap.set(cards, { opacity: 0, y: 48 });

    const ctx = gsap.context(() => {
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          once: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section id="work" className="w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[40px] items-center pb-[48px] xl:pb-[64px] px-4 min-[1060px]:px-12 xl:px-[64px]">
        <div className="flex flex-col gap-[16px] items-center text-center w-full">
          <h2 className="text-[#252525] text-[48px] font-semibold leading-[0.95] tracking-[-1.44px]">My work</h2>
          <p className="text-[#252525] text-[16px] min-[1060px]:text-[18px] leading-[0.95] tracking-[-0.48px] min-[1060px]:tracking-[-0.54px]">
            A game UI/UX designer with a web development background.
          </p>
        </div>

        <div className="flex gap-[4px] items-center p-[4px] rounded-[100px] bg-[rgba(49,141,217,0.2)]">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-[26px] py-[16px] rounded-[100px] text-[16px] font-medium leading-[0.9] whitespace-nowrap transition-colors ${
                activeTab === tab ? "bg-[#0072d0] text-white" : "text-[#0e5188] hover:bg-white/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div ref={cardsRef} className="flex flex-col min-[1060px]:flex-row gap-[40px] w-full">
          {filtered.map((project) => (
            <div key={project.meta.slug} className="md:flex-1">
              <ProjectCard
                slug={project.meta.slug}
                role={project.meta.role}
                title={project.meta.title}
                description={project.meta.description}
                image={project.meta.cardImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
