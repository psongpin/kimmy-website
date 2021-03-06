import {
  LinkPostError,
  LinksGrid,
} from "components/PageLinks/LinkPosts/styles";
import { SubLinkPost as SubLinkPostType } from "lib/types/api";

import SubLinkPost from "./SubLinkPost";

type SubLinkPostsProps = {
  subLinkPosts: SubLinkPostType[];
  themeColor: string;
};

const SubLinkPosts: React.FC<SubLinkPostsProps> = ({
  subLinkPosts,
  themeColor,
}) => {
  return (
    <div>
      {subLinkPosts.length > 0 ? (
        <>
          <LinksGrid>
            {subLinkPosts.map((subLinkPost) => (
              <SubLinkPost
                key={subLinkPost.id}
                id={subLinkPost.id}
                redirectLink={subLinkPost.redirectLink || ""}
                title={subLinkPost.title}
                thumbnailUrl={subLinkPost.thumbnail.url}
                tags={subLinkPost.tags}
                themeColor={themeColor}
              />
            ))}
          </LinksGrid>
        </>
      ) : (
        <LinkPostError>No posts available.</LinkPostError>
      )}
    </div>
  );
};

export default SubLinkPosts;
