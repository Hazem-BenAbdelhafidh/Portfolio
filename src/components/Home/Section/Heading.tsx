type Props = {
  children: React.ReactNode;
};

const Heading = (props: Props) => {
  return (
    <h2 className="text-2xl font-bold">
      <span className="text-[var(--accent)]">●</span> {props.children}
    </h2>
  );
};

export default Heading;
