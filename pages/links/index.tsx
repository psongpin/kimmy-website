import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

import {
  FilterTag,
  LinkPosts,
  PageLinksHead,
  SearchPost,
  SemiCircle,
} from "components/PageLinks";
import Footer from "components/Footer";
import { Container } from "components/common";
import { SparkleLeft, SparkleRight } from "components/common/Icon";
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
  const search = context.query?.search;

  const variables = {
    first: 12,
    where: {
      ...(!tag || tag === "All" ? {} : { tags_contains_all: [tag as string] }),
      ...(search ? { title_contains: search as string } : {}),
    },
  };

  await apolloClient.query<QueryData, QueryLinkPostsArgs>({
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

        <p>
          <Link href="/">
            <a>
              <SparkleLeft width={45} height={45} style={{ marginRight: 10 }} />
              kimifaery
              <SparkleRight width={45} height={45} style={{ marginLeft: 10 }} />
            </a>
          </Link>
        </p>
        <h1>Links</h1>
      </PageLinksHead>

      <Container css={{ marginBottom: 40 }}>
        <SearchPost />
        <FilterTag />
        <LinkPosts />
      </Container>

      <Footer />
    </div>
  );
};

export default PageLinks;
