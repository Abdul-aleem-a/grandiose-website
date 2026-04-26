import { notFound } from "next/navigation";
import CaseStudyClient from "../CaseStudyClient";
import { recentProjects, getProjectBySlug } from "@/lib/recentProjectsData";

export async function generateStaticParams() {
    return recentProjects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();
    return <CaseStudyClient project={project} />;
}