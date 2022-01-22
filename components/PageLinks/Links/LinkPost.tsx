import Image from "next/image";
import Link from "next/link";

import { ExternalLink } from "components/common/Icon";
import { Button } from "components/common";
import { GamingSetupLinkOverlay } from "components/PageHome/GamingSetups/styles";

import {
  LinkPostFrame,
  LinkPostImage,
  LinkPostInfo,
  LinkPostSublinkCount,
  LinkPostTitle,
} from "./styles";

type LinkPostProps = {
  id: string;
  redirectLink: string;
  title: string;
  thumbnailUrl: string;
  numOfSubLinkPosts: number;
};

const LinkPost: React.FC<LinkPostProps> = ({
  id,
  redirectLink,
  title,
  thumbnailUrl,
  numOfSubLinkPosts,
}) => {
  return (
    <LinkPostFrame>
      <Link href={redirectLink || `/link/${id}`}>
        <a>
          <LinkPostImage>
            <Image
              src={thumbnailUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </LinkPostImage>

          <LinkPostInfo>
            <LinkPostTitle>{title}</LinkPostTitle>
            {numOfSubLinkPosts > 0 && (
              <LinkPostSublinkCount>
                + {numOfSubLinkPosts} item{numOfSubLinkPosts > 1 ? "s" : ""}
              </LinkPostSublinkCount>
            )}
          </LinkPostInfo>

          <GamingSetupLinkOverlay>
            <Button>
              View link <ExternalLink width={14} height={14} />
            </Button>
          </GamingSetupLinkOverlay>
        </a>
      </Link>
    </LinkPostFrame>
  );
};

export default LinkPost;
