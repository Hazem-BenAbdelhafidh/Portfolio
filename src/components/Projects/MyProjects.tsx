import { projects } from "@/lib/consts";
import Project from "./Project/Project";

const MyProjects = () => {
  return (
    <div className="w-full ">
      {projects.map((project) => {
        return <Project key={project.name} properties={project} />;
      })}
    </div>
  );
};

export default MyProjects;
