import Image from "next/image";
import Link from "next/link";

import { ExternalLink } from "components/common/Icon";
import { Button } from "components/common";
import {
  LinkPostFrame,
  LinkPostImage,
  LinkPostInfo,
  LinkPostOverlay,
  LinkPostTitle,
  Tag,
  TagsFrame,
} from "components/PageLinks/Links/styles";

type LinkPostProps = {
  id: string;
  redirectLink: string;
  title: string;
  thumbnailUrl: string;
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
              View link
              <ExternalLink width={14} height={14} style={{ marginLeft: 8 }} />
            </Button>
          </LinkPostOverlay>
        </a>
      </Link>
    </LinkPostFrame>
  );
};

export default LinkPost;
