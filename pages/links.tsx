import { GetServerSideProps, NextPage } from "next";

import { Links, PageLinksHead, SemiCircle } from "components/PageLinks";
import Footer from "components/Footer";
import { addApolloState, initializeApollo } from "lib/apolloClient";
import { Query, QueryLinkPostsArgs } from "lib/types/api";
import { GET_LINK_POSTS } from "lib/queries/posts";

type QueryData = {
  linkPostsConnection: Query["linkPostsConnection"];
  couponsConnection: Query["couponsConnection"];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();

  const tag = context.query?.tag;

  await apolloClient.query<
    QueryData["linkPostsConnection"],
    QueryLinkPostsArgs
  >({
    query: GET_LINK_POSTS,
    variables: {
      first: 12,
      ...(!tag || tag === "All"
        ? { where: {} }
        : { where: { tags_contains_all: [tag as string] } }),
    },
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

      <Links />

      <Footer />
    </div>
  );
};

export default PageLinks;
