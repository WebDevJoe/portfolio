import type { PersonaBlock as PersonaBlockType } from "@/data/projects";

export default function PersonaBlock({ personas }: PersonaBlockType) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
      {personas.map((persona, i) => (
        <div
          key={i}
          className="flex flex-col rounded-[20px] border-[1.5px] border-[#f2f2f2] bg-white overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center gap-[14px] px-[24px] pt-[24px] pb-[16px]">
            <div className="flex items-center justify-center size-[48px] rounded-full bg-[#f2f9ff] text-[24px] shrink-0">
              {persona.emoji}
            </div>
            <div className="flex flex-col">
              <span className="text-[#252525] text-[17px] font-semibold leading-[1.2] tracking-[-0.34px]">
                {persona.name}
              </span>
              <span className="text-[#999] text-[13px] font-medium leading-[1.3]">
                {persona.age} &middot; {persona.role}
              </span>
            </div>
          </div>

          {/* Bio */}
          <div className="px-[24px] pb-[16px]">
            <p className="text-[#666] text-[14px] leading-[1.55] tracking-[-0.28px]">
              {persona.bio}
            </p>
          </div>

          {/* Divider */}
          <div className="mx-[24px] h-[1px] bg-[#f2f2f2]" />

          {/* Goals & Frustrations */}
          <div className="flex flex-col gap-[14px] px-[24px] py-[16px]">
            <div>
              <span className="text-[#0072d0] text-[12px] font-semibold uppercase tracking-[0.6px]">
                Goals
              </span>
              <ul className="mt-[6px] flex flex-col gap-[4px]">
                {persona.goals.map((goal, j) => (
                  <li key={j} className="text-[#666] text-[13px] leading-[1.4] flex items-start gap-[6px]">
                    <span className="text-[#0072d0] mt-[2px] shrink-0">+</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-[#d04900] text-[12px] font-semibold uppercase tracking-[0.6px]">
                Frustrations
              </span>
              <ul className="mt-[6px] flex flex-col gap-[4px]">
                {persona.frustrations.map((item, j) => (
                  <li key={j} className="text-[#666] text-[13px] leading-[1.4] flex items-start gap-[6px]">
                    <span className="text-[#d04900] mt-[2px] shrink-0">&ndash;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-auto mx-[24px] mb-[24px] rounded-[12px] bg-[#f2f9ff] px-[16px] py-[14px]">
            <p className="text-[#252525] text-[13px] leading-[1.45] italic">
              &ldquo;{persona.quote}&rdquo;
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
