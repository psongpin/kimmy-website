import Container from "components/common/Container";
import { Facebook, Instagram, Mail } from "components/common/Icon";

import { CopyrightText, FooterFrame, FooterLink, FooterLinks } from "./styles";

const links = [
  {
    href: "https://www.facebook.com/kimifaery",
    icon: <Facebook width={30} height={30} />,
  },
  {
    href: "mailto:work@hellokimmy.com",
    icon: <Mail width={30} height={30} />,
  },
  {
    href: "https://www.instagram.com/kimifaery",
    icon: <Instagram width={30} height={30} />,
  },
];

const Footer: React.FC = () => {
  return (
    <FooterFrame>
      <Container>
        <FooterLinks>
          {links.map((link) => (
            <FooterLink
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </FooterLink>
          ))}
        </FooterLinks>
        <CopyrightText>kimifaery 2022. All Rights Reserved</CopyrightText>
      </Container>
    </FooterFrame>
  );
};

export default Footer;
