import Section from "../Home/Section/Section";
import FooterLink from "./FooterLink";

const Links = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center">
      <Section title="Links">
        <ul className="flex items-center gap-3">
          <FooterLink
            text="Email"
            href="mailTo:ben_abdelhafidh_hazem@yahoo.com"
          />
          <FooterLink
            text="LinkedIn"
            href="https://www.linkedin.com/in/hazembenabdelhafidh/"
          />
          <FooterLink
            text="GitHub"
            href="https://github.com/Hazem-Ben-Abdelhafidh"
          />
        </ul>
      </Section>
    </footer>
  );
};

export default Links;
