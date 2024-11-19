import Heading from "./Heading";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Section = (props: Props) => {
  return (
    <section className="space-y-4 mt-4">
      <Heading text={props.title} />
      {props.children}
    </section>
  );
};

export default Section;
