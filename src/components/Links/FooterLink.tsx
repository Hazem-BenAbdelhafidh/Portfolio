type Props = {
  text: string;
  href: string;
};

const FooterLink = (props: Props) => {
  return (
    <li>
      <a
        href={props.href}
        target="_blank"
        className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
      >
        {props.text}
      </a>
    </li>
  );
};

export default FooterLink;
