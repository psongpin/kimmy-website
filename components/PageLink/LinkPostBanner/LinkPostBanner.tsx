import Image from "next/image";
import Link from "next/link";

import { Button } from "components/common";
import { SparkleLeft, SparkleRight } from "components/common/Icon";
import { fadeDownVariants } from "lib/animations/variants";

import {
  BannerContentAvatar,
  BannerContentFrame,
  BannerContentSubLinkNum,
  BannerContentTitle,
  BannerContentTop,
  BannerFrame,
  BannerImageFrame,
  BannerViewLink,
} from "./styles";

type LinkPostBannerProps = {
  title: string;
  thumbnailUrl: string;
  numOfSubLinkPosts: number;
  backgroundColor: string;
  viewUrl: string;
};

const LinkPostBanner: React.FC<LinkPostBannerProps> = ({
  title,
  thumbnailUrl,
  numOfSubLinkPosts,
  backgroundColor,
  viewUrl,
}) => {
  return (
    <BannerFrame
      variants={fadeDownVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <BannerImageFrame>
        <Image
          src={thumbnailUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </BannerImageFrame>
      <BannerContentFrame
        css={{ backgroundColor: backgroundColor || "$purple" }}
      >
        <BannerContentTop>
          <span>
            <SparkleLeft style={{ marginRight: 10 }} />
            kimifaery
            <SparkleRight width={45} height={45} style={{ marginLeft: 10 }} />
          </span>
          <BannerContentAvatar>
            <Image
              src="/images/avatar2.png"
              alt="kimifaery"
              layout="intrinsic"
              width={90}
              height={90}
              quality={100}
            />
          </BannerContentAvatar>
        </BannerContentTop>
        <BannerContentTitle>{title}</BannerContentTitle>
        <BannerContentSubLinkNum>{`${numOfSubLinkPosts} item${
          numOfSubLinkPosts > 1 ? "s" : ""
        }`}</BannerContentSubLinkNum>

        {viewUrl && (
          <BannerViewLink>
            <Link href={viewUrl}>
              <a>
                <Button
                  size={{ "@initial": "sm", "@md": "md" }}
                  css={{ width: "100%", maxWidth: 320 }}
                >
                  View Setup
                </Button>
              </a>
            </Link>
          </BannerViewLink>
        )}
      </BannerContentFrame>
    </BannerFrame>
  );
};

export default LinkPostBanner;
