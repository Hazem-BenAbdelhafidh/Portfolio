import ArrowUpRight from "@/components/Icons/ArrowUpRight";

type Props = {
  properties: {
    name: string;
    description: string;
    achievements: string[];
    technologies: string[];
    link: string;
  };
};

const Project = (props: Props) => {
  return (
    <div className="p-4 group space-y-4 border border-gray-400 hover:border-[var(--accent)] w-full transition-all">
      <a
        href={props.properties.link}
        target="_blank"
        className="font-bold w-full flex items-center justify-between text-xl  group-hover:text-[var(--accent)] transition-colors"
      >
        <span>{props.properties.name}</span>
        <ArrowUpRight />
      </a>
      <p className="text-gray-300">{props.properties.description}</p>
      <h3 className="font-semibold">Achievements</h3>
      <ul className="list-disc list-inside">
        {props.properties.achievements.map((achievement) => (
          <li key={achievement} className="text-gray-300">
            {achievement}
          </li>
        ))}
      </ul>
      <h2 className="font-semibold">Technologies</h2>
      <ul className="flex items-center gap-2">
        {props.properties.technologies.map((technology) => (
          <li className="bg-gray-800/50 px-2 py-1 rounded" key={technology}>
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
