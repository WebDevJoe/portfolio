import type { CaseStudySection as SectionType } from "@/data/projects";
import TextBlock from "./blocks/TextBlock";
import ImageBlock from "./blocks/ImageBlock";
import FullWidthImage from "./blocks/FullWidthImage";
import ImageGrid from "./blocks/ImageGrid";
import BeforeAfter from "./blocks/BeforeAfter";
import CalloutBlock from "./blocks/CalloutBlock";
import MetricsBlock from "./blocks/MetricsBlock";
import PersonaBlock from "./blocks/PersonaBlock";

function BlockRenderer({ block }: { block: SectionType["blocks"][number] }) {
  switch (block.type) {
    case "text":          return <TextBlock {...block} />;
    case "image":         return <ImageBlock {...block} />;
    case "full-width-image": return <FullWidthImage {...block} />;
    case "image-grid":    return <ImageGrid {...block} />;
    case "before-after":  return <BeforeAfter {...block} />;
    case "callout":       return <CalloutBlock {...block} />;
    case "metrics":       return <MetricsBlock {...block} />;
    case "personas":      return <PersonaBlock {...block} />;
  }
}

export default function CaseStudySection({ section }: { section: SectionType }) {
  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 min-[1060px]:px-12 xl:px-[64px] py-[40px] xl:py-[56px] flex flex-col gap-[32px]">
        <h2 className="text-[#252525] text-[32px] md:text-[40px] font-semibold leading-[0.95] tracking-[-0.96px]">
          {section.title}
        </h2>
        {section.blocks.map((block, i) => (
          <BlockRenderer key={i} block={block} />
        ))}
      </div>
    </section>
  );
}
