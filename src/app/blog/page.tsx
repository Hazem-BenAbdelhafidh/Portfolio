import TypeWriter from "@/components/TypeWriter";

type Props = {};

const Blog = (props: Props) => {
  return (
    <main className="flex flex-col gap-3 row-start-2 items-start container text-justify">
      <TypeWriter text={"Blog"} />
    </main>
  );
};

export default Blog;
