import { SparkleLeft, SparkleRight } from "components/common/Icon";
import Image from "next/image";

import {
  BannerContentAvatar,
  BannerContentFrame,
  BannerContentSubLinkNum,
  BannerContentTitle,
  BannerContentTop,
  BannerFrame,
  BannerImageFrame,
} from "./styles";

type LinkPostBannerProps = {
  title: string;
  thumbnailUrl: string;
  numOfSubLinkPosts: number;
  backgroundColor: string;
};

const LinkPostBanner: React.FC<LinkPostBannerProps> = ({
  title,
  thumbnailUrl,
  numOfSubLinkPosts,
  backgroundColor,
}) => {
  return (
    <BannerFrame>
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
            <SparkleLeft width={45} height={45} style={{ marginRight: 10 }} />
            kimifaery
            <SparkleRight width={45} height={45} style={{ marginLeft: 10 }} />
          </span>
          <BannerContentAvatar>
            <Image
              src="/images/avatar2.png"
              alt="kimifaery"
              layout="intrinsic"
              width={116}
              height={116}
            />
          </BannerContentAvatar>
        </BannerContentTop>
        <BannerContentTitle>{title}</BannerContentTitle>
        <BannerContentSubLinkNum>{`${numOfSubLinkPosts} item${
          numOfSubLinkPosts > 1 ? "s" : ""
        }`}</BannerContentSubLinkNum>
      </BannerContentFrame>
    </BannerFrame>
  );
};

export default LinkPostBanner;
