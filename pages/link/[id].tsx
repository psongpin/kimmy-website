import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

import { Navigation } from "components/PageLink";
import { addApolloState, initializeApollo } from "lib/apolloClient";
import { GET_LINK_POST, GET_LINK_POST_IDS } from "lib/queries/posts";
import { Query, QueryLinkPostArgs, QueryLinkPostsArgs } from "lib/types/api";

type QueryData = {
  linkPost: Query["linkPost"];
  linkPostsConnection: Query["linkPostsConnection"];
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  try {
    const { data } = await apolloClient.query<QueryData, QueryLinkPostsArgs>({
      query: GET_LINK_POST_IDS,
      variables: {
        first: 5,
      },
    });

    const paths = data.linkPostsConnection.edges.map((linkPostEdge) => ({
      params: { id: linkPostEdge.node.id },
    }));

    console.log(paths);

    return { paths, fallback: true };
  } catch (error) {
    return { paths: [], fallback: true };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as Params;
  const apolloClient = initializeApollo();

  console.log(id);

  await apolloClient.query<QueryData, QueryLinkPostArgs>({
    query: GET_LINK_POST,
    variables: { where: { id } },
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
};

const PageLink: NextPage = () => {
  return (
    <div>
      <Navigation />
    </div>
  );
};

export default PageLink;
