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

export type SectionBlock =
  | TextBlock
  | ImageBlock
  | FullWidthImageBlock
  | ImageGridBlock
  | BeforeAfterBlock
  | CalloutBlock
  | MetricsBlock;

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
      title: "Clean4ME — Full Brand & Website Redesign",
      description: "Redesigned a local cleaning company's online presence from a generic template into a custom-built, conversion-focused website that reflects the real business.",
      cardImage: "/work/clean4me/hero.png",
      outcome: "Custom site replacing a template with zero brand identity",
      timeline: "Mar – Apr 2025",
      tools: ["Figma", "HTML/CSS", "JavaScript", "GSAP", "Cloudflare Pages"],
      team: "Solo Designer & Developer",
    },
    heroImage: "/work/clean4me/hero.png",
    overview: [
      { label: "Challenge", text: "Clean4ME was using a generic Squarespace template with stock imagery, a burgundy colour scheme that didn't match their brand, and no clear service hierarchy — making them indistinguishable from competitors." },
      { label: "Solution", text: "Designed and built a bespoke multi-page website from scratch using the company's real photography, a professional blue palette matching their van livery, and clear service-focused information architecture." },
      { label: "Impact", text: "Transformed from a template site with no brand presence into a professional, SEO-optimised, mobile-responsive website that clearly communicates their services and builds trust." },
      { label: "My Role", text: "End-to-end ownership — UX research, Figma design, front-end development, GSAP animations, responsive implementation, SEO optimisation, and deployment." },
    ],
    sections: [
      {
        id: "problem",
        title: "The Problem",
        blocks: [
          { type: "text", body: "Clean4ME is a real cleaning and property support business operating across the Highlands and Islands of Scotland. Their existing website was built on a Squarespace template with a burgundy/rose colour scheme, stock photography, and a shopping cart feature they didn't need. The site didn't represent who they actually are — a local, trusted team with branded vehicles and real client relationships." },
          { type: "text", heading: "Key Issues Identified", body: "The original site suffered from several critical UX problems: no visual connection to the actual brand (their vans, logo, and identity are blue and gold), stock imagery that could belong to any cleaning company, a confusing e-commerce layout for a service-based business, poor mobile experience, and no structured service hierarchy — visitors couldn't quickly understand what Clean4ME actually offers." },
          { type: "callout", text: "The existing site looked like it could belong to any business. Nothing about it said 'this is Clean4ME' — no real photos, no personality, no trust." },
        ],
      },
      {
        id: "research",
        title: "Research & Discovery",
        blocks: [
          { type: "text", body: "I started by understanding the business: their services (residential cleaning, commercial cleaning, deep cleans, move-in/out, and property support for landlords), their service area (Highlands and Islands), and what makes them different — they're a small, responsive team that landlords trust to keep properties ready between tenants." },
          { type: "text", heading: "Competitive Audit", body: "I reviewed 6 competitor cleaning company websites in Scotland. Most fell into two camps: overly corporate multi-page sites with generic stock photos, or bare-minimum single-page sites with no clear service structure. The opportunity was to sit in the middle — professional but personal, structured but not sterile." },
          { type: "metrics", items: [
            { value: "6", label: "Competitor sites audited" },
            { value: "2", label: "Core service areas identified" },
            { value: "3", label: "User personas mapped" },
            { value: "0", label: "Real photos on original site" },
          ]},
          { type: "text", heading: "User Personas", body: "Three key audiences emerged: homeowners looking for regular or one-off cleaning, landlords needing property support between tenants, and commercial clients wanting office cleaning. Each has different priorities — homeowners want trust and convenience, landlords want reliability and responsiveness, commercial clients want professionalism and flexibility." },
        ],
      },
      {
        id: "design",
        title: "Design Process",
        blocks: [
          { type: "text", body: "I designed the full site in Figma before writing any code. The information architecture split into three clear pages: a home page establishing trust and services overview, a dedicated cleaning services page, and a property support page targeting landlords specifically." },
          { type: "text", heading: "Visual Direction", body: "The colour palette was pulled directly from the Clean4ME brand — the blue from their van livery became the primary colour, with navy for depth and authority. I replaced every stock image with real photographs of their actual vehicles, completed jobs, and service locations. This immediately made the site feel authentic and trustworthy." },
          { type: "image-grid", columns: 2, images: [
            { src: "/work/clean4me/about-1.jpg", alt: "Clean4ME van at historic site — real brand photography", caption: "Real brand photography replaced all stock images" },
            { src: "/work/clean4me/card-property.jpg", alt: "Clean property interior", caption: "Actual completed work showcased" },
          ]},
          { type: "text", heading: "Component Design", body: "I designed reusable components in Figma — service cards, trust bars, bento-style feature grids, glassmorphism CTA sections, and interactive schedule/chat mockup widgets for the property support page. Each component was designed to communicate a specific trust signal: reliability, responsiveness, quality, or experience." },
          { type: "image-grid", columns: 2, images: [
            { src: "/work/clean4me/card-cleaning.jpg", alt: "Professional floor cleaning", caption: "Service cards with real imagery" },
            { src: "/work/clean4me/hero-cleaning.png", alt: "Clean4ME branded vehicle", caption: "Brand consistency across pages" },
          ]},
        ],
      },
      {
        id: "development",
        title: "Build & Implementation",
        blocks: [
          { type: "text", body: "I hand-coded the site using semantic HTML, custom CSS with design tokens, and vanilla JavaScript — no frameworks, no unnecessary dependencies. Performance and accessibility were priorities from the start." },
          { type: "text", heading: "Animation & Interaction", body: "GSAP with ScrollTrigger powers all scroll-based animations — sections fade in on scroll, cards stagger into view, and the hero content sequences in on page load. A parallax effect on hero backgrounds adds depth. All animations respect prefers-reduced-motion for accessibility." },
          { type: "text", heading: "Responsive Design", body: "Every section was built mobile-first and tested on real devices. The property support bento grid collapses cleanly, the glassmorphism CTA repositions its floating trust badges inside the card on mobile, and the trust bar switches from a horizontal strip to a 2x2 grid." },
          { type: "metrics", items: [
            { value: "3", label: "Pages designed & built" },
            { value: "0", label: "Frameworks used" },
            { value: "100%", label: "Custom CSS" },
            { value: "A+", label: "Lighthouse accessibility" },
          ]},
          { type: "text", heading: "SEO & Performance", body: "Full technical SEO implementation: Open Graph and Twitter Card meta tags, JSON-LD structured data with LocalBusiness schema, canonical URLs, lazy loading on all below-fold images, and descriptive alt text on every image. The site is deployed on Cloudflare Pages for edge-cached global delivery." },
        ],
      },
      {
        id: "results",
        title: "Outcome",
        blocks: [
          { type: "text", body: "The redesign transformed Clean4ME's digital presence from a generic template into a professional, branded website that accurately represents who they are and what they offer. The site now serves as a genuine business asset rather than a placeholder." },
          { type: "metrics", items: [
            { value: "100%", label: "Real photography" },
            { value: "3", label: "Targeted service pages" },
            { value: "Full", label: "SEO implementation" },
            { value: "Mobile", label: "First responsive" },
          ]},
          { type: "callout", text: "This project demonstrates end-to-end product thinking — from understanding a real business problem, through research and design in Figma, to building and deploying a production website. Every decision was tied back to the business goals: build trust, communicate services clearly, and make it easy to get in touch." },
        ],
      },
    ],
    reflection: "Working with a real business rather than a hypothetical brief forced sharper design decisions. I couldn't hide behind lorem ipsum — every piece of copy had to make sense for the actual service. If I were to revisit this, I'd push for more user testing with actual customers before finalising the IA. I'd also explore a CMS integration so the client can update content independently. The biggest takeaway: authentic photography transforms a design more than any amount of styling ever could.",
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
