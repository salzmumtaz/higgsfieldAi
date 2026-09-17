import { GalleryFadeCta } from "@/features/home/gallery/GalleryFadeCta";
import { GalleryHeader } from "@/features/home/gallery/GalleryHeader";
import { GridGallery } from "@/features/home/gallery/layouts/GridGallery";
import { projectsGallery } from "@/features/home/home-section-order";
import { useT } from "@/lib/i18n";
import { ProjectCard } from "./ProjectCard";

const PROJECTS_FADE =
  "linear-gradient(180deg, rgba(15, 17, 19, 0.00) 0%, #0F1113 73.33%)";

export function ProjectsSection() {
  const t = useT();
  return (
    <div className="container-app">
      <section className="my-8 flex flex-col gap-5">
        <GalleryHeader
          title={t("home.projects.title")}
          description={t("home.projects.description")}
        />
        <div className="relative max-h-[38rem] overflow-hidden md:max-h-[25rem] lg:max-h-[38rem]">
          <GridGallery>
            {projectsGallery.items.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </GridGallery>
          <GalleryFadeCta
            href={projectsGallery.ctaHref}
            label={t("actions.exploreCommunity")}
            heightClassName="h-60"
            fromClassName=""
            className="bg-none pb-5 md:pb-8"
            style={{ background: PROJECTS_FADE }}
          />
        </div>
      </section>
    </div>
  );
}
