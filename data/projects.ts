// ── Types ──

export interface ProjectMeta {
  slug: string;
  category: "Game UI/UX" | "Product Design";
  role: string;
  title: string;
  description: string;
  cardImage: string;
  outcome: string;
  timeline: string;
  tools: string[];
  team: string;
}

export interface OverviewItem {
  label: string;
  text: string;
}

// ── Content blocks (discriminated union) ──

export interface TextBlock {
  type: "text";
  heading?: string;
  body: string;
}

export interface ImageBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
}

export interface FullWidthImageBlock {
  type: "full-width-image";
  src: string;
  alt: string;
  caption?: string;
}

export interface ImageGridBlock {
  type: "image-grid";
  images: { src: string; alt: string; caption?: string }[];
  columns?: 2 | 3;
}

export interface BeforeAfterBlock {
  type: "before-after";
  before: { src: string; alt: string; label?: string };
  after: { src: string; alt: string; label?: string };
}

export interface CalloutBlock {
  type: "callout";
  text: string;
}

export interface MetricsBlock {
  type: "metrics";
  items: { value: string; label: string }[];
}

export interface PersonaBlock {
  type: "personas";
  personas: {
    name: string;
    age: string;
    role: string;
    emoji: string;
    bio: string;
    goals: string[];
    frustrations: string[];
    quote: string;
  }[];
}

export type SectionBlock =
  | TextBlock
  | ImageBlock
  | FullWidthImageBlock
  | ImageGridBlock
  | BeforeAfterBlock
  | CalloutBlock
  | MetricsBlock
  | PersonaBlock;

export interface CaseStudySection {
  id: string;
  title: string;
  blocks: SectionBlock[];
}

export interface Project {
  meta: ProjectMeta;
  heroImage: string;
  overview: OverviewItem[];
  sections: CaseStudySection[];
  reflection: string;
}

// ── Placeholder data ──

const placeholderImage = "https://www.figma.com/api/mcp/asset/48cb6f2e-cc55-4976-9e9c-33fbde381b59";
const placeholderImage2 = "https://www.figma.com/api/mcp/asset/9a641b40-d704-4a70-8a2b-9c6d491170ff";

