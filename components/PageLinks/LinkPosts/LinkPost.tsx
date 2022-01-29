import Image from "next/image";
import Link from "next/link";

import { ExternalLink } from "components/common/Icon";
import { Button } from "components/common";

import {
  LinkPostFrame,
  LinkPostImage,
  LinkPostInfo,
  LinkPostOverlay,
  LinkPostSublinkCount,
  LinkPostTitle,
  Tag,
  TagsFrame,
} from "./styles";

type LinkPostProps = {
  id: string;
  redirectLink: string;
  title: string;
  thumbnailUrl: string;
  numOfSubLinkPosts: number;
  tags: string[];
};

const tagMarks: Record<string, string> = {
  Favorites: `❤️`,
  "Gaming Setup": `🎮`,
  Partnerships: `👍`,
  "Must Haves": `⭐️`,
};

const LinkPost: React.FC<LinkPostProps> = ({
  id,
  redirectLink,
  title,
  thumbnailUrl,
  numOfSubLinkPosts,
  tags,
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

          <TagsFrame>
            {tags.map((tag) => (
              <Tag
                key={tag}
                css={{
                  backgroundColor: {
                    Favorites: "$green",
                    "Gaming Setup": "$blue",
                    Partnerships: "$yellow",
                    "Must Haves": "$purple",
                  }[tag],
                }}
              >
                <span>{tagMarks[tag]}</span>
                <span>{tag}</span>
              </Tag>
            ))}
          </TagsFrame>

          <LinkPostOverlay>
            <Button size={{ "@initial": "sm", "@md": "md" }}>
              View
              <ExternalLink width={14} height={14} style={{ marginLeft: 8 }} />
            </Button>
          </LinkPostOverlay>
        </a>
      </Link>
    </LinkPostFrame>
  );
};

export default LinkPost;
