import { work } from "@/lib/consts";
import Section from "./Section/Section";

const Work = () => {
  return (
    <Section title="Work">
      <ul className="space-y-7">
        {work.map((job) => {
          return (
            <li key={job.organization} className="space-y-2">
              <a
                href={job.link}
                className="hover:text-[var(--accent)] transition-colors"
              >
                <h3 className="text-xl font-semibold">{job.organization}</h3>
              </a>
              <h4 className="text-gray-400">{job.position}</h4>
              <ul className="list-disc px-4 space-y-2">
                {job.activities.map((activity) => {
                  return <li key={activity}>{activity}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Work;
