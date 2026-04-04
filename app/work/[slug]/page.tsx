import { notFound } from "next/navigation";
import { getProjectBySlug, getAllSlugs, getAdjacentProjects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import OverviewStrip from "@/components/case-study/OverviewStrip";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import ProjectNav from "@/components/case-study/ProjectNav";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.meta.title} — Joe Gentleman`,
    description: project.meta.description,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const adjacent = getAdjacentProjects(slug);

  return (
    <main className="min-h-screen bg-[#f2f9ff]">
      <Navbar />
      <CaseStudyHero project={project} />
      <OverviewStrip items={project.overview} />

      {/* Divider */}
      <div className="max-w-[1440px] mx-auto px-4 min-[1060px]:px-12 xl:px-[64px]">
        <hr className="border-black/8" />
      </div>

      {project.sections.map((section) => (
        <CaseStudySection key={section.id} section={section} />
      ))}

      {/* Reflection */}
      <section className="w-full">
        <div className="max-w-[1440px] mx-auto px-4 min-[1060px]:px-12 xl:px-[64px] py-[40px] xl:py-[56px] flex flex-col gap-[24px]">
          <h2 className="text-[#252525] text-[32px] md:text-[40px] font-semibold leading-[0.95] tracking-[-0.96px]">
            Reflection
          </h2>
          <p className="text-[#666] text-[16px] md:text-[18px] leading-[1.6] tracking-[-0.32px]">
            {project.reflection}
          </p>
        </div>
      </section>

      <ProjectNav prev={adjacent.prev} next={adjacent.next} />
      <Footer />
    </main>
  );
}
