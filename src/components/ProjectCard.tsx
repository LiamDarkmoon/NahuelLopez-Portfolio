import { useEffect, useState } from "react";
import { navigate } from "astro:transitions/client";
import BadgeGroup from "./BadgeGroup";
import type { Project } from "@/lib/types";
import { buildPath } from "@/lib/utils";
import useAnimation from "@/lib/hooks/useAnimation";

type vw = "sm" | "md" | "lg" | "xl" | "2xl";
export default function ProjectCard({
  project,
  lang,
}: {
  project: Project;
  lang?: object;
}) {
  const [vw, setVw] = useState<vw>("lg");
  const animation = useAnimation();

  useEffect(() => {
    const sm = window.innerWidth < 768;
    setVw((prev) => (prev !== "sm" && sm ? "sm" : "md"));
  }, [window.innerWidth]);

  const handleNavigate = () => {
    navigate(buildPath(`projects/${project.slug}`));
  };

  return (
    <article
      ref={animation.ref}
      key={project.id}
      className="-right-1/2 group flex flex-col md:flex-row items-center gap-4 md:h-37.5 p-4 rounded-lg bg-light-card border border-light-border dark:bg-dark-card dark:border-dark-border cursor-pointer hover:shadow-sm shadow-light-border dark:shadow-dark-border hover:scale-105 transition-all duration-300 ease-in-out active:scale-95 timeline-view animate-fade-in animate-range-gradual animate-duration-1000 animate-iteration-count-infinite"
      onClick={() => handleNavigate()}
      onMouseEnter={() => animation.trigger("animate-fade-in")}
    >
      <div className="h-87.5 md:h-25 w-full md:w-50 min-w-50 border rounded border-light-border dark:border-dark-border overflow-hidden">
        <img
          src={vw === "sm" ? project?.smImg : project?.img}
          alt="project image"
          className="h-full w-full object-cover md:object-fill object-center"
        />
      </div>
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
        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary min-h-20 max-h-25 text-ellipsis overflow-hidden">
          {project?.description ? project.description : null}
        </p>
      </div>
    </article>
  );
}
