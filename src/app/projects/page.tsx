import Heading from "@/components/Home/Section/Heading";
import MyProjects from "@/components/Projects/MyProjects";
import TypeWriter from "@/components/TypeWriter";

const Projects = () => {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-start  text-justify w-full">
      <Heading>
        <TypeWriter text={"Projects"} />
      </Heading>
      <MyProjects />
    </main>
  );
};

export default Projects;
