import Heading from "@/components/Home/Section/Heading";
import TypeWriter from "@/components/TypeWriter";

const Blog = () => {
  return (
    <main className="flex flex-col gap-3 row-start-2 items-start container text-justify">
      <Heading>
        <TypeWriter text={"Blog"} />
      </Heading>
    </main>
  );
};

export default Blog;
