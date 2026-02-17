import { navigate } from "astro:transitions/client";
import BadgeGroup from "./BadgeGroup";
import type { Project } from "@/lib/types";
import { buildPath } from "@/lib/utils";

export default function ProjectCard({
  project,
  lang,
}: {
  project: Project;
  lang?: object;
}) {
  const handleNavigate = () => {
    navigate(buildPath(`projects/${project.slug}`));
  };

  return (
    <article
      key={project.id}
      className="group flex flex-col md:flex-row items-center gap-4 h-full md:h-[150px] p-4 rounded-lg bg-light-card border border-light-border dark:bg-dark-card dark:border-dark-border cursor-pointer hover:shadow-sm shadow-brand-active hover:scale-105 transition-all duration-300 ease-in-out active:scale-95"
      onClick={() => handleNavigate()}
    >
      <img
        src={
          project?.img
            ? project.img
            : "https://via.placeholder.com/300x100?text=Project+Image"
        }
        alt="project image"
        className="h-[100px] w-[200px] min-w-[200px] border rounded border-light-border dark:border-dark-border"
      ></img>
      <div className="relative">
        <h3 className="flex flex-wrap items-center text-2xl font-semibold mb-2">
          {project?.name ? project.name : "Project Name"}
          {project.id === 1 && (
            <span className="ms-2 bg-brand text-xs font-semibold px-3 py-1.5 rounded-xl group-hover:bg-brand-hover text-dark-text-primary">
              Latest
            </span>
          )}
          <BadgeGroup {...project.stack} />
        </h3>
        <p className="text-sm text-secundary-text">
          {project?.description
            ? project.description
            : "a few lines short text to explain the proyect, tecnologies used and aproach to the interested peolpe asdasdadasdasdasdad etc..."}
        </p>
      </div>
    </article>
  );
}
