import { gql } from "@apollo/client";

export const GET_COUPONS = gql`
  query getCoupons($first: Int, $after: String) {
    couponsConnection(first: $first, after: $after, orderBy: createdAt_DESC) {
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
          discountText
          code
          storeUrl
        }
      }
    }
  }
`;
