import { gql } from "@apollo/client";

export const GET_GAMING_SETUPS = gql`
  query getGamingSetups(
    $where: LinkPostWhereInput
    $after: String
    $first: Int
  ) {
    linkPostsConnection(
      where: $where
      after: $after
      first: $first
      orderBy: createdAt_DESC
    ) {
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

export const GET_LINK_POSTS = gql`
  query getLinkPosts($where: LinkPostWhereInput, $after: String, $first: Int) {
    linkPostsConnection(
      where: $where
      after: $after
      first: $first
      orderBy: createdAt_DESC
    ) {
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

export const GET_LINK_POST = gql`
  query getLinkPost($where: LinkPostWhereUniqueInput!) {
    linkPost(where: $where) {
      id
      subLinkPosts(first: 99999) {
        id
        title
        redirectLink
        tags
        thumbnail {
          url(
            transformation: { image: { resize: { height: 470, width: 470 } } }
          )
        }
      }
    }
  }
`;

export const GET_LINK_POST_IDS = gql`
  query getLinkPostsIds(
    $where: LinkPostWhereInput
    $after: String
    $first: Int
  ) {
    linkPostsConnection(
      where: $where
      after: $after
      first: $first
      orderBy: createdAt_DESC
    ) {
      edges {
        cursor
        node {
          id
        }
      }
    }
  }
`;
