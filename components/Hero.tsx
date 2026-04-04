"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const heroCardImage = "https://www.figma.com/api/mcp/asset/ec014d28-49c3-4ac7-846d-c33b8cd564b2";
const ellipseGreen  = "https://www.figma.com/api/mcp/asset/fc7a0541-3dbb-4099-a7dc-c3d922301542";
const ellipseDot    = "https://www.figma.com/api/mcp/asset/92ad979c-e24e-406b-80c2-bb6873fb7dc3";

const CARDS = [
  { id: 1, image: heroCardImage, grey: false },
  { id: 2, image: heroCardImage, grey: false },
  { id: 3, image: heroCardImage, grey: false },
  { id: 4, image: heroCardImage, grey: false },
  { id: 5, image: heroCardImage, grey: true  },
];

const LOOPED = [...CARDS, ...CARDS];

function CornerDot({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const cls = {
    tl: "top-[12.5px] left-[12.5px]",
    tr: "top-[12.5px] right-[12.5px]",
    bl: "bottom-[12.5px] left-[12.5px]",
    br: "bottom-[12.5px] right-[12.5px]",
  }[pos];
  return (
    <div className={`absolute size-[6px] ${cls}`}>
      <img src={ellipseDot} alt="" className="absolute inset-0 size-full" />
    </div>
  );
}

function HeroCard({ image, grey }: { image: string; grey: boolean }) {
  return (
    <div className="relative shrink-0 overflow-hidden rounded-[20px] border-[1.5px] border-[#f2f2f2] p-[24px]">
      <div aria-hidden className="absolute inset-0 rounded-[20px] bg-white pointer-events-none" />
      <div className="absolute inset-0 rounded-[inherit] pointer-events-none shadow-[inset_0px_3px_0px_0px_white]" />
      <CornerDot pos="tl" /><CornerDot pos="tr" />
      <CornerDot pos="bl" /><CornerDot pos="br" />
      <div
        className="relative h-[285px] w-[calc(100vw-80px)] md:w-[380px] rounded-[10px] overflow-hidden shrink-0"
        style={{
          boxShadow: "0px 33px 9px rgba(0,0,0,0), 0px 21px 8px rgba(0,0,0,0.01), 0px 12px 7px rgba(0,0,0,0.05), 0px 5px 5px rgba(0,0,0,0.09), 0px 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <Image src={image} alt="Project preview" fill className="object-cover" unoptimized />
      </div>
    </div>
  );
}

const HEADING = "Designing things people actually want to use.";
const BOLD_AT = "Designing things people actually ".length;

export default function Hero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const chipRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [typed, setTyped] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  // Page load entrance animation
  useEffect(() => {
    const els = [chipRef.current, headingRef.current, subtextRef.current];
    gsap.set(els, { opacity: 0, y: 20 });
    gsap.set(carouselRef.current, { opacity: 0, y: 32 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(chipRef.current, { opacity: 1, y: 0, duration: 0.55 })
      .to(headingRef.current, { opacity: 1, y: 0, duration: 0.55 }, "-=0.35")
      .add(() => setStartTyping(true), "<0.05")
      .to(subtextRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.25")
      .to(carouselRef.current, { opacity: 1, y: 0, duration: 0.65 }, "-=0.3");

    return () => { tl.kill(); };
  }, []);

  // Typing effect (starts after heading entrance)
  useEffect(() => {
    if (!startTyping || typed >= HEADING.length) return;
    const id = setTimeout(() => setTyped((n) => n + 1), 38);
    return () => clearTimeout(id);
  }, [typed, startTyping]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const oneSetWidth = track.scrollWidth / 2;

    tweenRef.current = gsap.fromTo(
      track,
      { x: 0 },
      { x: -oneSetWidth, duration: 28, ease: "none", repeat: -1 }
    );

    const container = track.parentElement;
    const pause = () => tweenRef.current?.pause();
    const resume = () => tweenRef.current?.play();
    container?.addEventListener("mouseenter", pause);
    container?.addEventListener("mouseleave", resume);

    const onResize = () => {
      tweenRef.current?.kill();
      gsap.set(track, { x: 0 });
      const newWidth = track.scrollWidth / 2;
      tweenRef.current = gsap.fromTo(
        track,
        { x: 0 },
        { x: -newWidth, duration: 28, ease: "none", repeat: -1 }
      );
    };
    window.addEventListener("resize", onResize);

    return () => {
      tweenRef.current?.kill();
      container?.removeEventListener("mouseenter", pause);
      container?.removeEventListener("mouseleave", resume);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="flex flex-col gap-[40px] xl:gap-[64px] items-center justify-center py-[48px] xl:p-[64px] w-full">
      {/* Text block */}
      <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-[16px] md:gap-[24px] items-center justify-center text-center px-4 md:px-12 xl:px-[64px]">
        <div ref={chipRef} className="flex items-center gap-[8px] px-[16px] py-[8px] rounded-[32px] bg-[rgba(49,141,217,0.2)]">
          {/* Pulsing green dot */}
          <div className="relative size-[10px] shrink-0">
            <span className="absolute inset-0 rounded-full bg-[#22c55e] opacity-75 animate-ping" />
            <span className="relative block size-full rounded-full bg-[#22c55e]" />
          </div>
          <span className="text-[#0064b6] text-[16px] font-medium tracking-[-0.48px] leading-[0.95] whitespace-nowrap">
            Available for projects
          </span>
        </div>

        <h1
          ref={headingRef}
          aria-label={HEADING}
          className="text-[#252525] text-[48px] md:text-[64px] xl:text-[96px] tracking-[-1.44px] md:tracking-[-1.92px] xl:tracking-[-2.88px] leading-[0.95] xl:max-w-[1062px]"
        >
          <span aria-hidden>
            {HEADING.slice(0, Math.min(typed, BOLD_AT))}
            {typed > BOLD_AT && (
              <span className="font-semibold">
                {HEADING.slice(BOLD_AT, typed)}
              </span>
            )}
            {typed < HEADING.length && (
              <span className="inline-block w-[2px] h-[0.85em] bg-[#252525] ml-[2px] align-middle animate-pulse" />
            )}
          </span>
        </h1>

        <p ref={subtextRef} className="text-[#252525] text-[16px] md:text-[18px] tracking-[-0.48px] md:tracking-[-0.54px] leading-[0.95] max-w-[284px] md:max-w-none md:whitespace-nowrap">
          A game UI/UX designer with a web development background.
        </p>
      </div>

      {/* Infinite marquee carousel */}
      <div ref={carouselRef} className="w-full overflow-hidden">
        <div ref={trackRef} className="flex w-max">
          {LOOPED.map((card, i) => (
            <div key={i} className="mr-[32px] shrink-0">
              <HeroCard image={card.image} grey={card.grey} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
