import { useQuery } from "@apollo/client";

import Container from "components/common/Container";
import { Loader } from "components/common/Loader";
import { Query, QueryLinkPostsArgs } from "lib/api";
import { GET_LINK_POSTS } from "lib/queries/posts";
import LinkPost from "./LinkPost";

import { LinkPostError, LinksGrid, LinksLoader } from "./styles";

type QueryData = {
  linkPostsConnection: Query["linkPostsConnection"];
};

const Links: React.FC = () => {
  const { data, loading, error, fetchMore } = useQuery<
    QueryData,
    QueryLinkPostsArgs
  >(GET_LINK_POSTS, {
    variables: { first: 12 },
    notifyOnNetworkStatusChange: true,
  });

  return (
    <Container>
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

      {data && (
        <>
          {data.linkPostsConnection.edges.length > 0 ? (
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
                />
              ))}
            </LinksGrid>
          ) : (
            <LinkPostError>No posts available.</LinkPostError>
          )}
        </>
      )}
    </Container>
  );
};

export default Links;
