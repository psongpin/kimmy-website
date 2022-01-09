import { gql } from "@apollo/client";

export const GET_GAMING_SETUPS = gql`
  query getGamingSetups(
    $where: LinkPostWhereInput
    $after: String
    $first: Int
  ) {
    linkPostsConnection(where: $where, after: $after, first: $first) {
      pageInfo {
        endCursor
        hasNextPage
        pageSize
      }
      edges {
        cursor
        node {
          id
          title
          redirectLink
          tags
          thumbnail {
            url(
              transformation: { image: { resize: { height: 470, width: 470 } } }
            )
          }
          subLinkPosts(first: 99999) {
            id
          }
        }
      }
    }
  }
`;
