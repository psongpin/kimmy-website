import Link from "next/link";
import Image from "next/image";

import { ExternalLink } from "components/common/Icon";

import {
  GamingSetupFrame,
  GamingSetupInfo,
  GamingSetupLinkOverlay,
} from "./styles";

type GamingSetupProps = {
  id: string;
  title: string;
  thumbnailUrl: string;
  redirectLink: string;
  numOfSubLinkPosts: number;
};

const GamingSetup: React.FC<GamingSetupProps> = ({
  id,
  title,
  thumbnailUrl,
  redirectLink,
  numOfSubLinkPosts,
}) => {
  return (
    <GamingSetupFrame>
      <Link href={redirectLink || `/link/${id}`}>
        <a>
          <Image
            src={thumbnailUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            quality={100}
          />

          <GamingSetupInfo>
            <h3>{title}</h3>
            <span>
              + {numOfSubLinkPosts} item{numOfSubLinkPosts > 1 ? "s" : ""}
            </span>
          </GamingSetupInfo>

          <GamingSetupLinkOverlay>
            <button>
              View link <ExternalLink width={14} height={14} />
            </button>
          </GamingSetupLinkOverlay>
        </a>
      </Link>
    </GamingSetupFrame>
  );
};

export default GamingSetup;
