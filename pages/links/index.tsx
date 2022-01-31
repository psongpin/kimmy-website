import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

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
import { fadeDownVariants } from "lib/animations/variants";

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
    <>
      <NextSeo
        title="Kimifaery Website - Links"
        description="Kimifaery's Personal Website"
        canonical="https://kimifaery.com/links/"
        openGraph={{
          url: "https://kimifaery.com/links/",
          title: "Kimifaery Website - Links",
          description: "Kimifaery's Personal Website",
          images: [
            {
              url: "https://kimifaery.com/images/kimifaery.png",
              width: 1200,
              height: 630,
              alt: "Kimifaery's Personal Website",
            },
          ],
        }}
      />

      <div>
        <PageLinksHead>
          <SemiCircle />

          <motion.p
            variants={fadeDownVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link href="/">
              <a>
                <SparkleLeft style={{ marginRight: 10 }} />
                kimifaery
                <SparkleRight style={{ marginLeft: 10 }} />
              </a>
            </Link>
          </motion.p>
          <motion.h1
            variants={fadeDownVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Links
          </motion.h1>
        </PageLinksHead>

        <Container css={{ marginBottom: 40 }}>
          <SearchPost />
          <FilterTag />
          <LinkPosts />
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default PageLinks;
