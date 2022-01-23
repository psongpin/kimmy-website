import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { Button, Flexbox, Loader } from "components/common";
import { Query, QueryLinkPostsArgs } from "lib/types/api";
import { GET_LINK_POSTS } from "lib/queries/posts";

import LinkPost from "./LinkPost";
import { LinkPostError, LinksGrid, LinksLoader } from "./styles";

type QueryData = {
  linkPostsConnection: Query["linkPostsConnection"];
};

const Links: React.FC = () => {
  const router = useRouter();
  const tag = router.query.tag;
  const search = router.query.search;

  const variables = {
    first: 12,
    where: {
      ...(!tag || tag === "All" ? {} : { tags_contains_all: [tag as string] }),
      ...(search ? { title_contains: search as string } : {}),
    },
  };

  const { data, loading, error, fetchMore } = useQuery<
    QueryData,
    QueryLinkPostsArgs
  >(GET_LINK_POSTS, {
    variables,
    notifyOnNetworkStatusChange: true,
  });

  const onLoadMore = () => {
    if (data) {
      const { endCursor } = data.linkPostsConnection.pageInfo;
      fetchMore({
        variables: {
          after: endCursor,
        },
      });
    }
  };

  return (
    <div>
      {data && (
        <>
          {data.linkPostsConnection.edges.length > 0 ? (
            <>
              <LinksGrid
                hasNextPage={data.linkPostsConnection.pageInfo.hasNextPage}
              >
                {data.linkPostsConnection.edges.map((linkPostEdge) => (
                  <LinkPost
                    key={linkPostEdge.node.id}
                    id={linkPostEdge.node.id}
                    redirectLink={linkPostEdge.node.redirectLink}
                    title={linkPostEdge.node.title}
                    thumbnailUrl={linkPostEdge.node.thumbnail.url}
                    numOfSubLinkPosts={linkPostEdge.node.subLinkPosts.length}
                    tags={linkPostEdge.node.tags}
                  />
                ))}
              </LinksGrid>

              {data.linkPostsConnection.pageInfo.hasNextPage && !loading && (
                <Flexbox
                  css={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <Button onClick={onLoadMore}>Load more post</Button>
                </Flexbox>
              )}
            </>
          ) : (
            <LinkPostError>No posts available.</LinkPostError>
          )}
        </>
      )}

      {loading && (
        <LinksLoader>
          <Loader />
        </LinksLoader>
      )}

      {error && (
        <LinkPostError>
          Something went wrong while fetching posts.
        </LinkPostError>
      )}
    </div>
  );
};

export default Links;
