type Props = {
  text: string;
};

const Heading = (props: Props) => {
  return (
    <h2 className="text-2xl font-bold">
      <span className="text-[var(--accent)]">●</span> {props.text}
    </h2>
  );
};

export default Heading;