export const projects: Project[] = [
  {
    meta: {
      slug: "clean4me-redesign",
      category: "Product Design",
      role: "UI/UX Designer & Developer",
      title: "Clean4ME — Website Redesign",
      description: "Replacing a generic template with a custom-built, trust-focused website for a real cleaning business — designed in Figma, built with modern tools, and deployed to production.",
      cardImage: "/work/clean4me/hero.png",
      outcome: "Replacing a template with zero brand identity",
      timeline: "Mar – Apr 2025",
      tools: ["Figma", "HTML/CSS", "JavaScript", "GSAP", "Cloudflare Pages"],
      team: "Solo Designer & Developer",
    },
    heroImage: "/work/clean4me/hero.png",
    overview: [
      { label: "Challenge", text: "Clean4ME was using a generic template with stock imagery, a mismatched colour scheme, and no clear service hierarchy — making them indistinguishable from competitors." },
      { label: "Solution", text: "Designed and built a bespoke multi-page website using real photography, a brand-aligned palette, and clear service-focused information architecture." },
      { label: "Impact", text: "From a template with no brand presence to a professional, SEO-optimised, mobile-responsive site that builds trust and clearly communicates services." },
      { label: "My Role", text: "End-to-end ownership — research, Figma design, front-end build, animations, responsive implementation, SEO, and deployment." },
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          { type: "text", body: "This project started personally. My dad runs Clean4ME, a cleaning and property management business across the Highlands and Islands of Scotland — and I could see his website wasn't doing him justice. I offered to redesign it." },
          { type: "text", body: "The original site was a generic Squarespace template with a burgundy colour scheme, stock photography, and a shopping cart feature they didn't need. Nothing about it said this is Clean4ME — no real photos, no personality, no trust. For a service business where customers are inviting strangers into their home, that's a real conversion problem." },
          { type: "callout", text: "Nothing about the original site said 'this is Clean4ME' — no real photos, no personality, no trust. For a service business, that's a conversion problem." },
        ],
      },
      {
        id: "research",
        title: "Discovery & Research",
        blocks: [
          { type: "text", body: "I started by understanding the business properly — their services, their area, and what actually makes them different: a small, responsive local team that landlords trust to keep properties ready between tenants." },
          { type: "text", body: "I then audited six competitor cleaning websites across Scotland. Most fell into two camps: overly corporate sites with generic stock photos, or bare-minimum single-page sites with no structure. The opportunity was to sit in the middle — professional but personal, structured but not sterile." },
          { type: "metrics", items: [
            { value: "6", label: "Competitor sites audited" },
            { value: "3", label: "User personas mapped" },
            { value: "2", label: "Core service areas" },
            { value: "0", label: "Real photos on original" },
          ]},
          { type: "text", body: "Three user personas emerged, each shaping different parts of the design:" },
          { type: "personas", personas: [
            {
              name: "Fiona",
              age: "42",
              role: "Homeowner",
              emoji: "🏠",
              bio: "Busy mum of two in Elgin. Works part-time and wants her home cleaned regularly without having to think about it.",
              goals: ["Find a cleaner she can trust with a house key", "Consistent quality without having to check up", "Easy booking, no back-and-forth"],
              frustrations: ["Previous cleaners were unreliable", "Can't tell from most websites if they're professional", "Stock photos make every company look the same"],
              quote: "I just want someone I can rely on to show up and do a proper job.",
            },
            {
              name: "David",
              age: "55",
              role: "Landlord — 3 Properties",
              emoji: "🔑",
              bio: "Owns three rental properties across the Highlands. Needs someone to handle changeovers and keep properties ready between tenants.",
              goals: ["Fast turnaround between tenants", "One point of contact for cleans and checks", "Responsive when something comes up last minute"],
              frustrations: ["Current cleaners don't answer out of hours", "No way to see if a job's been done properly", "Tired of coordinating multiple contractors"],
              quote: "I need someone who treats my properties like I would — and picks up the phone.",
            },
            {
              name: "Mark",
              age: "38",
              role: "Office Manager",
              emoji: "🏢",
              bio: "Manages a small accountancy firm in Inverness. Needs reliable office cleaning that works around business hours.",
              goals: ["Clean workspace for client meetings", "Evening or weekend cleaning so it doesn't disrupt work", "Professional appearance for the office"],
              frustrations: ["Last cleaner left supplies out during client visits", "Hard to find commercial cleaners outside the central belt", "Most websites don't clearly list commercial services"],
              quote: "Clients walk in and the office needs to look sharp. That's non-negotiable.",
            },
          ]},
        ],
      },
      {
        id: "design",
        title: "Design",
        blocks: [
          { type: "text", body: "I designed the full site in Figma before writing a line of code. The information architecture split into three focused pages — a homepage establishing trust, a dedicated cleaning services page, and a property support page targeting landlords specifically." },
          { type: "text", body: "The colour palette was pulled directly from the Clean4ME brand — the blue from their van livery became the primary colour, with navy for depth. Every stock image was replaced with real photographs of their vehicles, completed jobs, and service locations. That single decision transformed how trustworthy the site felt more than any amount of styling could." },
          { type: "image-grid", columns: 2, images: [
            { src: "/work/clean4me/about-1.jpg", alt: "Clean4ME van at historic site — real brand photography", caption: "Real brand photography replaced all stock images" },
            { src: "/work/clean4me/card-property.jpg", alt: "Clean property interior", caption: "Actual completed work showcased" },
          ]},
          { type: "text", body: "I also used Claude as a creative tool during the design process — generating a base to react to and push against, then directing and refining the design myself. This is increasingly how modern designers work, and it let me move faster without compromising quality." },
          { type: "image-grid", columns: 2, images: [
            { src: "/work/clean4me/card-cleaning.jpg", alt: "Professional floor cleaning", caption: "Service cards with real imagery" },
            { src: "/work/clean4me/hero-cleaning.png", alt: "Clean4ME branded vehicle", caption: "Brand consistency across pages" },
          ]},
        ],
      },
      {
        id: "build",
        title: "Build",
        blocks: [
          { type: "text", body: "The final site was hand-coded using semantic HTML, custom CSS with design tokens, and vanilla JavaScript — no frameworks. GSAP with ScrollTrigger powers scroll-based animations, with all motion respecting prefers-reduced-motion for accessibility. The site was built mobile-first and deployed on Cloudflare Pages." },
          { type: "text", body: "Full SEO implementation was included from the start: Open Graph tags, JSON-LD structured data, canonical URLs, lazy loading, and descriptive alt text throughout." },
          { type: "text", body: "The site was coded using Claude, with me directing the output and making decisions about structure, content, and detail throughout." },
          { type: "metrics", items: [
            { value: "3", label: "Pages designed & built" },
            { value: "0", label: "Frameworks used" },
            { value: "100%", label: "Custom CSS" },
            { value: "Full", label: "SEO from day one" },
          ]},
        ],
      },
      {
        id: "outcome",
        title: "Outcome",
        blocks: [
          { type: "text", body: "Clean4ME went from a template site with no brand presence to a professional, mobile-responsive website that accurately represents who they are. It now works as a genuine business asset — building trust with new customers and clearly communicating services at a glance." },
          { type: "metrics", items: [
            { value: "100%", label: "Real photography" },
            { value: "3", label: "Targeted service pages" },
            { value: "Full", label: "SEO implementation" },
            { value: "Mobile", label: "First responsive" },
          ]},
        ],
      },
    ],
    reflection: "Working with a real business rather than a hypothetical brief forced sharper decisions — I couldn't hide behind lorem ipsum. If I revisited this, I'd push for user testing with real customers before finalising the IA, and explore a CMS so my dad can update content himself. The biggest takeaway: authentic photography transforms a design more than any amount of styling ever could.",
  },
  {
    meta: {
      slug: "ecommerce-redesign",
      category: "Product Design",
      role: "Lead UI/UX Designer",
      title: "E-Commerce Platform Redesign",
      description: "Complete overhaul of a retail platform, focusing on user journey optimization and conversion rate improvements through intuitive design patterns.",
      cardImage: placeholderImage,
      outcome: "Increased conversion rate by 34%",
      timeline: "Jan – Apr 2025",
      tools: ["Figma", "FigJam", "Maze", "Hotjar"],
      team: "2 Designers, 4 Engineers, 1 PM",
    },
    heroImage: placeholderImage,
    overview: [
      { label: "Challenge", text: "Users were abandoning carts at a 72% rate due to a confusing checkout flow and lack of trust signals." },
      { label: "Solution", text: "Simplified the checkout to 3 steps, added progress indicators, and introduced social proof throughout the funnel." },
      { label: "Impact", text: "34% increase in conversion rate, 28% reduction in cart abandonment within 60 days of launch." },
      { label: "My Role", text: "Led end-to-end design from research through handoff. Conducted user interviews and usability testing." },
    ],
    sections: [
      {
        id: "problem",
        title: "The Problem",
        blocks: [
          { type: "text", body: "The existing checkout experience was built incrementally over 3 years without a cohesive design strategy. Users faced a 7-step checkout process with no clear progress indication, leading to confusion and drop-off at every stage." },
          { type: "full-width-image", src: placeholderImage, alt: "Analytics showing drop-off points in the checkout funnel", caption: "Heatmap data revealed users struggling with the payment form layout" },
          { type: "callout", text: "\"I got to the payment page and wasn't sure if my items were still in the cart.\" — User interview participant" },
        ],
      },
      {
        id: "research",
        title: "Research & Discovery",
        blocks: [
          { type: "text", body: "I conducted 12 user interviews, analyzed 3 months of Hotjar session recordings, and performed a competitive audit of 8 leading e-commerce platforms. Three key themes emerged: users wanted visibility into their order at all times, trust signals before entering payment info, and the ability to edit their cart without losing progress." },
          { type: "image-grid", columns: 3, images: [
            { src: placeholderImage, alt: "Affinity mapping session", caption: "Affinity mapping" },
            { src: placeholderImage2, alt: "User journey map", caption: "Journey map" },
            { src: placeholderImage, alt: "Competitive analysis", caption: "Competitive audit" },
          ]},
          { type: "metrics", items: [
            { value: "12", label: "User interviews" },
            { value: "200+", label: "Sessions analyzed" },
            { value: "8", label: "Competitors audited" },
          ]},
        ],
      },
      {
        id: "process",
        title: "Design Process",
        blocks: [
          { type: "text", body: "Starting with low-fidelity wireframes, I explored multiple checkout flow patterns. The key insight was that a persistent order summary sidebar reduced anxiety and kept users oriented throughout the process." },
          { type: "before-after", before: { src: placeholderImage, alt: "Original 7-step checkout", label: "Before: 7 steps" }, after: { src: placeholderImage2, alt: "Redesigned 3-step checkout", label: "After: 3 steps" } },
          { type: "text", heading: "Iteration & Testing", body: "I ran 3 rounds of usability testing with 5 participants each. The first iteration revealed that users still missed the progress indicator — I increased its visual weight and added step labels. The second iteration showed a 90% task completion rate." },
          { type: "image", src: placeholderImage2, alt: "Wireframe iterations showing the evolution of the checkout flow", caption: "Wireframe iterations — from exploration to final direction" },
        ],
      },
      {
        id: "solution",
        title: "Final Solution",
        blocks: [
          { type: "text", body: "The final design features a streamlined 3-step checkout with a persistent order summary, inline validation, trust badges, and a guest checkout option. Every decision was backed by user research and testing data." },
          { type: "full-width-image", src: placeholderImage2, alt: "Final checkout design across devices", caption: "Responsive checkout experience across desktop, tablet, and mobile" },
          { type: "image-grid", columns: 2, images: [
            { src: placeholderImage, alt: "Step 1: Shipping details", caption: "Shipping details with address autocomplete" },
            { src: placeholderImage2, alt: "Step 2: Payment", caption: "Payment with trust signals and saved methods" },
          ]},
        ],
      },
      {
        id: "results",
        title: "Results",
        blocks: [
          { type: "metrics", items: [
            { value: "+34%", label: "Conversion rate" },
            { value: "-28%", label: "Cart abandonment" },
            { value: "4.6/5", label: "User satisfaction" },
            { value: "< 2min", label: "Avg. checkout time" },
          ]},
          { type: "text", body: "Within 60 days of launch, the redesigned checkout flow delivered measurable improvements across all key metrics. Customer support tickets related to checkout dropped by 45%, and the NPS score for the purchase experience increased from 32 to 58." },
        ],
      },
    ],
    reflection: "If I could do this project again, I would have involved engineering earlier in the ideation phase. Some of my initial concepts required custom payment integrations that weren't feasible within the timeline. Earlier collaboration would have surfaced these constraints sooner and saved a week of design iteration.",
  },
  {
    meta: {
      slug: "mobile-game-hud",
      category: "Game UI/UX",
      role: "Lead UI/UX Designer",
      title: "Mobile Game HUD Redesign",
      description: "Redesigned the in-game HUD for a mobile RPG, improving player readability and reducing accidental inputs during combat.",
      cardImage: placeholderImage2,
      outcome: "Reduced accidental inputs by 61%",
      timeline: "Mar – Jun 2025",
      tools: ["Figma", "Unity", "PlaytestCloud", "Miro"],
      team: "1 Designer, 3 Engineers, 1 Game Director",
    },
    heroImage: placeholderImage2,
    overview: [
      { label: "Challenge", text: "Players reported frustration with accidental ability activations and poor health bar visibility during intense combat sequences." },
      { label: "Solution", text: "Redesigned the HUD layout with larger touch targets, contextual ability grouping, and a high-contrast health system." },
      { label: "Impact", text: "61% reduction in accidental inputs and 23% improvement in player retention at the 7-day mark." },
      { label: "My Role", text: "Sole designer. Ran playtests, designed all UI assets, and worked directly with Unity engineers on implementation." },
    ],
    sections: [
      {
        id: "problem",
        title: "The Problem",
        blocks: [
          { type: "text", body: "The existing HUD was designed for tablet and scaled down for phones without adaptation. Touch targets were too small, abilities were grouped alphabetically instead of by combat context, and the health bar used a thin gradient that was nearly invisible during bright combat effects." },
          { type: "full-width-image", src: placeholderImage2, alt: "Original HUD with highlighted problem areas" },
          { type: "callout", text: "\"I keep hitting the wrong ability in the middle of boss fights and it costs me the run.\" — Player review, App Store" },
        ],
      },
      {
        id: "research",
        title: "Research & Discovery",
        blocks: [
          { type: "text", body: "I analyzed 500+ player reviews mentioning UI issues, ran 8 moderated playtests with screen recording, and benchmarked 6 top-performing mobile RPGs. The data showed that 73% of accidental inputs happened during abilities that were adjacent to the movement controls." },
          { type: "image-grid", columns: 2, images: [
            { src: placeholderImage, alt: "Heatmap of touch inputs during combat", caption: "Touch heatmap analysis" },
            { src: placeholderImage2, alt: "Competitive UI comparison", caption: "Competitive benchmarking" },
          ]},
        ],
      },
      {
        id: "process",
        title: "Design Process",
        blocks: [
          { type: "text", body: "I created 4 HUD layout variations and tested each with 5 players. The winning layout separated offensive abilities from defensive ones, placing them on opposite sides of the screen. Health bars were redesigned with a dual-layer system: a thick colored bar with a numeric overlay." },
          { type: "before-after", before: { src: placeholderImage, alt: "Original cramped HUD", label: "Before" }, after: { src: placeholderImage2, alt: "Redesigned spacious HUD", label: "After" } },
        ],
      },
      {
        id: "solution",
        title: "Final Solution",
        blocks: [
          { type: "text", body: "The final HUD features context-aware ability grouping, 44px minimum touch targets (up from 28px), a high-contrast health system visible over any background, and a cooldown visualization that doesn't rely solely on color." },
          { type: "full-width-image", src: placeholderImage, alt: "Final HUD design in-game", caption: "Final HUD in live gameplay — note the spatial separation of ability groups" },
        ],
      },
      {
        id: "results",
        title: "Results",
        blocks: [
          { type: "metrics", items: [
            { value: "-61%", label: "Accidental inputs" },
            { value: "+23%", label: "Day-7 retention" },
            { value: "+0.4★", label: "App Store rating" },
          ]},
          { type: "text", body: "Post-launch analytics showed a dramatic drop in accidental ability activations. Player sentiment in reviews shifted from UI complaints to gameplay praise. The App Store rating climbed from 3.8 to 4.2 within the first month." },
        ],
      },
    ],
    reflection: "This project reinforced the importance of designing for the worst-case scenario — in this case, fast-paced combat with screen effects. What looks clean in a static mockup can fall apart in context. I now always test UI with the most chaotic gameplay footage I can find.",
  },
  {
    meta: {
      slug: "strategy-game-ui",
      category: "Game UI/UX",
      role: "UI/UX Designer",
      title: "Strategy Game — Command Interface",
      description: "Designed a real-time strategy game command interface that lets players manage complex unit compositions without pausing gameplay.",
      cardImage: placeholderImage,
      outcome: "Average actions-per-minute up 28%",
      timeline: "Jun – Sep 2024",
      tools: ["Figma", "Unreal Engine", "Miro", "PlaytestCloud"],
      team: "1 Designer, 5 Engineers, 1 Creative Director",
    },
    heroImage: placeholderImage,
    overview: [
      { label: "Challenge", text: "Players managing 50+ units needed to issue commands quickly without losing situational awareness or pausing the game." },
      { label: "Solution", text: "A radial command wheel with contextual grouping, quick-cast hotkeys, and a minimal HUD that surfaces only relevant info per unit type." },
      { label: "Impact", text: "28% increase in average APM, 40% fewer mis-commands in playtests, and players reported feeling 'in control' for the first time." },
      { label: "My Role", text: "Led UI/UX design. Ran playtests, designed the radial menu system, and iterated based on input heatmaps and player feedback." },
    ],
    sections: [
      {
        id: "problem",
        title: "The Problem",
        blocks: [
          { type: "text", body: "The existing command system used nested dropdown menus that required 3-4 clicks per action. In a real-time game where milliseconds matter, players were either pausing constantly or making errors because the UI couldn't keep up with their intent." },
          { type: "callout", text: "\"By the time I find the right command in the menu, my units are already dead.\" — Playtest participant" },
        ],
      },
      {
        id: "research",
        title: "Research & Discovery",
        blocks: [
          { type: "text", body: "I analysed input telemetry from 2,000 play sessions, identifying that 80% of all commands came from just 6 actions. The remaining 20% were situational and could be contextually surfaced. I also benchmarked radial menus in 5 competitive RTS titles." },
          { type: "metrics", items: [
            { value: "2,000", label: "Sessions analysed" },
            { value: "80%", label: "Commands from 6 actions" },
            { value: "5", label: "RTS titles benchmarked" },
          ]},
        ],
      },
      {
        id: "process",
        title: "Design Process",
        blocks: [
          { type: "text", body: "The radial wheel puts the 6 core commands at thumb-distance from the cursor. Context-aware segments appear based on unit type — infantry see different options than vehicles. I tested 3 radial layouts with 8 players each, measuring command speed and error rate." },
          { type: "before-after", before: { src: placeholderImage, alt: "Original nested dropdown menu", label: "Before: Nested menus" }, after: { src: placeholderImage2, alt: "Radial command wheel", label: "After: Radial wheel" } },
        ],
      },
      {
        id: "solution",
        title: "Final Solution",
        blocks: [
          { type: "text", body: "The final system combines a radial wheel for mouse users, quick-cast hotkeys for keyboard players, and a minimal unit-type HUD that only shows relevant stats. The result feels fast, fluid, and intuitive regardless of input method." },
          { type: "full-width-image", src: placeholderImage2, alt: "Final command interface in gameplay" },
        ],
      },
      {
        id: "results",
        title: "Results",
        blocks: [
          { type: "metrics", items: [
            { value: "+28%", label: "Actions per minute" },
            { value: "-40%", label: "Mis-commands" },
            { value: "92%", label: "Preferred new UI" },
          ]},
          { type: "text", body: "Post-implementation playtests showed players executing strategies faster and with more confidence. The most telling metric: players stopped pausing the game to issue commands." },
        ],
      },
    ],
    reflection: "Radial menus are deceptively hard to get right — the angle, segment size, and dead zone all affect usability dramatically. The breakthrough was context-aware segments that reduce cognitive load by only showing what's relevant to the selected unit type.",
  },
  {
    meta: {
      slug: "inventory-system",
      category: "Game UI/UX",
      role: "UI/UX Designer",
      title: "RPG Inventory System Redesign",
      description: "Redesigned a cluttered RPG inventory into a clean, visual system that makes item management feel like part of the gameplay, not a chore.",
      cardImage: placeholderImage2,
      outcome: "Time spent in inventory reduced by 35%",
      timeline: "Oct – Dec 2024",
      tools: ["Figma", "Unity", "Maze", "Miro"],
      team: "1 Designer, 3 Engineers, 1 Game Director",
    },
    heroImage: placeholderImage2,
    overview: [
      { label: "Challenge", text: "Players spent an average of 22% of total play time in the inventory screen, reporting it felt like 'homework' rather than part of the game." },
      { label: "Solution", text: "A visual, drag-and-drop inventory with smart sorting, equipment preview, and contextual item comparison — designed to feel tactile and fast." },
      { label: "Impact", text: "35% reduction in time spent managing inventory. Players described the new system as 'satisfying' rather than 'necessary'." },
      { label: "My Role", text: "Sole designer. Conducted player interviews, designed all UI, and collaborated with engineers on drag-and-drop implementation." },
    ],
    sections: [
      {
        id: "problem",
        title: "The Problem",
        blocks: [
          { type: "text", body: "The original inventory was a text-heavy spreadsheet-style list. Players couldn't quickly compare items, had no visual preview of equipment, and sorting required multiple menu interactions. The result: players avoided looting entirely or spent frustrating minutes managing gear after every encounter." },
          { type: "callout", text: "\"I dread opening my inventory. It kills the flow every time.\" — Player survey response" },
        ],
      },
      {
        id: "research",
        title: "Research & Discovery",
        blocks: [
          { type: "text", body: "I surveyed 150 active players and ran 6 moderated sessions watching people manage their inventory in real time. The data showed three core pain points: no visual hierarchy between item rarities, no quick-compare for equipment, and a sort system that reset every time the inventory was closed." },
          { type: "metrics", items: [
            { value: "150", label: "Players surveyed" },
            { value: "6", label: "Moderated sessions" },
            { value: "22%", label: "Play time in inventory" },
          ]},
        ],
      },
      {
        id: "process",
        title: "Design Process",
        blocks: [
          { type: "text", body: "I moved from a list view to a grid with visual item cards. Each card shows the item icon, rarity border colour, and key stat at a glance. Hovering triggers an inline comparison panel against currently equipped gear. Drag-and-drop sorting with persistent preferences completed the picture." },
          { type: "before-after", before: { src: placeholderImage, alt: "Original text-list inventory", label: "Before: Text list" }, after: { src: placeholderImage2, alt: "Visual grid inventory", label: "After: Visual grid" } },
        ],
      },
      {
        id: "solution",
        title: "Final Solution",
        blocks: [
          { type: "text", body: "The final inventory features a responsive grid layout, colour-coded rarity borders, one-tap equip, side-by-side stat comparison, and smart auto-sort that remembers player preferences. The character model updates in real-time as gear is equipped." },
          { type: "full-width-image", src: placeholderImage, alt: "Final inventory design with equipment preview" },
        ],
      },
      {
        id: "results",
        title: "Results",
        blocks: [
          { type: "metrics", items: [
            { value: "-35%", label: "Time in inventory" },
            { value: "+47%", label: "Items looted per session" },
            { value: "4.5/5", label: "Satisfaction rating" },
          ]},
          { type: "text", body: "Players started engaging with loot again. The looting rate per session jumped 47% because managing items was no longer a punishment. Multiple players described the new inventory as 'one of the best parts of the game'." },
        ],
      },
    ],
    reflection: "The biggest insight was that inventory management is gameplay, not a break from it. When you treat it as a design problem worth solving — with the same care you'd give combat or movement — players notice and engage. I'd love to explore haptic feedback on mobile for the drag-and-drop interactions next.",
  },
  {
    meta: {
      slug: "saas-dashboard",
      category: "Product Design",
      role: "Product Designer",
      title: "SaaS Dashboard Redesign",
      description: "Redesigned the core dashboard experience to reduce cognitive load and improve task completion rates across the platform.",
      cardImage: placeholderImage2,
      outcome: "Task completion rate up 41%",
      timeline: "Sep – Dec 2024",
      tools: ["Figma", "Amplitude", "Loom", "Linear"],
      team: "2 Designers, 6 Engineers, 2 PMs",
    },
    heroImage: placeholderImage,
    overview: [
      { label: "Challenge", text: "The dashboard had grown organically over 4 years, resulting in information overload and low feature discoverability." },
      { label: "Solution", text: "Introduced a role-based dashboard with progressive disclosure, customizable widgets, and contextual onboarding." },
      { label: "Impact", text: "41% improvement in task completion rate, 35% reduction in time-to-first-action for new users." },
      { label: "My Role", text: "Co-led design with one other designer. Owned the information architecture and interaction design." },
    ],
    sections: [
      {
        id: "problem",
        title: "The Problem",
        blocks: [
          { type: "text", body: "Users were presented with 23 widgets on first login, regardless of their role or goals. Power users had learned to ignore irrelevant sections, but new users were overwhelmed and churned within the first week at a 40% rate." },
          { type: "full-width-image", src: placeholderImage, alt: "Original dashboard with all 23 widgets visible", caption: "The original dashboard — every widget visible to every user" },
        ],
      },
      {
        id: "research",
        title: "Research & Discovery",
        blocks: [
          { type: "text", body: "Working with the data team, I segmented users into 4 personas based on actual feature usage patterns in Amplitude. I then conducted 15 interviews across these segments to understand their mental models and daily workflows." },
          { type: "image-grid", columns: 2, images: [
            { src: placeholderImage2, alt: "User persona cards", caption: "Data-driven personas" },
            { src: placeholderImage, alt: "Feature usage heatmap by role", caption: "Feature usage by segment" },
          ]},
        ],
      },
      {
        id: "process",
        title: "Design Process",
        blocks: [
          { type: "text", body: "I designed a role-based default layout system where each persona sees the 5-7 most relevant widgets on first login, with the ability to customize. Progressive disclosure patterns let users expand into advanced features without being overwhelmed upfront." },
          { type: "before-after", before: { src: placeholderImage, alt: "Cluttered original dashboard", label: "Before: 23 widgets" }, after: { src: placeholderImage2, alt: "Clean role-based dashboard", label: "After: 6 default widgets" } },
          { type: "text", heading: "Onboarding Flow", body: "A contextual onboarding system guides new users through their first 3 key actions based on their role, eliminating the need for a separate tutorial." },
        ],
      },
      {
        id: "solution",
        title: "Final Solution",
        blocks: [
          { type: "text", body: "The redesigned dashboard adapts to user roles, surfaces actionable insights first, and grows with the user's expertise. A customization panel lets power users build their ideal workspace without affecting the clean defaults." },
          { type: "full-width-image", src: placeholderImage2, alt: "Final dashboard designs for different user roles" },
        ],
      },
      {
        id: "results",
        title: "Results",
        blocks: [
          { type: "metrics", items: [
            { value: "+41%", label: "Task completion" },
            { value: "-35%", label: "Time to first action" },
            { value: "-52%", label: "First-week churn" },
            { value: "+18", label: "NPS increase" },
          ]},
          { type: "text", body: "The role-based approach proved that showing less could achieve more. New user activation improved dramatically, and existing users reported feeling like the product finally 'understood' their workflow." },
        ],
      },
    ],
    reflection: "The biggest lesson was that 'customizable' shouldn't mean 'figure it out yourself.' Smart defaults based on real usage data are worth more than infinite flexibility. I'd also invest more time in the widget API design — the engineering handoff for custom widget layouts was more complex than anticipated.",
  },
];

// ── Helpers ──

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.meta.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.meta.slug);
}

export function getAdjacentProjects(slug: string): { prev: ProjectMeta | null; next: ProjectMeta | null } {
  const idx = projects.findIndex((p) => p.meta.slug === slug);
  return {
    prev: idx > 0 ? projects[idx - 1].meta : null,
    next: idx < projects.length - 1 ? projects[idx + 1].meta : null,
  };
}
