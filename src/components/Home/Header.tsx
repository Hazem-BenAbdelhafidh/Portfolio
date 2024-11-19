import Briefcase from "../Icons/Briefcase";
import Location from "../Icons/Location";
import TypeWriter from "../TypeWriter";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="space-y-5">
      <TypeWriter text={"Hazem Ben Abdelhafidh"} />
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-gray-400">
          <Location />
          <span>Jemmal, Tunisia</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Briefcase />
          <span>Software Engineer</span>
        </div>
      </div>
      <p className="text-[var(--text)]">
        I'm a software engineer and a full-stack developer. I'm passionate about
        building software and web applications that solve real-world problems.
        I'm currently working on my personal projects and learning new
        technologies.
      </p>
    </header>
  );
};

export default Header;
