import TypeWriter from "@/components/TypeWriter";

type Props = {};

const Projects = (props: Props) => {
  return (
    <main className="flex flex-col gap-3 row-start-2 items-start container text-justify">
      <TypeWriter text={"Projects"} />
    </main>
  );
};

export default Projects;
