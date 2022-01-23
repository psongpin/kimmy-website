import { GetServerSideProps, NextPage } from "next";

import {
  FilterTag,
  Links,
  PageLinksHead,
  SearchPost,
  SemiCircle,
} from "components/PageLinks";
import Footer from "components/Footer";
import { addApolloState, initializeApollo } from "lib/apolloClient";
import { Query, QueryLinkPostsArgs } from "lib/types/api";
import { GET_LINK_POSTS } from "lib/queries/posts";
import { Container } from "components/common";

type QueryData = {
  linkPostsConnection: Query["linkPostsConnection"];
  couponsConnection: Query["couponsConnection"];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();

  const tag = context.query?.tag;
  const search = context.query?.search;

  const variables = {
    first: 12,
    where: {
      ...(!tag || tag === "All" ? {} : { tags_contains_all: [tag as string] }),
      ...(search ? { title_contains: search as string } : {}),
    },
  };

  await apolloClient.query<
    QueryData["linkPostsConnection"],
    QueryLinkPostsArgs
  >({
    query: GET_LINK_POSTS,
    variables,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

const PageLinks: NextPage = () => {
  return (
    <div>
      <PageLinksHead>
        <SemiCircle />

        <p>kimifaery</p>
        <h1>Links</h1>
      </PageLinksHead>

      <Container css={{ marginBottom: 40 }}>
        <SearchPost />
        <FilterTag />
        <Links />
      </Container>

      <Footer />
    </div>
  );
};

export default PageLinks;
