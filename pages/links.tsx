import { GetStaticProps, NextPage } from "next";

import { Links, PageLinksHead, SemiCircle } from "components/PageLinks";
import Footer from "components/Footer";
import { addApolloState, initializeApollo } from "lib/apolloClient";
import { Query, QueryLinkPostsArgs } from "lib/api";
import { GET_LINK_POSTS } from "lib/queries/posts";

type QueryData = {
  linkPostsConnection: Query["linkPostsConnection"];
  couponsConnection: Query["couponsConnection"];
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query<
    QueryData["linkPostsConnection"],
    QueryLinkPostsArgs
  >({
    query: GET_LINK_POSTS,
    variables: { first: 12 },
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
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
