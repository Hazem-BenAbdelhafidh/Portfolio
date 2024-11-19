import Link from "next/link";

type Props = {
  href: string;
  text: string;
};

const NavLink = (props: Props) => {
  return (
    <li className="hover:text-[var(--accent)] transition-colors">
      <Link href={props.href}>{props.text}</Link>
    </li>
  );
};

export default NavLink;
