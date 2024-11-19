import NavLink from "./NavLink";

const Navigation = () => {
  return (
    <nav className="text-sm mb-12">
      <ul className="flex items-center gap-5">
        <NavLink href="/" text="Home" />
        <NavLink href="/projects" text="Projects" />
        <NavLink href="/blog" text="Blog" />
      </ul>
    </nav>
  );
};

export default Navigation;
