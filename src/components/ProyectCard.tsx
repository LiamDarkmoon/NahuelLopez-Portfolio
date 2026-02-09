import { navigate } from "astro:transitions/client";

type Project = {
  name: string;
  description: string;
  img: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const handleNavigate = () => {
    navigate("/projects/{projectSlug}");
  };

  return (
    <article
      className="flex flex-col md:flex-row items-center gap-4 h-full md:h-[150px] p-4 rounded-lg bg-light-card border border-light-border dark:bg-dark-card dark:border-dark-border cursor-pointer hover:shadow-sm shadow-brand-active hover:scale-105 transition-all duration-300 ease-in-out active:scale-95"
      onClick={() => handleNavigate()}
    >
      <img
        src={project?.img ? project.img : "/src/assets/astro.svg"}
        alt="project image"
        className="h-[100px] w-full min-w-[200px] border rounded border-light-border dark:border-dark-border"
      ></img>
      <div className="">
        <h3 className="text-2xl font-semibold mb-2">
          {project?.name ? project.name : "Project Name"}
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
