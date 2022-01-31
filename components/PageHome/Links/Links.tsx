import Image from "next/image";
import Link from "next/link";

import { fadeDownVariants } from "lib/animations/variants";

import {
  LinkGridItem,
  LinksGrid,
  LinksGridIcon,
  LinksGridText,
} from "./styles";

const Links: React.FC = () => {
  return (
    <LinksGrid
      variants={fadeDownVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <LinkGridItem>
        <Link href="/links">
          <a>
            <LinksGridIcon css={{ backgroundColor: "$green" }}>
              <Image
                src="/images/links.svg"
                alt="links"
                width={26}
                height={26}
              />
            </LinksGridIcon>
            <LinksGridText css={{ color: "$green" }}>links</LinksGridText>
          </a>
        </Link>
      </LinkGridItem>

      <LinkGridItem>
        <a
          href="https://drive.google.com/drive/folders/1YOKLxakwvdzDBh0LNhqjmvYnllf9I8YL?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinksGridIcon css={{ backgroundColor: "$yellow" }}>
            <Image
              src="/images/download.svg"
              alt="links"
              width={26}
              height={26}
            />
          </LinksGridIcon>
          <LinksGridText css={{ color: "$yellow" }}>downloads</LinksGridText>
        </a>
      </LinkGridItem>

      <LinkGridItem>
        <a
          href="https://www.tiktok.com/@kimifaery"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinksGridIcon css={{ backgroundColor: "$babyPurple" }}>
            <Image
              src="/images/tiktok.svg"
              alt="links"
              width={25}
              height={30}
            />
          </LinksGridIcon>
          <LinksGridText css={{ color: "$babyPurple" }}>tiktok</LinksGridText>
        </a>
      </LinkGridItem>

      <LinkGridItem>
        <a
          href="https://www.hoyolab.com/accountCenter/postList?id=40964052"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinksGridIcon css={{ backgroundColor: "$blue" }}>
            <Image
              src="/images/hoyolab.svg"
              alt="links"
              width={26}
              height={26}
            />
          </LinksGridIcon>
          <LinksGridText css={{ color: "$blue" }}>hoyolab</LinksGridText>
        </a>
      </LinkGridItem>

      <LinkGridItem>
        <a
          href="https://www.facebook.com/kimifaery/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinksGridIcon css={{ backgroundColor: "$pink" }}>
            <Image
              src="/images/fb-gaming.svg"
              alt="links"
              width={26}
              height={26}
            />
          </LinksGridIcon>
          <LinksGridText css={{ color: "$pink" }}>fb.gg</LinksGridText>
        </a>
      </LinkGridItem>

      <LinkGridItem>
        <a
          href="https://twitter.com/kimifaery"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinksGridIcon css={{ backgroundColor: "$darkPink" }}>
            <Image
              src="/images/twitter.svg"
              alt="links"
              width={26}
              height={26}
            />
          </LinksGridIcon>
          <LinksGridText css={{ color: "$darkPink" }}>twitter</LinksGridText>
        </a>
      </LinkGridItem>
    </LinksGrid>
  );
};

export default Links;
